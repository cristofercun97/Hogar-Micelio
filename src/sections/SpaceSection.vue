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
          <div class="space-ph-main">
            <img src="/images/9.png" alt="Sala principal de Hogar Micelio" class="space-img" />
          </div>
          <div class="space-ph-row">
            <div>
              <img src="/images/10.png" alt="Detalle del espacio" class="space-img" />
            </div>
            <div>
              <img src="/images/11.png" alt="Terraza de Hogar Micelio" class="space-img" />
            </div>
          </div>
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

          <button class="btn-more-photos" @click="modalOpen = true" aria-label="Ver más imágenes del espacio">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="btn-more-icon">
              <rect x="1" y="1" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.2"/>
              <rect x="12" y="1" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.2"/>
              <rect x="1" y="12" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.2"/>
              <rect x="12" y="12" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.2"/>
            </svg>
            Ver más imágenes
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
            href="https://wa.me/34633070753?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20el%20alquiler%20del%20espacio."
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

  <!-- Modal galería -->
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="modalOpen"
        class="modal-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Galería del espacio"
        @click.self="modalOpen = false"
        @keydown.escape="modalOpen = false"
      >
        <div class="modal-box">
          <button class="modal-close" @click="modalOpen = false" aria-label="Cerrar galería">&#x2715;</button>
          <div class="modal-grid">
            <div class="modal-img-wrap" v-for="(img, i) in extraImages" :key="i">
              <img :src="img.src" :alt="img.alt" class="modal-img" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
import { resources } from '@/data/resources'

const modalOpen = ref(false)
const extraImages = [
  { src: '/images/12.png', alt: 'Hogar Micelio - imagen adicional 1' },
  { src: '/images/13.png', alt: 'Hogar Micelio - imagen adicional 2' },
]
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
  display:               grid;
  grid-template-rows:    1.8fr 1fr;
  gap:                   .9rem;
  height:                560px;
}

.space-ph-main {
  position: relative;
  overflow: hidden;
  border:   1px solid rgba(200, 169, 126, .1);
}
.space-ph-main .photo-ph {
  background: rgba(195, 170, 132, .12);
}

.space-ph-row {
  display:               grid;
  grid-template-columns: 1fr 1fr;
  gap:                   .9rem;
}
.space-ph-row > div {
  position: relative;
  overflow: hidden;
  border:   1px solid rgba(200, 169, 126, .1);
}
.space-ph-row .photo-ph {
  background: rgba(195, 170, 132, .12);
}

/* Images */
.space-img {
  width:       100%;
  height:      100%;
  object-fit:  cover;
  object-position: center;
  display:     block;
  transition:  transform .6s cubic-bezier(.25, .46, .45, .94);
}
.space-ph-main:hover .space-img,
.space-ph-row > div:hover .space-img {
  transform: scale(1.04);
}

.space-desc    { margin-bottom: 2.8rem; }

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

  /* Galería: columna única — imagen grande arriba, dos pequeñas abajo */
  .space-gallery {
    height:                auto;
    grid-template-rows:    auto auto;
    gap:                   .5rem;
  }
  .space-ph-main {
    aspect-ratio: 4 / 3;
    height:       auto;
  }
  .space-ph-row {
    gap: .5rem;
  }
  .space-ph-row > div {
    aspect-ratio: 1 / 1;
    height:       auto;
  }

  /* Info */
  .space-desc    { margin-bottom: 1.8rem; font-size: .9rem; }
  .resources-grid { grid-template-columns: 1fr 1fr; }
  .btn-more-photos { width: 100%; justify-content: center; margin-top: 1.5rem; }
}

/* ── Alquiler del espacio ── */
.rent-banner {
  margin-top:    4rem;
  border:        1px solid rgba(200, 169, 126, .18);
  background:    rgba(200, 169, 126, .05);
  padding:       clamp(2rem, 3vw, 2.8rem) clamp(2rem, 3vw, 3rem);
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

/* ── Modal ── */
.modal-overlay {
  position:   fixed;
  inset:      0;
  z-index:    200;
  background: rgba(10, 8, 4, .92);
  display:    flex;
  align-items:     center;
  justify-content: center;
  padding:    2rem;
}

.modal-box {
  position:   relative;
  max-width:  900px;
  width:      100%;
  background: #EEEEE6;
  padding:    2rem;
}

.modal-close {
  position:   absolute;
  top:        1rem;
  right:      1rem;
  background: transparent;
  border:     none;
  font-size:  1.1rem;
  color:      var(--warm);
  cursor:     pointer;
  opacity:    .7;
  transition: opacity var(--t);
}
.modal-close:hover { opacity: 1; }

.modal-grid {
  display:               grid;
  grid-template-columns: 1fr 1fr;
  gap:                   .8rem;
  margin-top:            .5rem;
}

.modal-img-wrap {
  overflow:     hidden;
  aspect-ratio: 4 / 3;
}
.modal-img {
  width:      100%;
  height:     100%;
  object-fit: cover;
  display:    block;
}

/* Modal transition */
.modal-fade-enter-active,
.modal-fade-leave-active { transition: opacity .3s ease; }
.modal-fade-enter-from,
.modal-fade-leave-to     { opacity: 0; }

@media (max-width: 640px) {
  .modal-grid { grid-template-columns: 1fr; }
}
</style>
