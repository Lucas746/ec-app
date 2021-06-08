module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/ec-partner","2":"components/ec-post","3":"components/ec-post-carousel","4":"components/ec-post-img","5":"components/ec-proyect","6":"components/ec-proyect-img","7":"pages/about","8":"pages/atelier","9":"pages/index","10":"pages/posts/_id","11":"pages/proyect-info/_id","12":"pages/proyects","13":"pages/start"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-ec.0b0535a.png";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 14 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"0\",\"shortname\":\"CCCUNLP\",\"name\":\"Centro Cultural de Convenciones Universidad Nacional de La Plata\",\"author\":\"Estudio Clio\",\"year\":\"2016\",\"description\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate excepturi corporis, minima veritatis reprehenderit laudantium veniam saepe quod magni aperiam possimus harum. Tenetur odit, saepe illo dolor natus in?\",\"map\":\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5494.9413341543195!2d-57.94768001211267!3d-34.90623227183012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sar!4v1622265879242!5m2!1ses-419!2sar\",\"logo\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fetiq_cccunlp.png?alt=media&token=b863dc03-de43-42fb-b632-1275da3bb2d5\",\"images\":[{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_001.jpg?alt=media&token=14828aa7-1d29-4752-b134-caf370efc619\",\"id\":\"0\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_002.jpg?alt=media&token=a788b26f-9434-4892-b3ca-363f8febe4c3\",\"id\":\"1\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_003.jpg?alt=media&token=a44c83f5-818a-4bb3-9bb9-7c28d9452e21\",\"id\":\"2\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_004.jpg?alt=media&token=c482f258-a97c-4e18-a617-4e3712cd9001\",\"id\":\"3\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_005.jpg?alt=media&token=1645b7f8-722c-4fa8-ba3f-43a19eb74b6b\",\"id\":\"4\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_006.jpg?alt=media&token=cb087b0c-094a-4dc9-b730-f08c041c9048\",\"id\":\"5\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_007.jpg?alt=media&token=12cd1975-12d2-4a2e-aba2-2a8592ee152d\",\"id\":\"6\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_008.jpg?alt=media&token=0aeb7e94-dd1c-4dfd-adae-7a4a21f0b21e\",\"id\":\"7\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_009.jpg?alt=media&token=a1514345-5685-44d3-916a-119353b56bb7\",\"id\":\"8\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_010.jpg?alt=media&token=9a124203-e9dc-4b82-9fc1-0e9876a54c53\",\"id\":\"9\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_011.jpg?alt=media&token=c38dfff6-93b1-4677-b3c6-16aa3941cc74\",\"id\":\"10\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_012.jpg?alt=media&token=c281cb63-cc1e-4ecc-be1f-0b1400ce3cd9\",\"id\":\"11\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_013.jpg?alt=media&token=08b26ed8-b8fa-4848-969a-0ec32fa21a57\",\"id\":\"12\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_014.jpg?alt=media&token=1901c217-9688-4d70-96df-ad46709d1507\",\"id\":\"13\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_015.jpg?alt=media&token=6a5bdea3-73a4-4dc6-9950-68b965dad8c7\",\"id\":\"14\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_016.jpg?alt=media&token=2ffc8950-8290-40a4-ba51-293941642dcb\",\"id\":\"15\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_017.jpg?alt=media&token=8b00fca7-dbbc-4def-9841-decd6cca4aec\",\"id\":\"16\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_018.jpg?alt=media&token=fbd57fb5-9b1a-4540-9f71-ba64c0fc49cf\",\"id\":\"17\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_019.jpg?alt=media&token=2089792c-250d-465c-beb6-331126466b1a\",\"id\":\"18\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_020.jpg?alt=media&token=90bd9650-d5fb-489f-9b79-fed1ae4aa7f6\",\"id\":\"19\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_021.jpg?alt=media&token=2f152a79-1d3d-49b2-83c8-799adb2fd101\",\"id\":\"20\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_022.jpg?alt=media&token=bdff2842-9290-48c6-a7a5-fcc168cef7e9\",\"id\":\"21\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_023.jpg?alt=media&token=8d1d118b-e88d-4ec5-aa05-673fbeed802a\",\"id\":\"22\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_024.jpg?alt=media&token=8a469b7e-2434-4fee-8b64-3e5556694a4d\",\"id\":\"23\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_025.jpg?alt=media&token=289816bb-4a7b-410e-a40b-6370c09c2988\",\"id\":\"24\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_026.jpg?alt=media&token=a48f60ec-f798-4fec-aff4-4a0e91429a23\",\"id\":\"25\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_027.jpg?alt=media&token=73be54e4-3c2b-49f3-9b0e-522158b87c46\",\"id\":\"26\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_028.jpg?alt=media&token=83859b5e-076e-45fe-bd83-44df2821523b\",\"id\":\"27\"}],\"planes\":[{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_planes_001.jpg?alt=media&token=e21d53cc-ab14-4461-85e2-c37a9a5e1887\",\"id\":\"0\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_planes_002.jpg?alt=media&token=94a4e7f6-bee1-48c9-ba35-1fa336aeb098\",\"id\":\"1\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_planes_003.jpg?alt=media&token=221341a4-9183-4075-9529-9c7800ea40db\",\"id\":\"2\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_planes_004.jpg?alt=media&token=8cf5ae0c-8b64-4727-8619-c35744160546\",\"id\":\"3\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_planes_005.jpg?alt=media&token=0dc21455-23b0-4e37-937d-62a4c14ece95\",\"id\":\"4\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_planes_006.jpg?alt=media&token=037df750-d1e6-48d1-873e-fe9e4183ecd5\",\"id\":\"5\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_planes_007.jpg?alt=media&token=5869f1f2-492e-4a15-970b-d66ba59223f0\",\"id\":\"6\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_planes_008.jpg?alt=media&token=af2ac8ce-0abf-497e-996f-4b2ec437e381\",\"id\":\"7\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_planes_009.jpg?alt=media&token=0c288742-81a3-41ca-bf45-ed617aedbd35\",\"id\":\"8\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_planes_010.jpg?alt=media&token=0a4d737e-5d3d-4467-8d9f-5e4db7a02dae\",\"id\":\"9\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_planes_011.jpg?alt=media&token=37949d15-ef48-4968-a1bc-a2823d90049c\",\"id\":\"10\"}]},{\"id\":\"1\",\"shortname\":\"HOME\",\"name\":\"House Of Multiple Enviroment\",\"author\":\"Estudio Clio ft. Agusvill\",\"year\":\"2020\",\"description\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate excepturi corporis, minima veritatis reprehenderit laudantium veniam saepe quod magni aperiam possimus harum. Tenetur odit, saepe illo dolor natus in?\",\"map\":\"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7185.872203991993!2d-72.34328550003053!3d-40.68211186955593!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sar!4v1622266002528!5m2!1ses-419!2sar\",\"logo\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fetiq_home.png?alt=media&token=644fc1f6-9ab9-416c-bcab-ecd21a403f2b\",\"images\":[{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_001.jpg?alt=media&token=82060fee-fc44-4259-92bc-d8814806a0ee\",\"id\":\"0\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_002.jpg?alt=media&token=bca48c19-e5ec-44e2-9dc5-8ce0f47bfdeb\",\"id\":\"1\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_003.jpg?alt=media&token=957471c2-abae-4597-98b8-e861407c7f83\",\"id\":\"2\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_004.jpg?alt=media&token=54275886-a584-4008-926c-00fe035b45e4\",\"id\":\"3\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_005.jpg?alt=media&token=33c1eb89-f668-4209-baf0-37fc23881c71\",\"id\":\"4\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_006.jpg?alt=media&token=63a2afa8-af9d-44e2-8817-32151c1e34ba\",\"id\":\"5\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_007.jpg?alt=media&token=d5531702-29f4-4457-8c8c-ca2c90a20e17\",\"id\":\"6\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_008.jpg?alt=media&token=c29f6b55-f05e-40d6-8694-24b531a7b856\",\"id\":\"7\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_009.jpg?alt=media&token=6775b01f-6c4e-4fd3-ab2a-222798edc8d9\",\"id\":\"8\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_010.jpg?alt=media&token=814b25a6-2117-439a-8299-051345a43b0a\",\"id\":\"9\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_011.jpg?alt=media&token=9e7db4a7-3836-4cfa-a8db-9c9a9535d030\",\"id\":\"10\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_012.jpg?alt=media&token=7cf062fe-0a4e-4612-bd0d-b2dbdce3c6aa\",\"id\":\"11\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_013.jpg?alt=media&token=5c3a45ae-5fc9-4e86-be76-195207ca6f8f\",\"id\":\"12\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_014.jpg?alt=media&token=3e9f5349-7d38-498d-add6-d57afe0f79ac\",\"id\":\"13\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_015.jpg?alt=media&token=5b507b8a-422c-415f-880f-d36e07eb9b07\",\"id\":\"14\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_016.jpg?alt=media&token=494bd5bb-6f81-4397-820e-e5afbf3a9924\",\"id\":\"15\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_017.jpg?alt=media&token=7cd0d8bf-29f4-44b7-9b2a-6be31f6245c2\",\"id\":\"16\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_018.jpg?alt=media&token=0fa25a08-df79-45fa-9a78-41a489a73c78\",\"id\":\"17\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_019.jpg?alt=media&token=ccd85cd6-0097-4354-a9d0-dfb7b73c8418\",\"id\":\"18\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_020.jpg?alt=media&token=83f38f03-8354-4646-9c2e-7085f3ef4b8e\",\"id\":\"19\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_021.jpg?alt=media&token=c1138630-a418-425c-9ff1-d4e73c5ce865\",\"id\":\"20\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_022.jpg?alt=media&token=6514e1e3-37cc-4712-a11c-918ef669b50b\",\"id\":\"21\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_023.jpg?alt=media&token=c3e4a035-3f7e-43af-9d8d-e1872bbff3a7\",\"id\":\"22\"}]},{\"id\":\"2\",\"shortname\":\"CAUCE\",\"name\":\"CAUCE Ex Molino Río de la Plata\",\"author\":\"Arq. MIRET HERRERA Carla\",\"year\":\"2020\",\"description\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate excepturi corporis, minima veritatis reprehenderit laudantium veniam saepe quod magni aperiam possimus harum. Tenetur odit, saepe illo dolor natus in?\",\"map\":\"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4043.377513752754!2d-64.1744680833356!3d-31.415517820702075!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sar!4v1622266155681!5m2!1ses-419!2sar\",\"logo\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fetiq_cauce.png?alt=media&token=1feaec04-61ca-45db-baf3-2530ded6203d\",\"images\":[{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_001.jpg?alt=media&token=5156ea89-fe41-4727-8fa7-f17b1eb3cd6d\",\"id\":\"0\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_002.jpg?alt=media&token=e6bb0aa8-c2a3-41b0-b5d1-ca0bdb6cac6c\",\"id\":\"1\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_003.jpg?alt=media&token=11000b54-8e39-4eae-821a-63b162d27936\",\"id\":\"2\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_004.jpg?alt=media&token=f76c3248-fe32-4edd-86f4-18dfe3f5a586\",\"id\":\"3\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_005.jpg?alt=media&token=edc2f1b3-9d3c-415d-bd6a-4c623bed315a\",\"id\":\"4\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_006.jpg?alt=media&token=30ecb1ed-534b-4e6f-976d-99d27554897d\",\"id\":\"5\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_007.jpg?alt=media&token=e011b7ef-878e-482f-9ded-86c1d1402f72\",\"id\":\"6\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_008.jpg?alt=media&token=7ee3d79d-e3a2-4d79-8229-cd0189cb265d\",\"id\":\"7\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_009.jpg?alt=media&token=27e9ab3b-8840-44f2-8cfd-3c5605480fac\",\"id\":\"8\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_010.jpg?alt=media&token=38ee683f-300d-4137-8f77-2e3c6801deb3\",\"id\":\"9\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_011.jpg?alt=media&token=d0413c78-ea61-4346-a26f-10ebd9a56717\",\"id\":\"10\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_012.jpg?alt=media&token=871a8509-eec8-484a-98db-f00d94557c10\",\"id\":\"11\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_013.jpg?alt=media&token=a3fd0401-98bd-418d-9aa6-87da33937b4c\",\"id\":\"12\"}]},{\"id\":\"3\",\"shortname\":\"TANGO\",\"name\":\"Casa Tango\",\"author\":\"Estudio Clio\",\"year\":\"2021\",\"description\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate excepturi corporis, minima veritatis reprehenderit laudantium veniam saepe quod magni aperiam possimus harum. Tenetur odit, saepe illo dolor natus in?\",\"map\":\"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d21926.113302187783!2d-58.07854022882101!3d-35.106167311082146!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sar!4v1622266228638!5m2!1ses-419!2sar\",\"logo\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Fetiq_tango.png?alt=media&token=fac29e58-43f4-44c7-a6bc-b6c712fc7702\",\"images\":[{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_001.jpg?alt=media&token=28089e88-476c-4ae8-85ae-10c8bbf5d60f\",\"id\":\"0\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_002.jpg?alt=media&token=8f97759b-9620-4315-9af8-940fa793893f\",\"id\":\"1\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_003.jpg?alt=media&token=34279eac-5dd1-4884-a1b6-20ff760a890b\",\"id\":\"2\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_004.jpg?alt=media&token=9b424d41-b1f2-4e7d-9366-cf79d709b4f1\",\"id\":\"3\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_005.jpg?alt=media&token=9d31f929-4c5e-4ebf-989d-f02a7ca3bbc6\",\"id\":\"4\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_006.jpg?alt=media&token=7e6fd080-1989-4097-a185-0fc9cc670b5c\",\"id\":\"5\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_007.jpg?alt=media&token=31f3e755-020e-4ad7-963b-a0e4a19a19b4\",\"id\":\"6\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_008.jpg?alt=media&token=0e6aca02-d511-4b20-8c22-3be496e5403b\",\"id\":\"7\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_009.jpg?alt=media&token=2f9dbfc0-a64d-4e99-bf8d-10244a24c888\",\"id\":\"8\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_010.jpg?alt=media&token=a6a239ab-c175-48a1-9aa9-c022804b679e\",\"id\":\"9\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_011.jpg?alt=media&token=e087af7d-b945-4095-8427-2c25cbca1898\",\"id\":\"10\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_012.jpg?alt=media&token=08a955a2-12a1-47bd-8f84-ba5ff7b52660\",\"id\":\"11\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_013.jpg?alt=media&token=46e93a56-39bb-41e6-809e-72b0bc1aa4e9\",\"id\":\"12\"}]}]");

/***/ }),
/* 15 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"0\",\"isecpostcard\":false,\"shortname\":\"ACAPULCO\",\"name\":\"Silla Acapulco\",\"author\":\"Estudio Clio\",\"year\":\"2014\",\"description\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate excepturi corporis, minima veritatis reprehenderit laudantium veniam saepe quod magni aperiam possimus harum. Tenetur odit, saepe illo dolor natus in?\",\"logo\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Facapulco%2Fetiq_acapulco.png?alt=media&token=ca457dd5-9dde-430d-b510-f65ae5eef927\",\"images\":[{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Facapulco%2Facapulco_002.jpg?alt=media&token=60f93967-7f3b-491c-8725-990df5e6a075\",\"id\":\"0\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Facapulco%2Facapulco_001.jpg?alt=media&token=42a5218d-220e-4cb1-ba53-850e3bece45e\",\"id\":\"1\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Facapulco%2Facapulco_003.jpg?alt=media&token=58ba8214-73df-4ea5-99a5-48219364a3ab\",\"id\":\"2\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Facapulco%2Facapulco_004.png?alt=media&token=afa8140f-4f67-4c72-91b1-2af4f76dc3ad\",\"id\":\"3\"}]},{\"id\":\"1\",\"isecpostcard\":true,\"shortname\":\"4-3-2\",\"name\":\"Ejercicio proyectual de jerarquía espacial\",\"author\":\"Estudio Clio ft. Agusvill\",\"year\":\"2020\",\"description\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate excepturi corporis, minima veritatis reprehenderit laudantium veniam saepe quod magni aperiam possimus harum. Tenetur odit, saepe illo dolor natus in?\",\"images\":[{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_001.jpg?alt=media&token=d39a6c14-f027-4fa7-ab4c-046ba99580ac\",\"id\":\"0\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_002.jpg?alt=media&token=f1d863e7-9389-4006-8665-3957263a7f02\",\"id\":\"1\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_003.jpg?alt=media&token=ef68fd40-269f-4c33-90ce-9c273d2ebd20\",\"id\":\"2\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_004.jpg?alt=media&token=4ec8b7e8-929d-4b84-be70-b99eec374af5\",\"id\":\"3\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_005.jpg?alt=media&token=87a8fff2-bee6-4f73-bb2f-954948dc92bd\",\"id\":\"4\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_006.jpg?alt=media&token=34c90003-8593-47a7-b233-4cd6802acb15\",\"id\":\"5\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_007.jpg?alt=media&token=c16e30e0-bec5-4c15-9c8f-1fb1605cee68\",\"id\":\"6\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_008.jpg?alt=media&token=ea55eea9-b0a2-4d35-b0c6-8fe3787f8447\",\"id\":\"7\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_009.jpg?alt=media&token=a13e5286-3522-4f74-8c23-cae0064b7fc0\",\"id\":\"8\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_010.jpg?alt=media&token=b8d1ffe5-76a6-4459-aa55-3a4b2f00d444\",\"id\":\"9\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_011.jpg?alt=media&token=6f154d4b-4daf-4674-bd96-ac810bf0bad2\",\"id\":\"10\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_012.jpg?alt=media&token=cbc6d224-2b90-463f-ba7a-3dbe38d7cd6e\",\"id\":\"11\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_013.jpg?alt=media&token=3c02ffc6-2e25-44df-9249-9bb9d7bd0235\",\"id\":\"12\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_014.jpg?alt=media&token=214e91df-9189-4d94-892d-f96307d25928\",\"id\":\"13\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_015.jpg?alt=media&token=6585d0b9-d654-449c-8dfb-5a0b8192b2fb\",\"id\":\"14\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_016.jpg?alt=media&token=763f4e75-271d-492e-8899-77c5707a5c8e\",\"id\":\"15\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_017.jpg?alt=media&token=0e23024e-ccdf-46dc-8ece-cb1f74d74ad0\",\"id\":\"16\"}]},{\"id\":\"2\",\"isecpostcard\":false,\"shortname\":\"May The 4th\",\"name\":\"May the 4th be with you\",\"author\":\"Estudio Clio\",\"year\":\"2021\",\"description\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate excepturi corporis, minima veritatis reprehenderit laudantium veniam saepe quod magni aperiam possimus harum. Tenetur odit, saepe illo dolor natus in?\",\"images\":[{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fmay-the-4%2Fmay-the-4_001.jpg?alt=media&token=0a7ca5cb-585d-407c-a351-5be45dce3731\",\"id\":\"0\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fmay-the-4%2Fmay-the-4_002.jpg?alt=media&token=413d4bfe-83e9-4814-ba4e-a0beca535a9d\",\"id\":\"1\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fmay-the-4%2Fmay-the-4_003.jpg?alt=media&token=97719163-c4c3-453f-9130-e592fce995c6\",\"id\":\"2\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fmay-the-4%2Fmay-the-4_004.jpg?alt=media&token=883aec47-c7cc-440b-998f-3c0b7263134e\",\"id\":\"3\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fmay-the-4%2Fmay-the-4_005.jpg?alt=media&token=e88f9731-417b-4122-92dc-11fb193ab37a\",\"id\":\"4\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fmay-the-4%2Fmay-the-4_006.jpg?alt=media&token=13b7cea3-df6c-42be-8fa2-5fd430a6bc4c\",\"id\":\"5\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fmay-the-4%2Fmay-the-4_007.jpg?alt=media&token=e33cbc32-4943-4aec-8d65-59e780934ae2\",\"id\":\"6\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fmay-the-4%2Fmay-the-4_008.jpg?alt=media&token=a62b9afc-5684-4fde-b2e5-3565c2ac68e3\",\"id\":\"7\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fmay-the-4%2Fmay-the-4_009.jpg?alt=media&token=d3326977-f46d-4f1b-8fc0-ed5da04f16d1\",\"id\":\"8\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fmay-the-4%2Fmay-the-4_010.jpg?alt=media&token=ccf16ce4-893e-45da-a550-291ef0d840cf\",\"id\":\"9\"}]},{\"id\":\"3\",\"isecpostcard\":true,\"shortname\":\"RENDER MAQUETA\",\"name\":\"Cómo y por qué hacer un render maqueta\",\"author\":\"Estudio Clio\",\"year\":\"2020\",\"description\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate excepturi corporis, minima veritatis reprehenderit laudantium veniam saepe quod magni aperiam possimus harum. Tenetur odit, saepe illo dolor natus in?\",\"images\":[{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_001.jpg?alt=media&token=58fa28d5-694c-43bc-b451-61af26833884\",\"id\":\"0\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_002.jpg?alt=media&token=9f0004c4-7d7d-41b2-962f-00c66d7e4f22\",\"id\":\"1\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_003.jpg?alt=media&token=5c4909bd-766f-4232-ae03-448812e56226\",\"id\":\"2\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_004.jpg?alt=media&token=f2a5c520-7786-412f-b133-9fcf1e0379e4\",\"id\":\"3\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_005.jpg?alt=media&token=1abe7d22-b3fc-4077-98ab-62823b487858\",\"id\":\"4\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_006.jpg?alt=media&token=fae2831c-3c09-4738-98e8-f18e7aabf828\",\"id\":\"5\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_007.jpg?alt=media&token=1a464585-94a1-4650-99c3-f1d5a3a9daae\",\"id\":\"6\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_008.jpg?alt=media&token=4ffc9ad4-3d10-42c1-b705-145e844242dd\",\"id\":\"7\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_009.jpg?alt=media&token=87514827-4ea3-4b98-949e-047617ecb813\",\"id\":\"8\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_010.jpg?alt=media&token=2541346f-bd48-4b96-8a75-f09174a5589d\",\"id\":\"9\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_011.jpg?alt=media&token=d0cdbd4d-d8f3-4710-99b6-8bcd57112ad6\",\"id\":\"10\"}]},{\"id\":\"4\",\"isecpostcard\":false,\"shortname\":\"BEHRENS\",\"name\":\"Escritorio Nehrens\",\"author\":\"Estudio Clio\",\"year\":\"2017\",\"description\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate excepturi corporis, minima veritatis reprehenderit laudantium veniam saepe quod magni aperiam possimus harum. Tenetur odit, saepe illo dolor natus in?\",\"logo\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fbehrens%2Fetiq_behrens.png?alt=media&token=44114ccb-ae75-4d51-9d66-0384c5603305\",\"images\":[{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fbehrens%2Fbehrens_001.jpg?alt=media&token=19c4399f-ffcf-4e87-9a17-30a22def05f4\",\"id\":\"0\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fbehrens%2Fbehrens_002.jpg?alt=media&token=5bbfcad2-60c5-4e6b-813d-dcbdd174f1a9\",\"id\":\"1\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fbehrens%2Fbehrens_003.png?alt=media&token=ef7e69aa-fe14-45ca-98c9-56f1527fce51\",\"id\":\"2\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fbehrens%2Fbehrens_004.png?alt=media&token=7a3d1a22-677a-4413-8820-2899674b4479\",\"id\":\"3\"}]},{\"id\":\"5\",\"isecpostcard\":false,\"shortname\":\"KOLLONTAI\",\"name\":\"Mesa Kollontai\",\"author\":\"Estudio Clio\",\"year\":\"2020\",\"description\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate excepturi corporis, minima veritatis reprehenderit laudantium veniam saepe quod magni aperiam possimus harum. Tenetur odit, saepe illo dolor natus in?\",\"logo\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fkollontai%2Fetiq_kollontai.png?alt=media&token=13850f47-a769-42b4-92ca-047b32888a78\",\"images\":[{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fkollontai%2Fkollontai_001.png?alt=media&token=60706443-a9cb-46ba-8cf0-5028011b4e9d\",\"id\":\"0\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fkollontai%2Fkollontai_002.png?alt=media&token=a1d17e55-e330-4d7f-9b32-4e3d09fb952d\",\"id\":\"1\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fkollontai%2Fkollontai_003.png?alt=media&token=1f65cb6f-1509-4813-9064-3e853da46368\",\"id\":\"2\"}]}]");

/***/ }),
/* 16 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"0\",\"name\":\"Agustin Villarruel\",\"profession\":\"Designer\",\"image\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/partners%2Fagustin.jpg?alt=media&token=19a57d47-5dfa-48a9-9897-9b2896eb2884\",\"socialmedia\":{\"url\":\"\",\"nick\":\"@agusvill\"}},{\"id\":\"1\",\"name\":\"Mariquena Betcher\",\"profession\":\"Architect student\",\"image\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/partners%2Fmariquena.jpg?alt=media&token=875cf803-cb0b-4a07-adee-4dc0efc86090\",\"socialmedia\":{\"url\":\"\",\"nick\":\"@mariquenabetcher\"}},{\"id\":\"2\",\"name\":\"Lucas Islas\",\"profession\":\"Architect student\",\"image\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/partners%2Fislas.jpg?alt=media&token=f1d3d1b9-c7d3-4fc8-850d-5a0275a5b10d\",\"socialmedia\":{\"url\":\"\",\"nick\":\"@lucasislas\"}}]");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("buefy");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
module.exports = __webpack_require__(27);


/***/ }),
/* 19 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcFooter_vue_vue_type_style_index_0_id_18b3ea1b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcFooter_vue_vue_type_style_index_0_id_18b3ea1b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcFooter_vue_vue_type_style_index_0_id_18b3ea1b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcFooter_vue_vue_type_style_index_0_id_18b3ea1b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcFooter_vue_vue_type_style_index_0_id_18b3ea1b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony import */ var _proyects_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
var _proyects_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(14, 1);
/* harmony import */ var _posts_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
var _posts_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(15, 1);
/* harmony import */ var _partners_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
var _partners_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(16, 1);



const state = () => ({
  proyects: _proyects_json__WEBPACK_IMPORTED_MODULE_0__,
  posts: _posts_json__WEBPACK_IMPORTED_MODULE_1__,
  partners: _partners_json__WEBPACK_IMPORTED_MODULE_2__
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(12);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(13);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(5);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(4);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(6);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _1c9049b4 = () => interopDefault(__webpack_require__.e(/* import() | pages/about */ 7).then(__webpack_require__.bind(null, 60)));

const _365e5c55 = () => interopDefault(__webpack_require__.e(/* import() | pages/atelier */ 8).then(__webpack_require__.bind(null, 61)));

const _21aea000 = () => interopDefault(__webpack_require__.e(/* import() | pages/proyects */ 12).then(__webpack_require__.bind(null, 62)));

const _7ab1ed0a = () => interopDefault(__webpack_require__.e(/* import() | pages/start */ 13).then(__webpack_require__.bind(null, 63)));

const _09e1d817 = () => interopDefault(__webpack_require__.e(/* import() | pages/posts/_id */ 10).then(__webpack_require__.bind(null, 64)));

const _215b1913 = () => interopDefault(__webpack_require__.e(/* import() | pages/proyect-info/_id */ 11).then(__webpack_require__.bind(null, 65)));

const _116fb5eb = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 9).then(__webpack_require__.bind(null, 66)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
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
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(20)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b2ee9344"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(21)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "c4e8d7dc"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/buefy/dist/buefy.css
var buefy = __webpack_require__(22);

// EXTERNAL MODULE: ./assets/css/main.scss
var main = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=461be8d8&
var defaultvue_type_template_id_461be8d8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ec-header'),_vm._ssrNode(" "),_c('nuxt'),_vm._ssrNode(" "),_c('ec-footer')],2)}
var defaultvue_type_template_id_461be8d8_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=461be8d8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  data() {
    return {};
  }

});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_461be8d8_render,
  defaultvue_type_template_id_461be8d8_staticRenderFns,
  false,
  null,
  null,
  "3b454cc0"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {EcHeader: __webpack_require__(28).default,EcFooter: __webpack_require__(29).default})

// CONCATENATED MODULE: ./.nuxt/App.js








const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(26), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {}; // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}
// CONCATENATED MODULE: ./.nuxt/components/utils.js
// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


const components = {
  EcFooter: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 29)).then(c => wrapFunctional(c.default || c)),
  EcHeader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 28)).then(c => wrapFunctional(c.default || c)),
  EcPartner: () => __webpack_require__.e(/* import() | components/ec-partner */ 1).then(__webpack_require__.bind(null, 51)).then(c => wrapFunctional(c.default || c)),
  EcPost: () => __webpack_require__.e(/* import() | components/ec-post */ 2).then(__webpack_require__.bind(null, 32)).then(c => wrapFunctional(c.default || c)),
  EcPostCarousel: () => __webpack_require__.e(/* import() | components/ec-post-carousel */ 3).then(__webpack_require__.bind(null, 45)).then(c => wrapFunctional(c.default || c)),
  EcPostImg: () => __webpack_require__.e(/* import() | components/ec-post-img */ 4).then(__webpack_require__.bind(null, 43)).then(c => wrapFunctional(c.default || c)),
  EcProyect: () => __webpack_require__.e(/* import() | components/ec-proyect */ 5).then(__webpack_require__.bind(null, 52)).then(c => wrapFunctional(c.default || c)),
  EcProyectImg: () => __webpack_require__.e(/* import() | components/ec-proyect-img */ 6).then(__webpack_require__.bind(null, 44)).then(c => wrapFunctional(c.default || c))
};

for (const name in components) {
  external_vue_default.a.component(name, components[name]);
  external_vue_default.a.component('Lazy' + name, components[name]);
}
// EXTERNAL MODULE: external "buefy"
var external_buefy_ = __webpack_require__(17);
var external_buefy_default = /*#__PURE__*/__webpack_require__.n(external_buefy_);

// CONCATENATED MODULE: ./.nuxt/buefy.js


external_vue_default.a.use(external_buefy_default.a, {
  "css": true,
  "materialDesignIcons": true,
  "materialDesignIconsHRef": "https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css",
  "async": true
});
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./buefy.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;

function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "Estudio Clio",
      "htmlAttrs": {
        "lang": "es"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ficon-ec.png"
      }, {
        "type": "text\u002Fcss",
        "href": "https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@5.8.55\u002Fcss\u002Fmaterialdesignicons.min.css",
        "rel": "preload",
        "as": "style",
        "onload": "this.rel='stylesheet'"
      }],
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/buefy.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/buefy.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EcHeader.vue?vue&type=template&id=49f75d71&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<header>","</header>",[_vm._ssrNode("<div class=\"ec-header columns is-mobile\">","</div>",[_vm._ssrNode("<div class=\"column\">","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{staticClass:"header__icono",attrs:{"src":__webpack_require__(9),"alt":""}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column\">","</div>",[_vm._ssrNode("<div class=\"header__menu\">","</div>",[_vm._ssrNode("<div class=\"buttons\">","</div>",[_c('b-button',{staticStyle:{"margin-top":"3px"},attrs:{"type":"is-primary","inverted":"","outlined":"","icon-right":"menu","size":"is-medium"},on:{"click":function($event){_vm.isComponentModalActive = true}}})],1)])])],2)]),_vm._ssrNode(" "),_c('b-modal',{attrs:{"has-modal-card":"","trap-focus":"","destroy-on-hide":false,"aria-modal":""},model:{value:(_vm.isComponentModalActive),callback:function ($$v) {_vm.isComponentModalActive=$$v},expression:"isComponentModalActive"}},[_c('div',{staticClass:"container is-fluid ec-modal"},[_c('div',{staticClass:"ec-menu--card ec-menu--card--proyect"},[_c('nuxt-link',{staticStyle:{"text-decoration":"none !important","color":"inherit"},attrs:{"to":"/proyects"}},[_c('div',{on:{"click":function($event){_vm.isComponentModalActive = false}}},[_c('h3',[_vm._v("Proyectos")]),_vm._v(" "),_c('p',[_vm._v("Conocé nuestros proyectos")])])])],1),_vm._v(" "),_c('div',{staticClass:"ec-menu--card ec-menu--card--atelier"},[_c('nuxt-link',{staticStyle:{"text-decoration":"none !important","color":"inherit"},attrs:{"to":"/atelier"}},[_c('div',{on:{"click":function($event){_vm.isComponentModalActive = false}}},[_c('h3',[_vm._v("Atelier")]),_vm._v(" "),_c('p',[_vm._v("Qué está pasando?")])])])],1),_vm._v(" "),_c('div',{staticClass:"ec-menu--card ec-menu--card--about"},[_c('nuxt-link',{staticStyle:{"text-decoration":"none !important","color":"inherit"},attrs:{"to":"/about"}},[_c('div',{on:{"click":function($event){_vm.isComponentModalActive = false}}},[_c('h3',[_vm._v("Estudio")]),_vm._v(" "),_c('p',[_vm._v("Quíenes somos?")])])])],1),_vm._v(" "),_c('div',{staticClass:"ec-menu--card ec-menu--card--start"},[_c('nuxt-link',{staticStyle:{"text-decoration":"none !important","color":"inherit"},attrs:{"to":"/start"}},[_c('div',{on:{"click":function($event){_vm.isComponentModalActive = false}}},[_c('h3',[_vm._v("Mi Proyecto")]),_vm._v(" "),_c('p',[_vm._v("Cómo empezar?")])])])],1)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/EcHeader.vue?vue&type=template&id=49f75d71&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EcHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var EcHeadervue_type_script_lang_js_ = ({
  data() {
    return {
      isComponentModalActive: false
    };
  }

});
// CONCATENATED MODULE: ./components/EcHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_EcHeadervue_type_script_lang_js_ = (EcHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/EcHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(24)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_EcHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5615e1a9"
  
)

/* harmony default export */ var EcHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EcFooter.vue?vue&type=template&id=18b3ea1b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',[_vm._ssrNode("<div class=\"container is-fluid\" data-v-18b3ea1b>","</div>",[_vm._ssrNode("<div class=\"has-text-centered ec--footer\" data-v-18b3ea1b>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(9)))+" alt class=\"ec--footer-logo\" data-v-18b3ea1b> <p data-v-18b3ea1b><strong data-v-18b3ea1b>Estudio Clio</strong> by <a href=\"https://www.linkedin.com/in/lmhick/\" target=\"_blank\" data-v-18b3ea1b>Lucas Martín Hick</a>. The source code and the website content\n        is licensed <a href=\"http://opensource.org/licenses/mit-license.php\" target=\"_blank\" data-v-18b3ea1b>MIT</a>.\n      </p> "),_vm._ssrNode("<p class=\"ec--follow\" data-v-18b3ea1b>","</p>",[_vm._ssrNode("<a href=\"https://www.facebook.com/estudioclio/\" target=\"_blank\" style=\"text-decoration: none !important; color: inherit; margin: 10px 5px 0 5px;\" data-v-18b3ea1b>","</a>",[_c('b-icon',{staticClass:"ec--icon ec--icon-fb",attrs:{"icon":"facebook"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<a href=\"https://www.instagram.com/estudioclio/\" target=\"_blank\" style=\"text-decoration: none !important; color: inherit; margin: 10px 5px 0 5px;\" data-v-18b3ea1b>","</a>",[_c('b-icon',{staticClass:"ec--icon ec--icon-ig",attrs:{"icon":"instagram"}})],1)],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/EcFooter.vue?vue&type=template&id=18b3ea1b&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/EcFooter.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(25)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "18b3ea1b",
  "34e37db7"
  
)

/* harmony default export */ var EcFooter = __webpack_exports__["default"] = (component.exports);

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map