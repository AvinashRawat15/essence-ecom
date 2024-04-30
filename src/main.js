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
