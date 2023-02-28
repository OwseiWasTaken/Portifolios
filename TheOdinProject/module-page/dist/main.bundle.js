"use strict";
(self["webpackChunkmodule_page"] = self["webpackChunkmodule_page"] || []).push([["main"],{

/***/ "./src/color.js":
/*!**********************!*\
  !*** ./src/color.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ changeColor)
/* harmony export */ });
const btn = document.createElement('button')
btn.innerText = 'click me'
btn.addEventListener("click", changeColor)

function changeColor() {
    document.body.classList.toggle('background')

    return btn
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./src/color.js");


document.body.appendChild((0,_color__WEBPACK_IMPORTED_MODULE_0__["default"])())

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUmlDO0FBQ2pDO0FBQ0EsMEJBQTBCLGtEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9kdWxlLXBhZ2UvLi9zcmMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vbW9kdWxlLXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuYnRuLmlubmVyVGV4dCA9ICdjbGljayBtZSdcclxuYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VDb2xvcilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYW5nZUNvbG9yKCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdiYWNrZ3JvdW5kJylcclxuXHJcbiAgICByZXR1cm4gYnRuXHJcbn0iLCJpbXBvcnQgY2hhbmdlQ29sb3IgZnJvbSAnLi9jb2xvcidcclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2hhbmdlQ29sb3IoKSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=