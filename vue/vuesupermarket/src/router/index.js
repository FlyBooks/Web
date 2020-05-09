/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

const Profile = () => import('../views/profile/Profile.vue');
const Category = () => import('../views/category/Category.vue');
const Cart = () => import('../views/cart/Cart.vue');
const Home = () => import('../views/home/Home.vue');
const Detail = () => import('../views/detail/Detail.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Cart
  },
  {
    path: "/category",
    name: "Category",
    component: Category
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: '/detail/:id', //动态路由
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
