<template>
  <footer class="container w-full">

    <div class="class-one">
      <h1>Permalinks</h1>
    </div>

    <div class="class-two">
      <ul>
        <li v-for="link in footerLinks" :key="link.name">
          <!-- Internal SPA routes -->
          <router-link
            v-if="!link.endpoint.startsWith('#')"
            :to="link.endpoint"
          >
            {{ link.name }}
          </router-link>

          <!-- Anchor links (e.g. Back to Top) -->
          <a
            v-else
            :href="link.endpoint"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>
    </div>

    <div class="social-row">
      <a href="https://wa.me/2348061144062" target="_blank" rel="noopener noreferrer" class="icon">
        <ion-icon class="icon-s" name="logo-whatsapp"></ion-icon>
      </a>
      <a href=" https://www.tiktok.com/@eduballacademy" class="icon">
        <ion-icon class="icon-s" name="logo-tiktok"></ion-icon>
      </a>
      <a href="https://www.instagram.com/eduball_academy/" class="icon">
        <ion-icon class="icon-s" name="logo-instagram"></ion-icon>
      </a>
      <a href="http://www.youtube.com/@EduballAcademy" class="icon">
        <ion-icon class="icon-s" name="logo-youtube"></ion-icon>
      </a>
      <a href="tel:+23490110563141" class="icon">
        <ion-icon class="icon-s" name="call-outline"></ion-icon>
      </a>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      footerLinks: [
        { name: 'Home', endpoint: '/' },
        { name: 'Programs', endpoint: '/programs' },
        { name: 'Gallery', endpoint: '/gallery' },
        { name: 'Sponsors', endpoint: '/sponsors' },
        { name: 'Contact Us', endpoint: '/contact' },
        { name: 'Back to Top', endpoint: '#top' }
      ]
    }
  }
}
</script>

<style scoped>
/* Footer container */
.icon-s{
  font-size:20px;
  color:white;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:0;
  padding:0;
  background: #0f0f0f;
  color: azure;
  overflow:hidden;
  width: 100%;
  padding: 30px 20px;
  gap: 20px;
}

/* Title */
.class-one h1 {
  margin: 0;
  font-family: "Karla", sans-serif;
}

/* Grid for permalinks */
.class-two ul {
  list-style: none;
  font-family: "Cabin", sans-serif;
  padding: 0;
  margin: 0 0 0 35px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 10px 140px;
}

.class-two li a,
.class-two li router-link {
  color: azure;
  text-decoration: none;
}

.class-two li a:hover,
.class-two li router-link:hover {
  text-decoration: underline;
}

/* Social icons row */
.social-row {
  display: flex;
  gap: 18px;
  margin:0 0 0 30px;
}

.icon {
  color: white;
  font-size: 16px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #555;
  border-radius: 50%;
  overflow: hidden;   
  transition: 0.2s;
}

.icon:hover {
  background: #222;
  color: #222;
}

.icon-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Responsive behavior */
@media (max-width: 450px) {
  .container{
    padding:30px 0;
  }
  .class-two{
    width:100%;
  }
  .class-two ul{
    margin:0;
    text-align:center;
    grid-template-columns: 1fr;
    width:100%;
  }
  .social-row{
    margin:0;
    align-items: center;
  }
}
</style>