/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_learnacademy_Desktop_portfolio_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectsStyles */ \"./src/components/Projects/ProjectsStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/learnacademy/Desktop/portfolio/portfolio/src/components/Projects/Projects.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Projects = function Projects() {\n  _s();\n\n  var _useState = useState(false),\n      _useState2 = (0,_Users_learnacademy_Desktop_portfolio_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),\n      showModal = _useState2[0],\n      setShowModal = _useState2[1];\n\n  var _useState3 = useState(''),\n      _useState4 = (0,_Users_learnacademy_Desktop_portfolio_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState3, 2),\n      modalImage = _useState4[0],\n      setModalImage = _useState4[1];\n\n  var handleImageClick = function handleImageClick(image) {\n    setModalImage(image);\n    setShowModal(true);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.Section, {\n    nopadding: true,\n    id: \"projects\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.SectionDivider, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.SectionTitle, {\n      main: true,\n      children: \"Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.GridContainer, {\n      children: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.projects.map(function (_ref) {\n        var id = _ref.id,\n            image = _ref.image,\n            title = _ref.title,\n            description = _ref.description,\n            tags = _ref.tags,\n            source = _ref.source,\n            visit = _ref.visit;\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.BlogCard, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onClick: function onClick() {\n              return handleImageClick(image);\n            },\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Img, {\n              src: image\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.TitleContent, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.HeaderThree, {\n              title: true,\n              children: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Hr, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.CardInfo, {\n            children: description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.TitleContent, {\n              children: \"Stack\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.TagList, {\n              children: tags.map(function (tag, i) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Tag, {\n                  children: [tag, \" \"]\n                }, i, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 37,\n                  columnNumber: 19\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.UtilityList, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.ExternalLinks, {\n              href: visit,\n              children: \"Code\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.ExternalLinks, {\n              href: source,\n              children: \"Source\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, _this)]\n        }, id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), showModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Modal, {\n      onClose: function onClose() {\n        return setShowModal(false);\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Img, {\n        src: \"../public/images/1.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Projects, \"fTqlrtg6yRnuCoaiQ1aFZ8wz7mA=\");\n\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanM/Y2Q3OSJdLCJuYW1lcyI6WyJQcm9qZWN0cyIsInVzZVN0YXRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwibW9kYWxJbWFnZSIsInNldE1vZGFsSW1hZ2UiLCJoYW5kbGVJbWFnZUNsaWNrIiwiaW1hZ2UiLCJwcm9qZWN0cyIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRhZ3MiLCJzb3VyY2UiLCJ2aXNpdCIsIm1hcCIsInRhZyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUVhQyxRQUFRLENBQUMsS0FBRCxDQUZyQjtBQUFBO0FBQUEsTUFFZEMsU0FGYztBQUFBLE1BRUhDLFlBRkc7O0FBQUEsbUJBR2VGLFFBQVEsQ0FBQyxFQUFELENBSHZCO0FBQUE7QUFBQSxNQUdkRyxVQUhjO0FBQUEsTUFHRkMsYUFIRTs7QUFLckIsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVc7QUFDbENGLGlCQUFhLENBQUNFLEtBQUQsQ0FBYjtBQUNBSixnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNELEdBSEQ7O0FBS0Esc0JBQ0UsOERBQUMsNkRBQUQ7QUFBUyxhQUFTLE1BQWxCO0FBQW1CLE1BQUUsRUFBQyxVQUF0QjtBQUFBLDRCQUNFLDhEQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLGtFQUFEO0FBQWMsVUFBSSxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UsOERBQUMsMERBQUQ7QUFBQSxnQkFDR0ssOERBQUEsQ0FBYTtBQUFBLFlBQUdDLEVBQUgsUUFBR0EsRUFBSDtBQUFBLFlBQU9GLEtBQVAsUUFBT0EsS0FBUDtBQUFBLFlBQWNHLEtBQWQsUUFBY0EsS0FBZDtBQUFBLFlBQXFCQyxXQUFyQixRQUFxQkEsV0FBckI7QUFBQSxZQUFrQ0MsSUFBbEMsUUFBa0NBLElBQWxDO0FBQUEsWUFBd0NDLE1BQXhDLFFBQXdDQSxNQUF4QztBQUFBLFlBQWdEQyxLQUFoRCxRQUFnREEsS0FBaEQ7QUFBQSw0QkFDWiw4REFBQyxxREFBRDtBQUFBLGtDQUNFO0FBQUssbUJBQU8sRUFBRTtBQUFBLHFCQUFNUixnQkFBZ0IsQ0FBQ0MsS0FBRCxDQUF0QjtBQUFBLGFBQWQ7QUFBQSxtQ0FDRSw4REFBQyxnREFBRDtBQUFLLGlCQUFHLEVBQUVBO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRSw4REFBQyx5REFBRDtBQUFBLG9DQUNFLDhEQUFDLHdEQUFEO0FBQWEsbUJBQUssTUFBbEI7QUFBQSx3QkFBb0JHO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQVFFLDhEQUFDLHFEQUFEO0FBQUEsc0JBQVdDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixlQVNFO0FBQUEsb0NBQ0UsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSw4REFBQyxvREFBRDtBQUFBLHdCQUNHQyxJQUFJLENBQUNHLEdBQUwsQ0FBUyxVQUFDQyxHQUFELEVBQU1DLENBQU47QUFBQSxvQ0FDUiw4REFBQyxnREFBRDtBQUFBLDZCQUFjRCxHQUFkO0FBQUEsbUJBQVVDLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEUTtBQUFBLGVBQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURixlQWlCRSw4REFBQyx3REFBRDtBQUFBLG9DQUNFLDhEQUFDLDBEQUFEO0FBQWUsa0JBQUksRUFBRUgsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSw4REFBQywwREFBRDtBQUFlLGtCQUFJLEVBQUVELE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQkY7QUFBQSxXQUFlSixFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFk7QUFBQSxPQUFiO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLEVBNkJHUCxTQUFTLGlCQUNSLDhEQUFDLEtBQUQ7QUFBTyxhQUFPLEVBQUU7QUFBQSxlQUFNQyxZQUFZLENBQUMsS0FBRCxDQUFsQjtBQUFBLE9BQWhCO0FBQUEsNkJBQ0UsOERBQUMsZ0RBQUQ7QUFBSyxXQUFHLEVBQUU7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTlCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFDRCxDQS9DRDs7R0FBTUgsUTs7S0FBQUEsUTtBQWlETiwrREFBZUEsUUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQmxvZ0NhcmQsIENhcmRJbmZvLCBFeHRlcm5hbExpbmtzLCBHcmlkQ29udGFpbmVyLCBIZWFkZXJUaHJlZSwgSHIsIFRhZywgVGFnTGlzdCwgVGl0bGVDb250ZW50LCBVdGlsaXR5TGlzdCwgSW1nIH0gZnJvbSAnLi9Qcm9qZWN0c1N0eWxlcyc7XG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcblxuXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcblxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbW9kYWxJbWFnZSwgc2V0TW9kYWxJbWFnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlSW1hZ2VDbGljayA9IChpbWFnZSkgPT4ge1xuICAgIHNldE1vZGFsSW1hZ2UoaW1hZ2UpO1xuICAgIHNldFNob3dNb2RhbCh0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uIG5vcGFkZGluZyBpZD1cInByb2plY3RzXCI+XG4gICAgICA8U2VjdGlvbkRpdmlkZXIgLz5cbiAgICAgIDxTZWN0aW9uVGl0bGUgbWFpbj5Qcm9qZWN0czwvU2VjdGlvblRpdGxlPlxuICAgICAgPEdyaWRDb250YWluZXI+XG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKHsgaWQsIGltYWdlLCB0aXRsZSwgZGVzY3JpcHRpb24sIHRhZ3MsIHNvdXJjZSwgdmlzaXQgfSkgPT4gKFxuICAgICAgICAgIDxCbG9nQ2FyZCBrZXk9e2lkfT5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaGFuZGxlSW1hZ2VDbGljayhpbWFnZSl9PlxuICAgICAgICAgICAgICA8SW1nIHNyYz17aW1hZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxUaXRsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxIZWFkZXJUaHJlZSB0aXRsZT57dGl0bGV9PC9IZWFkZXJUaHJlZT5cbiAgICAgICAgICAgICAgPEhyIC8+XG4gICAgICAgICAgICA8L1RpdGxlQ29udGVudD5cbiAgICAgICAgICAgIDxDYXJkSW5mbz57ZGVzY3JpcHRpb259PC9DYXJkSW5mbz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxUaXRsZUNvbnRlbnQ+U3RhY2s8L1RpdGxlQ29udGVudD5cbiAgICAgICAgICAgICAgPFRhZ0xpc3Q+XG4gICAgICAgICAgICAgICAge3RhZ3MubWFwKCh0YWcsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUYWcga2V5PXtpfT57dGFnfSA8L1RhZz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9UYWdMaXN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8VXRpbGl0eUxpc3Q+XG4gICAgICAgICAgICAgIDxFeHRlcm5hbExpbmtzIGhyZWY9e3Zpc2l0fT5Db2RlPC9FeHRlcm5hbExpbmtzPlxuICAgICAgICAgICAgICA8RXh0ZXJuYWxMaW5rcyBocmVmPXtzb3VyY2V9PlNvdXJjZTwvRXh0ZXJuYWxMaW5rcz5cbiAgICAgICAgICAgIDwvVXRpbGl0eUxpc3Q+XG4gICAgICAgICAgPC9CbG9nQ2FyZD5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICB7c2hvd01vZGFsICYmIChcbiAgICAgICAgPE1vZGFsIG9uQ2xvc2U9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9PlxuICAgICAgICAgIDxJbWcgc3JjPXtcIi4uL3B1YmxpYy9pbWFnZXMvMS5wbmdcIn0gLz5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgICl9XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Projects/Projects.js\n");

/***/ })

});