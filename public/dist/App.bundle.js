/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/javascripts/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/javascripts/helper.js":
/*!**************************************!*\
  !*** ./public/javascripts/helper.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar fetchData = function fetchData(url) {\n  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';\n\n  var headers = {\n    headers: {\n      'content-type': 'application/json',\n      Authorization: 'Bearer' + jwt\n    },\n    credentials: 'same-origin',\n    method: '' + method.toUpperCase()\n  };\n\n  return fetch(url, headers);\n};\n\nvar getCookie = function getCookie() {\n  return document.cookie.split('=')[1];\n};\n\nvar jwt = getCookie();\n\nmodule.exports = {\n  fetchData: fetchData,\n  jwt: jwt\n};\n\n//# sourceURL=webpack:///./public/javascripts/helper.js?");

/***/ }),

/***/ "./public/javascripts/modules sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./public/javascripts/modules sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./Nav\": \"./public/javascripts/modules/Nav.js\",\n\t\"./Nav.js\": \"./public/javascripts/modules/Nav.js\",\n\t\"./Project\": \"./public/javascripts/modules/Project.js\",\n\t\"./Project.js\": \"./public/javascripts/modules/Project.js\",\n\t\"./Tech\": \"./public/javascripts/modules/Tech.js\",\n\t\"./Tech.js\": \"./public/javascripts/modules/Tech.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./public/javascripts/modules sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./public/javascripts/modules_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./public/javascripts/modules/Nav.js":
/*!*******************************************!*\
  !*** ./public/javascripts/modules/Nav.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Nav = function () {\n  function Nav(el) {\n    _classCallCheck(this, Nav);\n\n    this.el = el;\n    this.setupDOM();\n    this.bindEvents();\n    this.highlightNav();\n  }\n\n  _createClass(Nav, [{\n    key: 'setupDOM',\n    value: function setupDOM() {\n      this.topBar = this.el.querySelector('.topBar');\n      this.topBarMenu = this.el.querySelector('.topBar-menu');\n      this.sideNav = this.el.querySelector('.sideNav');\n      this.links = this.el.querySelectorAll('.sideNav a');\n    }\n  }, {\n    key: 'bindEvents',\n    value: function bindEvents() {\n      this.topBarMenu.addEventListener('click', this.expandNav.bind(this));\n      this.topBarMenu.addEventListener('keypress', this.expandNav.bind(this));\n      window.onscroll = this.highlightBar.bind(this);\n    }\n  }, {\n    key: 'expandNav',\n    value: function expandNav(e) {\n      if (e.key === 'Enter' || e.type === 'click') this.sideNav.classList.toggle('sideNav-expanded');\n    }\n  }, {\n    key: 'highlightNav',\n    value: function highlightNav() {\n      var num = this.sideNav.getAttribute('data-num');\n      this.links[num].classList.add('selected');\n    }\n  }, {\n    key: 'highlightBar',\n    value: function highlightBar() {\n      if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > 40) {\n        this.topBar.classList.add('topBar-colored');\n      } else {\n        this.topBar.classList.remove('topBar-colored');\n      }\n    }\n  }]);\n\n  return Nav;\n}();\n\nexports.default = Nav;\n\n//# sourceURL=webpack:///./public/javascripts/modules/Nav.js?");

/***/ }),

/***/ "./public/javascripts/modules/Project.js":
/*!***********************************************!*\
  !*** ./public/javascripts/modules/Project.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _helper = __webpack_require__(/*! ../helper.js */ \"./public/javascripts/helper.js\");\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Project = function () {\n  function Project(el) {\n    _classCallCheck(this, Project);\n\n    this.el = el;\n    this.setupDOM();\n    this.bindEvents();\n  }\n\n  _createClass(Project, [{\n    key: 'setupDOM',\n    value: function setupDOM() {\n      this.addProjectBtn = this.el.querySelector('.project__add');\n      this.updateProjectBtn = [].concat(_toConsumableArray(this.el.getElementsByClassName('project__card-update')));\n      this.deleteProjectBtn = [].concat(_toConsumableArray(this.el.getElementsByClassName('project__card-delete')));\n      this.updateImgBtn = [].concat(_toConsumableArray(this.el.getElementsByClassName('project__card-addImg')));\n    }\n  }, {\n    key: 'bindEvents',\n    value: function bindEvents() {\n      var _this = this;\n\n      this.deleteProjectBtn.forEach(function (el) {\n        return el.addEventListener('click', _this.deleteProject.bind(_this));\n      });\n      this.deleteProjectBtn.forEach(function (el) {\n        return el.addEventListener('keypress', _this.deleteProject.bind(_this));\n      });\n      this.addProjectBtn.addEventListener('click', this.displayAddModal.bind(this));\n      this.addProjectBtn.addEventListener('keypress', this.displayAddModal.bind(this));\n      this.updateProjectBtn.forEach(function (el) {\n        return el.addEventListener('click', _this.displayUpdateModal.bind(_this));\n      });\n      this.updateProjectBtn.forEach(function (el) {\n        return el.addEventListener('keypress', _this.displayUpdateModal.bind(_this));\n      });\n      this.updateImgBtn.forEach(function (el) {\n        return el.addEventListener('click', _this.displayUpdateModal.bind(_this));\n      });\n      this.updateImgBtn.forEach(function (el) {\n        return el.addEventListener('keypress', _this.displayUpdateModal.bind(_this));\n      });\n      window.addEventListener('click', this.closeModal.bind(this));\n    }\n  }, {\n    key: 'deleteProject',\n    value: function deleteProject(e) {\n      if (e.key === 'Enter' || e.type === 'click') {\n        e.preventDefault();\n        var href = e.currentTarget.getAttribute('href');\n        var li = e.currentTarget.closest('li');\n\n        (0, _helper.fetchData)(href, 'delete').then(function () {\n          li.remove();\n        }).catch(function (err) {\n          console.log(err);\n        });\n      }\n    }\n  }, {\n    key: 'displayAddModal',\n    value: function displayAddModal(e) {\n      if (e.key === 'Enter' || e.type === 'click') this.el.getElementsByClassName('modal')[0].classList.toggle('display-modal');\n    }\n  }, {\n    key: 'displayUpdateModal',\n    value: function displayUpdateModal(e) {\n      if (e.key === 'Enter' || e.type === 'click') e.currentTarget.closest('li').children[3].classList.toggle('display-modal');\n    }\n  }, {\n    key: 'closeModal',\n    value: function closeModal(e) {\n      [].concat(_toConsumableArray(this.el.getElementsByClassName('modal'))).forEach(function (el) {\n        if (e.target === el) el.classList.toggle('display-modal');\n      });\n    }\n  }]);\n\n  return Project;\n}();\n\nexports.default = Project;\n\n//# sourceURL=webpack:///./public/javascripts/modules/Project.js?");

/***/ }),

/***/ "./public/javascripts/modules/Tech.js":
/*!********************************************!*\
  !*** ./public/javascripts/modules/Tech.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _helper = __webpack_require__(/*! ../helper.js */ \"./public/javascripts/helper.js\");\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Tech = function () {\n  function Tech(el) {\n    _classCallCheck(this, Tech);\n\n    this.el = el;\n    this.setupDOM();\n    this.bindEvents();\n  }\n\n  _createClass(Tech, [{\n    key: 'setupDOM',\n    value: function setupDOM() {\n      this.EditableContent = [].concat(_toConsumableArray(this.el.querySelectorAll('[contenteditable=\"true\"]')));\n      this.techExpand = [].concat(_toConsumableArray(this.el.getElementsByClassName('tech__card-expand')));\n      this.addTechBtn = this.el.querySelector('.tech__card-btn--add');\n      this.deleteTechBtn = [].concat(_toConsumableArray(this.el.getElementsByClassName('tech__card-delete')));\n      this.updateTechBtn = [].concat(_toConsumableArray(this.el.getElementsByClassName('tech__card-btn--update')));\n      this.techPin = [].concat(_toConsumableArray(this.el.getElementsByClassName('tech__card-pin')));\n    }\n  }, {\n    key: 'bindEvents',\n    value: function bindEvents() {\n      var _this = this;\n\n      this.EditableContent.forEach(function (el) {\n        return el.addEventListener('focus', _this.focusContent.bind(_this));\n      });\n      window.addEventListener('click', this.unfocusContent.bind(this));\n      this.EditableContent.forEach(function (el) {\n        return el.addEventListener('keypress', _this.limitChars.bind(_this));\n      });\n      this.techExpand.forEach(function (el) {\n        return el.addEventListener('click', _this.expandTech.bind(_this));\n      });\n      this.techExpand.forEach(function (el) {\n        return el.addEventListener('keypress', _this.expandTech.bind(_this));\n      });\n      this.addTechBtn.addEventListener('click', this.addTech.bind(this));\n      this.addTechBtn.addEventListener('keypress', this.addTech.bind(this));\n      this.updateTechBtn.forEach(function (el) {\n        return el.addEventListener('click', _this.updateTech.bind(_this));\n      });\n      this.updateTechBtn.forEach(function (el) {\n        return el.addEventListener('keypress', _this.updateTech.bind(_this));\n      });\n      this.deleteTechBtn.forEach(function (el) {\n        return el.addEventListener('click', _this.deleteTech.bind(_this));\n      });\n      this.deleteTechBtn.forEach(function (el) {\n        return el.addEventListener('keypress', _this.deleteTech.bind(_this));\n      });\n      this.techPin.forEach(function (el) {\n        return el.addEventListener('click', _this.highlightPin.bind(_this));\n      });\n      this.techPin.forEach(function (el) {\n        return el.addEventListener('keypress', _this.highlightPin.bind(_this));\n      });\n    }\n  }, {\n    key: 'focusContent',\n    value: function focusContent(e) {\n      this.EditableContent.forEach(function (el) {\n        return el.classList.remove('focus');\n      });\n      e.currentTarget.classList.add('focus');\n    }\n  }, {\n    key: 'unfocusContent',\n    value: function unfocusContent(e) {\n      if (e.target.contentEditable !== 'true') {\n        this.EditableContent.forEach(function (el) {\n          el.classList.remove('focus');\n        });\n      }\n    }\n  }, {\n    key: 'limitChars',\n    value: function limitChars(e) {\n      var max = e.target.nodeName === 'H3' ? 19 : 150;\n      if (e.currentTarget.innerHTML.length > max) e.preventDefault();\n    }\n  }, {\n    key: 'expandTech',\n    value: function expandTech(e) {\n      if (e.key === 'Enter' || e.type === 'click') e.currentTarget.closest('li').children[1].classList.toggle('tech__card-description-expanded');\n    }\n  }, {\n    key: 'addTech',\n    value: function addTech(e) {\n      if (e.key === 'Enter' || e.type === 'click') {\n        var valueTitle = this.el.querySelector('.tech__card-title--add h3').innerHTML;\n        var valueInfo = this.el.querySelector('.tech__card--add .tech__card-info').innerHTML;\n        var list = this.addTechBtn.closest('.tech__card-container');\n        var progressEl = [].concat(_toConsumableArray(list.children[0].children)).find(function (el) {\n          return el.classList.contains('lighten');\n        });\n        var progressValue = progressEl ? progressEl.getAttribute('value') : 'red';\n\n        var href = this.addTechBtn.getAttribute('data-url') + '?title=' + valueTitle + '&info=' + valueInfo + '&check=' + progressValue;\n\n        (0, _helper.fetchData)(href, 'post').then(function (data) {\n          location.reload();\n        }).catch(function (err) {\n          console.log(err);\n        });\n      }\n    }\n  }, {\n    key: 'updateTech',\n    value: function updateTech(e) {\n      if (e.key === 'Enter' || e.type === 'click') {\n        var valueTitle = e.currentTarget.closest('li').children[0].children[2].innerHTML;\n        var valueInfo = e.currentTarget.closest('.tech__card-description').children[0].innerHTML;\n        var list = e.currentTarget.closest('.tech__card-container');\n        var progress = [].concat(_toConsumableArray(list.children[0].children)).find(function (el) {\n          return el.classList.contains('lighten');\n        });\n\n        var href = e.currentTarget.getAttribute('data-url') + '?title=' + valueTitle + '&info=' + valueInfo + '&check=' + progress.getAttribute('value');\n\n        (0, _helper.fetchData)(href, 'post').then(function (data) {\n          return;\n        }).catch(function (err) {\n          console.log(err);\n        });\n      }\n    }\n  }, {\n    key: 'deleteTech',\n    value: function deleteTech(e) {\n      if (e.key === 'Enter' || e.type === 'click') {\n        e.preventDefault();\n        var href = e.currentTarget.getAttribute('href');\n        var li = e.currentTarget.closest('li');\n\n        (0, _helper.fetchData)(href, 'delete').then(function () {\n          li.remove();\n        }).catch(function (err) {\n          console.log(err);\n        });\n      }\n    }\n  }, {\n    key: 'highlightPin',\n    value: function highlightPin(e) {\n      if (e.key === 'Enter' || e.type === 'click') {\n        var list = e.currentTarget.closest('ul');\n        [].concat(_toConsumableArray(list.children)).forEach(function (el) {\n          el.classList.remove('lighten');\n        });\n\n        e.currentTarget.classList.add('lighten');\n      }\n    }\n  }]);\n\n  return Tech;\n}();\n\nexports.default = Tech;\n\n//# sourceURL=webpack:///./public/javascripts/modules/Tech.js?");

/***/ }),

/***/ "./public/javascripts/script.js":
/*!**************************************!*\
  !*** ./public/javascripts/script.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../stylesheets/main.scss */ \"./public/stylesheets/main.scss\");\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n[].concat(_toConsumableArray(document.querySelectorAll('[data-module'))).forEach(function (el) {\n  var name = el.getAttribute('data-module');\n  var Module = __webpack_require__(\"./public/javascripts/modules sync recursive ^\\\\.\\\\/.*$\")(\"./\" + name).default;\n  new Module(el);\n});\n\n//# sourceURL=webpack:///./public/javascripts/script.js?");

/***/ }),

/***/ "./public/stylesheets/main.scss":
/*!**************************************!*\
  !*** ./public/stylesheets/main.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./public/stylesheets/main.scss?");

/***/ })

/******/ });