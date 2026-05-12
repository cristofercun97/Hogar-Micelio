<template>
  <footer>
    <div class="footer-inner">

      <p class="footer-logo">
        <img src="/images/logo_micelio.png" alt="Hogar Micelio" class="footer-logo-img" />
        <span style="color:#EFEAE0">Hogar</span> <em>Micelio</em>
      </p>

      <div class="footer-sep" aria-hidden="true"><span>&#10022;</span></div>

      <ul class="footer-links" role="list">
        <li><a href="#about">El proyecto</a></li>
        <li><a href="#space">El hogar</a></li>
        <li><a href="#activities">Actividades</a></li>
        <li><a href="#massage">Masaje</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div class="footer-contact">
        <a
          href="https://www.instagram.com/hogar.micelio/"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-btn footer-btn--ig"
          aria-label="Instagram"
        >
          <svg class="footer-btn-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
          </svg>
          @hogar.micelio
        </a>

        <a
          href="https://wa.me/34633070753"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-btn footer-btn--wa"
          aria-label="WhatsApp"
        >
          <svg class="footer-btn-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.35A9.95 9.95 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Z" stroke="currentColor" stroke-width="1.5"/>
            <path d="M8.5 9.5c.2.9.8 2.5 2.5 3.5s3 1.8 3.5 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M8 8.5s-.5 1 0 2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M14.5 14.5s1 .2 1.5 1c.5.7.5 1.5.5 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          WhatsApp
        </a>

        <a
          href="mailto:hogar.micelio@gmail.com"
          class="footer-btn footer-btn--email"
          aria-label="Email"
        >
          <svg class="footer-btn-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/>
            <polyline points="2,6 12,13 22,6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          hogar.micelio@gmail.com
        </a>
      </div>

      <p class="footer-phrase">La red que nos sostiene.</p>
      <p class="footer-copy">Hogar Micelio &middot; Asociación Sociocultural &middot; Valencia &middot; 2026</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  position:        relative;
  z-index:         2;
  background:      rgba(10, 8, 4, .93);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-top:      1px solid rgba(200, 169, 126, .1);
  padding:         4rem 0 3rem;
}

.footer-inner {
  max-width:      1160px;
  margin:         0 auto;
  padding:        0 clamp(1.5rem, 5vw, 4rem);
  display:        flex;
  flex-direction: column;
  align-items:    center;
  gap:            1.6rem;
}

.footer-logo {
  display:        flex;
  align-items:    center;
  gap:            .6rem;
  font-family:    var(--font-serif);
  font-weight:    300;
  font-size:      1.7rem;
  letter-spacing: .07em;
  color:          var(--cream);
  opacity:        .65;
}
.footer-logo-img {
  width:       57px;
  height:      57px;
  object-fit:  contain;
}
.footer-logo em { font-style: italic; color: var(--warm); }

.footer-sep {
  display:    flex;
  align-items: center;
  gap:        1rem;
  width:      min(180px, 55vw);
  opacity:    .2;
}
.footer-sep::before,
.footer-sep::after {
  content:    '';
  flex:       1;
  height:     1px;
  background: var(--warm);
}
.footer-sep span { font-size: .5rem; color: var(--warm); }

.footer-links {
  display:    flex;
  gap:        2.2rem;
  list-style: none;
  flex-wrap:  wrap;
  justify-content: center;
}
.footer-links a {
  font-size:      .6rem;
  letter-spacing: .22em;
  text-transform: uppercase;
  color:          var(--warm);
  opacity:        .45;
  transition:     opacity var(--t);
}
.footer-links a:hover { opacity: .85; }

/* ── Contact buttons ── */
.footer-contact {
  display:   flex;
  gap:       1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin:    .4rem 0;
}

.footer-btn {
  display:        inline-flex;
  align-items:    center;
  gap:            .55rem;
  font-size:      .68rem;
  letter-spacing: .14em;
  text-transform: uppercase;
  padding:        .65rem 1.3rem;
  border:         1px solid rgba(200, 169, 126, .22);
  color:          var(--warm);
  opacity:        .75;
  transition:     opacity var(--t), background var(--t), border-color var(--t);
  white-space:    nowrap;
}
.footer-btn:hover {
  opacity:      1;
  background:   rgba(200, 169, 126, .1);
  border-color: rgba(200, 169, 126, .55);
}
.footer-btn-icon {
  width:  16px;
  height: 16px;
  flex-shrink: 0;
}

.footer-phrase {
  font-family:  var(--font-serif);
  font-style:   italic;
  font-weight:  300;
  font-size:    .97rem;
  color:        var(--warm);
  opacity:      .28;
}

.footer-copy {
  font-size:      .55rem;
  letter-spacing: .2em;
  text-transform: uppercase;
  color:          var(--warm);
  opacity:        .18;
}

@media (max-width: 640px) {
  .footer-links { gap: 1.4rem; }
}
</style>
