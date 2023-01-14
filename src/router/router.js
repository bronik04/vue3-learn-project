import Main from "@/page/Main";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/page/PostPage";
import AboutPage from "@/page/AboutPage";

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostPage,
  },
  {
    path: '/about',
    component: AboutPage,
  },

];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
});

export default router;