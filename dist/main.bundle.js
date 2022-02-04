/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ApiHandler.js":
/*!***************************!*\
  !*** ./src/ApiHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ApiHandler)\n/* harmony export */ });\nclass ApiHandler {\r\n    constructor(apiUrl) {\r\n        this.apiUrl = apiUrl\r\n    }\r\n\r\n    getCatalog(onSuccess, onError){\r\n        this.send(onError, onSuccess, `${this.apiUrl}/catalog`)\r\n    }\r\n\r\n    getCart(onSuccess, onError){\r\n        this.send(onError, onSuccess, `${this.apiUrl}/cart`)\r\n    }\r\n\r\n    addToCart(onSuccess, onError, data){\r\n        this.send(onError, onSuccess, `${this.apiUrl}/cart`, 'POST', JSON.stringify(data), {\"Content-Type\": \"application/json\"})\r\n    }\r\n\r\n    removeFromCart(onSuccess, onError, data){\r\n        this.send(onError, onSuccess, `${this.apiUrl}/cart`, 'DELETE', JSON.stringify(data), {\"Content-Type\": \"application/json\"})\r\n    }\r\n\r\n    send(onError, onSuccess, url, method = 'GET', data = '', headers = {}, timeout = 60000) {\r\n \r\n        let xhr;\r\n    \r\n        if (window.XMLHttpRequest) {\r\n          // Chrome, Mozilla, Opera, Safari\r\n          xhr = new XMLHttpRequest();\r\n        } else if (window.ActiveXObject) { \r\n          // Internet Explorer\r\n          xhr = new ActiveXObject(\"Microsoft.XMLHTTP\");\r\n        }\r\n    \r\n    \r\n        xhr.timeout = timeout; \r\n    \r\n        xhr.ontimeout = onError;\r\n    \r\n        xhr.onreadystatechange = function () {\r\n          if (xhr.readyState === 4) {\r\n            if(xhr.status < 400) {\r\n              onSuccess(xhr.responseText)\r\n            } else if (xhr.status >= 400) {\r\n              onError(xhr.status)\r\n            }\r\n          }\r\n        }\r\n    \r\n        xhr.open(method, url, true);\r\n    \r\n        for(const [key, value] of Object.entries(headers)) {\r\n          xhr.setRequestHeader(key, value)\r\n        }\r\n    \r\n        xhr.send(data);\r\n    }\r\n}\n\n//# sourceURL=webpack://project/./src/ApiHandler.js?");

/***/ }),

/***/ "./src/CartModel.js":
/*!**************************!*\
  !*** ./src/CartModel.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CartModel)\n/* harmony export */ });\n/* harmony import */ var _ProductList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductList */ \"./src/ProductList.js\");\n\r\n\r\nclass CartModel extends _ProductList__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(apiHandler, eventEmitter) {\r\n        super([]);\r\n        this.api = apiHandler\r\n        this.eventEmitter = eventEmitter\r\n    }\r\n\r\n    fetch(onError) {\r\n        this.api.getCart(\r\n            (data) => {\r\n                this.list = JSON.parse(data)\r\n                this.eventEmitter.emit('cartFetched', this.list)\r\n        },\r\n        onError\r\n        )\r\n    }\r\n    add(product, onError) {\r\n        this.api.addToCart(\r\n            () => {\r\n                this.list.push(product)\r\n            },\r\n            onError,\r\n            product\r\n        )\r\n    }\r\n\r\n    remove(id, onError) {\r\n        if(this.find(id)) {\r\n            this.api.removeFromCart(\r\n                () => {\r\n                    this.remove(id)\r\n                },\r\n                onError,\r\n                this.list[index]\r\n            )\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://project/./src/CartModel.js?");

/***/ }),

/***/ "./src/EventEmitter.js":
/*!*****************************!*\
  !*** ./src/EventEmitter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EventEmitter)\n/* harmony export */ });\nclass EventEmitter {\r\n    constructor() {\r\n        this.callbacks = {}\r\n    }\r\n\r\n    subscribe(eventName, callback) {\r\n        if(!this.callbacks[eventName]) {\r\n            this.callbacks[eventName] = []\r\n        }\r\n        this.callbacks[eventName].push(callback)\r\n    }\r\n\r\n    emit(eventName, payload) {\r\n        if(!this.callbacks[eventName]) {\r\n            this.callbacks[eventName].forEach((callback) =>\r\n            {\r\n                callback(payload)\r\n            })\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://project/./src/EventEmitter.js?");

/***/ }),

/***/ "./src/ProductList.js":
/*!****************************!*\
  !*** ./src/ProductList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductList)\n/* harmony export */ });\nclass ProductList {\r\n    constructor(list) {\r\n        this.list = list\r\n    }\r\n\r\n    getList() {\r\n        return this.list\r\n    }\r\n\r\n    find(id) {\r\n        const index = this.list.findIndex((item) => item.id === id);\r\n        if(index >= 0) {\r\n            return this.list[index]\r\n        }\r\n\r\n        return false;\r\n    }\r\n\r\n    remove(id) {\r\n        const index = this.list.findIndex((item) => item.id === id);\r\n        if(index >= 0) {\r\n            this.list = [...this.list.slice(0, index), ...this.list.slice(index + 1)]\r\n            return true;\r\n        }\r\n\r\n        return false;\r\n    }\r\n}\n\n//# sourceURL=webpack://project/./src/ProductList.js?");

/***/ }),

/***/ "./src/ShowcaseModel.js":
/*!******************************!*\
  !*** ./src/ShowcaseModel.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ShowcaseModel)\n/* harmony export */ });\n/* harmony import */ var _ProductList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductList */ \"./src/ProductList.js\");\n\r\n\r\nclass ShowcaseModel extends _ProductList__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(apiHandler, eventEmitter, cart) {\r\n        super([])\r\n        this.api = apiHandler\r\n        this.eventEmitter = eventEmitter\r\n        this.cart = cart\r\n    }\r\n\r\n    fetch(onError) {\r\n        this.api.getCatalog(\r\n            (data) => {\r\n                this.list = JSON.parse(data)\r\n                this.eventEmitter.emit('showcaseFetched', this.list)\r\n        },\r\n        onError\r\n        )\r\n    }\r\n\r\n    buy(id, onError) {\r\n        const product = this.find(id)\r\n        if(product) cart.add(product, onError)\r\n        \r\n    }\r\n}\n\n//# sourceURL=webpack://project/./src/ShowcaseModel.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ApiHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiHandler */ \"./src/ApiHandler.js\");\n/* harmony import */ var _CartModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartModel */ \"./src/CartModel.js\");\n/* harmony import */ var _ShowcaseModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShowcaseModel */ \"./src/ShowcaseModel.js\");\n/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventEmitter */ \"./src/EventEmitter.js\");\n\r\n\r\n\r\n\r\n\r\nconst API_URL = 'http://localhost:3000/api/v1'\r\n\r\nconst api = new _ApiHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"](API_URL)\r\nconst eventEmitter = new _EventEmitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"]()\r\n\r\nconst cart = new _CartModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"](api, eventEmitter)\r\n\r\nconst showcase = new _ShowcaseModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"](api, eventEmitter, cart)\r\n\r\neventEmitter.subscribe('showcaseFetched', (data) => {\r\n    console.log(data)\r\n})\r\n\r\neventEmitter.subscribe('cartFetched', (data) => {\r\n    console.log(data)\r\n})\r\n\r\nshowcase.fetch()\r\ncart.fetch()\n\n//# sourceURL=webpack://project/./src/index.js?");

/***/ })

/******/ 	});
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;