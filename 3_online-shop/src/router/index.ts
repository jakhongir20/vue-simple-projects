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
            path: '/product-details/:id',
            name: 'product-details',
            props: to => ({data: to.meta.data}),
            meta: {
                layout: 'AppLayoutMain'
            },
            component: lazyLoad('product-details')
        },
    ]
})

export default router
