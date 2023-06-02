/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage */ \"./src/loadPage.js\");\n\n\n(0,_loadPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBa0M7O0FBRWxDLHFEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvYWRQYWdlIGZyb20gJy4vbG9hZFBhZ2UnO1xuXG5sb2FkUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadPage() {\n    const contentDiv = document.getElementById('content');\n\n    // header\n    const headerDiv = document.createElement('div');\n    headerDiv.classList.add('header');\n\n    const header = document.createElement('h1');\n    header.textContent = 'HEADER';\n    headerDiv.appendChild(header);\n\n    contentDiv.appendChild(headerDiv);\n\n    // main content\n    const mainDiv = document.createElement('div');\n    mainDiv.classList.add('main');\n\n    const mainHeading = document.createElement('h1');\n    mainHeading.textContent = 'Odin Restaurant';\n    mainDiv.appendChild(mainHeading);\n\n    const mainParagraph = document.createElement('p');\n    mainParagraph.innerHTML = `Odin restaurant is proud to be the premier makers\n                               of Adrwahkah and other cuisine for nuclear \n                               powered lifeforms since 2173. <br />`;\n    mainDiv.appendChild(mainParagraph);\n\n    const mainFigure = document.createElement('figure');\n\n    const mainFigureImg = document.createElement('img');\n    mainFigureImg.setAttribute('src', 'picture.png');\n    mainFigureImg.setAttribute('alt', 'Picture of Adrwahkah');\n    mainFigure.appendChild(mainFigureImg);\n\n    const mainFigureCaption = document.createElement('figcaption');\n    mainFigureCaption.textContent = 'Picture of Adrwahkah';\n    mainFigure.appendChild(mainFigureCaption);\n\n    mainDiv.appendChild(mainFigure);\n    contentDiv.appendChild(mainDiv);\n\n    // footer\n    const footerDiv = document.createElement('div');\n    footerDiv.classList.add('footer');\n\n    const footerParagraph = document.createElement('p');\n    footerParagraph.textContent = '\\u00A9 2023 Oscar Robertson';\n    footerDiv.appendChild(footerParagraph);\n\n    contentDiv.appendChild(footerDiv);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9hZFBhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9sb2FkUGFnZS5qcz80NDEwIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgLy8gaGVhZGVyXG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnSEVBREVSJztcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcblxuICAgIC8vIG1haW4gY29udGVudFxuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICAgIGNvbnN0IG1haW5IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBtYWluSGVhZGluZy50ZXh0Q29udGVudCA9ICdPZGluIFJlc3RhdXJhbnQnO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobWFpbkhlYWRpbmcpO1xuXG4gICAgY29uc3QgbWFpblBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtYWluUGFyYWdyYXBoLmlubmVySFRNTCA9IGBPZGluIHJlc3RhdXJhbnQgaXMgcHJvdWQgdG8gYmUgdGhlIHByZW1pZXIgbWFrZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2YgQWRyd2Foa2FoIGFuZCBvdGhlciBjdWlzaW5lIGZvciBudWNsZWFyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvd2VyZWQgbGlmZWZvcm1zIHNpbmNlIDIxNzMuIDxiciAvPmA7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtYWluUGFyYWdyYXBoKTtcblxuICAgIGNvbnN0IG1haW5GaWd1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWd1cmUnKTtcblxuICAgIGNvbnN0IG1haW5GaWd1cmVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtYWluRmlndXJlSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJ3BpY3R1cmUucG5nJyk7XG4gICAgbWFpbkZpZ3VyZUltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdQaWN0dXJlIG9mIEFkcndhaGthaCcpO1xuICAgIG1haW5GaWd1cmUuYXBwZW5kQ2hpbGQobWFpbkZpZ3VyZUltZyk7XG5cbiAgICBjb25zdCBtYWluRmlndXJlQ2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ2NhcHRpb24nKTtcbiAgICBtYWluRmlndXJlQ2FwdGlvbi50ZXh0Q29udGVudCA9ICdQaWN0dXJlIG9mIEFkcndhaGthaCc7XG4gICAgbWFpbkZpZ3VyZS5hcHBlbmRDaGlsZChtYWluRmlndXJlQ2FwdGlvbik7XG5cbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1haW5GaWd1cmUpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG5cbiAgICAvLyBmb290ZXJcbiAgICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXJEaXYuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgICBjb25zdCBmb290ZXJQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZm9vdGVyUGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ1xcdTAwQTkgMjAyMyBPc2NhciBSb2JlcnRzb24nO1xuICAgIGZvb3RlckRpdi5hcHBlbmRDaGlsZChmb290ZXJQYXJhZ3JhcGgpO1xuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChmb290ZXJEaXYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/loadPage.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;