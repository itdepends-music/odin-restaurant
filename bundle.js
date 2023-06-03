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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction makeHeader() {\n    const headerDiv = document.createElement('div');\n    headerDiv.classList.add('header');\n\n    const header = document.createElement('h1');\n    header.textContent = 'HEADER';\n    headerDiv.appendChild(header);\n\n    return headerDiv;\n}\n\nfunction makeMainContent() {\n    const mainDiv = document.createElement('div');\n    mainDiv.classList.add('main');\n\n    const mainHeading = document.createElement('h1');\n    mainHeading.textContent = 'Odin Restaurant';\n    mainDiv.appendChild(mainHeading);\n\n    const mainParagraph = document.createElement('p');\n    mainParagraph.innerHTML = `Odin restaurant is proud to be the premier makers\n                               of Adrwahkah and other cuisine for nuclear \n                               powered lifeforms since 2173. <br />`;\n    mainDiv.appendChild(mainParagraph);\n\n    const mainFigure = document.createElement('figure');\n\n    const mainFigureImg = document.createElement('img');\n    mainFigureImg.setAttribute('src', 'picture.png');\n    mainFigureImg.setAttribute('alt', 'Picture of Adrwahkah');\n    mainFigure.appendChild(mainFigureImg);\n\n    const mainFigureCaption = document.createElement('figcaption');\n    mainFigureCaption.textContent = 'Picture of Adrwahkah';\n    mainFigure.appendChild(mainFigureCaption);\n\n    mainDiv.appendChild(mainFigure);\n\n    return mainDiv;\n}\n\nfunction makeFooter() {\n    const footerDiv = document.createElement('div');\n    footerDiv.classList.add('footer');\n\n    const footerParagraph = document.createElement('p');\n    footerParagraph.textContent = '\\u00A9 2023 Oscar Robertson';\n    footerDiv.appendChild(footerParagraph);\n\n    return footerDiv;\n}\n\nfunction loadPage() {\n    const contentDiv = document.getElementById('content');\n    contentDiv.appendChild(makeHeader());\n    contentDiv.appendChild(makeMainContent());\n    contentDiv.appendChild(makeFooter());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9hZFBhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbG9hZFBhZ2UuanM/NDQxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtYWtlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0hFQURFUic7XG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICByZXR1cm4gaGVhZGVyRGl2O1xufVxuXG5mdW5jdGlvbiBtYWtlTWFpbkNvbnRlbnQoKSB7XG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5EaXYuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gICAgY29uc3QgbWFpbkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG1haW5IZWFkaW5nLnRleHRDb250ZW50ID0gJ09kaW4gUmVzdGF1cmFudCc7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtYWluSGVhZGluZyk7XG5cbiAgICBjb25zdCBtYWluUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1haW5QYXJhZ3JhcGguaW5uZXJIVE1MID0gYE9kaW4gcmVzdGF1cmFudCBpcyBwcm91ZCB0byBiZSB0aGUgcHJlbWllciBtYWtlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiBBZHJ3YWhrYWggYW5kIG90aGVyIGN1aXNpbmUgZm9yIG51Y2xlYXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG93ZXJlZCBsaWZlZm9ybXMgc2luY2UgMjE3My4gPGJyIC8+YDtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1haW5QYXJhZ3JhcGgpO1xuXG4gICAgY29uc3QgbWFpbkZpZ3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ3VyZScpO1xuXG4gICAgY29uc3QgbWFpbkZpZ3VyZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1haW5GaWd1cmVJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAncGljdHVyZS5wbmcnKTtcbiAgICBtYWluRmlndXJlSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ1BpY3R1cmUgb2YgQWRyd2Foa2FoJyk7XG4gICAgbWFpbkZpZ3VyZS5hcHBlbmRDaGlsZChtYWluRmlndXJlSW1nKTtcblxuICAgIGNvbnN0IG1haW5GaWd1cmVDYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmlnY2FwdGlvbicpO1xuICAgIG1haW5GaWd1cmVDYXB0aW9uLnRleHRDb250ZW50ID0gJ1BpY3R1cmUgb2YgQWRyd2Foa2FoJztcbiAgICBtYWluRmlndXJlLmFwcGVuZENoaWxkKG1haW5GaWd1cmVDYXB0aW9uKTtcblxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobWFpbkZpZ3VyZSk7XG5cbiAgICByZXR1cm4gbWFpbkRpdjtcbn1cblxuZnVuY3Rpb24gbWFrZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXJEaXYuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgICBjb25zdCBmb290ZXJQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZm9vdGVyUGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ1xcdTAwQTkgMjAyMyBPc2NhciBSb2JlcnRzb24nO1xuICAgIGZvb3RlckRpdi5hcHBlbmRDaGlsZChmb290ZXJQYXJhZ3JhcGgpO1xuXG4gICAgcmV0dXJuIGZvb3RlckRpdjtcbn1cblxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtYWtlSGVhZGVyKCkpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWFrZU1haW5Db250ZW50KCkpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWFrZUZvb3RlcigpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2U7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/loadPage.js\n");

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