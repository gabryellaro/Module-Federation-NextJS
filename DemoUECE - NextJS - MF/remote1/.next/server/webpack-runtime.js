/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	!function() {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = function(name, initScope) {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = function(msg) { return typeof console !== "undefined" && console.warn && console.warn(msg); };
/******/ 			var uniqueName = "remote1";
/******/ 			var register = function(name, version, factory, eager) {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = function(id) {
/******/ 				var handleError = function(err) { warn("Initialization of sharing external failed: " + err); };
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = function(module) { return module && module.init && module.init(__webpack_require__.S[name], initScope); }
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					register("next/dynamic", "12.2.2", function() { return __webpack_require__.e("node_modules_next_dynamic_js").then(function() { return function() { return __webpack_require__(/*! ../node_modules/next/dynamic.js */ "../node_modules/next/dynamic.js"); }; }); });
/******/ 					register("next/link", "12.2.2", function() { return __webpack_require__.e("node_modules_next_link_js").then(function() { return function() { return __webpack_require__(/*! ../node_modules/next/link.js */ "../node_modules/next/link.js"); }; }); });
/******/ 					register("next/script", "12.2.2", function() { return __webpack_require__.e("node_modules_next_script_js").then(function() { return function() { return __webpack_require__(/*! ../node_modules/next/script.js */ "../node_modules/next/script.js"); }; }); });
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(function() { return initPromises[name] = 1; });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup entrypoint */
/******/ 	!function() {
/******/ 		__webpack_require__.X = function(result, chunkIds, fn) {
/******/ 			// arguments: chunkIds, moduleId are deprecated
/******/ 			var moduleId = chunkIds;
/******/ 			if(!fn) chunkIds = result, fn = function() { return __webpack_require__(__webpack_require__.s = moduleId); };
/******/ 			return Promise.all(chunkIds.map(__webpack_require__.e, __webpack_require__)).then(function() {
/******/ 				var r = fn();
/******/ 				return r === undefined ? result : r;
/******/ 			})
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/readFile chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "0" means "already loaded", Promise means loading
/******/ 		var installedChunks = {
/******/ 			"webpack-runtime": 0
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = function(chunk) {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++) {
/******/ 				if(installedChunks[chunkIds[i]]) {
/******/ 					installedChunks[chunkIds[i]][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// load script equivalent for server side
/******/ 		__webpack_require__.l = function(url,callback,chunkId) {
/******/ 				if(!global.__remote_scope__) {
/******/ 					// create a global scope for container, similar to how remotes are set on window in the browser
/******/ 					global.__remote_scope__ = {
/******/ 					_config: {},
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				  function executeLoad(url, callback, name) {
/******/ 				    if(!name) {
/******/ 				      throw new Error('__webpack_require__.l name is required for ' + url);
/******/ 				    }
/******/ 				    if (typeof global.__remote_scope__[name] !== 'undefined') return callback(global.__remote_scope__[name]);
/******/ 				    const vm = require('vm');
/******/ 				    (global.webpackChunkLoad || global.fetch || require("node-fetch"))(url).then(function (res) {
/******/ 				      return res.text();
/******/ 				    }).then(function (scriptContent) {
/******/ 				      try {
/******/ 				        const vmContext = {exports, require, module, global, __filename, __dirname, URL,console,process,Buffer, ...global, remoteEntryName: name};
/******/ 				        const remote = vm.runInNewContext(scriptContent + '\nmodule.exports', vmContext, {filename: 'node-federation-loader-' + name + '.vm'});
/******/ 				        global.__remote_scope__[name] = remote[name] || remote;
/******/ 				        global.__remote_scope__._config[name] = url;
/******/ 				        callback(global.__remote_scope__[name])
/******/ 				      } catch (e) {
/******/ 				        console.error('executeLoad hit catch block');
/******/ 				        e.target = {src: url};
/******/ 				        callback(e);
/******/ 				      }
/******/ 				    }).catch((e) => {
/******/ 				      e.target = {src: url};
/******/ 				      callback(e);
/******/ 				    });
/******/ 				  }
/******/ 				executeLoad(url,callback,chunkId)
/******/ 		}
/******/ 		// ReadFile + VM.run chunk loading for javascript
/******/ 		__webpack_require__.f.readFileVm = function(chunkId, promises) {
/******/ 		
/******/ 			var installedChunkData = installedChunks[chunkId];
/******/ 			if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 				// array of [resolve, reject, promise] means "currently loading"
/******/ 				if(installedChunkData) {
/******/ 					promises.push(installedChunkData[2]);
/******/ 				} else {
/******/ 					if("webpack-runtime" != chunkId) {
/******/ 						// load the chunk and return promise to it
/******/ 						var promise = new Promise(async function(resolve, reject) {
/******/ 							installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 							var filename = require('path').join(__dirname, "" + __webpack_require__.u(chunkId));
/******/ 							var fs = require('fs');
/******/ 							if(fs.existsSync(filename)) {
/******/ 								fs.readFile(filename, 'utf-8', function(err, content) {
/******/ 									if(err) return reject(err);
/******/ 									var chunk = {};
/******/ 									require('vm').runInThisContext('(function(exports, require, __dirname, __filename) {' + content + '\n})', filename)(chunk, require, require('path').dirname(filename), filename);
/******/ 									installChunk(chunk);
/******/ 								});
/******/ 							} else {
/******/ 		
/******/ 								  function loadScript(url, cb, chunkID) {
/******/ 								    var url;
/******/ 								    var cb = arguments[arguments.length - 1];
/******/ 								    if (typeof cb !== "function") {
/******/ 								      throw new Error("last argument should be a function");
/******/ 								    }
/******/ 								    if (arguments.length === 2) {
/******/ 								      url = arguments[0];
/******/ 								    } else if (arguments.length === 3) {
/******/ 								      url = new URL(arguments[1], arguments[0]).toString();
/******/ 								    } else {
/******/ 								      throw new Error("invalid number of arguments");
/******/ 								    }
/******/ 								    if (global.webpackChunkLoad) {
/******/ 								      global.webpackChunkLoad(url).then(function (resp) {
/******/ 								        return resp.text();
/******/ 								      }).then(function (rawData) {
/******/ 								        cb(null, rawData);
/******/ 								      }).catch(function (err) {
/******/ 								        console.error('Federated Chunk load failed', error);
/******/ 								        return cb(error)
/******/ 								      });
/******/ 								    } else {
/******/ 								      //TODO https support
/******/ 								      let request = (url.startsWith('https') ? require('https') : require('http')).get(url, function (resp) {
/******/ 								        if (resp.statusCode === 200) {
/******/ 								          let rawData = '';
/******/ 								          resp.setEncoding('utf8');
/******/ 								          resp.on('data', chunk => {
/******/ 								            rawData += chunk;
/******/ 								          });
/******/ 								          resp.on('end', () => {
/******/ 								            cb(null, rawData);
/******/ 								          });
/******/ 								        } else {
/******/ 								          cb(resp);
/******/ 								        }
/******/ 								      });
/******/ 								      request.on('error', error => {
/******/ 								        console.error('Federated Chunk load failed', error);
/******/ 								        return cb(error)
/******/ 								      });
/******/ 								    }
/******/ 								  }
/******/ 		
/******/ 		
/******/ 								var remotes = {};
/******/ 								Object.assign(global.__remote_scope__._config, remotes)
/******/ 								const remoteRegistry = global.__remote_scope__._config
/******/ 		
/******/ 		
/******/ 		
/******/ 		
/******/ 		
/******/ 								var requestedRemote = remoteRegistry["remote1"]
/******/ 		
/******/ 								if(typeof requestedRemote === 'function'){
/******/ 								                    requestedRemote = await requestedRemote()
/******/ 								                  }
/******/ 		
/******/ 								var scriptUrl = new URL(requestedRemote);
/******/ 		
/******/ 								var chunkName = __webpack_require__.u(chunkId);
/******/ 		
/******/ 								var fileToReplace = require('path').basename(scriptUrl.pathname);
/******/ 								scriptUrl.pathname = scriptUrl.pathname.replace(fileToReplace, chunkName);
/******/ 		
/******/ 								loadScript(scriptUrl.toString(), function(err, content) {
/******/ 		
/******/ 									if(err) {console.error('error loading remote chunk', scriptUrl.toString(),'got',content); return reject(err);}
/******/ 									var chunk = {};
/******/ 									try {
/******/ 									require('vm').runInThisContext('(function(exports, require, __dirname, __filename) {' + content + '\n})', filename)(chunk, require, require('path').dirname(filename), filename);
/******/ 									} catch (e) {
/******/ 									console.error('runInThisContext threw', e)
/******/ 									}
/******/ 									installChunk(chunk);
/******/ 								});
/******/ 							}
/******/ 						});
/******/ 						promises.push(installedChunkData[2] = promise);
/******/ 					} else installedChunks[chunkId] = 0;
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		module.exports = __webpack_require__;
/******/ 		__webpack_require__.C = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	
/******/ })()
;