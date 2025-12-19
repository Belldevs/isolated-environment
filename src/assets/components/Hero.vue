<template>
  <div class="container" :style="bgStyle">
    <div class="overlay"></div>

    <div class="content">
      <h1>
        EDUBALL <span class="space"></span> ACADEMY
      </h1>
      <h2>Imperfect Excellence</h2>
    </div>
  </div>
</template>

<script>
import heroBg from '@/assets/images/eduball-img-15.jpg'

export default {
  name: 'Hero',
  computed: {
    bgStyle() {
      return {
        backgroundImage: `url(${heroBg})`
      }
    }
  }
}
</script>

<style scoped>
/* =========================
   BASE (DESKTOP FIRST)
   ========================= */
.container {
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.space {
  padding: 0 4px;
}

/* Overlay */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
}

/* Text */
.content {
  position: relative;
  text-align: center;
  color: white;
  padding: 0 20px;
}

h1 {
  font-size: 3.5rem;
  letter-spacing: 2px;
  font-family: "Karla", sans-serif;
  margin: 0;
}

h2 {
  font-size: 1.8rem;
  font-family: "Cabin", sans-serif;
  font-weight: 300;
  margin-top: 14px;
  opacity: 0.9;
}

/* =========================
   TABLET (≤ 1024px)
   ========================= */
@media (max-width: 1024px) {
  .container {
    height: 70vh;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 1.2rem;
  }
}

/* =========================
   MOBILE (≤ 768px)
   ========================= */
@media (max-width: 768px) {
  .container {
    height: 65vh;
  }

  h1 {
    font-size: 2.4rem;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 1.1rem;
  }
}

/* =========================
   SMALL MOBILE (≤ 480px)
   ========================= */
@media (max-width: 480px) {
  .container {
    height: 60vh;
  }

  h1 {
    font-size: 2rem;
    line-height: 1.2;
  }

  h2 {
    font-size: 1rem;
  }
}
</style>
