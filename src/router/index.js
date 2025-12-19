import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Programs from '../views/Programs.vue';
import Gallery from '../views/Gallery.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/programs', component: Programs },
  { path: '/gallery', component: Gallery },
  { path: '/contact', component: Contact },
];

export default createRouter({
  history: createWebHistory(),
  routes
});
