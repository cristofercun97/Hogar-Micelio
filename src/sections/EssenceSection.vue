<template>
  <section id="essence" aria-label="Nuestra esencia">
    <div class="container">
      <div class="essence-header fade-up">
        <p class="section-label centered">Nuestra esencia</p>
        <h2 class="section-title">
          Cuatro pilares<br>de un <em>hogar</em>
        </h2>
      </div>

      <div class="pillars-grid stagger" role="list">
        <div
          v-for="pillar in pillars"
          :key="pillar.id"
          class="pillar-card fade-up"
          role="listitem"
        >
          <div class="pillar-icon-wrap" aria-hidden="true">
            <component :is="iconMap[pillar.icon]" />
          </div>
          <h3 class="pillar-name">{{ pillar.name }}</h3>
          <p class="pillar-desc">{{ pillar.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { pillars } from '@/data/pillars'
import IconMovimiento from '@/components/icons/IconMovimiento.vue'
import IconComunidad  from '@/components/icons/IconComunidad.vue'
import IconArte       from '@/components/icons/IconArte.vue'
import IconNaturaleza from '@/components/icons/IconNaturaleza.vue'

const iconMap = {
  movimiento: IconMovimiento,
  comunidad:  IconComunidad,
  arte:       IconArte,
  naturaleza: IconNaturaleza,
}
</script>

<style scoped>
#essence {
  border-top:  1px solid rgba(195, 170, 132, .18);
  border-bottom: 1px solid rgba(195, 170, 132, .18);
}

.essence-header {
  text-align: center;
  max-width:  560px;
  margin:     0 auto 5rem;
}

.section-label.centered { justify-content: center; }
.section-label.centered::before { display: none; }

.pillars-grid {
  display:               grid;
  grid-template-columns: repeat(4, 1fr);
  border:                1px solid rgba(195, 170, 132, .25);
}

.pillar-card {
  padding:    3rem 2.2rem;
  border-right: 1px solid rgba(195, 170, 132, .25);
  text-align: center;
  transition: background var(--t);
}
.pillar-card:last-child { border-right: none; }
.pillar-card:hover      { background: rgba(195, 170, 132, .12); }

.pillar-icon-wrap {
  width:         48px;
  height:        48px;
  margin:        0 auto 1.6rem;
  opacity:       .6;
}

.pillar-name {
  font-family:    var(--font-serif);
  font-weight:    300;
  font-size:      1.35rem;
  letter-spacing: .04em;
  color:          var(--cream);
  margin-bottom:  .8rem;
}

.pillar-desc {
  font-size:   .82rem;
  line-height: 1.85;
  color:       var(--text-dim);
}

@media (max-width: 960px) {
  .pillars-grid { grid-template-columns: repeat(2, 1fr); }
  .pillar-card:nth-child(2) { border-right: none; }
  .pillar-card              { border-bottom: 1px solid rgba(200, 169, 126, .12); }
  .pillar-card:nth-child(3) { border-right: 1px solid rgba(200, 169, 126, .12); }
  .pillar-card:nth-child(3),
  .pillar-card:nth-child(4) { border-bottom: none; }
}

@media (max-width: 640px) {
  .pillars-grid { grid-template-columns: 1fr; border-bottom: none; }
  .pillar-card  { border-right: none; border-bottom: 1px solid rgba(200, 169, 126, .12); }
  .pillar-card:last-child { border-bottom: none; }
}
</style>
