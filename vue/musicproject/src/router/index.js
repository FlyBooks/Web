import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Recommend = () => import("../views/Recommend.vue");
const RecommendDetail = () => import("../views/RecommendDetail.vue");
const Singer = () => import("../views/Singer.vue");
const Rank = () => import(/* webpackChunkName: "Rank" */ "../views/Rank.vue");
const Search = () => import("../views/Search.vue");

const routes = [
  {
    path: "/",
    redirect: "/recommend",
  },
  {
    path: "/recommend",
    name: "Recommend",
    component: Recommend,
    children: [
      {
        path: "recommenddetail/:id/:type",
        component: RecommendDetail,
      },
    ],
  },
  {
    path: "/singer",
    name: "Singer",
    component: Singer,
  },
  {
    path: "/rank",
    name: "Rank",
    component: Rank,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
