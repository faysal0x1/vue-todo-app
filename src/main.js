

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Custom Css
 import './assets/sass/style.scss'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')


// Import Js from bootstrap

import * as bootstrap from 'bootstrap'
