// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Todo List App'
        }
    },
    builder: undefined,
    css: ['~/assets/styles/main.scss'],
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    }
})
