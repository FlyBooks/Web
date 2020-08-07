import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Recommend = () => import("../views/Recommend.vue");

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: "/",
    redirect: "/recommend",
  },
  {
    path: "/recommend",
    name: "Recommend",
    component: Recommend,
  },
  {
    path: "/singer",
    name: "Singer",
    component: () => import(/* webpackChunkName: "Singer" */"../views/Singer.vue"),
  },
  {
    path: "/rank",
    name: "Rank",
    component: () => import(/* webpackChunkName: "Rank" */"../views/Rank.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import(/* webpackChunkName: "Search" */"../views/Search.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
