<template>
  <section id="contact" aria-label="Contacto">
    <div class="container">
      <div class="contact-grid">
        <!-- Form side -->
        <div class="fade-up">
          <p class="section-label">Escríbenos</p>
          <h2 class="contact-title">Dinos <em>hola</em></h2>

          <form v-if="!submitted" id="contactForm" novalidate @submit.prevent="handleSubmit">
            <div class="form-row">
              <label class="form-label" for="fname">Nombre</label>
              <input
                id="fname"
                class="form-field"
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                autocomplete="name"
              />
            </div>
            <div class="form-row">
              <label class="form-label" for="femail">Correo electrónico</label>
              <input
                id="femail"
                class="form-field"
                type="email"
                name="email"
                placeholder="tu@correo.com"
                autocomplete="email"
                required
              />
            </div>
            <div class="form-row">
              <label class="form-label" for="fsubject">Asunto</label>
              <input
                id="fsubject"
                class="form-field"
                type="text"
                name="asunto"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>
            <div class="form-row">
              <label class="form-label" for="fmsg">Mensaje</label>
              <textarea
                id="fmsg"
                class="form-field"
                name="mensaje"
                rows="5"
                placeholder="Cuéntanos..."
                required
              />
            </div>
            <p v-if="error" class="form-error" role="alert">{{ error }}</p>
            <button type="submit" class="form-submit" :disabled="loading" :aria-busy="loading">
              <span v-if="loading" class="form-spinner" aria-hidden="true"></span>
              {{ loading ? 'Enviando…' : 'Enviar mensaje' }}
            </button>
          </form>

          <div v-else class="form-success" role="status" aria-live="polite">
            <p>Tu mensaje ha llegado al hogar.<br>Te respondemos pronto.</p>
          </div>
        </div>

        <!-- Info side -->
        <div class="fade-up">
          <h2 class="contact-info-title">Encuentra<br><em>el hogar</em></h2>
          <p class="contact-intro">
            Estamos en Benimaclet, Valencia. Escríbenos, llámanos o síguenos en Instagram
            para estar al tanto de todas las actividades y novedades.
          </p>

          <div class="contact-links">
            <div v-for="link in contactLinks" :key="link.id" class="contact-link-item">
              <!-- Icons -->
              <svg v-if="link.id === 'email'" class="contact-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect x="4" y="8" width="24" height="17" rx="1" stroke="#c8a97e" stroke-width="1.2"/>
                <polyline points="4,9 16,18 28,9" stroke="#c8a97e" stroke-width="1.2" stroke-linecap="round"/>
              </svg>
              <svg v-else-if="link.id === 'phone'" class="contact-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect x="7" y="4" width="18" height="24" rx="2" stroke="#c8a97e" stroke-width="1.2"/>
                <line x1="12" y1="10" x2="20" y2="10" stroke="#c8a97e" stroke-width="1" opacity=".5"/>
                <line x1="12" y1="14" x2="20" y2="14" stroke="#c8a97e" stroke-width="1" opacity=".5"/>
                <line x1="12" y1="18" x2="16" y2="18" stroke="#c8a97e" stroke-width="1" opacity=".5"/>
                <circle cx="16" cy="24" r="1.5" fill="#c8a97e" opacity=".5"/>
              </svg>
              <svg v-else-if="link.id === 'instagram'" class="contact-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect x="6" y="6" width="20" height="20" rx="5" stroke="#c8a97e" stroke-width="1.2"/>
                <circle cx="16" cy="16" r="5" stroke="#c8a97e" stroke-width="1.2"/>
                <circle cx="22" cy="10" r="1.2" fill="#c8a97e" opacity=".7"/>
              </svg>
              <svg v-else class="contact-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M16 4C11 4 7 8 7 13c0 7 9 15 9 15s9-8 9-15c0-5-4-9-9-9Z" stroke="#c8a97e" stroke-width="1.2"/>
                <circle cx="16" cy="13" r="3.5" stroke="#c8a97e" stroke-width="1.2"/>
              </svg>

              <div>
                <p class="contact-label">{{ link.label }}</p>
                <a
                  :href="link.href"
                  :target="link.external ? '_blank' : undefined"
                  :rel="link.external ? 'noopener noreferrer' : undefined"
                >
                  <p class="contact-value">{{ link.value }}</p>
                </a>
              </div>
            </div>
          </div>

          <div class="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.2290847932136!2d-0.36698402330614843!3d39.48674147160413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6047ad049098fb%3A0x7845a1ec7a5a7c5b!2sHogar%20Micelio!5e0!3m2!1ses!2ses!4v1778575651634!5m2!1ses!2ses"
              width="100%"
              height="260"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Ubicación de Hogar Micelio"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { contactLinks } from '@/data/contact'
import { useContactForm } from '@/composables/useContactForm'

const { submitted, loading, error, handleSubmit } = useContactForm()
</script>

<style scoped>
#contact {
  background: transparent;
  border-top: 1px solid rgba(200, 169, 126, .08);
}

.contact-grid {
  display:               grid;
  grid-template-columns: 1.2fr 1fr;
  gap:                   clamp(3rem, 6vw, 7rem);
  align-items:           start;
}

.contact-title {
  font-family:    var(--font-serif);
  font-weight:    300;
  font-size:      clamp(2rem, 4vw, 3.2rem);
  line-height:    1.1;
  letter-spacing: .03em;
  color:          var(--cream);
  margin-bottom:  2rem;
}
.contact-title em { font-style: italic; color: var(--warm); }

/* Form */
.form-row    { margin-bottom: 1.3rem; }
.form-label  {
  font-size:      .58rem;
  letter-spacing: .25em;
  text-transform: uppercase;
  color:          #23272D;
  margin-bottom:  .5rem;
}
.form-field {
  width:       100%;
  padding:     .9rem 1rem;
  background:  rgba(255, 255, 255, .025);
  border:      1px solid rgba(200, 169, 126, .18);
  border-radius: 0;
  color:       #23272D;
  font-family: var(--font-sans);
  font-weight: 300;
  font-size:   .9rem;
  letter-spacing: .02em;
  outline:     none;
  transition:  border-color var(--t), background var(--t);
  -webkit-appearance: none;
  appearance:  none;
}
.form-field:focus {
  border-color: rgba(200, 169, 126, .5);
  background:   rgba(200, 169, 126, .03);
}
.form-field::placeholder { color: rgba(35, 39, 45, .4); font-size: .85rem; }
textarea.form-field { resize: vertical; min-height: 120px; }

.form-submit {
  width:          100%;
  padding:        1rem;
  background:     rgba(200, 169, 126, .08);
  border:         1px solid rgba(200, 169, 126, .38);
  color:          #23272D;
  font-family:    var(--font-sans);
  font-weight:    400;
  font-size:      .7rem;
  letter-spacing: .24em;
  text-transform: uppercase;
  cursor:         pointer;
  transition:     all var(--t) var(--ease);
  margin-top:     .4rem;
}
.form-submit:hover {
  background:   rgba(200, 169, 126, .18);
  border-color: var(--warm);
  color:        var(--cream);
}
.form-submit:disabled {
  opacity: .55;
  cursor:  not-allowed;
}
.form-submit:disabled:hover {
  background:   rgba(200, 169, 126, .08);
  border-color: rgba(200, 169, 126, .38);
  color:        #23272D;
}

.form-spinner {
  display:       inline-block;
  width:         10px;
  height:        10px;
  border:        1.5px solid rgba(200, 169, 126, .35);
  border-top-color: var(--warm);
  border-radius: 50%;
  animation:     spin .7s linear infinite;
  margin-right:  .5rem;
  vertical-align: middle;
}
@keyframes spin { to { transform: rotate(360deg); } }

.form-error {
  font-size:    .72rem;
  color:        #e07070;
  border:       1px solid rgba(224, 112, 112, .25);
  padding:      .6rem .9rem;
  margin-bottom: .8rem;
  line-height:  1.5;
}

.form-success {
  padding:    2.5rem 1.5rem;
  border:     1px solid rgba(200, 169, 126, .18);
  text-align: center;
}
.form-success p {
  font-family: var(--font-serif);
  font-style:  italic;
  font-size:   1.15rem;
  color:       var(--warm);
  opacity:     .85;
}

/* Info side */
.contact-info-title {
  font-family:    var(--font-serif);
  font-weight:    300;
  font-size:      clamp(1.8rem, 3.5vw, 2.8rem);
  line-height:    1.1;
  letter-spacing: .03em;
  color:          var(--cream);
  margin-bottom:  1.2rem;
}
.contact-info-title em { font-style: italic; color: var(--warm); }

.contact-intro {
  font-size:    .9rem;
  line-height:  1.95;
  color:        #23272D;
  margin-bottom: 3rem;
}

.contact-links { display: flex; flex-direction: column; gap: 0; }

.contact-map {
  margin-top:   2rem;
  border:       1px solid rgba(200, 169, 126, .18);
  overflow:     hidden;
}
.contact-map iframe {
  display: block;
  filter:  grayscale(20%) opacity(0.92);
}

.contact-link-item {
  display:     flex;
  align-items: flex-start;
  gap:         1.2rem;
  padding:     1.4rem 0;
  border-bottom: 1px solid rgba(200, 169, 126, .08);
}
.contact-link-item:first-child { border-top: 1px solid rgba(200, 169, 126, .08); }

.contact-icon { width: 32px; height: 32px; flex-shrink: 0; opacity: .5; margin-top: 3px; }
.contact-label {
  font-size:      .58rem;
  letter-spacing: .22em;
  text-transform: uppercase;
  color:          var(--warm);
  opacity:        .55;
  margin-bottom:  .2rem;
}
.contact-value {
  font-family:  var(--font-serif);
  font-weight:  300;
  font-size:    1rem;
  color:        var(--cream);
  opacity:      .82;
  transition:   color var(--t), opacity var(--t);
}
.contact-link-item a:hover .contact-value { color: var(--warm); opacity: 1; }

@media (max-width: 960px) {
  .contact-grid { grid-template-columns: 1fr; }
}
</style>
