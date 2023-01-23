import {createApp, onMounted} from 'vue'
import { createPinia } from 'pinia'
// @ts-ignore
import $ from 'jquery';
import App from './App.vue'
import router from './router'
import axios from "axios";
import vue3StarRatings from "vue3-star-ratings";


import AppLayout from "./layouts/AppLayout.vue";
// @ts-ignore
window.$ = window.jQuery = $;


// Import Swiper styles
import 'swiper/css';
import "swiper/swiper-bundle.min.css";

import '@/styles/libs/animate.css';
import '@/styles/app.css';

const app = createApp(App);

axios.defaults.baseURL = 'http://localhost:5000';

app.use(createPinia())
app.use(router)
app.component('AppLayout', AppLayout)
app.component("vue3-star-ratings", vue3StarRatings);

app.mount('#app')
