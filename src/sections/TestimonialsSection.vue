<template>
  <section id="testimonials" aria-label="Testimonios">
    <div class="container">

      <div class="testimonials-header fade-up">
        <p class="section-label centered">Voces del hogar</p>
        <h2 class="section-title">Lo que dice<br>nuestra <em>comunidad</em></h2>
      </div>

      <!-- Carousel -->
      <div class="carousel fade-up" @mouseenter="pauseAuto" @mouseleave="resumeAuto">

        <!-- Track -->
        <div class="carousel-viewport" ref="viewport">
          <div
            class="carousel-track"
            :style="{ transform: `translateX(-${current * 100}%)` }"
          >
            <blockquote
              v-for="t in testimonials"
              :key="t.id"
              class="testimonial-card"
            >
              <div class="quote-mark" aria-hidden="true">"</div>
              <p class="testimonial-text">{{ t.text }}</p>
              <footer class="testimonial-author">
                <span class="testimonial-avatar" aria-hidden="true">{{ t.name.charAt(0) }}</span>
                <div>
                  <span class="testimonial-name">{{ t.name }}</span>
                  <span class="testimonial-activity">{{ t.activity }}</span>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>

        <!-- Arrows -->
        <button class="carousel-arrow carousel-arrow--prev" @click="prev" aria-label="Anterior">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <polyline points="15,18 9,12 15,6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="carousel-arrow carousel-arrow--next" @click="next" aria-label="Siguiente">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <polyline points="9,6 15,12 9,18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <!-- Dots -->
        <div class="carousel-dots" role="tablist" aria-label="Testimonios">
          <button
            v-for="(t, i) in testimonials"
            :key="t.id"
            class="carousel-dot"
            :class="{ active: i === current }"
            @click="goTo(i)"
            :aria-label="`Testimonio ${i + 1}`"
            role="tab"
            :aria-selected="i === current"
          />
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const testimonials = [
  {
    id: 1,
    text: 'Hogar Micelio es exactamente lo que su nombre dice: un lugar donde las raíces se tejen. Cada clase de Biodanza me ha devuelto algo que no sabía que había perdido.',
    name: 'Laura M.',
    activity: 'Biodanza',
  },
  {
    id: 2,
    text: 'El masaje integral fue una experiencia completamente diferente a todo lo que había probado. No es solo un masaje, es un espacio de escucha real. Volveré sin duda.',
    name: 'Andrés P.',
    activity: 'Masaje Integral-Sensitivo',
  },
  {
    id: 3,
    text: 'El espacio tiene algo especial. Desde el primer día me sentí en casa. Las personas que lo sostienen lo hacen con una intención que se nota en cada detalle.',
    name: 'Sofía R.',
    activity: 'Acroyoga',
  },
  {
    id: 4,
    text: 'Llevo meses practicando yoga aquí y nunca he encontrado un lugar con tanta calidez y presencia. Benimaclet tenía que tener un espacio así.',
    name: 'Carlos V.',
    activity: 'Yoga',
  },
  {
    id: 5,
    text: 'Las Coplitas para crecer me hicieron llorar y reír en la misma tarde. La voz como herramienta de comunidad. Algo que no olvidaré.',
    name: 'María T.',
    activity: 'Coplitas para crecer',
  },
  {
    id: 6,
    text: 'Vine al Ki-Teatro con mucha curiosidad y poca expectativa. Salí completamente transformado. Es teatro, es movimiento, es presencia pura.',
    name: 'Iván G.',
    activity: 'Ki-Teatro',
  },
]

const current = ref(0)
let timer = null

function goTo(i) {
  current.value = i
}
function next() {
  current.value = (current.value + 1) % testimonials.length
}
function prev() {
  current.value = (current.value - 1 + testimonials.length) % testimonials.length
}
function startAuto() {
  timer = setInterval(next, 5000)
}
function pauseAuto() {
  clearInterval(timer)
}
function resumeAuto() {
  startAuto()
}

// Touch/swipe support
const viewport = ref(null)
let touchStartX = 0
function onTouchStart(e) { touchStartX = e.touches[0].clientX }
function onTouchEnd(e) {
  const dx = e.changedTouches[0].clientX - touchStartX
  if (Math.abs(dx) > 50) dx < 0 ? next() : prev()
}

onMounted(() => {
  startAuto()
  if (viewport.value) {
    viewport.value.addEventListener('touchstart', onTouchStart, { passive: true })
    viewport.value.addEventListener('touchend', onTouchEnd, { passive: true })
  }
})
onUnmounted(() => {
  clearInterval(timer)
  if (viewport.value) {
    viewport.value.removeEventListener('touchstart', onTouchStart)
    viewport.value.removeEventListener('touchend', onTouchEnd)
  }
})
</script>

<style scoped>
#testimonials {
  background: transparent;
  border-top: 1px solid rgba(200, 169, 126, .07);
}

.testimonials-header {
  text-align: center;
  max-width:  560px;
  margin:     0 auto 4rem;
}
.section-label.centered         { justify-content: center; }
.section-label.centered::before { display: none; }

/* ── Carousel shell ── */
.carousel {
  position: relative;
  max-width: 860px;
  margin:    0 auto;
}

.carousel-viewport {
  overflow: hidden;
}

.carousel-track {
  display:    flex;
  transition: transform .6s cubic-bezier(.25, .46, .45, .94);
  will-change: transform;
}

/* ── Slide card ── */
.testimonial-card {
  flex:        0 0 100%;
  width:       100%;
  padding:     3.5rem clamp(2rem, 8vw, 5rem);
  border:      1px solid rgba(200, 169, 126, .14);
  background:  transparent;
  display:     flex;
  flex-direction: column;
  gap:         1.6rem;
  min-height:  300px;
  box-sizing:  border-box;
}

.quote-mark {
  font-family: var(--font-serif);
  font-size:   6rem;
  line-height: .7;
  color:       var(--warm);
  opacity:     .18;
  user-select: none;
  align-self:  flex-start;
}

.testimonial-text {
  font-family: var(--font-serif);
  font-weight: 300;
  font-style:  italic;
  font-size:   clamp(1.05rem, 2vw, 1.35rem);
  line-height: 1.85;
  color:       #23272D;
  max-width:   68ch;
}

.testimonial-author {
  display:     flex;
  align-items: center;
  gap:         1rem;
  margin-top:  auto;
  padding-top: 1.6rem;
  border-top:  1px solid rgba(200, 169, 126, .14);
}

.testimonial-avatar {
  width:           40px;
  height:          40px;
  flex-shrink:     0;
  border-radius:   50%;
  background:      rgba(200, 169, 126, .12);
  border:          1px solid rgba(200, 169, 126, .28);
  display:         flex;
  align-items:     center;
  justify-content: center;
  font-family:     var(--font-serif);
  font-size:       1.1rem;
  color:           var(--warm);
}

.testimonial-name {
  display:        block;
  font-size:      .85rem;
  font-weight:    400;
  letter-spacing: .04em;
  color:          var(--warm);
}
.testimonial-activity {
  display:        block;
  font-size:      .62rem;
  letter-spacing: .18em;
  text-transform: uppercase;
  color:          #23272D;
  opacity:        .5;
  margin-top:     .2rem;
}

/* ── Arrows ── */
.carousel-arrow {
  position:    absolute;
  top:         50%;
  transform:   translateY(-50%);
  width:       44px;
  height:      44px;
  border:      1px solid rgba(200, 169, 126, .22);
  background:  transparent;
  color:       var(--warm);
  cursor:      pointer;
  display:     flex;
  align-items: center;
  justify-content: center;
  transition:  background var(--t), border-color var(--t), opacity var(--t);
  z-index:     2;
}
.carousel-arrow svg { width: 18px; height: 18px; }
.carousel-arrow:hover {
  background:   rgba(200, 169, 126, .12);
  border-color: rgba(200, 169, 126, .55);
}
.carousel-arrow--prev { left:  -60px; }
.carousel-arrow--next { right: -60px; }

/* ── Dots ── */
.carousel-dots {
  display:         flex;
  justify-content: center;
  gap:             .6rem;
  margin-top:      2rem;
}
.carousel-dot {
  width:      7px;
  height:     7px;
  border-radius: 50%;
  border:     1px solid rgba(200, 169, 126, .4);
  background: transparent;
  cursor:     pointer;
  padding:    0;
  transition: background var(--t), border-color var(--t), transform var(--t);
}
.carousel-dot.active {
  background:   var(--warm);
  border-color: var(--warm);
  transform:    scale(1.3);
}

/* ── Responsive ── */
@media (max-width: 960px) {
  .carousel-arrow--prev { left:  -40px; }
  .carousel-arrow--next { right: -40px; }
}
@media (max-width: 640px) {
  .carousel-arrow { display: none; }
  .testimonial-card { padding: 2.4rem 1.5rem; min-height: auto; }
  .testimonial-text { font-size: 1rem; }
}
</style>
