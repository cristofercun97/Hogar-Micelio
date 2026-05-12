<template>
  <section id="hero" aria-label="Presentación">
    <!-- Imagen de fondo responsive: mobile vs desktop/tablet horizontal -->
    <picture class="hero-bg" aria-hidden="true">
      <source media="(max-width: 767px)" :srcset="'/images/portada-mobile.png'" />
      <img
        :src="'/images/portada_desktop.png'"
        alt=""
        fetchpriority="high"
        decoding="async"
      />
    </picture>

    <div class="hero-inner">
      <!-- Badge coming soon -->
      <p class="hero-label">
        <span class="hero-label-dot" aria-hidden="true"></span>
        PRÓXIMAMENTE · BENIMACLET, VALENCIA
      </p>

      <!-- Mandala decorativo: sutil, ornamental -->
      <div class="mandala-wrap" aria-hidden="true">
      <svg
        class="hero-mandala"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="90" cy="90" r="85" stroke="#F2EDE3" stroke-width="0.8" opacity="0.9" />
        <circle cx="90" cy="90" r="70" stroke="#F2EDE3" stroke-width="0.6" opacity="0.75" stroke-dasharray="4 6" />
        <g stroke="#F2EDE3" stroke-width="0.8" opacity="1" fill="none">
          <circle cx="90" cy="55" r="35" /><circle cx="120.3" cy="72.5" r="35" />
          <circle cx="120.3" cy="107.5" r="35" /><circle cx="90" cy="125" r="35" />
          <circle cx="59.7" cy="107.5" r="35" /><circle cx="59.7" cy="72.5" r="35" />
          <circle cx="90" cy="90" r="35" />
        </g>
        <g class="mandala-inner" stroke="#F2EDE3" stroke-width="0.9" opacity="1" fill="none">
          <polygon points="90,30 150,140 30,140" stroke-width="0.8" opacity="0.85" />
          <polygon points="90,150 150,40 30,40" stroke-width="0.8" opacity="0.85" />
          <polygon points="90,55 121,72.5 121,107.5 90,125 59,107.5 59,72.5" stroke-width="0.9" opacity="1" />
        </g>
        <circle cx="90" cy="90" r="3" fill="#F2EDE3" opacity="1" />
        <circle cx="90" cy="90" r="8" stroke="#F2EDE3" stroke-width="0.7" opacity="0.9" />
      </svg>
      </div>

      <!-- Título: foco absoluto del hero -->
      <h1 class="hero-title"><span style="color:#EFEAE0">Hogar</span><em>Micelio</em></h1>

      <!-- Subtítulo emocional -->
      <p class="hero-tagline">
        Un espacio vivo donde naturaleza, cuerpo, arte y comunidad se encuentran.
      </p>

      <!-- Párrafo explicativo -->
      <p class="hero-intro">
        Estamos dando vida a un nuevo hogar sociocultural en plena naturaleza.
        Un lugar para el movimiento, la creación, el masaje y el cuidado compartido.
      </p>

      <div class="btn-group">
        <a href="#about" class="btn btn-primary">Descubrir el proyecto</a>
        <a href="#contact" class="btn btn-ghost">Recibir novedades</a>
      </div>
    </div>

    <div class="scroll-hint" aria-hidden="true">
      <span>Descubrir</span>
      <div class="scroll-hint-line" />
    </div>
  </section>
</template>

<style scoped>
#hero {
  position:       relative;
  z-index:        2;
  min-height:     100svh;
  display:        flex;
  flex-direction: column;
  align-items:    center;
  justify-content: center;
  text-align:     center;
  padding:        8rem 2rem 6rem;
  overflow:       hidden;
}

/* Imagen de fondo */
.hero-bg {
  position: absolute;
  inset:    0;
  z-index:  0;
}
.hero-bg img {
  width:           100%;
  height:          100%;
  object-fit:      cover;
  object-position: center;
  display:         block;
}

/* Overlay: vignette radial (foto visible en el centro) +
   degradado vertical (nav legible arriba, base oscura abajo) */
#hero::after {
  content:        '';
  position:       absolute;
  inset:          0;
  z-index:        1;
  pointer-events: none;
  background:
    radial-gradient(ellipse 88% 72% at 50% 46%, rgba(13,10,5,.06) 0%, rgba(13,10,5,.88) 100%),
    linear-gradient(to bottom, rgba(13,10,5,.74) 0%, rgba(13,10,5,.1) 38%, rgba(13,10,5,.8) 100%);
}

.hero-inner {
  position:       relative;
  z-index:        2;
  display:        flex;
  flex-direction: column;
  align-items:    center;
  max-width:      560px;
  width:          100%;
}

/* Mandala: ornamental, no protagonista. Cede el foco al título. */
.mandala-wrap {
  width:         clamp(62px, 8vw, 88px);
  height:        clamp(62px, 8vw, 88px);
  margin-bottom: 2rem;
  filter:        drop-shadow(0 0 16px rgba(242, 237, 227, .5));
  opacity:       1;
}

.hero-mandala {
  width:       100%;
  height:      100%;
  animation:   slowSpin 70s linear infinite;
  will-change: transform;
}
.mandala-inner {
  transform-origin: 90px 90px;
  animation:    slowSpinReverse 45s linear infinite;
  /* Capa independiente dentro del SVG: cambios en este <g> no
     invalidan la textura del SVG padre. */
  will-change:  transform;
}

@keyframes slowSpin        { to { transform: rotate(360deg); } }
@keyframes slowSpinReverse { to { transform: rotate(-360deg); } }

/* Badge “próximamente” en formato píldora con punto pulsante */
.hero-label {
  display:        inline-flex;
  align-items:    center;
  gap:            .65rem;
  font-size:      .6rem;
  letter-spacing: .38em;
  text-transform: uppercase;
  color:          var(--warm);
  border:         1px solid rgba(200, 169, 126, .32);
  padding:        .48rem 1.2rem .48rem 1rem;
  border-radius:  50px;
  margin-bottom:  2rem;
}
.hero-label-dot {
  width:         5px;
  height:        5px;
  background:    var(--warm);
  border-radius: 50%;
  flex-shrink:   0;
  animation:     dotPulse 2.4s ease-in-out infinite;
}
@keyframes dotPulse {
  0%, 100% { opacity: 1;  transform: scale(1); }
  50%       { opacity: .28; transform: scale(.58); }
}

.hero-title {
  font-family:    var(--font-serif);
  font-weight:    300;
  font-size:      clamp(4rem, 10vw, 7.5rem);
  line-height:    .88;
  letter-spacing: .04em;
  color:          var(--cream);
  margin-bottom:  1.8rem;
}
.hero-title em {
  font-style: italic;
  color:      var(--warm);
  display:    block;
}

.hero-tagline {
  font-family:  var(--font-serif);
  font-weight:  300;
  font-style:   italic;
  font-size:    clamp(1.12rem, 2.6vw, 1.5rem);
  line-height:  1.85;
  color:        #d8c8b2;
  max-width:    480px;
  margin-bottom: 2.2rem;
}

.hero-intro {
  font-size:    .9rem;
  line-height:  1.95;
  color:        #F2EDE3;
  max-width:    460px;
  letter-spacing: .015em;
  margin-bottom: 3.5rem;
}

.btn-group {
  display:    flex;
  gap:        1.2rem;
  flex-wrap:  wrap;
  justify-content: center;
}

.scroll-hint {
  position:       absolute;
  bottom:         0.625rem;
  left:           50%;
  z-index:        2;
  transform:      translateX(-50%);
  display:        flex;
  flex-direction: column;
  align-items:    center;
  gap:            .5rem;
  opacity:        .3;
  animation:      scrollBob 2.8s ease-in-out infinite;
  will-change:    transform;
}
.scroll-hint span {
  font-size:      .55rem;
  letter-spacing: .28em;
  text-transform: uppercase;
  color:          var(--warm);
}
.scroll-hint-line {
  width:      1px;
  height:     36px;
  background: linear-gradient(to bottom, var(--warm), transparent);
}

@keyframes scrollBob {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(7px); }
}

@media (max-width: 640px) {
  .hero-label   { font-size: .55rem; margin-bottom: 1.6rem; }
  .hero-tagline { font-size: 1.05rem; }
  .hero-intro   { font-size: .82rem; margin-bottom: 2.6rem; }
  .btn-group    { flex-direction: column; align-items: center; }
  .btn          { width: min(260px, 82vw); }
}
</style>
