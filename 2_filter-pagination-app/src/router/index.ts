import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import HomePage from '@/pages/home.vue'

const lazyLoad = (path: string) => () => import(`@/pages/${path}.vue`)

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: '_active',

    routes: [
        {
            path: '/',
            name: 'home',
            meta: {
                layout: 'AppLayoutMain'
            },
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            meta: {
                layout: 'AppLayoutMain'
            },
            component: lazyLoad('about')
        },
    ]
})

export default router
