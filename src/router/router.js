import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "@/pages/LoginPage.vue";
import MainPage from "@/pages/MainPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import LoadingPage from "@/pages/LoadingPage.vue";


const routes = [
    {
        path: '/l',
        component: LoginPage
    },
    {
        path: '/main',
        component: MainPage
    },

    {
        path: '/profile',
        component: ProfilePage
    },
    {
        path: '/',
        component: LoadingPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;