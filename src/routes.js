import { createWebHashHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue";
import BlogPage from "./views/BlogPage.vue";
import NewsPage from "./views/NewsPage.vue";
import GamePage from "./views/GamePage.vue";

const routes = [
    { path: "/", redirect: "/home" },
    { path: "/home", name: "Home", component: Home },
    { path: "/blog", name: "BlogPage", component: BlogPage },
    { path: "/news", name: "NewsPage", component: NewsPage },
    { path: "/game", name: "GamePage", component: GamePage },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router