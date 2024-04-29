/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import router from '../src/router/index'
 
// Composables
import { createApp } from 'vue'
import { createPinia } from 'pinia';
const pinia = createPinia();
const app = createApp(App).use(router).use(pinia);

registerPlugins(app)

app.mount('#app')

// import { createApp } from 'vue';
// import { createRouter, createWebHistory } from 'vue-router';

// import App from './App.vue';
// import AboutView from './components/AboutView.vue';

// // Define routes
// const routes = [
//   { path: '/about', component: AboutView },
//   // other routes...
// ];

// // Create router instance
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// // Create and mount the Vue instance
// const app = createApp(App);
// app.use(router);
// app.mount('#app');