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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Index = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), userInput = ref[0], setUserInput = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), todolist = ref1[0], setTodoList = ref1[1];\n    var handleChange = function(e) {\n        e.preventDefault();\n        setUserInput(e.target.value);\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        setTodoList([\n            userInput\n        ].concat(_toConsumableArray(todolist)));\n    };\n    var handleDelete = function(todo) {\n        // Go through todoList and check if todoItem is not equal to todo and add it to updated arr \n        // index we clicked on matches item\n        var updatedArr = todoList.filter(function(todoItem) {\n            return todoList.indexOf(todoItem) != todoList.indexOf(todo);\n        });\n        setTodoList = updatedArr;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Next Js Todo List\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CS Career\\\\GitHub Desktop\\\\NextJS projects\\\\TODO-List\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CS Career\\\\GitHub Desktop\\\\NextJS projects\\\\TODO-List\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CS Career\\\\GitHub Desktop\\\\NextJS projects\\\\TODO-List\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 36,\n                        columnNumber: 61\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CS Career\\\\GitHub Desktop\\\\NextJS projects\\\\TODO-List\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todolist.length >= 1 ? todolist.map(function(todo, idx) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            todo,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"delete\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CS Career\\\\GitHub Desktop\\\\NextJS projects\\\\TODO-List\\\\todolist\\\\pages\\\\index.js\",\n                                lineNumber: 41,\n                                columnNumber: 53\n                            }, _this1)\n                        ]\n                    }, idx, true, {\n                        fileName: \"D:\\\\CS Career\\\\GitHub Desktop\\\\NextJS projects\\\\TODO-List\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 32\n                    }, _this1);\n                }) : \"enter a todo item\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CS Career\\\\GitHub Desktop\\\\NextJS projects\\\\TODO-List\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CS Career\\\\GitHub Desktop\\\\NextJS projects\\\\TODO-List\\\\todolist\\\\pages\\\\index.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, _this);\n};\n_s(Index, \"/CBmIaiZPH8FVbq8GBNpEEz7dh4=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7O0FBRTlCLElBQU1DLEtBQUssR0FBRyxXQUFNOzs7SUFFaEIsSUFBa0NELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFKbEQsU0FJb0IsR0FBa0JBLEdBQVksR0FBOUIsRUFKcEIsWUFJa0MsR0FBSUEsR0FBWSxHQUFoQjtJQUM5QixJQUFnQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUxoRCxRQUttQixHQUFpQkEsSUFBWSxHQUE3QixFQUxuQixXQUtnQyxHQUFJQSxJQUFZLEdBQWhCO0lBRTVCLElBQU1NLFlBQVksR0FBRyxTQUFDQyxDQUFDLEVBQUk7UUFDdkJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO1FBQ2xCTCxZQUFZLENBQUNJLENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLENBQUM7S0FDL0I7SUFFRCxJQUFNQyxZQUFZLEdBQUcsU0FBQ0osQ0FBQyxFQUFJO1FBQ3ZCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtRQUVsQkgsV0FBVyxDQUFDO1lBQ1JILFNBQVM7U0FFWixDQUhXLE1BR1gsQ0FERyxtQkFBR0UsUUFBUSxDQUFSQSxDQUNOLENBQUM7S0FDTDtJQUVELElBQU1RLFlBQVksR0FBRyxTQUFDQyxJQUFJLEVBQUk7UUFFMUIsNEZBQTRGO1FBQzVGLG1DQUFtQztRQUNuQyxJQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxTQUFBQSxRQUFRO21CQUFJRixRQUFRLENBQUNHLE9BQU8sQ0FBQ0QsUUFBUSxDQUFDLElBQUlGLFFBQVEsQ0FBQ0csT0FBTyxDQUFDTCxJQUFJLENBQUM7U0FBQSxDQUFDO1FBRXBHUixXQUFXLEdBQUdTLFVBQVU7S0FDM0I7SUFHRCxxQkFDSSw4REFBQ0ssS0FBRzs7MEJBQ0EsOERBQUNDLElBQUU7MEJBQUMsbUJBQWlCOzs7OztxQkFBSzswQkFDMUIsOERBQUNDLE1BQUk7O2tDQUNELDhEQUFDQyxPQUFLO3dCQUFDQyxJQUFJLEVBQUMsTUFBTTt3QkFBQ0MsUUFBUSxFQUFFbEIsWUFBWTs7Ozs7NkJBQUc7a0NBQUEsOERBQUNtQixRQUFNO3dCQUFDQyxPQUFPLEVBQUVmLFlBQVk7a0NBQUUsUUFBTTs7Ozs7NkJBQVM7Ozs7OztxQkFDdkY7MEJBQ1AsOERBQUNnQixJQUFFOzBCQUVLdkIsUUFBUSxDQUFDd0IsTUFBTSxJQUFFLENBQUMsR0FBR3hCLFFBQVEsQ0FBQ3lCLEdBQUcsQ0FBQyxTQUFDaEIsSUFBSSxFQUFFaUIsR0FBRyxFQUFHO29CQUMzQyxxQkFBTyw4REFBQ0MsSUFBRTs7NEJBQVlsQixJQUFJOzRCQUFDLEdBQUM7MENBQUEsOERBQUNZLFFBQU07MENBQUMsUUFBTTs7Ozs7c0NBQVM7O3VCQUFuQ0ssR0FBRzs7Ozs4QkFBcUM7aUJBQzNELENBQUMsR0FDQSxtQkFBbUI7Ozs7O3FCQUV4Qjs7Ozs7O2FBQ0gsQ0FDVDtDQUNKO0dBN0NLN0IsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBK0NYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdXNlcklucHV0LCBzZXRVc2VySW5wdXRdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbdG9kb2xpc3QsIHNldFRvZG9MaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBzZXRUb2RvTGlzdChbXHJcbiAgICAgICAgICAgIHVzZXJJbnB1dCxcclxuICAgICAgICAgICAgLi4udG9kb2xpc3RcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9ICh0b2RvKSA9PntcclxuICAgICAgICBcclxuICAgICAgICAvLyBHbyB0aHJvdWdoIHRvZG9MaXN0IGFuZCBjaGVjayBpZiB0b2RvSXRlbSBpcyBub3QgZXF1YWwgdG8gdG9kbyBhbmQgYWRkIGl0IHRvIHVwZGF0ZWQgYXJyIFxyXG4gICAgICAgIC8vIGluZGV4IHdlIGNsaWNrZWQgb24gbWF0Y2hlcyBpdGVtXHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEFyciA9IHRvZG9MaXN0LmZpbHRlcih0b2RvSXRlbSA9PiB0b2RvTGlzdC5pbmRleE9mKHRvZG9JdGVtKSAhPSB0b2RvTGlzdC5pbmRleE9mKHRvZG8pKVxyXG5cclxuICAgICAgICBzZXRUb2RvTGlzdCA9IHVwZGF0ZWRBcnJcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+TmV4dCBKcyBUb2RvIExpc3Q8L2gzPlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz48YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+c3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9saXN0Lmxlbmd0aD49MSA/IHRvZG9saXN0Lm1hcCgodG9kbywgaWR4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aWR4fT57dG9kb30gPGJ1dHRvbj5kZWxldGU8L2J1dHRvbj48L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIDogJ2VudGVyIGEgdG9kbyBpdGVtJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkluZGV4IiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwidG9kb2xpc3QiLCJzZXRUb2RvTGlzdCIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlRGVsZXRlIiwidG9kbyIsInVwZGF0ZWRBcnIiLCJ0b2RvTGlzdCIsImZpbHRlciIsInRvZG9JdGVtIiwiaW5kZXhPZiIsImRpdiIsImgzIiwiZm9ybSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayIsInVsIiwibGVuZ3RoIiwibWFwIiwiaWR4IiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});