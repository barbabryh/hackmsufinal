import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "@/pages/LoginPage.vue";
import MainPage from "@/pages/MainPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import Schedule from "@/pages/Schedule.vue";
import Sections from "@/pages/Sections.vue";


const routes = [
    {
        path: '/',
        component: LoginPage
    },
    {
        path: '/main',
        component: MainPage
    },
    {
        path: '/sections',
        component: Sections
    },
    {
        path: '/profile',
        component: ProfilePage
    },
    {
        path: '/schedule',
        component: Schedule
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;