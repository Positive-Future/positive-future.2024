import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1dc06dc0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _f1a434b6 = () => interopDefault(import('../pages/guidelines.vue' /* webpackChunkName: "pages/guidelines" */))
const _48511166 = () => interopDefault(import('../pages/partners.vue' /* webpackChunkName: "pages/partners" */))
const _766221eb = () => interopDefault(import('../pages/privacy_policy.vue' /* webpackChunkName: "pages/privacy_policy" */))

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
    path: "/de",
    component: _1dc06dc0,
    name: "index___de"
  }, {
    path: "/fr",
    component: _1dc06dc0,
    name: "index___fr"
  }, {
    path: "/guidelines",
    component: _f1a434b6,
    name: "guidelines___en"
  }, {
    path: "/id",
    component: _1dc06dc0,
    name: "index___id"
  }, {
    path: "/partners",
    component: _48511166,
    name: "partners___en"
  }, {
    path: "/privacy_policy",
    component: _766221eb,
    name: "privacy_policy___en"
  }, {
    path: "/pt",
    component: _1dc06dc0,
    name: "index___pt"
  }, {
    path: "/zh",
    component: _1dc06dc0,
    name: "index___zh"
  }, {
    path: "/de/guidelines",
    component: _f1a434b6,
    name: "guidelines___de"
  }, {
    path: "/de/partners",
    component: _48511166,
    name: "partners___de"
  }, {
    path: "/de/privacy_policy",
    component: _766221eb,
    name: "privacy_policy___de"
  }, {
    path: "/fr/guidelines",
    component: _f1a434b6,
    name: "guidelines___fr"
  }, {
    path: "/fr/partners",
    component: _48511166,
    name: "partners___fr"
  }, {
    path: "/fr/privacy_policy",
    component: _766221eb,
    name: "privacy_policy___fr"
  }, {
    path: "/id/guidelines",
    component: _f1a434b6,
    name: "guidelines___id"
  }, {
    path: "/id/partners",
    component: _48511166,
    name: "partners___id"
  }, {
    path: "/id/privacy_policy",
    component: _766221eb,
    name: "privacy_policy___id"
  }, {
    path: "/pt/guidelines",
    component: _f1a434b6,
    name: "guidelines___pt"
  }, {
    path: "/pt/partners",
    component: _48511166,
    name: "partners___pt"
  }, {
    path: "/pt/privacy_policy",
    component: _766221eb,
    name: "privacy_policy___pt"
  }, {
    path: "/zh/guidelines",
    component: _f1a434b6,
    name: "guidelines___zh"
  }, {
    path: "/zh/partners",
    component: _48511166,
    name: "partners___zh"
  }, {
    path: "/zh/privacy_policy",
    component: _766221eb,
    name: "privacy_policy___zh"
  }, {
    path: "/",
    component: _1dc06dc0,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
