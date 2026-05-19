<template>
  <section id="massage" aria-label="Masaje Integral-Sensitivo">
    <div class="massage-bg" aria-hidden="true" />
    <div class="container">
      <div class="massage-grid fade-up">
        <figure class="massage-photo-wrap">
          <div class="massage-photo-pair">
            <img
              src="/images/masaje.png"
              alt="Sesión de Masaje Integral-Sensitivo en Hogar Micelio"
              class="massage-photo"
              loading="lazy"
            />
            <img
              src="/images/mesaje_1.jpg"
              alt="Masaje Integral-Sensitivo en Hogar Micelio"
              class="massage-photo"
              loading="lazy"
            />
          </div>
          <div class="massage-photo-overlay" aria-hidden="true"></div>
          <figcaption class="massage-photo-caption">Masaje Integral-Sensitivo</figcaption>
        </figure>

        <div class="massage-content">
          <p class="section-label">Servicio especial</p>
          <h2 class="massage-title">Masaje<br><em>Integral-Sensitivo</em></h2>
          <p class="massage-body">
            Un espacio de encuentro y escucha corporal, donde el toque acompaña lo que el cuerpo necesita en cada momento.
          </p>
          <p class="massage-body">
            Cada sesión se adapta a tus ritmos internos. A través de un tacto consciente, respetuoso y sensible, se acompaña la liberación de tensiones y la regulación del sistema nervioso, favoreciendo integración, descanso profundo y reconexión interna.
          </p>
          <p class="massage-body">
            Combina sensibilidad, presencia y escucha corporal. Es un acompañamiento cálido y profundo que facilita calma, sostén y nutrición afectiva.
          </p>
          <blockquote class="massage-quote">
            "Escuchar el cuerpo es el primer<br>acto de presencia."
          </blockquote>
          <a href="#contact" class="btn-massage">Reserva tu masaje</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
#massage {
  background: transparent;
  border-top: 1px solid rgba(200, 169, 126, .1);
  overflow:   hidden;
}

.massage-bg {
  position:   absolute;
  inset:      0;
  background: transparent;
  z-index:    0;
}

.massage-grid {
  position:              relative;
  z-index:               1;
  display:               grid;
  grid-template-columns: 1fr 1.05fr;
  gap:                   clamp(3rem, 6vw, 7rem);
  align-items:           center;
}

/* ── Foto masaje ── */
.massage-photo-wrap {
  position:     relative;
  aspect-ratio: 3 / 4;
  overflow:     hidden;
  border:       1px solid rgba(200, 169, 126, .14);
}
.massage-photo-wrap::before {
  content:        '';
  position:       absolute;
  inset:          -1px;
  border:         1px solid rgba(200, 169, 126, .14);
  transform:      translate(14px, 14px);
  pointer-events: none;
  z-index:        2;
}

.massage-photo-pair {
  display:        flex;
  flex-direction: column;
  width:          100%;
  height:         100%;
}

.massage-photo {
  width:       100%;
  flex:        1;
  min-height:  0;
  object-fit:  cover;
  object-position: center 30%;
  display:     block;
  transition:  transform .8s cubic-bezier(.25, .46, .45, .94);
}
.massage-photo-wrap:hover .massage-photo { transform: scale(1.04); }

.massage-photo-overlay {
  position:   absolute;
  inset:      0;
  background: linear-gradient(to top, rgba(10, 8, 4, .45) 0%, transparent 55%);
  z-index:    1;
}

.massage-photo-caption {
  position:       absolute;
  bottom:         1.4rem;
  left:           1.6rem;
  z-index:        2;
  font-size:      .58rem;
  letter-spacing: .26em;
  text-transform: uppercase;
  color:          rgba(240, 232, 218, .7);
}

.massage-title {
  font-family:    var(--font-serif);
  font-weight:    300;
  font-size:      clamp(2.4rem, 5vw, 4.2rem);
  line-height:    1.05;
  letter-spacing: .03em;
  color:          var(--cream);
  margin-bottom:  2rem;
}
.massage-title em { font-style: italic; color: var(--warm); display: block; }

.massage-body {
  font-size:    .95rem;
  line-height:  2;
  color:        #23272D;
  max-width:    50ch;
  margin-bottom: 1rem;
}

.massage-quote {
  font-family:  var(--font-serif);
  font-weight:  300;
  font-style:   italic;
  font-size:    clamp(1.1rem, 2vw, 1.3rem);
  color:        var(--warm);
  opacity:      .7;
  margin:       2.5rem 0 2.8rem;
  line-height:  1.7;
  padding-left: 1.5rem;
  border-left:  1px solid rgba(200, 169, 126, .3);
}

.btn-massage {
  display:        inline-flex;
  align-items:    center;
  font-family:    var(--font-sans);
  font-weight:    400;
  font-size:      .72rem;
  letter-spacing: .24em;
  text-transform: uppercase;
  padding:        1rem 2.6rem;
  background:     rgba(200, 169, 126, .08);
  border:         1px solid rgba(200, 169, 126, .42);
  color:          var(--warm);
  transition:     all var(--t) var(--ease);
  cursor:         pointer;
}
.btn-massage:hover {
  background:   rgba(200, 169, 126, .18);
  border-color: var(--warm);
  color:        var(--cream);
  transform:    translateY(-2px);
}

@media (max-width: 960px) {
  .massage-grid { grid-template-columns: 1fr; }
  .massage-photo-wrap { aspect-ratio: 4 / 3; }
  .massage-photo-wrap::before { display: none; }
}
</style>
