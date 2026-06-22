<template>
  <div
    class="gallery-img-wrap"
    :class="{ loaded: isLoaded, error: hasError }"
  >
    <div v-if="!isLoaded && !hasError" class="gallery-skeleton" aria-hidden="true" />

    <img
      v-show="!hasError"
      :src="src"
      :alt="alt"
      :loading="loading"
      decoding="async"
      class="gallery-img"
      @load="onLoad"
      @error="hasError = true"
    />

    <p v-if="hasError" class="gallery-error">No se pudo cargar la imagen</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  src:     { type: String, required: true },
  alt:     { type: String, required: true },
  loading: { type: String, default: 'lazy' },
})

const isLoaded = ref(false)
const hasError = ref(false)

function onLoad() {
  isLoaded.value = true
}
</script>

<style scoped>
.gallery-img-wrap {
  position:   relative;
  overflow:   hidden;
  width:      100%;
  height:     100%;
  background: rgba(195, 170, 132, .08);
}

.gallery-skeleton {
  position:   absolute;
  inset:      0;
  background: linear-gradient(
    110deg,
    rgba(195, 170, 132, .06) 8%,
    rgba(195, 170, 132, .18) 18%,
    rgba(195, 170, 132, .06) 33%
  );
  background-size: 200% 100%;
  animation: shimmer 1.4s ease-in-out infinite;
}

@keyframes shimmer {
  to { background-position: -200% 0; }
}

.gallery-img {
  width:           100%;
  height:          100%;
  object-fit:      cover;
  object-position: center;
  display:         block;
  opacity:         0;
  transition:      opacity .45s ease, transform .6s cubic-bezier(.25, .46, .45, .94);
}

.gallery-img-wrap.loaded .gallery-img {
  opacity: 1;
}

.gallery-img-wrap:not(.error):hover .gallery-img {
  transform: scale(1.04);
}

.gallery-error {
  position:    absolute;
  inset:       0;
  display:     flex;
  align-items: center;
  justify-content: center;
  font-size:   .72rem;
  letter-spacing: .08em;
  color:       rgba(35, 39, 45, .45);
  text-align:  center;
  padding:     1rem;
}
</style>
