<template>
  <section id="faq" aria-label="Preguntas frecuentes">
    <div class="container">

      <div class="faq-header fade-up">
        <p class="section-label centered">FAQ</p>
        <h2 class="section-title">Preguntas<br><em>frecuentes</em></h2>
        <p class="section-body faq-intro">
          Resolvemos las dudas más comunes sobre el hogar, las actividades y cómo formar parte de nuestra comunidad.
        </p>
      </div>

      <div class="faq-list fade-up" role="list">
        <div
          v-for="(item, i) in faqs"
          :key="i"
          class="faq-item"
          :class="{ open: openIndex === i }"
          role="listitem"
        >
          <button
            class="faq-question"
            :aria-expanded="openIndex === i"
            :aria-controls="`faq-answer-${i}`"
            @click="toggle(i)"
          >
            <span>{{ item.q }}</span>
            <span class="faq-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" class="faq-icon-v"/>
                <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
              </svg>
            </span>
          </button>
          <div
            class="faq-answer"
            :id="`faq-answer-${i}`"
            role="region"
            :style="openIndex === i ? { maxHeight: answerHeights[i] + 'px' } : { maxHeight: '0px' }"
          >
            <p class="faq-answer-text" :ref="el => setAnswerRef(el, i)">{{ item.a }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const faqs = [
  {
    q: '¿Qué es Hogar Micelio?',
    a: 'Hogar Micelio es un espacio sociocultural interdisciplinar en Benimaclet, Valencia. Nacimos para ser un lugar de encuentro donde el movimiento, el arte, la salud y la naturaleza convergen en comunidad. Somos una asociación sin ánimo de lucro.'
  },
  {
    q: '¿Necesito tener experiencia previa para apuntarme a las actividades?',
    a: 'No. Todas nuestras actividades están abiertas a cualquier nivel. Lo más importante es la disposición a estar presente y a explorar desde un lugar genuino. Cada facilitador adapta la práctica al grupo y al momento.'
  },
  {
    q: '¿Cómo puedo unirme a una actividad?',
    a: 'Puedes escribirnos al correo hogar.micelio@gmail.com, por WhatsApp al +34 614 19 31 76 (https://wa.me/34614193176) o a través de Instagram @hogar.micelio. También puedes usar el formulario de contacto de esta página y te respondemos en menos de 24 horas.'
  },
  {
    q: '¿Cuánto cuestan las actividades?',
    a: 'Cada profe gestiona sus actividades y precios de manera independiente.'
  },
  {
    q: '¿Puedo facilitar mi propia actividad en el hogar?',
    a: 'Sí. Tenemos un espacio abierto para personas que quieran compartir su práctica con la comunidad. Si tienes una propuesta, escríbenos y valoramos juntos cómo encajarla en el proyecto.'
  },
  {
    q: '¿El masaje Integral-Sensitivo requiere reserva previa?',
    a: 'Sí, el masaje es un servicio personalizado que requiere cita previa. Puedes reservar tu sesión a través del formulario de contacto, WhatsApp o email. Te confirmamos disponibilidad en menos de 24 horas.'
  },
  {
    q: '¿Dónde estáis exactamente?',
    a: 'Estamos en el Carrer del Poeta Altet, 11, en el barrio de Benimaclet, 46020 València. Un espacio accesible, en el corazón de uno de los barrios más vivos de la ciudad.'
  },
  {
    q: '¿Puedo hacer una visita antes de apuntarme?',
    a: 'Por supuesto. Nos encanta que las personas conozcan el espacio antes de comprometerse con algo. Contáctanos y acordamos un momento para que pases a conocer el hogar sin ningún compromiso.'
  },
]

const openIndex = ref(null)
const answerHeights = ref({})
const answerRefs = ref({})

function setAnswerRef(el, i) {
  if (el) answerRefs.value[i] = el
}

function toggle(i) {
  if (openIndex.value === i) {
    openIndex.value = null
    return
  }
  openIndex.value = i
  nextTick(() => {
    const el = answerRefs.value[i]
    if (el) answerHeights.value[i] = el.scrollHeight + 32 // +padding
  })
}
</script>

<style scoped>
#faq {
  background: transparent;
  border-top: 1px solid rgba(200, 169, 126, .07);
}

.faq-header {
  text-align: center;
  max-width:  560px;
  margin:     0 auto 4rem;
}
.section-label.centered         { justify-content: center; }
.section-label.centered::before { display: none; }

.faq-intro {
  margin: 1rem auto 0;
  text-align: center;
}

/* ── List ── */
.faq-list {
  max-width: 780px;
  margin:    0 auto;
}

.faq-item {
  border-bottom: 1px solid rgba(200, 169, 126, .12);
}
.faq-item:first-child {
  border-top: 1px solid rgba(200, 169, 126, .12);
}

/* ── Question button ── */
.faq-question {
  width:           100%;
  display:         flex;
  align-items:     center;
  justify-content: space-between;
  gap:             1.5rem;
  padding:         1.4rem 0;
  background:      transparent;
  border:          none;
  cursor:          pointer;
  text-align:      left;
  font-family:     var(--font-serif);
  font-weight:     300;
  font-size:       clamp(1rem, 1.8vw, 1.18rem);
  letter-spacing:  .02em;
  color:           #23272D;
  transition:      color var(--t);
}
.faq-item.open .faq-question {
  color: var(--warm);
}

/* ── Icon +/× ── */
.faq-icon {
  flex-shrink: 0;
  width:       22px;
  height:      22px;
  color:       var(--warm);
  opacity:     .6;
  transition:  opacity var(--t), transform var(--t);
}
.faq-item.open .faq-icon {
  opacity:   1;
  transform: rotate(45deg);
}
.faq-icon-v {
  transition: opacity var(--t);
}

/* ── Answer ── */
.faq-answer {
  overflow:   hidden;
  max-height: 0;
  transition: max-height .45s cubic-bezier(.25, .46, .45, .94);
}

.faq-answer-text {
  font-size:   .95rem;
  line-height: 1.9;
  color:       #23272D;
  padding:     0 0 1.6rem;
  max-width:   66ch;
}

@media (max-width: 640px) {
  .faq-question { font-size: .97rem; }
}
</style>
