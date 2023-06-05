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

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction homePage() {\n    const mainDiv = document.createElement('div');\n    mainDiv.classList.add('main');\n\n    const mainHeading = document.createElement('h1');\n    mainHeading.textContent = 'Odin Restaurant';\n    mainDiv.appendChild(mainHeading);\n\n    const mainParagraph = document.createElement('p');\n    mainParagraph.innerHTML = `Odin restaurant is proud to be the premier makers\n                               of Adrwahkah and other cuisine for nuclear \n                               powered lifeforms since 2173. <br />`;\n    mainDiv.appendChild(mainParagraph);\n\n    const mainFigure = document.createElement('figure');\n\n    const mainFigureImg = document.createElement('img');\n    mainFigureImg.setAttribute('src', 'picture.png');\n    mainFigureImg.setAttribute('alt', 'Picture of Adrwahkah');\n    mainFigure.appendChild(mainFigureImg);\n\n    const mainFigureCaption = document.createElement('figcaption');\n    mainFigureCaption.textContent = 'Picture of Adrwahkah';\n    mainFigure.appendChild(mainFigureCaption);\n\n    mainDiv.appendChild(mainFigure);\n\n    return mainDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZVBhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaG9tZVBhZ2UuanM/OWExMiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBob21lUGFnZSgpIHtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbiAgICBjb25zdCBtYWluSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbWFpbkhlYWRpbmcudGV4dENvbnRlbnQgPSAnT2RpbiBSZXN0YXVyYW50JztcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1haW5IZWFkaW5nKTtcblxuICAgIGNvbnN0IG1haW5QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWFpblBhcmFncmFwaC5pbm5lckhUTUwgPSBgT2RpbiByZXN0YXVyYW50IGlzIHByb3VkIHRvIGJlIHRoZSBwcmVtaWVyIG1ha2Vyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mIEFkcndhaGthaCBhbmQgb3RoZXIgY3Vpc2luZSBmb3IgbnVjbGVhciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3dlcmVkIGxpZmVmb3JtcyBzaW5jZSAyMTczLiA8YnIgLz5gO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobWFpblBhcmFncmFwaCk7XG5cbiAgICBjb25zdCBtYWluRmlndXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmlndXJlJyk7XG5cbiAgICBjb25zdCBtYWluRmlndXJlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWFpbkZpZ3VyZUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdwaWN0dXJlLnBuZycpO1xuICAgIG1haW5GaWd1cmVJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnUGljdHVyZSBvZiBBZHJ3YWhrYWgnKTtcbiAgICBtYWluRmlndXJlLmFwcGVuZENoaWxkKG1haW5GaWd1cmVJbWcpO1xuXG4gICAgY29uc3QgbWFpbkZpZ3VyZUNhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWdjYXB0aW9uJyk7XG4gICAgbWFpbkZpZ3VyZUNhcHRpb24udGV4dENvbnRlbnQgPSAnUGljdHVyZSBvZiBBZHJ3YWhrYWgnO1xuICAgIG1haW5GaWd1cmUuYXBwZW5kQ2hpbGQobWFpbkZpZ3VyZUNhcHRpb24pO1xuXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtYWluRmlndXJlKTtcblxuICAgIHJldHVybiBtYWluRGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBob21lUGFnZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/homePage.js\n");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n\n\nfunction makeHeader() {\n    const PAGES = [\n        [_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"], 'Home'],\n        [_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"], 'Contact'],\n        [_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"], 'Menu'],\n    ];\n\n    const headerUl = document.createElement('ul');\n    headerUl.classList.add('header');\n\n    for (const page of PAGES) {\n        const listItem = document.createElement('li');\n        const linkItem = document.createElement('a');\n        linkItem.textContent = page[1];\n        linkItem.href = '#';\n\n        linkItem.addEventListener('click', () => {\n            changePage(page[0]);\n        });\n\n        listItem.appendChild(linkItem);\n        headerUl.appendChild(listItem);\n    }\n\n    return headerUl;\n}\n\nfunction makeFooter() {\n    const footerDiv = document.createElement('div');\n    footerDiv.classList.add('footer');\n\n    const footerParagraph = document.createElement('p');\n    footerParagraph.textContent = '\\u00A9 2023 Oscar Robertson';\n    footerDiv.appendChild(footerParagraph);\n\n    return footerDiv;\n}\n\nfunction loadPage() {\n    const contentDiv = document.getElementById('content');\n    contentDiv.appendChild(makeHeader());\n    contentDiv.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    contentDiv.appendChild(makeFooter());\n}\n\nfunction changePage(pageFunc) {\n    const contentDiv = document.getElementById('content');\n    const mainDiv = contentDiv.getElementsByClassName('main');\n    contentDiv.removeChild(mainDiv);\n    contentDiv.appendChild(pageFunc());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9hZFBhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0M7O0FBRWxDO0FBQ0E7QUFDQSxTQUFTLGlEQUFRO0FBQ2pCLFNBQVMsaURBQVE7QUFDakIsU0FBUyxpREFBUTtBQUNqQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxREFBUTtBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbG9hZFBhZ2UuanM/NDQxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi9ob21lUGFnZSc7XG5cbmZ1bmN0aW9uIG1ha2VIZWFkZXIoKSB7XG4gICAgY29uc3QgUEFHRVMgPSBbXG4gICAgICAgIFtob21lUGFnZSwgJ0hvbWUnXSxcbiAgICAgICAgW2hvbWVQYWdlLCAnQ29udGFjdCddLFxuICAgICAgICBbaG9tZVBhZ2UsICdNZW51J10sXG4gICAgXTtcblxuICAgIGNvbnN0IGhlYWRlclVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBoZWFkZXJVbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgIGZvciAoY29uc3QgcGFnZSBvZiBQQUdFUykge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IGxpbmtJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBsaW5rSXRlbS50ZXh0Q29udGVudCA9IHBhZ2VbMV07XG4gICAgICAgIGxpbmtJdGVtLmhyZWYgPSAnIyc7XG5cbiAgICAgICAgbGlua0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VQYWdlKHBhZ2VbMF0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaW5rSXRlbSk7XG4gICAgICAgIGhlYWRlclVsLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGVhZGVyVWw7XG59XG5cbmZ1bmN0aW9uIG1ha2VGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgZm9vdGVyUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb3RlclBhcmFncmFwaC50ZXh0Q29udGVudCA9ICdcXHUwMEE5IDIwMjMgT3NjYXIgUm9iZXJ0c29uJztcbiAgICBmb290ZXJEaXYuYXBwZW5kQ2hpbGQoZm9vdGVyUGFyYWdyYXBoKTtcblxuICAgIHJldHVybiBmb290ZXJEaXY7XG59XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWFrZUhlYWRlcigpKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhvbWVQYWdlKCkpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWFrZUZvb3RlcigpKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlUGFnZShwYWdlRnVuYykge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IG1haW5EaXYgPSBjb250ZW50RGl2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW4nKTtcbiAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKG1haW5EaXYpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocGFnZUZ1bmMoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/loadPage.js\n");

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