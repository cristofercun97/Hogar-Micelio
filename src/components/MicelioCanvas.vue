<template>
  <canvas ref="canvasEl" class="micelio-canvas" aria-hidden="true" />
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const canvasEl = ref(null)

// ── constants ──────────────────────────────────────────────────────────────
const LINK      = 130
const LINK_SQ   = LINK * LINK   // avoid sqrt in hot loop — compare squared distances
const EDGE_BUCKETS = 8          // opacity quantised into N buckets → N ctx.stroke() calls/frame

// ── mutable state (module-level, not reactive — no Vue overhead) ────────────
let ctx     = null
let animId  = null
let nodes   = []
let W = 0, H = 0
let cellW = 0, cellH = 0, cellsX = 0, cellsY = 0
// Pre-allocated grid: arrays are reused across frames (clear instead of recreate).
// Avoids ~8 160 heap allocations/second that would otherwise trigger GC pauses.
let grid        = []
let gridCapacity = 0
let cachedGradient = null
let tick = 0

// ── helpers ────────────────────────────────────────────────────────────────
function isMobile() { return window.innerWidth < 640 }

function initNodes() {
  const density = isMobile() ? 32000 : 20000   // slightly fewer nodes
  const count   = Math.floor((W * H) / density)
  nodes = Array.from({ length: count }, () => ({
    x:  Math.random() * W,
    y:  Math.random() * H,
    vx: (Math.random() - 0.5) * 0.15,
    vy: (Math.random() - 0.5) * 0.15,
    r:  Math.random() * 1.6 + 0.5,
    p:  Math.random() * Math.PI * 2,
  }))
}

/**
 * Build a flat spatial grid. Each cell is LINK×LINK px.
 * Only nodes in the same or adjacent cells are ever compared → O(n) on average.
 *
 * Arrays are reused across frames: grow when needed, otherwise just truncate to 0.
 * This eliminates ~8 160 short-lived array allocations/second (136 cells × 60fps)
 * that previously caused periodic GC pauses.
 */
function buildGrid() {
  cellW  = LINK
  cellH  = LINK
  cellsX = Math.ceil(W / cellW)
  cellsY = Math.ceil(H / cellH)
  const needed = cellsX * cellsY

  // Grow the pool if the canvas got larger (e.g. after resize)
  while (grid.length < needed) grid.push([])
  gridCapacity = needed

  // Clear only the cells we will use — reuse the array objects
  for (let i = 0; i < needed; i++) grid[i].length = 0

  for (let i = 0; i < nodes.length; i++) {
    const cx = Math.floor(nodes[i].x / cellW)
    const cy = Math.floor(nodes[i].y / cellH)
    grid[cy * cellsX + cx].push(i)
  }
}

/** Recreate the background gradient (only on resize, not every frame). */
function cacheGradient() {
  if (!ctx) return
  cachedGradient = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.8)
  cachedGradient.addColorStop(0, 'rgba(0,0,0,0)')
  cachedGradient.addColorStop(1, 'rgba(0,0,0,0)')
}

function resize() {
  const canvas = canvasEl.value
  if (!canvas) return

  // Clamp dPR to 1 — on 2× Retina, full dPR means 4× more pixels to rasterize
  // for a decorative canvas with opacity .28. Not worth it.
  W = canvas.width  = window.innerWidth
  H = canvas.height = window.innerHeight

  initNodes()
  cacheGradient()
}

// ── main render loop ───────────────────────────────────────────────────────
function draw() {
  // Pause when tab is not visible (Page Visibility API)
  if (document.hidden) {
    animId = requestAnimationFrame(draw)
    return
  }

  ctx.clearRect(0, 0, W, H)
  tick++

  // Background — use cached gradient (no GPU re-upload)
  ctx.fillStyle = cachedGradient
  ctx.fillRect(0, 0, W, H)

  // ── Update positions & rebuild spatial grid ──────────────────────────────
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i]
    n.x += n.vx
    n.y += n.vy
    if (n.x < 0 || n.x > W) n.vx *= -1
    if (n.y < 0 || n.y > H) n.vy *= -1
  }
  buildGrid()

  // ── Draw edges — spatial grid + opacity batching ─────────────────────────
  // Instead of O(n²) all-pairs, only check nodes within adjacent grid cells.
  // Group edges by quantised alpha bucket → single ctx.stroke() per bucket.
  const edgePaths = new Array(EDGE_BUCKETS)   // one Path2D per alpha bucket

  ctx.lineWidth = 0.5
  ctx.save()

  for (let cy = 0; cy < cellsY; cy++) {
    for (let cx = 0; cx < cellsX; cx++) {
      const cell = grid[cy * cellsX + cx]
      if (!cell.length) continue

      // Check this cell against itself and the 4 forward-adjacent cells only
      // (right, bottom-left, bottom, bottom-right) — covers all unique pairs
      const neighbours = [
        [cx,     cy    ],
        [cx + 1, cy    ],
        [cx - 1, cy + 1],
        [cx,     cy + 1],
        [cx + 1, cy + 1],
      ]

      for (const [nx, ny] of neighbours) {
        if (nx < 0 || nx >= cellsX || ny < 0 || ny >= cellsY) continue
        const neighbour = grid[ny * cellsX + nx]
        if (!neighbour.length) continue

        const isSelf = (nx === cx && ny === cy)

        for (let a = 0; a < cell.length; a++) {
          const start = isSelf ? a + 1 : 0
          for (let b = start; b < neighbour.length; b++) {
            const ni = nodes[cell[a]]
            const nj = nodes[neighbour[b]]
            const dx = ni.x - nj.x
            const dy = ni.y - nj.y
            const dSq = dx * dx + dy * dy   // no sqrt yet

            if (dSq < LINK_SQ) {
              const alpha = (1 - Math.sqrt(dSq) / LINK) * 0.16
              const bucket = Math.min(EDGE_BUCKETS - 1, Math.floor(alpha / 0.16 * EDGE_BUCKETS))

              if (!edgePaths[bucket]) edgePaths[bucket] = new Path2D()
              edgePaths[bucket].moveTo(ni.x, ni.y)
              edgePaths[bucket].lineTo(nj.x, nj.y)
            }
          }
        }
      }
    }
  }

  // Flush all edge buckets — one stroke() call per bucket (was one per edge)
  for (let b = 0; b < EDGE_BUCKETS; b++) {
    if (!edgePaths[b]) continue
    const alpha = ((b + 0.5) / EDGE_BUCKETS) * 0.16
    ctx.strokeStyle = `rgba(175,138,82,${alpha.toFixed(3)})`
    ctx.stroke(edgePaths[b])
  }

  ctx.restore()

  // ── Draw nodes ─────────────────────────────────────────────────────────
  for (let i = 0; i < nodes.length; i++) {
    const n    = nodes[i]
    const glow = Math.sin(tick * 0.011 + n.p) * 0.38 + 0.62
    ctx.beginPath()
    ctx.arc(n.x, n.y, n.r * glow, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(200,169,126,${(glow * 0.5).toFixed(3)})`
    ctx.fill()
  }

  animId = requestAnimationFrame(draw)
}

// ── lifecycle ──────────────────────────────────────────────────────────────
onMounted(() => {
  ctx = canvasEl.value.getContext('2d')  // cached once
  resize()
  draw()
  window.addEventListener('resize', resize, { passive: true })
})

onUnmounted(() => {
  cancelAnimationFrame(animId)
  window.removeEventListener('resize', resize)
})
</script>

<style scoped>
.micelio-canvas {
  position:       fixed;
  inset:          0;
  z-index:        0;
  opacity:        .28;
  pointer-events: none;
  will-change:    transform;   /* own compositing layer — scrolling never triggers repaint */
}
</style>
