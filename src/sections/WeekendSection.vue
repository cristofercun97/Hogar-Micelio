<template>
  <section id="weekend" aria-label="Actividades de fin de semana">
    <div class="weekend-inner">

      <div class="weekend-left fade-up">
        <p class="weekend-label">Cada semana</p>
        <h2 class="weekend-title">
          Actividades de<br><em>fin de semana</em>
        </h2>
      </div>

      <div class="weekend-divider" aria-hidden="true"></div>

      <div class="weekend-right fade-up">
        <p class="weekend-body">
          Los sábados y domingos el Hogar se llena de prácticas especiales,
          talleres abiertos y encuentros únicos. Cada semana la programación
          es diferente — síguela en tiempo real en nuestro Instagram.
        </p>
        <a
          href="https://www.instagram.com/hogar.micelio/"
          target="_blank"
          rel="noopener noreferrer"
          class="weekend-btn"
          aria-label="Ver programación de fin de semana en Instagram @hogar.micelio"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true" class="weekend-ig-icon">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4.5"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
          </svg>
          <span>Ver programación en Instagram</span>
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true" class="weekend-arrow">
            <line x1="2" y1="8" x2="13" y2="8"/>
            <polyline points="8,3 13,8 8,13"/>
          </svg>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
#weekend {
  background: #4A3728;
  overflow:   hidden;
}

/* ── Desktop: banner horizontal ── */
.weekend-inner {
  max-width:   1280px;
  margin:      0 auto;
  padding:     clamp(2.8rem, 4vw, 4rem) clamp(1.5rem, 5vw, 3.5rem);
  display:     grid;
  grid-template-columns: 1fr 1px 1fr;
  gap:         clamp(2.5rem, 4vw, 5rem);
  align-items: center;
}

.weekend-divider {
  width:      1px;
  height:     100%;
  min-height: 80px;
  background: rgba(220, 196, 158, .18);
}

/* ── Left ── */
.weekend-label {
  font-size:      .58rem;
  letter-spacing: .3em;
  text-transform: uppercase;
  color:          rgba(220, 196, 158, .6);
  margin-bottom:  1rem;
  display:        flex;
  align-items:    center;
  gap:            .7rem;
}
.weekend-label::before {
  content:    '';
  display:    inline-block;
  width:      28px;
  height:     1px;
  background: rgba(220, 196, 158, .4);
}

.weekend-title {
  font-family:    var(--font-serif);
  font-weight:    300;
  font-size:      clamp(1.9rem, 3vw, 2.8rem);
  line-height:    1.1;
  letter-spacing: .02em;
  color:          #F5ECD8;
  margin-bottom:  0;
}
.weekend-title em {
  font-style: italic;
  color:      #DCC49E;
}

/* ── Right ── */
.weekend-body {
  font-size:    .88rem;
  line-height:  1.85;
  color:        rgba(240, 228, 206, .65);
  margin-bottom: 1.6rem;
}

.weekend-btn {
  display:         inline-flex;
  align-items:     center;
  gap:             .75rem;
  padding:         .75rem 1.5rem;
  font-family:     var(--font-sans);
  font-size:       .65rem;
  letter-spacing:  .18em;
  text-transform:  uppercase;
  text-decoration: none;
  color:           #F5ECD8;
  border:          1px solid rgba(220, 196, 158, .35);
  background:      rgba(220, 196, 158, .08);
  transition:      background .3s, border-color .3s, gap .3s;
}
.weekend-btn:hover {
  background:   rgba(220, 196, 158, .18);
  border-color: rgba(220, 196, 158, .7);
  gap:          1rem;
}
.weekend-ig-icon { width: 17px; height: 17px; flex-shrink: 0; }
.weekend-arrow   { width: 15px; height: 15px; flex-shrink: 0; opacity: .6; }

/* ── Mobile: vuelve a columna ── */
@media (max-width: 768px) {
  .weekend-inner {
    grid-template-columns: 1fr;
    padding: clamp(3rem, 8vw, 5rem) clamp(1.5rem, 5vw, 2rem);
    gap: 1.8rem;
  }
  .weekend-divider { display: none; }
  .weekend-title   { font-size: clamp(2rem, 7vw, 2.8rem); margin-bottom: 0; }
}

@media (max-width: 480px) {
  .weekend-btn { width: 100%; justify-content: center; }
}
</style>
