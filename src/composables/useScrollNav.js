import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Adds/removes the `.scrolled` class on the nav when the page
 * scrolls past 60px.
 */
export function useScrollNav() {
  const isScrolled = ref(false)

  function onScroll() {
    isScrolled.value = window.scrollY > 60
  }

  onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
  onUnmounted(() => window.removeEventListener('scroll', onScroll))

  return { isScrolled }
}
