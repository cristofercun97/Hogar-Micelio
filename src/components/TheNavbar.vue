<template>
  <nav
    class="nav"
    :class="{ scrolled: isScrolled }"
    aria-label="Navegación principal"
  >
    <a href="#hero" class="nav-logo">
      <img src="/images/logo_micelio.png" alt="Hogar Micelio" class="nav-logo-img" />
      <span style="color:#EFEAE0">Hogar</span> <em>Micelio</em>
    </a>

    <ul class="nav-links" role="list">
      <li v-for="link in navLinks" :key="link.href">
        <a :href="link.href">{{ link.label }}</a>
      </li>
    </ul>

    <a href="#contact" class="nav-cta">Contactar</a>

    <button
      class="nav-hamburger"
      :class="{ open: menuOpen }"
      aria-label="Abrir menú"
      :aria-expanded="menuOpen.toString()"
      @click="openMenu"
    >
      <span /><span /><span />
    </button>
  </nav>

  <!-- Mobile overlay -->
  <Transition name="menu-fade">
    <nav
      v-if="menuOpen"
      class="nav-mobile"
      aria-label="Menú móvil"
    >
      <!-- Header -->
      <div class="nav-mobile-header">
        <a href="#hero" class="nav-mobile-logo" @click="closeMenu">
          <img src="/images/logo_micelio.png" alt="Hogar Micelio" class="nav-mobile-logo-img" />
          <span>Hogar</span> <em>Micelio</em>
        </a>
        <button class="nav-close" aria-label="Cerrar menú" @click="closeMenu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <!-- Links -->
      <ul class="nav-mobile-links" role="list">
        <li v-for="link in navLinks" :key="link.href" class="nav-mobile-item">
          <a :href="link.href" @click="closeMenu">{{ link.label }}</a>
        </li>
      </ul>

      <!-- Footer CTA -->
      <div class="nav-mobile-footer">
        <a href="#contact" class="nav-mobile-cta" @click="closeMenu">Reservar una sesión</a>
        <p class="nav-mobile-location">Benimaclet · Valencia</p>
      </div>
    </nav>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollNav } from '@/composables/useScrollNav'
import { navLinks } from '@/data/contact'

const { isScrolled } = useScrollNav()

const menuOpen = ref(false)

function openMenu() {
  menuOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeMenu() {
  menuOpen.value = false
  document.body.style.overflow = ''
}
</script>

<style scoped>
.nav {
  position:   fixed;
  top:        0;
  left:       0;
  right:      0;
  z-index:    100;
  display:    flex;
  align-items:    center;
  justify-content: space-between;
  padding:    1.6rem clamp(1.5rem, 5vw, 3.5rem);
  transition: background var(--t) var(--ease),
              padding    var(--t) var(--ease),
              border-color var(--t) var(--ease);
  border-bottom: 1px solid transparent;
}
.nav.scrolled {
  background:    rgba(92, 112, 50, .95);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  padding:       1rem clamp(1.5rem, 5vw, 3.5rem);
  border-bottom-color: rgba(200, 169, 126, .1);
}

.nav-logo {
  display:        inline-flex;
  align-items:    center;
  gap:            .6rem;
  font-family:    var(--font-serif);
  font-weight:    300;
  font-size:      1.25rem;
  letter-spacing: .08em;
  color:          var(--cream);
  transition:     opacity var(--t);
}
.nav-logo-img {
  width:       57px;
  height:      57px;
  object-fit:  contain;
  flex-shrink: 0;
}
.nav-logo:hover { opacity: .75; }
.nav-logo em    { font-style: italic; color: var(--warm); }

.nav-links {
  display:    flex;
  gap:        2.4rem;
  list-style: none;
}
.nav-links a {
  font-size:      .66rem;
  letter-spacing: .2em;
  text-transform: uppercase;
  color:          #F2EDE3;
  opacity:        .45;
  transition:     opacity var(--t);
}
.nav-links a:hover { opacity: .9; }

.nav-cta {
  font-size:      .66rem;
  letter-spacing: .18em;
  text-transform: uppercase;
  padding:        .6rem 1.4rem;
  border:         1px solid rgba(242, 237, 227, .22);
  color:          #F2EDE3;
  opacity:        .65;
  transition:     all var(--t) var(--ease);
}
.nav-cta:hover {
  background:   rgba(242, 237, 227, .1);
  border-color: rgba(242, 237, 227, .8);
  color:        #F2EDE3;
  opacity:      1;
}

.nav-hamburger {
  display:    none;
  flex-direction: column;
  gap:        5px;
  cursor:     pointer;
  background: none;
  border:     none;
  padding:    6px;
}
.nav-hamburger span {
  display:    block;
  width:      22px;
  height:     1px;
  background: var(--warm);
  transition: all var(--t) var(--ease);
}
.nav-hamburger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.nav-hamburger.open span:nth-child(2) { opacity: 0; }
.nav-hamburger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

/* Mobile overlay */
.nav-mobile {
  position:        fixed;
  inset:           0;
  z-index:         101;
  background:      rgba(92, 112, 50, .98);
  display:         flex;
  flex-direction:  column;
  padding:         0 1.8rem 2.5rem;
  overflow-y:      auto;
}

/* Header */
.nav-mobile-header {
  display:         flex;
  align-items:     center;
  justify-content: space-between;
  padding:         1.2rem 0 2rem;
  border-bottom:   1px solid rgba(200, 169, 126, .12);
  flex-shrink:     0;
}

.nav-mobile-logo {
  display:        inline-flex;
  align-items:    center;
  gap:            .55rem;
  font-family:    var(--font-serif);
  font-weight:    300;
  font-size:      1.1rem;
  letter-spacing: .08em;
  color:          #F2EDE3;
  text-decoration: none;
}
.nav-mobile-logo span { color: #EFEAE0; }
.nav-mobile-logo em   { font-style: italic; color: var(--warm); }
.nav-mobile-logo-img  { width: 44px; height: 44px; object-fit: contain; }

.nav-close {
  background: none;
  border:     none;
  color:      rgba(242, 237, 227, .5);
  cursor:     pointer;
  padding:    6px;
  transition: color var(--t);
  line-height: 0;
}
.nav-close:hover { color: var(--warm); }
.nav-close svg   { width: 22px; height: 22px; }

/* Links */
.nav-mobile-links {
  list-style: none;
  padding:    0;
  margin:     0;
  flex:       1;
  display:    flex;
  flex-direction: column;
  justify-content: center;
  gap:        0;
}

.nav-mobile-item {
  border-bottom: 1px solid rgba(200, 169, 126, .08);
}
.nav-mobile-item:first-child { border-top: none; }

.nav-mobile-item a {
  display:        block;
  padding:        1.3rem 0;
  font-family:    var(--font-serif);
  font-weight:    300;
  font-size:      clamp(1.7rem, 6vw, 2.4rem);
  letter-spacing: .04em;
  color:          #F2EDE3;
  opacity:        .7;
  transition:     opacity var(--t), color var(--t), padding var(--t);
  text-decoration: none;
}
.nav-mobile-item a:hover,
.nav-mobile-item a:active {
  opacity:      1;
  color:        var(--warm);
  padding-left: .5rem;
}

/* Footer */
.nav-mobile-footer {
  padding-top:  2rem;
  border-top:   1px solid rgba(200, 169, 126, .12);
  display:      flex;
  flex-direction: column;
  gap:          1rem;
  flex-shrink:  0;
}

.nav-mobile-cta {
  display:         block;
  text-align:      center;
  padding:         .9rem 1.5rem;
  font-family:     var(--font-sans);
  font-size:       .68rem;
  letter-spacing:  .22em;
  text-transform:  uppercase;
  color:           var(--warm);
  border:          1px solid rgba(200, 169, 126, .35);
  text-decoration: none;
  transition:      background var(--t), border-color var(--t);
}
.nav-mobile-cta:hover {
  background:   rgba(200, 169, 126, .1);
  border-color: var(--warm);
}

.nav-mobile-location {
  text-align:     center;
  font-size:      .58rem;
  letter-spacing: .22em;
  text-transform: uppercase;
  color:          rgba(242, 237, 227, .25);
}

/* Transition */
.menu-fade-enter-active,
.menu-fade-leave-active { transition: opacity .3s var(--ease); }
.menu-fade-enter-from,
.menu-fade-leave-to     { opacity: 0; }

@media (max-width: 640px) {
  .nav          { padding: 1.2rem 1.4rem; }
  .nav.scrolled { padding: .9rem 1.4rem; }
  .nav-links,
  .nav-cta      { display: none; }
  .nav-hamburger { display: flex; }
  .nav-hamburger.open { display: none; }
}
</style>
