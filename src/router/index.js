import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import DataView from "@/views/DataView.vue";
import ChartsView from "@/views/ChartsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/data',
            name: 'data',
            component: DataView
        },
        {
            path: '/charts',
            name: 'charts',
            component: ChartsView
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView
        },
    ]
})

export default router;