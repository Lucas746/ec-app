import { wrapFunctional } from './utils'

export { default as EcFooter } from '../../components/EcFooter.vue'
export { default as EcHeader } from '../../components/EcHeader.vue'
export { default as EcPartner } from '../../components/EcPartner.vue'
export { default as EcPost } from '../../components/EcPost.vue'
export { default as EcPostCarousel } from '../../components/EcPostCarousel.vue'
export { default as EcPostImg } from '../../components/EcPostImg.vue'
export { default as EcProyect } from '../../components/EcProyect.vue'
export { default as EcProyectImg } from '../../components/EcProyectImg.vue'

export const LazyEcFooter = import('../../components/EcFooter.vue' /* webpackChunkName: "components/ec-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyEcHeader = import('../../components/EcHeader.vue' /* webpackChunkName: "components/ec-header" */).then(c => wrapFunctional(c.default || c))
export const LazyEcPartner = import('../../components/EcPartner.vue' /* webpackChunkName: "components/ec-partner" */).then(c => wrapFunctional(c.default || c))
export const LazyEcPost = import('../../components/EcPost.vue' /* webpackChunkName: "components/ec-post" */).then(c => wrapFunctional(c.default || c))
export const LazyEcPostCarousel = import('../../components/EcPostCarousel.vue' /* webpackChunkName: "components/ec-post-carousel" */).then(c => wrapFunctional(c.default || c))
export const LazyEcPostImg = import('../../components/EcPostImg.vue' /* webpackChunkName: "components/ec-post-img" */).then(c => wrapFunctional(c.default || c))
export const LazyEcProyect = import('../../components/EcProyect.vue' /* webpackChunkName: "components/ec-proyect" */).then(c => wrapFunctional(c.default || c))
export const LazyEcProyectImg = import('../../components/EcProyectImg.vue' /* webpackChunkName: "components/ec-proyect-img" */).then(c => wrapFunctional(c.default || c))
