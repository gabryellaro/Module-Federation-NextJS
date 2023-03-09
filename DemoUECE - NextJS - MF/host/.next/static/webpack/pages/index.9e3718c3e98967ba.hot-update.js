"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "webpack/container/reference/remote3":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** external "new Promise(function (resolve, reject) {\n    var url = new URL(\"http://localhost:3003/remoteEntry.js\");\n    url.searchParams.set('t', Date.now());\n    var __webpack_error__ = new Error();\n    if(!window.remoteLoading) {\n        window.remoteLoading = {};\n    };\n\n    if(window.remoteLoading[\"remote3\"]) {\n      return window.remoteLoading[\"remote3\"].then(resolve).catch(reject);\n    }\n\n    var res, rej;\n    window.remoteLoading[\"remote3\"] = new Promise(function(rs,rj){\n      res = rs;\n      rej = rj;\n    })\n\n    if (typeof window[\"remote3\"] !== 'undefined') {\n      res();\n      return resolve();\n    }\n\n     __webpack_require__.l(\n      url.href,\n      function (event) {\n        if (typeof window[\"remote3\"] !== 'undefined') {\n          res();\n          return resolve();\n        }\n        var errorType = event && (event.type === 'load' ? 'missing' : event.type);\n        var realSrc = event && event.target && event.target.src;\n        __webpack_error__.message =\n          'Loading script failed.\\n(' + errorType + ': ' + realSrc + ')';\n        __webpack_error__.name = 'ScriptExternalLoadError';\n        __webpack_error__.type = errorType;\n        __webpack_error__.request = realSrc;\n        rej(__webpack_error__);\n        reject(__webpack_error__);\n      },\n      \"remote3\"\n    );\n  }).then(function () {\n    const proxy = {\n      get: remote3.get,\n      init: function(shareScope) {\n\n        const handler = {\n          get(target, prop) {\n            if (target[prop]) {\n              Object.values(target[prop]).forEach(function(o) {\n                if(o.from === '_N_E') {\n                  o.loaded = 1\n                }\n              })\n            }\n            return target[prop]\n          },\n          set(target, property, value, receiver) {\n            if (target[property]) {\n              return target[property]\n            }\n            target[property] = value\n            return true\n          }\n        }\n        try {\n          remote3.init(new Proxy(shareScope, handler))\n        } catch (e) {\n\n        }\n        remote3.__initialized = true\n      }\n    }\n    if (!remote3.__initialized) {\n      proxy.init(__webpack_require__.S.default)\n    }\n    return proxy\n  })" ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = new Promise(function (resolve, reject) {
    var url = new URL("http://localhost:3003/remoteEntry.js");
    url.searchParams.set('t', Date.now());
    var __webpack_error__ = new Error();
    if(!window.remoteLoading) {
        window.remoteLoading = {};
    };

    if(window.remoteLoading["remote3"]) {
      return window.remoteLoading["remote3"].then(resolve).catch(reject);
    }

    var res, rej;
    window.remoteLoading["remote3"] = new Promise(function(rs,rj){
      res = rs;
      rej = rj;
    })

    if (typeof window["remote3"] !== 'undefined') {
      res();
      return resolve();
    }

     __webpack_require__.l(
      url.href,
      function (event) {
        if (typeof window["remote3"] !== 'undefined') {
          res();
          return resolve();
        }
        var errorType = event && (event.type === 'load' ? 'missing' : event.type);
        var realSrc = event && event.target && event.target.src;
        __webpack_error__.message =
          'Loading script failed.\n(' + errorType + ': ' + realSrc + ')';
        __webpack_error__.name = 'ScriptExternalLoadError';
        __webpack_error__.type = errorType;
        __webpack_error__.request = realSrc;
        rej(__webpack_error__);
        reject(__webpack_error__);
      },
      "remote3"
    );
  }).then(function () {
    const proxy = {
      get: remote3.get,
      init: function(shareScope) {

        const handler = {
          get(target, prop) {
            if (target[prop]) {
              Object.values(target[prop]).forEach(function(o) {
                if(o.from === '_N_E') {
                  o.loaded = 1
                }
              })
            }
            return target[prop]
          },
          set(target, property, value, receiver) {
            if (target[property]) {
              return target[property]
            }
            target[property] = value
            return true
          }
        }
        try {
          remote3.init(new Proxy(shareScope, handler))
        } catch (e) {

        }
        remote3.__initialized = true
      }
    }
    if (!remote3.__initialized) {
      proxy.init(__webpack_require__.S.default)
    }
    return proxy
  });

/***/ })

});