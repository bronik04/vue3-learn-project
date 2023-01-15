import Main from "@/page/Main";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/page/PostPage";
import AboutPage from "@/page/AboutPage";
import PostCard from "@/components/PostCard";

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
  {
    path: '/posts/:id',
    component: PostCard,
  },

];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
});

export default router;