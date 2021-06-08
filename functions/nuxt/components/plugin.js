import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  EcFooter: () => import('../../components/EcFooter.vue' /* webpackChunkName: "components/ec-footer" */).then(c => wrapFunctional(c.default || c)),
  EcHeader: () => import('../../components/EcHeader.vue' /* webpackChunkName: "components/ec-header" */).then(c => wrapFunctional(c.default || c)),
  EcPartner: () => import('../../components/EcPartner.vue' /* webpackChunkName: "components/ec-partner" */).then(c => wrapFunctional(c.default || c)),
  EcPost: () => import('../../components/EcPost.vue' /* webpackChunkName: "components/ec-post" */).then(c => wrapFunctional(c.default || c)),
  EcPostCarousel: () => import('../../components/EcPostCarousel.vue' /* webpackChunkName: "components/ec-post-carousel" */).then(c => wrapFunctional(c.default || c)),
  EcPostImg: () => import('../../components/EcPostImg.vue' /* webpackChunkName: "components/ec-post-img" */).then(c => wrapFunctional(c.default || c)),
  EcProyect: () => import('../../components/EcProyect.vue' /* webpackChunkName: "components/ec-proyect" */).then(c => wrapFunctional(c.default || c)),
  EcProyectImg: () => import('../../components/EcProyectImg.vue' /* webpackChunkName: "components/ec-proyect-img" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
