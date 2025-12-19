<template>
  <div class="app-container">
<NavBar />
  <router-view class="content"/>
  <Footer/>
  </div>
  
</template>

<script>
import NavBar from '@/assets/components/NavBar.vue';
import Footer from '@/assets/components/Footer.vue';
import './assets/styles/main.css'
export default {
  components: { NavBar,Footer }
};
</script>
<style scoped>
  .app-container{
    min-height:100vh;
    display:flex;
    flex-direction:column;
  }
  .content{
    flex:1;
  }
</style>
