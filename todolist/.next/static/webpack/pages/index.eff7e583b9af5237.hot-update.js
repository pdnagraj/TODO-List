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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Index = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), userInput = ref[0], setUserInput = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), todoList = ref1[0], setTodoList = ref1[1];\n    var handleChange = function(e) {\n        e.preventDefault();\n        setUserInput(e.target.value);\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        setTodoList([\n            userInput\n        ].concat(_toConsumableArray(todoList)));\n        setUserInput(\"\");\n    };\n    var handleDelete = function(todo) {\n        // Go through todoList and check if todoItem is not equal to todo and add it to updated arr \n        // index we clicked on matches item found in todoList, do not include it\n        var updatedArr = todoList.filter(function(todoItem) {\n            return todoList.indexOf(todoItem) != todoList.indexOf(todo);\n        });\n        setTodoList(updatedArr);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Next Js Todo List\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CS Career\\\\GitHub Desktop\\\\NextJS projects\\\\TODO-List\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: userInput,\n                        placeholder: true,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CS Career\\\\GitHub Desktop\\\\NextJS projects\\\\TODO-List\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CS Career\\\\GitHub Desktop\\\\NextJS projects\\\\TODO-List\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 91\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CS Career\\\\GitHub Desktop\\\\NextJS projects\\\\TODO-List\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todoList.length >= 1 ? todoList.map(function(todo, idx) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            todo,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function(e) {\n                                    e.preventDefault();\n                                    handleDelete(todo);\n                                },\n                                children: \"delete\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CS Career\\\\GitHub Desktop\\\\NextJS projects\\\\TODO-List\\\\todolist\\\\pages\\\\index.js\",\n                                lineNumber: 43,\n                                columnNumber: 53\n                            }, _this1)\n                        ]\n                    }, idx, true, {\n                        fileName: \"D:\\\\CS Career\\\\GitHub Desktop\\\\NextJS projects\\\\TODO-List\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 32\n                    }, _this1);\n                }) : \"enter a todo item\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CS Career\\\\GitHub Desktop\\\\NextJS projects\\\\TODO-List\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CS Career\\\\GitHub Desktop\\\\NextJS projects\\\\TODO-List\\\\todolist\\\\pages\\\\index.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, _this);\n};\n_s(Index, \"/CBmIaiZPH8FVbq8GBNpEEz7dh4=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7O0FBRTlCLElBQU1DLEtBQUssR0FBRyxXQUFNOzs7SUFFaEIsSUFBa0NELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFKbEQsU0FJb0IsR0FBa0JBLEdBQVksR0FBOUIsRUFKcEIsWUFJa0MsR0FBSUEsR0FBWSxHQUFoQjtJQUM5QixJQUFnQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUxoRCxRQUttQixHQUFpQkEsSUFBWSxHQUE3QixFQUxuQixXQUtnQyxHQUFJQSxJQUFZLEdBQWhCO0lBRTVCLElBQU1NLFlBQVksR0FBRyxTQUFDQyxDQUFDLEVBQUk7UUFDdkJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO1FBQ2xCTCxZQUFZLENBQUNJLENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLENBQUM7S0FDL0I7SUFFRCxJQUFNQyxZQUFZLEdBQUcsU0FBQ0osQ0FBQyxFQUFJO1FBQ3ZCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtRQUVsQkgsV0FBVyxDQUFDO1lBQ1JILFNBQVM7U0FFWixDQUhXLE1BR1gsQ0FERyxtQkFBR0UsUUFBUSxDQUFSQSxDQUNOLENBQUM7UUFFRkQsWUFBWSxDQUFDLEVBQUUsQ0FBQztLQUNuQjtJQUVELElBQU1TLFlBQVksR0FBRyxTQUFDQyxJQUFJLEVBQUk7UUFFMUIsNEZBQTRGO1FBQzVGLHdFQUF3RTtRQUN4RSxJQUFNQyxVQUFVLEdBQUdWLFFBQVEsQ0FBQ1csTUFBTSxDQUFDQyxTQUFBQSxRQUFRO21CQUFJWixRQUFRLENBQUNhLE9BQU8sQ0FBQ0QsUUFBUSxDQUFDLElBQUlaLFFBQVEsQ0FBQ2EsT0FBTyxDQUFDSixJQUFJLENBQUM7U0FBQSxDQUFDO1FBRXBHUixXQUFXLENBQUNTLFVBQVUsQ0FBQztLQUMxQjtJQUdELHFCQUNJLDhEQUFDSSxLQUFHOzswQkFDQSw4REFBQ0MsSUFBRTswQkFBQyxtQkFBaUI7Ozs7O3FCQUFLOzBCQUMxQiw4REFBQ0MsTUFBSTs7a0NBQ0QsOERBQUNDLE9BQUs7d0JBQUNDLElBQUksRUFBQyxNQUFNO3dCQUFDWixLQUFLLEVBQUVSLFNBQVM7d0JBQUVxQixXQUFXO3dCQUFDQyxRQUFRLEVBQUVsQixZQUFZOzs7Ozs2QkFBRztrQ0FBQSw4REFBQ21CLFFBQU07d0JBQUNDLE9BQU8sRUFBRWYsWUFBWTtrQ0FBRSxRQUFNOzs7Ozs2QkFBUzs7Ozs7O3FCQUNySDswQkFDUCw4REFBQ2dCLElBQUU7MEJBRUt2QixRQUFRLENBQUN3QixNQUFNLElBQUUsQ0FBQyxHQUFHeEIsUUFBUSxDQUFDeUIsR0FBRyxDQUFDLFNBQUNoQixJQUFJLEVBQUVpQixHQUFHLEVBQUc7b0JBQzNDLHFCQUFPLDhEQUFDQyxJQUFFOzs0QkFBWWxCLElBQUk7NEJBQUMsR0FBQzswQ0FBQSw4REFBQ1ksUUFBTTtnQ0FBQ0MsT0FBTyxFQUFFLFNBQUNuQixDQUFDLEVBQUk7b0NBQy9DQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtvQ0FDbEJJLFlBQVksQ0FBQ0MsSUFBSSxDQUFDO2lDQUFDOzBDQUFFLFFBQU07Ozs7O3NDQUFTOzt1QkFGeEJpQixHQUFHOzs7OzhCQUUwQjtpQkFDaEQsQ0FBQyxHQUNBLG1CQUFtQjs7Ozs7cUJBRXhCOzs7Ozs7YUFDSCxDQUNUO0NBQ0o7R0FqREs3QixLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUFtRFgsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt1c2VySW5wdXQsIHNldFVzZXJJbnB1dF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFt0b2RvTGlzdCwgc2V0VG9kb0xpc3RdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHNldFVzZXJJbnB1dChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIHNldFRvZG9MaXN0KFtcclxuICAgICAgICAgICAgdXNlcklucHV0LFxyXG4gICAgICAgICAgICAuLi50b2RvTGlzdFxyXG4gICAgICAgIF0pXHJcblxyXG4gICAgICAgIHNldFVzZXJJbnB1dCgnJylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAodG9kbykgPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gR28gdGhyb3VnaCB0b2RvTGlzdCBhbmQgY2hlY2sgaWYgdG9kb0l0ZW0gaXMgbm90IGVxdWFsIHRvIHRvZG8gYW5kIGFkZCBpdCB0byB1cGRhdGVkIGFyciBcclxuICAgICAgICAvLyBpbmRleCB3ZSBjbGlja2VkIG9uIG1hdGNoZXMgaXRlbSBmb3VuZCBpbiB0b2RvTGlzdCwgZG8gbm90IGluY2x1ZGUgaXRcclxuICAgICAgICBjb25zdCB1cGRhdGVkQXJyID0gdG9kb0xpc3QuZmlsdGVyKHRvZG9JdGVtID0+IHRvZG9MaXN0LmluZGV4T2YodG9kb0l0ZW0pICE9IHRvZG9MaXN0LmluZGV4T2YodG9kbykpXHJcblxyXG4gICAgICAgIHNldFRvZG9MaXN0KHVwZGF0ZWRBcnIpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPk5leHQgSnMgVG9kbyBMaXN0PC9oMz5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dXNlcklucHV0fSBwbGFjZWhvbGRlciBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PnN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvTGlzdC5sZW5ndGg+PTEgPyB0b2RvTGlzdC5tYXAoKHRvZG8sIGlkeCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2lkeH0+e3RvZG99IDxidXR0b24gb25DbGljaz17KGUpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlKHRvZG8pfX0+ZGVsZXRlPC9idXR0b24+PC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICA6ICdlbnRlciBhIHRvZG8gaXRlbSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbmRleCIsInVzZXJJbnB1dCIsInNldFVzZXJJbnB1dCIsInRvZG9MaXN0Iiwic2V0VG9kb0xpc3QiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZURlbGV0ZSIsInRvZG8iLCJ1cGRhdGVkQXJyIiwiZmlsdGVyIiwidG9kb0l0ZW0iLCJpbmRleE9mIiwiZGl2IiwiaDMiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsImxlbmd0aCIsIm1hcCIsImlkeCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});