import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1c9049b4 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _365e5c55 = () => interopDefault(import('../pages/atelier.vue' /* webpackChunkName: "pages/atelier" */))
const _21aea000 = () => interopDefault(import('../pages/proyects.vue' /* webpackChunkName: "pages/proyects" */))
const _7ab1ed0a = () => interopDefault(import('../pages/start.vue' /* webpackChunkName: "pages/start" */))
const _09e1d817 = () => interopDefault(import('../pages/posts/_id.vue' /* webpackChunkName: "pages/posts/_id" */))
const _215b1913 = () => interopDefault(import('../pages/proyect-info/_id.vue' /* webpackChunkName: "pages/proyect-info/_id" */))
const _116fb5eb = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _1c9049b4,
    name: "about"
  }, {
    path: "/atelier",
    component: _365e5c55,
    name: "atelier"
  }, {
    path: "/proyects",
    component: _21aea000,
    name: "proyects"
  }, {
    path: "/start",
    component: _7ab1ed0a,
    name: "start"
  }, {
    path: "/posts/:id?",
    component: _09e1d817,
    name: "posts-id"
  }, {
    path: "/proyect-info/:id?",
    component: _215b1913,
    name: "proyect-info-id"
  }, {
    path: "/",
    component: _116fb5eb,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
