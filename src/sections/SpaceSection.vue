<template>
  <section id="space" aria-label="El espacio físico">
    <div class="container">
      <div class="space-header fade-up">
        <p class="section-label centered">El espacio</p>
        <h2 class="section-title">El <em>Hogar</em></h2>
        <p class="space-location">Benimaclet · Valencia</p>
      </div>

      <div class="space-grid">
        <div class="space-gallery fade-up">
          <button
            type="button"
            class="space-ph-main gallery-trigger"
            :aria-label="`Ver imagen: ${previewImages[0].alt}`"
            @click="openLightbox(0)"
          >
            <SpaceGalleryImage
              :src="previewImages[0].src"
              :alt="previewImages[0].alt"
              loading="eager"
            />
          </button>

          <div class="space-ph-row">
            <button
              v-for="(img, i) in previewImages.slice(1)"
              :key="img.id"
              type="button"
              class="gallery-trigger"
              :aria-label="`Ver imagen: ${img.alt}`"
              @click="openLightbox(i + 1)"
            >
              <SpaceGalleryImage :src="img.src" :alt="img.alt" />
            </button>
          </div>

          <button
            type="button"
            class="gallery-count-badge"
            aria-label="Abrir galería completa del espacio"
            @click="openLightbox(0)"
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.2"/>
              <rect x="12" y="1" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.2"/>
              <rect x="1" y="12" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.2"/>
              <rect x="12" y="12" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.2"/>
            </svg>
            {{ spaceGallery.length }} fotos
          </button>
        </div>

        <div class="space-info fade-up">
          <p class="section-body space-desc">
            Una sala luminosa y cálida en Benimaclet, diseñada para el movimiento y el encuentro.
            Un refugio donde el suelo invita a descalzarse, la luz a respirar y el silencio a estar presente.
          </p>
          <p class="section-body space-desc">
            El espacio es de la comunidad. Lo cuidamos entre todas las personas que lo habitan,
            desde la responsabilidad compartida y el respeto mutuo.
          </p>

          <p class="resources-heading">Material compartido</p>
          <div class="resources-grid" role="list">
            <div
              v-for="item in resources"
              :key="item"
              class="resource-item"
              role="listitem"
            >
              {{ item }}
            </div>
          </div>

          <button
            type="button"
            class="btn-more-photos"
            aria-label="Ver galería completa del espacio"
            @click="openLightbox(0)"
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="btn-more-icon">
              <rect x="1" y="1" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.2"/>
              <rect x="12" y="1" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.2"/>
              <rect x="1" y="12" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.2"/>
              <rect x="12" y="12" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.2"/>
            </svg>
            Ver galería completa
          </button>
        </div>
      </div>

      <!-- Alquiler del espacio -->
      <div class="rent-banner fade-up">
        <div class="rent-inner">
          <div class="rent-text">
            <p class="rent-label">Tu espacio</p>
            <h3 class="rent-title">¿Tienes algo que<br><em>compartir o expresar?</em></h3>
            <p class="rent-body">
              El Hogar está disponible para clases, talleres, presentaciones y encuentros.
              Si tienes una propuesta, escríbenos y lo hablamos.
            </p>
          </div>
          <a
            href="https://wa.me/34614193176?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20el%20alquiler%20del%20espacio."
            target="_blank"
            rel="noopener noreferrer"
            class="rent-btn"
            aria-label="Solicitar información sobre alquiler del espacio por WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="rent-wa-icon">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Solicitar información</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Lightbox galería -->
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="lightboxOpen"
        class="lightbox-overlay"
        role="dialog"
        aria-modal="true"
        :aria-label="`Galería del espacio — imagen ${activeIndex + 1} de ${spaceGallery.length}`"
        @click.self="closeLightbox"
      >
        <div class="lightbox-panel">
          <div class="lightbox-toolbar">
            <span class="lightbox-counter">{{ activeIndex + 1 }} / {{ spaceGallery.length }}</span>
            <button type="button" class="lightbox-close" aria-label="Cerrar galería" @click="closeLightbox">
              &#x2715;
            </button>
          </div>

          <div class="lightbox-stage">
            <button
              type="button"
              class="lightbox-nav lightbox-nav--prev"
              aria-label="Imagen anterior"
              :disabled="activeIndex === 0"
              @click="prevImage"
            >
              &#8249;
            </button>

            <div class="lightbox-main">
              <Transition name="slide-fade" mode="out-in">
                <div :key="activeImage.id" class="lightbox-main-inner">
                  <SpaceGalleryImage
                    :src="activeImage.src"
                    :alt="activeImage.alt"
                    loading="eager"
                  />
                </div>
              </Transition>
              <p class="lightbox-caption">{{ activeImage.alt }}</p>
            </div>

            <button
              type="button"
              class="lightbox-nav lightbox-nav--next"
              aria-label="Imagen siguiente"
              :disabled="activeIndex === spaceGallery.length - 1"
              @click="nextImage"
            >
              &#8250;
            </button>
          </div>

          <div class="lightbox-thumbs" role="list" aria-label="Miniaturas de la galería">
            <button
              v-for="(img, i) in spaceGallery"
              :key="img.id"
              type="button"
              role="listitem"
              class="lightbox-thumb"
              :class="{ active: i === activeIndex }"
              :aria-label="`Ver imagen ${i + 1}: ${img.alt}`"
              :aria-current="i === activeIndex ? 'true' : undefined"
              @click="goToImage(i)"
            >
              <SpaceGalleryImage :src="img.src" :alt="img.alt" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, onUnmounted, ref, watch } from 'vue'
import SpaceGalleryImage from '@/components/SpaceGalleryImage.vue'
import { spaceGallery } from '@/data/spaceGallery'
import { resources } from '@/data/resources'

const lightboxOpen = ref(false)
const activeIndex  = ref(0)

const previewImages = computed(() => spaceGallery.slice(0, 3))
const activeImage   = computed(() => spaceGallery[activeIndex.value])

function openLightbox(index) {
  activeIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

function prevImage() {
  if (activeIndex.value > 0) activeIndex.value--
}

function nextImage() {
  if (activeIndex.value < spaceGallery.length - 1) activeIndex.value++
}

function goToImage(index) {
  activeIndex.value = index
}

function onKeydown(e) {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape')      closeLightbox()
  if (e.key === 'ArrowLeft')   prevImage()
  if (e.key === 'ArrowRight')  nextImage()
}

watch(lightboxOpen, (open) => {
  if (open) window.addEventListener('keydown', onKeydown)
  else      window.removeEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
#space {
  background: transparent;
}

.space-header {
  text-align: center;
  max-width:  600px;
  margin:     0 auto 4.5rem;
}
.section-label.centered          { justify-content: center; }
.section-label.centered::before  { display: none; }

.space-location {
  display:     inline-flex;
  align-items: center;
  gap:         .5rem;
  font-size:   .66rem;
  letter-spacing: .24em;
  text-transform: uppercase;
  color:       var(--moss);
  opacity:     .8;
  margin-top:  .5rem;
}
.space-location::before { content: '◎'; font-size: .75rem; }

.space-grid {
  display:               grid;
  grid-template-columns: 1.1fr 1fr;
  gap:                   clamp(3rem, 5vw, 6rem);
  align-items:           start;
}

.space-gallery {
  position:              relative;
  display:               grid;
  grid-template-rows:    1.8fr 1fr;
  gap:                   .9rem;
  height:                560px;
}

.gallery-trigger {
  position:   relative;
  overflow:   hidden;
  border:     1px solid rgba(200, 169, 126, .1);
  padding:    0;
  background: none;
  cursor:     pointer;
  width:      100%;
  height:     100%;
  text-align: left;
}
.gallery-trigger:focus-visible {
  outline:        2px solid var(--warm);
  outline-offset: 2px;
}

.space-ph-main {
  min-height: 0;
}

.space-ph-row {
  display:               grid;
  grid-template-columns: 1fr 1fr;
  gap:                   .9rem;
  min-height:            0;
}

.gallery-count-badge {
  position:        absolute;
  right:           .85rem;
  bottom:          .85rem;
  z-index:         2;
  display:         inline-flex;
  align-items:     center;
  gap:             .45rem;
  padding:         .45rem .85rem;
  font-family:     var(--font-sans);
  font-size:       .58rem;
  letter-spacing:  .16em;
  text-transform:  uppercase;
  color:           #F2EDE3;
  background:      rgba(14, 11, 6, .72);
  backdrop-filter: blur(8px);
  border:          1px solid rgba(200, 169, 126, .25);
  cursor:          pointer;
  transition:      background var(--t), border-color var(--t);
}
.gallery-count-badge svg { width: 13px; height: 13px; flex-shrink: 0; }
.gallery-count-badge:hover {
  background:   rgba(14, 11, 6, .88);
  border-color: rgba(200, 169, 126, .5);
}

.space-desc { margin-bottom: 2.8rem; }

.resources-heading {
  font-size:      .58rem;
  letter-spacing: .3em;
  text-transform: uppercase;
  color:          var(--warm);
  opacity:        .6;
  margin-bottom:  1.4rem;
  display:        flex;
  align-items:    center;
  gap:            .8rem;
}
.resources-heading::after {
  content:    '';
  flex:       1;
  height:     1px;
  background: linear-gradient(to right, rgba(200, 169, 126, .3), transparent);
}

.resources-grid {
  display:               grid;
  grid-template-columns: 1fr 1fr;
  gap:                   0;
}

.resource-item {
  display:     flex;
  align-items: center;
  gap:         .6rem;
  padding:     .55rem 0;
  font-size:   .82rem;
  color:       #23272D;
  border-bottom: 1px solid rgba(200, 169, 126, .07);
  letter-spacing: .01em;
}
.resource-item::before {
  content:   '·';
  color:     var(--warm);
  opacity:   .45;
  font-size: 1.1rem;
  line-height: 1;
  flex-shrink: 0;
}

@media (max-width: 960px) {
  .space-grid    { grid-template-columns: 1fr; }
  .space-gallery { height: 480px; }
}

@media (max-width: 640px) {
  .space-header  { margin-bottom: 2.5rem; }

  .space-gallery {
    height:             auto;
    grid-template-rows: auto auto;
    gap:                .5rem;
  }
  .space-ph-main { aspect-ratio: 4 / 3; height: auto; }
  .space-ph-row  { gap: .5rem; }
  .space-ph-row .gallery-trigger { aspect-ratio: 1 / 1; height: auto; }

  .space-desc     { margin-bottom: 1.8rem; font-size: .9rem; }
  .resources-grid { grid-template-columns: 1fr 1fr; }
  .btn-more-photos { width: 100%; justify-content: center; margin-top: 1.5rem; }
}

/* ── Alquiler del espacio ── */
.rent-banner {
  margin-top: 4rem;
  border:     1px solid rgba(200, 169, 126, .18);
  background: rgba(200, 169, 126, .05);
  padding:    clamp(2rem, 3vw, 2.8rem) clamp(2rem, 3vw, 3rem);
}

.rent-inner {
  display:         flex;
  align-items:     center;
  justify-content: space-between;
  gap:             clamp(2rem, 4vw, 5rem);
  flex-wrap:       wrap;
}

.rent-label {
  font-size:      .58rem;
  letter-spacing: .3em;
  text-transform: uppercase;
  color:          var(--warm);
  opacity:        .6;
  margin-bottom:  .8rem;
  display:        flex;
  align-items:    center;
  gap:            .7rem;
}
.rent-label::before {
  content:    '';
  display:    inline-block;
  width:      24px;
  height:     1px;
  background: rgba(200, 169, 126, .4);
}

.rent-title {
  font-family:    var(--font-serif);
  font-weight:    300;
  font-size:      clamp(1.4rem, 2vw, 2rem);
  line-height:    1.2;
  letter-spacing: .01em;
  color:          var(--text-dim);
  margin-bottom:  .7rem;
}
.rent-title em { font-style: italic; color: var(--warm); }

.rent-body {
  font-size:   .82rem;
  line-height: 1.8;
  color:       rgba(35, 39, 45, .55);
  max-width:   44ch;
  margin:      0;
}

.rent-btn {
  display:         inline-flex;
  align-items:     center;
  gap:             .75rem;
  padding:         .9rem 1.8rem;
  font-family:     var(--font-sans);
  font-size:       .65rem;
  letter-spacing:  .18em;
  text-transform:  uppercase;
  text-decoration: none;
  color:           #fff;
  background:      #25D366;
  border:          none;
  white-space:     nowrap;
  flex-shrink:     0;
  transition:      background .3s, transform .2s;
}
.rent-btn:hover {
  background: #1ebe5d;
  transform:  translateY(-1px);
}
.rent-wa-icon { width: 19px; height: 19px; flex-shrink: 0; }

@media (max-width: 640px) {
  .rent-inner { flex-direction: column; align-items: flex-start; }
  .rent-btn   { width: 100%; justify-content: center; }
}

/* ── Ver más button ── */
.btn-more-photos {
  display:        inline-flex;
  align-items:    center;
  gap:            .6rem;
  margin-top:     2rem;
  font-family:    var(--font-sans);
  font-size:      .68rem;
  letter-spacing: .2em;
  text-transform: uppercase;
  color:          var(--warm);
  background:     transparent;
  border:         1px solid rgba(200, 169, 126, .28);
  padding:        .7rem 1.4rem;
  cursor:         pointer;
  transition:     background var(--t), border-color var(--t);
}
.btn-more-photos:hover {
  background:   rgba(200, 169, 126, .1);
  border-color: rgba(200, 169, 126, .6);
}
.btn-more-icon { width: 16px; height: 16px; flex-shrink: 0; }

/* ── Lightbox ── */
.lightbox-overlay {
  position:        fixed;
  inset:           0;
  z-index:         200;
  background:      rgba(10, 8, 4, .94);
  display:         flex;
  align-items:     center;
  justify-content: center;
  padding:         clamp(1rem, 3vw, 2rem);
}

.lightbox-panel {
  width:      min(1100px, 100%);
  max-height: 100%;
  display:    flex;
  flex-direction: column;
  gap:        1rem;
}

.lightbox-toolbar {
  display:         flex;
  align-items:     center;
  justify-content: space-between;
}

.lightbox-counter {
  font-size:      .62rem;
  letter-spacing: .22em;
  text-transform: uppercase;
  color:          rgba(242, 237, 227, .55);
}

.lightbox-close {
  background: transparent;
  border:     none;
  font-size:  1.3rem;
  color:      var(--warm);
  cursor:     pointer;
  opacity:    .75;
  padding:    .25rem .5rem;
  transition: opacity var(--t);
}
.lightbox-close:hover { opacity: 1; }

.lightbox-stage {
  display:     flex;
  align-items: center;
  gap:         .75rem;
  min-height:  0;
}

.lightbox-main {
  flex:       1;
  min-width:  0;
  display:    flex;
  flex-direction: column;
  gap:        .75rem;
}

.lightbox-main-inner {
  aspect-ratio: 16 / 10;
  max-height:   min(62vh, 640px);
  border:       1px solid rgba(200, 169, 126, .15);
  overflow:     hidden;
  background:   rgba(195, 170, 132, .06);
}

.lightbox-caption {
  font-size:   .78rem;
  line-height: 1.5;
  color:       rgba(242, 237, 227, .55);
  text-align:  center;
  padding:     0 .5rem;
}

.lightbox-nav {
  flex-shrink: 0;
  width:       2.4rem;
  height:      2.4rem;
  border:      1px solid rgba(200, 169, 126, .25);
  background:  rgba(200, 169, 126, .06);
  color:       var(--warm);
  font-size:   1.6rem;
  line-height: 1;
  cursor:      pointer;
  transition:  background var(--t), border-color var(--t), opacity var(--t);
}
.lightbox-nav:hover:not(:disabled) {
  background:   rgba(200, 169, 126, .16);
  border-color: rgba(200, 169, 126, .5);
}
.lightbox-nav:disabled {
  opacity: .25;
  cursor:  not-allowed;
}

.lightbox-thumbs {
  display:   flex;
  gap:       .55rem;
  overflow-x: auto;
  padding:   .25rem .1rem .5rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(200, 169, 126, .35) transparent;
}

.lightbox-thumb {
  flex:       0 0 72px;
  width:      72px;
  height:     54px;
  padding:    0;
  border:     2px solid transparent;
  background: none;
  cursor:     pointer;
  overflow:   hidden;
  opacity:    .55;
  transition: opacity var(--t), border-color var(--t);
}
.lightbox-thumb:hover,
.lightbox-thumb.active {
  opacity:      1;
  border-color: var(--warm);
}

.slide-fade-enter-active,
.slide-fade-leave-active { transition: opacity .25s ease, transform .25s ease; }
.slide-fade-enter-from   { opacity: 0; transform: translateX(12px); }
.slide-fade-leave-to     { opacity: 0; transform: translateX(-12px); }

.modal-fade-enter-active,
.modal-fade-leave-active { transition: opacity .3s ease; }
.modal-fade-enter-from,
.modal-fade-leave-to     { opacity: 0; }

@media (max-width: 640px) {
  .lightbox-stage { gap: .35rem; }
  .lightbox-nav   { width: 2rem; height: 2rem; font-size: 1.3rem; }
  .lightbox-main-inner { max-height: 48vh; }
  .lightbox-thumb { flex: 0 0 60px; width: 60px; height: 45px; }
}
</style>
