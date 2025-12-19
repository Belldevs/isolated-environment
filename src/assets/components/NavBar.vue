<template>
  <nav :class="['navbar', { 'navbar-scrolled': isScrolled }]">
    <div class="nav-container">

      <!-- LOGO -->
      <router-link to="/" class="logo">
        <img src="/src/assets/images/logo.png" alt="EDUBALL Logo" />
      </router-link>




      <!-- HAMBURGER (ALWAYS VISIBLE) -->
      <button @click="isOpen = !isOpen" class="hamburger">
          
        <svg 
        v-if="!isOpen" 
  xmlns="http://www.w3.org/2000/svg" 
  width="32" 
  height="32" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  stroke-width="2" 
  stroke-linecap="round" 
  stroke-linejoin="round"
>
  <line x1="3" y1="6" x2="21" y2="6" />
  <line x1="3" y1="12" x2="21" y2="12" />
  <line x1="3" y1="18" x2="21" y2="18" />
</svg>

        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>

      </button>

    </div>




    <!-- MENU (USED FOR ALL SCREEN SIZES) -->
    <transition name="slide-fade">
      <div v-if="isOpen" class="menu-panel">
        <router-link @click="closeMenu" to="/" class="menu-link">Home</router-link>
        <router-link @click="closeMenu" to="/programs" class="menu-link">Programs</router-link>
        <router-link @click="closeMenu" to="/gallery" class="menu-link">Gallery</router-link>
        <router-link @click="closeMenu" to="/contact" class="menu-link">Contact Us</router-link>
      </div>
    </transition>

  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isOpen: false,
      isScrolled: false
    };
  },
  methods: {
    closeMenu() {
      this.isOpen = false;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50; // change point
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};

</script>

<style scoped>
/* NAVBAR BASE */

.menu-icon{
  color:white;
}

.navbar {
  position: fixed;
  top: 0;
  width:100%;
  left: 0;
  background: transparent;
  font-family: 'Arial',sans-serif;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  color: white;
  z-index: 50;
  box-shadow: 0 2px 6px rgba(0,0,0,0.4);
}

/* APPLIED AFTER SCROLL */
.navbar-scrolled {
  background: black; /* or rgba(0,0,0,0.9) */
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
}

/* CONTAINER */
.nav-container {
  max-width: none;
  padding: 5px 5%;
  display: flex;
  align-items: center;   /* ✅ THIS is key */
  justify-content: space-between;
}


/* LOGO */
.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-top:5px;
  color: white;
}

.logo img {
  height: 48px;   
  width: auto;
  display: block;   
}


/* HAMBURGER — ALWAYS VISIBLE */
.hamburger {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;              /* ✅ important */
  display: flex;           /* ✅ centers SVG */
  align-items: center;
  justify-content: center;
}


.hamburger img,
.hamburger svg {
  width: 30px;
  height: 30px;
  color:white;
  stroke: rgb(255, 255, 255);
  fill: none;
}

.hamburger svg {
  width: 30px;
  height: 30px;
  display: block;          /* ✅ critical */
  fill: none;
}

/* MENU (FOR ALL SCREEN SIZES) */
.menu-panel {
  background: black;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.menu-link {
  color: white;
  font-size: 18px;
  padding-bottom: 8px;
  text-decoration: none;
}

.menu-link.router-link-active,
.menu-link:hover {
  color: #00ff88;
}

/* ANIMATION */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: 0.25s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

</style>
