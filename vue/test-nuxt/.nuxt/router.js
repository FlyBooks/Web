import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _acea46a4 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _2e82420d = () => interopDefault(import('..\\pages\\asyncData.vue' /* webpackChunkName: "pages_asyncData" */))
const _07c50dbb = () => interopDefault(import('..\\pages\\haha.vue' /* webpackChunkName: "pages_haha" */))
const _71437b3e = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages_inspire" */))
const _1a7714a6 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages_news_index" */))
const _ec27cc66 = () => interopDefault(import('..\\pages\\vcard.vue' /* webpackChunkName: "pages_vcard" */))
const _a423eee4 = () => interopDefault(import('..\\pages\\news\\_id.vue' /* webpackChunkName: "pages_news__id" */))
const _02bcec19 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _acea46a4,
    name: "about"
  }, {
    path: "/asyncData",
    component: _2e82420d,
    name: "asyncData"
  }, {
    path: "/haha",
    component: _07c50dbb,
    name: "haha"
  }, {
    path: "/inspire",
    component: _71437b3e,
    name: "inspire"
  }, {
    path: "/news",
    component: _1a7714a6,
    name: "news"
  }, {
    path: "/vcard",
    component: _ec27cc66,
    name: "vcard"
  }, {
    path: "/news/:id",
    component: _a423eee4,
    name: "news-id"
  }, {
    path: "/",
    component: _02bcec19,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
