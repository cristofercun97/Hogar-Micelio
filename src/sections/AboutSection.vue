<template>
  <section id="about" aria-label="Quiénes somos">
    <div class="container">
      <div class="about-grid">
        <figure class="about-visual fade-up">
          <img src="/images/8.png" alt="Interior de Hogar Micelio" class="about-img" />
        </figure>

        <div class="about-content fade-up">
          <p class="section-label">Quiénes somos</p>
          <h2 class="section-title">
            Un espacio vivo<br>para el <em>encuentro</em>
          </h2>
          <p class="section-body">
            Hogar Micelio es un espacio interdisciplinar y biocéntrico en el corazón de Benimaclet,
            Valencia. Nacimos para ser un lugar de encuentro donde el movimiento, el arte, la salud
            y la naturaleza convergen en comunidad.
          </p>
          <blockquote class="about-quote">
            Como el micelio bajo la tierra,<br>
            tejemos redes de cuidado, creación y crecimiento compartido.
          </blockquote>
          <p class="section-body">
            Somos una asociación sin ánimo de lucro. Cada actividad, cada práctica, cada encuentro
            está concebido desde el cuidado genuino y la intención de construir comunidad real,
            presente y sostenible.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
#about {
  background: transparent;
  border-top: 1px solid rgba(200, 169, 126, .07);
}

.about-grid {
  display:  grid;
  grid-template-columns: 1fr 1.1fr;
  gap:      clamp(3rem, 6vw, 7rem);
  align-items: center;
}

.about-visual {
  position:     relative;
  aspect-ratio: 4 / 5;
  border:       1px solid rgba(200, 169, 126, .15);
  overflow:     hidden;
}
.about-visual::after {
  content:    '';
  position:   absolute;
  bottom:     0;
  left:       0;
  right:      0;
  height:     2px;
  background: linear-gradient(to right, transparent, var(--warm), transparent);
  opacity:    .35;
}

.about-img {
  width:       100%;
  height:      100%;
  object-fit:  cover;
  object-position: center;
  display:     block;
}

.about-quote {
  font-family:  var(--font-serif);
  font-weight:  300;
  font-style:   italic;
  font-size:    clamp(1.15rem, 2.5vw, 1.55rem);
  line-height:  1.65;
  color:        var(--warm);
  opacity:      .82;
  border-left:  1px solid rgba(200, 169, 126, .32);
  padding-left: 1.5rem;
  margin:       2.2rem 0;
}

@media (max-width: 960px) {
  .about-grid   { grid-template-columns: 1fr; }
  .about-visual { aspect-ratio: 4 / 3; }
}
</style>
