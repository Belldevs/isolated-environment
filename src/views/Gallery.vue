<template>
  <div class="container">
    <div class="gallery-text">
      <h1>Gallery</h1>
      <p class="typewriter">
        {{ displayedText }}<span class="caret"></span>
      </p>
    </div>

    <h3>2025</h3>
    <div class="bento-grid">
      <div 
        v-for="(img, idx) in images.slice(0, 5)" 
        :key="idx" 
        :class="['grid-item', `item-${idx + 1}`]"
      >
        <img :src="getImageUrl(img)" alt="Gallery image" />
        <div class="overlay">Moment {{ idx + 1 }}</div>
      </div>
    </div>

    <h3>2024</h3>
    <div class="bento-grid">
      <div 
        v-for="(img, idx) in images.slice(5, 10)" 
        :key="idx" 
        :class="['grid-item', `item-${idx + 1}`]"
      >
        <img :src="getImageUrl(img)" alt="Gallery image" />
        <div class="overlay">Moment {{ idx + 6 }}</div>
      </div>
    </div>

    <h3>2023</h3>
    <div class="bento-grid">
      <div 
        v-for="(img, idx) in images.slice(10, 15)" 
        :key="idx" 
        :class="['grid-item', `item-${idx + 1}`]"
      >
        <img :src="getImageUrl(img)" alt="Gallery image" />
        <div class="overlay">Moment {{ idx + 11 }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Over the years, we’ve gathered a collection of special moments worth sharing.",
      displayedText: "",
      index: 0,
      // Store ONLY the filenames to keep the data clean
      images: [
        'eduball-img-4.webp', 'eduball-img-1.jpg', 'eduball-img-2.jpg', 'eduball-img-3.jpg', 'eduball-img-15.jpg',
        'eduball-img-10.webp', 'eduball-img-5.webp', 'eduball-img-17.jpg', 'eduball-img-7.webp', 'eduball-img-8.webp',
        'eduball-img-9.webp', 'eduball-img-21.jpg', 'eduball-img-22.jpg', 'eduball-img-11.webp', 'eduball-img-19.jpg'
      ],
    }
  },
  mounted() {
    this.type()
  },
  methods: {
    // THIS IS THE NETLIFY-READY FIX
    // It tells Vite to resolve the local asset into a production URL
    getImageUrl(name) {
      return new URL(`/src/assets/images/${name}`, import.meta.url).href
    },
    type() {
      if (this.index >= this.text.length) return
      this.displayedText += this.text[this.index]
      const char = this.text[this.index]
      this.index++
      let delay = 25 + Math.random() * 30 
      if (/[.,!]/.test(char)) delay += 250
      if (char === " ") delay += 20
      setTimeout(this.type, delay)
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cabin&family=Karla:wght@700&display=swap');

.container {
  background: #111;
  padding: 80px 10%;
  min-height: 100vh;
  color: white;
}

.container h3 {
  font-size: 40px;
  font-family: "Karla", sans-serif;
  margin-top: 60px;
  border-left: 5px solid #63BE43;
  padding-left: 15px;
}

.gallery-text {
  text-align: center;
  margin-bottom: 60px;
}

.gallery-text h1 {
  font-family: "Karla", sans-serif;
  font-size: 3.5rem;
  margin-bottom: 10px;
}

.typewriter {
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  color: #acacac;
  font-size: 1.4rem;
  font-family: "Cabin", sans-serif;
  line-height: 1.6;
}

.caret {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background: #acacac;
  margin-left: 5px;
  vertical-align: middle;
  animation: blink 1.1s steps(2, start) infinite;
}

@keyframes blink { 50% { opacity: 0; } }

.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
  gap: 20px;
  max-width: 1200px;
  margin: 30px auto 80px auto;
}

.grid-item {
  position: relative;
  overflow: hidden;
  border: 1px solid #333;
  transition: transform 0.3s ease, border-color 0.3s ease;
  border-radius: 8px;
}

.grid-item:hover {
  transform: translateY(-5px);
  border-color: #63BE43;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 25%;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0,0,0,0.9));
  font-family: "Cabin", sans-serif;
  opacity: 0;
  transition: opacity 0.3s;
}

.grid-item:hover .overlay {
  opacity: 1;
}

/* Specific Bento Layout for the 5-item chunks */
.item-1 { grid-column: span 1; grid-row: span 1; } 
.item-2 { grid-column: span 1; grid-row: span 2; } /* Tall item */
.item-3 { grid-column: span 1; grid-row: span 1; } 
.item-4 { grid-column: span 1; grid-row: span 1; }
.item-5 { grid-column: span 1; grid-row: span 1; }

@media (max-width: 900px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .bento-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 250px;
  }
}
</style>