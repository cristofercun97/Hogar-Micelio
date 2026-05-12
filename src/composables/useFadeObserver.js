import { onMounted, onUnmounted } from 'vue'

/**
 * Creates ONE IntersectionObserver for the entire document.
 * Call this ONCE in App.vue — not once per section.
 *
 * As each .fade-up element enters the viewport it receives the
 * `.visible` class and is unobserved immediately.
 */
export function useGlobalFadeObserver(selector = '.fade-up') {
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )

    document.querySelectorAll(selector).forEach((el) => observer.observe(el))
  })

  onUnmounted(() => observer?.disconnect())
}
