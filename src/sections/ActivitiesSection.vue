<template>
  <section id="activities" aria-label="Actividades semanales">
    <div class="container">
      <div class="activities-header fade-up">
        <p class="section-label centered">Programa semanal</p>
        <h2 class="section-title">
          Actividades<br>del <em>Hogar</em>
        </h2>
        <p class="section-body centered-text">
          Un tejido de prácticas y encuentros para el cuerpo, la voz y la presencia.
          Cada actividad nace desde la intención y el cuidado de quienes la facilitan.
        </p>
      </div>

      <div class="activities-grid stagger" role="list">
        <article
          v-for="activity in activities"
          :key="activity.id"
          class="activity-card fade-up"
          :style="{ '--cc': activity.accentColor }"
          role="listitem"
        >
          <div v-if="activity.image" class="activity-img-wrap">
            <img :src="activity.image" :alt="activity.nameHtml.replace(/<[^>]*>/g, '') + ' en Hogar Micelio'" class="activity-img" loading="lazy" />
          </div>
          <p class="activity-num">{{ activity.num }}</p>
          <h3 class="activity-name" v-html="activity.nameHtml" />
          <p class="activity-desc">{{ activity.desc }}</p>
          <div class="activity-meta">
            <div v-if="activity.facilitator" class="activity-facilitator">
              <span class="meta-tag">Facilita</span> {{ activity.facilitator }}
            </div>
            <div class="activity-schedule">
              <span class="meta-tag">Horario</span> {{ activity.schedule }}
            </div>
          </div>
        </article>

        <!-- Open slot card -->
        <article class="activity-card activity-card--open fade-up" role="listitem" aria-label="Espacio para facilitar actividades">
          <div class="open-img-wrap" aria-hidden="true">
            <img src="/images/13.png" alt="" class="open-img" />
            <div class="open-img-overlay"></div>
          </div>
          <div class="open-content">
            <p class="open-label">Únete al hogar</p>
            <p class="activity-open-text">¿Tienes una práctica<br>que quieres compartir?</p>
            <p class="open-sub">Escríbenos y hablamos sobre cómo integrar tu actividad en el espacio.</p>
            <a
              href="https://wa.me/34633070753?text=Hola%2C%20me%20gustar%C3%ADa%20facilitar%20una%20actividad%20en%20Hogar%20Micelio"
              target="_blank"
              rel="noopener noreferrer"
              class="open-whatsapp-btn"
              aria-label="Contactar por WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="open-wa-icon">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contactar por WhatsApp
            </a>
          </div>
        </article>

        <!-- Instagram card -->
        <article class="activity-card activity-card--instagram fade-up" role="listitem" aria-label="Síguenos en Instagram">
          <div class="ig-content">
            <div class="ig-icon-wrap" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" class="ig-icon">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </div>
            <p class="ig-handle">@hogar.micelio</p>
            <p class="ig-text">Revisa nuestras actividades semanales.<br>No te las pierdas.</p>
            <a
              href="https://www.instagram.com/hogar.micelio/"
              target="_blank"
              rel="noopener noreferrer"
              class="ig-btn"
              aria-label="Seguir @hogar.micelio en Instagram"
            >
              Seguir en Instagram
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { activities } from '@/data/activities'
</script>

<style scoped>
#activities {
  border-top: 1px solid rgba(195, 170, 132, .18);
}

.activities-header {
  text-align: center;
  max-width:  580px;
  margin:     0 auto 5rem;
}
.section-label.centered          { justify-content: center; }
.section-label.centered::before  { display: none; }
.centered-text { margin: 0 auto; text-align: center; }

.activities-grid {
  display:               grid;
  grid-template-columns: repeat(3, 1fr);
  gap:                   1px;
  background:            rgba(195, 170, 132, .2);
  border:                1px solid rgba(195, 170, 132, .2);
}

.activity-card {
  background: #EEEEE6;
  padding:    0;
  position:   relative;
  overflow:   hidden;
  transition: background var(--t);
  display:    flex;
  flex-direction: column;
}
.activity-card-body {
  padding: 2.8rem 2.4rem;
  flex:    1;
  display: flex;
  flex-direction: column;
}
.activity-card::after {
  content:          '';
  position:         absolute;
  top:              0;
  left:             0;
  right:            0;
  height:           2px;
  background:       var(--cc, var(--warm));
  transform:        scaleX(0);
  transform-origin: left;
  transition:       transform .5s var(--ease);
}
.activity-card:hover            { background: rgba(195, 170, 132, .15); }
.activity-card:hover::after     { transform: scaleX(1); }

/* Image */
.activity-img-wrap {
  width:        100%;
  aspect-ratio: 3 / 2;
  overflow:     hidden;
  flex-shrink:  0;
}
.activity-img {
  width:        100%;
  height:       100%;
  object-fit:   cover;
  object-position: center;
  display:      block;
  transition:   transform .6s var(--ease);
}
.activity-card:hover .activity-img { transform: scale(1.05); }

.activity-card--open {
  border:         1px solid rgba(200, 169, 126, .15);
  background:     #EEEEE6;
  padding:        0;
  display:        flex;
  flex-direction: column;
  overflow:       hidden;
}
.activity-card--open:hover { background: #EEEEE6; }

.open-img-wrap {
  position:    relative;
  width:       100%;
  aspect-ratio: 3 / 2;
  overflow:    hidden;
  flex-shrink: 0;
}
.open-img {
  width:       100%;
  height:      100%;
  object-fit:  cover;
  display:     block;
  transition:  transform .6s var(--ease);
}
.activity-card--open:hover .open-img { transform: scale(1.05); }
.open-img-overlay {
  position:   absolute;
  inset:      0;
  background: linear-gradient(to bottom, transparent 40%, rgba(14, 11, 6, .45));
}

.open-content {
  padding:        2.2rem 2.4rem 2.4rem;
  display:        flex;
  flex-direction: column;
  align-items:    flex-start;
  flex:           1;
}

.open-label {
  font-size:      .58rem;
  letter-spacing: .26em;
  text-transform: uppercase;
  color:          var(--warm);
  opacity:        .7;
  margin-bottom:  .9rem;
}

.activity-num {
  font-family:    var(--font-serif);
  font-weight:    300;
  font-size:      .65rem;
  letter-spacing: .18em;
  color:          var(--warm);
  opacity:        .3;
  margin-bottom:  1.6rem;
  padding-left:   2.4rem;
  padding-right:  2.4rem;
  padding-top:    2.8rem;
}

.activity-name {
  font-family:    var(--font-serif);
  font-weight:    300;
  font-size:      clamp(1.6rem, 2.5vw, 2rem);
  letter-spacing: .03em;
  color:          var(--cream);
  margin-bottom:  .9rem;
  line-height:    1.15;
  padding-left:   2.4rem;
  padding-right:  2.4rem;
}
:deep(.activity-name em) { font-style: italic; color: var(--warm); }

.activity-desc {
  font-size:    .82rem;
  line-height:  1.85;
  color:        var(--text-dim);
  margin-bottom: 1.8rem;
  padding-left:  2.4rem;
  padding-right: 2.4rem;
}

.activity-meta {
  padding-top:    1.4rem;
  padding-bottom: 2.8rem;
  padding-left:   2.4rem;
  padding-right:  2.4rem;
  border-top:     1px solid rgba(200, 169, 126, .1);
  display:        flex;
  flex-direction: column;
  gap:            .5rem;
  margin-top:     auto;
}

.activity-facilitator,
.activity-schedule {
  font-size:   .68rem;
  display:     flex;
  align-items: center;
  gap:         .5rem;
}
.activity-facilitator { color: var(--warm); opacity: .85; }
.activity-schedule    { color: var(--text-dim); letter-spacing: .14em; text-transform: uppercase; }

.meta-tag {
  font-size:      .55rem;
  letter-spacing: .2em;
  text-transform: uppercase;
  opacity:        .45;
}

.activity-open-text {
  font-family:   var(--font-serif);
  font-weight:   300;
  font-style:    italic;
  font-size:     clamp(1.15rem, 2vw, 1.4rem);
  color:         var(--cream);
  margin-bottom: .8rem;
  line-height:   1.35;
}

.open-sub {
  font-size:     .78rem;
  line-height:   1.7;
  color:         var(--text-dim);
  opacity:       .75;
  margin-bottom: 1.8rem;
}

.open-whatsapp-btn {
  display:        inline-flex;
  align-items:    center;
  gap:            .6rem;
  margin-top:     auto;
  padding:        .75rem 1.5rem;
  background:     #25D366;
  color:          #fff;
  font-family:    var(--font-sans);
  font-size:      .68rem;
  font-weight:    500;
  letter-spacing: .14em;
  text-transform: uppercase;
  text-decoration: none;
  transition:     background var(--t), transform var(--t);
}
.open-whatsapp-btn:hover {
  background: #1ebe5d;
  transform:  translateY(-1px);
}
.open-wa-icon { width: 16px; height: 16px; flex-shrink: 0; }

/* ── Instagram card ── */
.activity-card--instagram {
  background:      #EEEEE6;
  border:          1px solid rgba(200, 169, 126, .15);
  display:         flex;
  flex-direction:  column;
  justify-content: center;
  padding:         0;
}
.activity-card--instagram:hover { background: rgba(195, 170, 132, .12); }

.ig-content {
  padding:        2.8rem 2.4rem;
  display:        flex;
  flex-direction: column;
  align-items:    flex-start;
}

.ig-icon-wrap {
  color:         var(--warm);
  opacity:       .55;
  margin-bottom: 1.4rem;
}
.ig-icon { width: 32px; height: 32px; }

.ig-handle {
  font-size:      .65rem;
  letter-spacing: .22em;
  text-transform: uppercase;
  color:          var(--warm);
  opacity:        .7;
  margin-bottom:  1rem;
}

.ig-text {
  font-family:   var(--font-serif);
  font-weight:   300;
  font-style:    italic;
  font-size:     clamp(1.05rem, 1.8vw, 1.25rem);
  line-height:   1.55;
  color:         var(--cream);
  margin-bottom: 2rem;
}

.ig-btn {
  display:         inline-flex;
  align-items:     center;
  padding:         .72rem 1.5rem;
  font-family:     var(--font-sans);
  font-size:       .65rem;
  font-weight:     500;
  letter-spacing:  .18em;
  text-transform:  uppercase;
  text-decoration: none;
  color:           var(--warm);
  border:          1px solid rgba(200, 169, 126, .35);
  background:      transparent;
  transition:      background var(--t), border-color var(--t), color var(--t);
}
.ig-btn:hover {
  background:   rgba(200, 169, 126, .14);
  border-color: var(--warm);
  color:        var(--cream);
}

@media (max-width: 960px) {
  .activities-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .activities-grid { grid-template-columns: 1fr; }
}
</style>
