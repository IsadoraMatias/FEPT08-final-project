import { createWebHashHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue";
import Blog from "./views/Blog.vue";
import News from "./views/News.vue";
import Game from "./views/Game.vue";

const routes = [{ path: "/", name: "Home", component: Home },
    { path: "/blog", name: "Blog", component:  Blog},
    { path: "/news", name: "News", component: News },
    {path: "/game", name: "Game", component: Game}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router