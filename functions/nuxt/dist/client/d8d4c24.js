(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3,4],{203:function(t,e,n){},204:function(t,e,n){"use strict";n(203)},205:function(t,e,n){"use strict";n.r(e);var o={name:"Ecpost",props:{post:{type:Object,required:!0}},data:function(){return{}}},c=(n(204),n(18)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticStyle:{"text-decoration":"none !important",color:"inherit"},attrs:{to:"/posts/"+t.post.id}},[n("div",{staticClass:"ec-menu--card--post",style:{backgroundImage:"url("+t.post.images[0].url+")"}},[n("div",[n("h4",[t._v(t._s(t.post.shortname))]),t._v(" "),n("p",[t._v(t._s(t.post.name))])])])])}),[],!1,null,"5d11c3e4",null);e.default=component.exports},210:function(t,e,n){},215:function(t,e,n){"use strict";n(210)},218:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{test:0}},computed:{items:function(){return this.$store.state.posts},isMobile:function(){return this.$store.isMobile}},methods:{info:function(t){this.test=t}}},c=(n(215),n(18)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-carousel-list",{attrs:{data:t.items,"items-to-show":4},scopedSlots:t._u([{key:"item",fn:function(t){return[n("ec-post",{attrs:{post:t}})]}}]),model:{value:t.test,callback:function(e){t.test=e},expression:"test"}})],1)}),[],!1,null,"1c6541ac",null);e.default=component.exports;installComponents(component,{EcPost:n(205).default})},223:function(t,e,n){},232:function(t,e,n){"use strict";n(223)},239:function(t,e,n){"use strict";n.r(e);var o={name:"HomePage",components:{EcPostCarousel:n(218).default}},c=(n(232),n(18)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("section",{staticClass:"ec-main"},[n("div",{staticClass:"section__img section__img--renders"},[n("div",{staticClass:"section__ref"},[n("p",{staticClass:"section__ref--desc"},[t._v("\n          Visualizacion Arquitectónica\n        ")]),t._v(" "),n("h1",[t._v("\n          RENDERS\n        ")]),t._v(" "),n("div",{staticClass:"div-botton"},[n("nuxt-link",{staticClass:"section__ref--button",staticStyle:{"text-decoration":"none !important",color:"inherit"},attrs:{to:"/proyects"}},[n("p",[t._v("Conocé nuestros proyectos")])])],1)])])]),t._v(" "),n("section",[n("div",{staticClass:"section__desc"},[n("p",[n("b-icon",{attrs:{icon:"tooltip-image-outline",size:"is-large"}})],1),t._v(" "),n("p",{staticClass:"section__desc--tittle"},[t._v("\n        Necesitás mostrar tu proyecto?\n      ")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"section__desc--button"},[n("router-link",{staticStyle:{"text-decoration":"none !important",color:"inherit"},attrs:{to:"/start"}},[n("b-button",{staticClass:"is-medium"},[t._v("\n            Cómo empezar?\n          ")])],1)],1)])]),t._v(" "),n("section",{staticClass:"ec-main"},[n("div",{staticClass:"section__img section__img--proyecto"},[n("div",{staticClass:"section__ref"},[n("p",{staticClass:"section__ref--desc"},[t._v("\n          Diseño Arquitectónico\n        ")]),t._v(" "),n("h2",[t._v("\n          PROYECTO\n        ")]),t._v(" "),n("div",{staticClass:"div-botton"},[n("nuxt-link",{staticClass:"section__ref--button",staticStyle:{"text-decoration":"none !important",color:"inherit"},attrs:{to:"/proyects"}},[n("p",[t._v("Conocé nuestros proyectos")])])],1)])])]),t._v(" "),n("section",[n("div",{staticClass:"section__desc"},[n("p",[n("b-icon",{attrs:{icon:"lightbulb-on-outline",size:"is-large"}})],1),t._v(" "),n("p",{staticClass:"section__desc--tittle"},[t._v("\n        Necesitás un proyecto?\n      ")]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"section__desc--button"},[n("router-link",{staticStyle:{"text-decoration":"none !important",color:"inherit"},attrs:{to:"/start"}},[n("b-button",{staticClass:"is-medium"},[t._v("\n            Cómo empezar?\n          ")])],1)],1)])]),t._v(" "),n("section",[n("div",{staticClass:"section__desc--atelier"},[n("p",[n("b-icon",{attrs:{icon:"puzzle-edit",size:"is-large"}})],1),t._v(" "),n("p",{staticClass:"section__desc--tittle"},[t._v("\n        Atelier\n      ")]),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"section__desc--button"},[n("router-link",{staticStyle:{"text-decoration":"none !important",color:"inherit"},attrs:{to:"/atelier"}},[n("b-button",{staticClass:"is-medium"},[t._v("\n            Qué está pasando?\n          ")])],1)],1),t._v(" "),n("div",{staticClass:"container ec--carousel-atelier"},[n("ec-post-carousel")],1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"section__desc--p"},[t._v("\n        Te ayudamos con el "),n("i",[t._v("modelo 3D")]),t._v(" para que puedas acompañar tu entrega con "),n("i",[t._v("imágenes fotorrealistas")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"section__desc--p"},[t._v("\n        Te acompañamos en el proceso de diseño para darle forma y "),n("i",[t._v("materializar tus ideas")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"section__desc--p"},[t._v("\n        Un "),n("i",[t._v("espacio de taller")]),t._v(" donde compartimos "),n("i",[t._v("métodos, ideas y ejercicios")]),t._v(" que surgen en la cotidianeidad del estudio\n      ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{EcPostCarousel:n(218).default})}}]);