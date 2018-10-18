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

/***/ "./public/javascripts/script.js":
/*!**************************************!*\
  !*** ./public/javascripts/script.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../stylesheets/main.scss */ \"./public/stylesheets/main.scss\");\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n// can't use let, const in the global scope for some reason. need to add plugin in webpack perhaps\n// let checks = document.querySelectorAll(\"input[type=radio]\");\n// console.log(checks.length);\n// \n// let checks = [...document.querySelectorAll('input[name=\"check\"]')];\n[].concat(_toConsumableArray(document.querySelectorAll('input[name=\"check\"]'))).forEach(function (el) {\n  el.addEventListener('click', function (e) {\n    var num = el.getAttribute('data-val');\n    if (num) document.getElementsByClassName('tech__progress')[num].submit();\n  });\n});\n[].concat(_toConsumableArray(document.getElementsByClassName('tech__update'))).forEach(function (el) {\n  el.addEventListener('click', function () {\n    console.log(el.parentElement.children[0].getAttribute('value'));\n    var valueTitle = el.parentElement.parentElement.children[0].innerHTML;\n    var valueInfo = el.parentElement.parentElement.children[1].innerHTML;\n    el.parentElement.children[0].setAttribute('value', valueTitle);\n    el.parentElement.children[1].setAttribute('value', valueInfo);\n    el.closest('li form').submit();\n  });\n});\nvar jwt = document.cookie.split('=')[1];\n[].concat(_toConsumableArray(document.querySelectorAll('li > a'))).forEach(function (el) {\n  el.addEventListener('click', function (e) {\n    e.preventDefault();\n    var headers = {\n      headers: {\n        'content-type': 'application/json',\n        Authorization: 'Bearer' + jwt\n      },\n      credentials: 'same-origin',\n      method: 'DELETE'\n    };\n    var href = el.getAttribute('href');\n    var li = el.closest('li');\n    fetch(href, headers).then(function () {\n      li.remove();\n    }).catch(function (err) {\n      console.log(err);\n    });\n  });\n});\nvar addBtn = document.querySelector('.tech__add'),\n    addProjectBtn = document.getElementsByClassName('project__add')[0],\n    updateProjectBtn = document.getElementsByClassName('project__update');\nif (addBtn) addBtn.addEventListener('click', function () {\n  document.getElementsByClassName('modal')[0].classList.toggle('display-modal');\n});\nif (addProjectBtn) addProjectBtn.addEventListener('click', function () {\n  document.getElementsByClassName('modal')[0].classList.toggle('display-modal');\n});\nif (updateProjectBtn) [].concat(_toConsumableArray(updateProjectBtn)).forEach(function (el, i) {\n  el.addEventListener('click', function () {\n    document.querySelectorAll('ul .modal')[i].classList.toggle('display-modal');\n  });\n});\nwindow.addEventListener('click', function (e) {\n  [].concat(_toConsumableArray(document.getElementsByClassName('modal'))).forEach(function (el) {\n    if (e.target === el) el.classList.toggle('display-modal');\n  });\n});\nvar topBar = document.getElementsByClassName('topBar')[0];\nvar topBarMenu = document.getElementsByClassName('topBar-menu')[0];\nvar sideNav = document.getElementsByClassName('sideNav')[0];\nvar links = document.querySelectorAll('.sideNav a');\n\nif (topBar) {\n  window.onscroll = function () {\n    if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > 40) {\n      topBar.classList.add('topBar-colored');\n    } else {\n      topBar.classList.remove('topBar-colored');\n    }\n  };\n\n  topBarMenu.addEventListener('click', function () {\n    sideNav.classList.toggle('sideNav-expanded');\n  });\n  var num = sideNav.getAttribute('data-num');\n  links[num].classList.add('selected');\n}\n\n//# sourceURL=webpack:///./public/javascripts/script.js?");

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