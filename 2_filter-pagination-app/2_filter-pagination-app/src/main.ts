import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// @ts-ignore
import AppLayout from "./layouts/AppLayout.vue";


import './styles/app.css';

const app = createApp(App);

app.use(createPinia())
app.use(router)
app.component('AppLayout', AppLayout)

app.mount('#app')
