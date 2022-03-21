/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody, html {\n    height: 100%;\n}\n\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: auto 1fr auto;\n    height: 100vh;\n    font-size: 10px;\n}\n\n/* HEADER */\n\nheader {\n    background-color: #457B9D;\n    padding: 50px 20px;\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    width: 100vw;\n}\n\nheader h1 {\n    font-size: 3.5rem;\n    height: 100%;\n    color: white;\n}\n\nmain {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    width: 100vw;\n}\n\n/* SIDEBAR */\n\nnav {\n    background-color: #F1FAEE;\n    grid-column: 1 / 2;\n    width: 300px;\n}\n\n.default-projects > ul {\n    list-style: none;\n}\n\n.default-projects > ul > li {\n    font-size: 1.5rem;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 25px 0 25px 25px;\n    width: 100%;\n}\n\n.projectsHeading {\n    font-size: 2rem;\n    margin-left: 25px;\n    margin-bottom: 20px;\n}\n\n.projects > ul {\n    list-style: none;\n} \n\n.project {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 25px 25px 25px 25px;\n    font-size: 1.25rem;\n    cursor: pointer;\n}\n\n.project:hover {\n    background-color: #ceeec4;\n}\n\n.activeProject {\n    background-color: #ceeec4;\n}\n\n.project > div {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    width: 100%;\n}\n\n.projects  button {\n    font-size: 1.25rem;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 25px 0 25px 25px;\n    width: 100%;\n    cursor: pointer;\n}\n\n#openNewProjectModalBtn {\n    border: none;\n    background-color: #F1FAEE;\n}\n\n#openNewProjectModalBtn:hover {\n    background-color: #ceeec4;\n}\n\n.delete:hover {\n    color: red;\n    cursor: pointer;\n}\n\n\n/* MAIN CONTENT */\n\n#content {\n    grid-column: 2 / 3;\n    width: calc(100vw - 300px);\n    padding: 20px;\n}\n\n#content h2 {\n    font-size: 2.25rem;\n    margin-bottom: 25px;\n}\n\n#tasksList {\n    list-style: none;\n}\n\n.task {\n    background-color: #2a52be;\n    border: 1px solid black;\n    border-radius: 20px;\n    padding: 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    margin-bottom: 20px;\n    color: white;\n}\n\n.taskLeftSide {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n}\n\n.taskRightSide {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.taskText {\n    display: flex;\n    flex-direction: column;\n}\n\n.taskText input {\n    border: none;\n    background: none;\n    font-size: 1.25rem;\n    color: white;\n}\n\n\n.taskRightSide input {\n    color: white;\n    border: none;\n    background: none;\n    font-size: 1rem;\n}\n\n.taskText input + input {\n    font-size: 0.8rem;\n}\n\n.taskDueDate {\n    font-size: .9rem;\n    border: 1px solid black;\n    padding: 5px;\n    border-radius: 10px;\n    width: 100px;\n    text-align: center;\n}\n\n.taskCompleted {\n    background-color: #6d8bdf;\n}\n\n.taskCompleted > .taskLeftSide > .taskText > input[type=text] {\n    text-decoration: line-through;\n    text-decoration-color: black;\n    color: #eee;\n}\n\n\n#openNewTaskModalBtn {\n    border-radius: 50%;\n    border: none;\n    display: none;\n    background-color: white;\n    font-size: 3.5rem;\n    position: fixed;\n    bottom: 40px;\n    right: 40px;\n    cursor: pointer;\n}\n\n/* FOOTER */\n\nfooter {\n    width: 100vw;\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n    background-color: #1D3557;\n    padding: 10px;\n}\n\nfooter p {\n    color: #F1FAEE;\n    text-align: center;\n}\n\n/* NEW TODO MODAL */\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, .5);\n}\n\n.modal-content {\n    background-color: #1D3557;\n    margin: 20% auto;\n    width: 450px;\n    border-radius: 7px;\n    border: none;\n}\n\n.modal-header {\n    background-color: #457B9D;\n    padding: 20px;\n    color: white;\n    font-size: 1.25rem;\n    border-top-right-radius: 7px;\n    border-top-left-radius: 7px;\n    border: none;\n}\n\n.modal-closeBtn {\n    float: right;\n     font-size: 1.5rem;\n}\n\n.modal-closeBtn:hover, .modal-closeBtn:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.modal-body {\n    padding: 20px;\n}\n\n.modal-form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-size: 1rem;\n}\n\n#newTaskTitle {\n    font-size: 1rem;\n    border: 1px solid lightgray;\n    border-radius: 3px;\n} \n\n#newTaskDescription {\n    resize: none;\n    font-size: 1rem;\n    border: 1px solid lightgray;\n    border-radius: 3px;\n}\n\n.modal-form-bottom {\n    display: flex;\n    justify-content: space-between;\n    list-style: none;\n}\n\n.modal-form-bottom li {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.modal-form-bottom li label {\n    color: white;\n}\n\n#newTaskDate {\n    font-size: 0.9rem;\n    border: none;\n    border-radius: 3px;\n}\n\n.starCheckbox {\n    visibility:hidden;\n    font-size: 1rem;\n    cursor:pointer;\n}\n\n.starCheckbox::before {\n   content: \"star_outline\";\n   position: absolute;\n   visibility:visible;\n   color: white;\n}\n\n.starCheckbox:checked::before {\n   content: \"star\";\n   position: absolute;\n   color: yellow;\n}\n\n\n#addNewTaskBtn {\n    border: none;\n    padding: 5px 10px;\n    background-color: #457B9D;\n    color: white;\n    border-radius: 7px;\n    font-size: 1rem;\n}\n\n/* NEW PROJECT MODAL */\n\n#newProjectTitle {\n    font-size: 1rem;\n}\n\n#addNewProjectBtn {\n    width: 150px;\n    padding: 5px 10px;\n    border: none;\n    border-radius: 7px;\n    background-color: #457B9D;\n    color: white;\n    font-size: 1rem;\n    align-self: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody, html {\n    height: 100%;\n}\n\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: auto 1fr auto;\n    height: 100vh;\n    font-size: 10px;\n}\n\n/* HEADER */\n\nheader {\n    background-color: #457B9D;\n    padding: 50px 20px;\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    width: 100vw;\n}\n\nheader h1 {\n    font-size: 3.5rem;\n    height: 100%;\n    color: white;\n}\n\nmain {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    width: 100vw;\n}\n\n/* SIDEBAR */\n\nnav {\n    background-color: #F1FAEE;\n    grid-column: 1 / 2;\n    width: 300px;\n}\n\n.default-projects > ul {\n    list-style: none;\n}\n\n.default-projects > ul > li {\n    font-size: 1.5rem;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 25px 0 25px 25px;\n    width: 100%;\n}\n\n.projectsHeading {\n    font-size: 2rem;\n    margin-left: 25px;\n    margin-bottom: 20px;\n}\n\n.projects > ul {\n    list-style: none;\n} \n\n.project {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 25px 25px 25px 25px;\n    font-size: 1.25rem;\n    cursor: pointer;\n}\n\n.project:hover {\n    background-color: #ceeec4;\n}\n\n.activeProject {\n    background-color: #ceeec4;\n}\n\n.project > div {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    width: 100%;\n}\n\n.projects  button {\n    font-size: 1.25rem;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 25px 0 25px 25px;\n    width: 100%;\n    cursor: pointer;\n}\n\n#openNewProjectModalBtn {\n    border: none;\n    background-color: #F1FAEE;\n}\n\n#openNewProjectModalBtn:hover {\n    background-color: #ceeec4;\n}\n\n.delete:hover {\n    color: red;\n    cursor: pointer;\n}\n\n\n/* MAIN CONTENT */\n\n#content {\n    grid-column: 2 / 3;\n    width: calc(100vw - 300px);\n    padding: 20px;\n}\n\n#content h2 {\n    font-size: 2.25rem;\n    margin-bottom: 25px;\n}\n\n#tasksList {\n    list-style: none;\n}\n\n.task {\n    background-color: #2a52be;\n    border: 1px solid black;\n    border-radius: 20px;\n    padding: 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    margin-bottom: 20px;\n    color: white;\n}\n\n.taskLeftSide {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n}\n\n.taskRightSide {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.taskText {\n    display: flex;\n    flex-direction: column;\n}\n\n.taskText input {\n    border: none;\n    background: none;\n    font-size: 1.25rem;\n    color: white;\n}\n\n\n.taskRightSide input {\n    color: white;\n    border: none;\n    background: none;\n    font-size: 1rem;\n}\n\n.taskText input + input {\n    font-size: 0.8rem;\n}\n\n.taskDueDate {\n    font-size: .9rem;\n    border: 1px solid black;\n    padding: 5px;\n    border-radius: 10px;\n    width: 100px;\n    text-align: center;\n}\n\n.taskCompleted {\n    background-color: #6d8bdf;\n}\n\n.taskCompleted > .taskLeftSide > .taskText > input[type=text] {\n    text-decoration: line-through;\n    text-decoration-color: black;\n    color: #eee;\n}\n\n\n#openNewTaskModalBtn {\n    border-radius: 50%;\n    border: none;\n    display: none;\n    background-color: white;\n    font-size: 3.5rem;\n    position: fixed;\n    bottom: 40px;\n    right: 40px;\n    cursor: pointer;\n}\n\n/* FOOTER */\n\nfooter {\n    width: 100vw;\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n    background-color: #1D3557;\n    padding: 10px;\n}\n\nfooter p {\n    color: #F1FAEE;\n    text-align: center;\n}\n\n/* NEW TODO MODAL */\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, .5);\n}\n\n.modal-content {\n    background-color: #1D3557;\n    margin: 20% auto;\n    width: 450px;\n    border-radius: 7px;\n    border: none;\n}\n\n.modal-header {\n    background-color: #457B9D;\n    padding: 20px;\n    color: white;\n    font-size: 1.25rem;\n    border-top-right-radius: 7px;\n    border-top-left-radius: 7px;\n    border: none;\n}\n\n.modal-closeBtn {\n    float: right;\n     font-size: 1.5rem;\n}\n\n.modal-closeBtn:hover, .modal-closeBtn:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.modal-body {\n    padding: 20px;\n}\n\n.modal-form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-size: 1rem;\n}\n\n#newTaskTitle {\n    font-size: 1rem;\n    border: 1px solid lightgray;\n    border-radius: 3px;\n} \n\n#newTaskDescription {\n    resize: none;\n    font-size: 1rem;\n    border: 1px solid lightgray;\n    border-radius: 3px;\n}\n\n.modal-form-bottom {\n    display: flex;\n    justify-content: space-between;\n    list-style: none;\n}\n\n.modal-form-bottom li {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.modal-form-bottom li label {\n    color: white;\n}\n\n#newTaskDate {\n    font-size: 0.9rem;\n    border: none;\n    border-radius: 3px;\n}\n\n.starCheckbox {\n    visibility:hidden;\n    font-size: 1rem;\n    cursor:pointer;\n}\n\n.starCheckbox::before {\n   content: \"star_outline\";\n   position: absolute;\n   visibility:visible;\n   color: white;\n}\n\n.starCheckbox:checked::before {\n   content: \"star\";\n   position: absolute;\n   color: yellow;\n}\n\n\n#addNewTaskBtn {\n    border: none;\n    padding: 5px 10px;\n    background-color: #457B9D;\n    color: white;\n    border-radius: 7px;\n    font-size: 1rem;\n}\n\n/* NEW PROJECT MODAL */\n\n#newProjectTitle {\n    font-size: 1rem;\n}\n\n#addNewProjectBtn {\n    width: 150px;\n    padding: 5px 10px;\n    border: none;\n    border-radius: 7px;\n    background-color: #457B9D;\n    color: white;\n    font-size: 1rem;\n    align-self: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


//Project Class
function createProject(title) {
    return {
        title,
        tasks: [],
        addTask(task) {
            this.tasks.push(task);
        },
        deleteTask(el) {
            el.parentElement.parentElement.remove();
        },
        deleteTaskFromList(taskTitle) {
            allProjects.forEach((project) => {
                if (activeProject.title === project.title) {
                    project.tasks.forEach((task, index) => {
                        if (task.title === taskTitle) {
                            project.tasks.splice(index, 1);
                        }
                    })
                }
            })
        }
    }
}

//Task Class
function createTask(title, description, dueDate, priority, project) {
    return {
        title,
        description,
        dueDate,
        priority,
        completed: false,
        project
    }
}

//todolist Class
function todolist() {

    return {
        addProjectToList(project) {
            const projectsList = document.getElementById('projectsList');

            const projectBtn = document.createElement('li');
            projectBtn.classList.add('project');

            const projectBtnDiv = document.createElement('div');

            const projectBtnIcon = document.createElement('span');
            projectBtnIcon.innerText = 'list';
            projectBtnIcon.classList.add('material-icons-outlined');
            projectBtnDiv.appendChild(projectBtnIcon);

            const projectTitle = document.createElement('span');
            projectTitle.innerText = project.title;
            projectBtnDiv.appendChild(projectTitle);

            const projectDeleteBtn = document.createElement('span');
            projectDeleteBtn.innerText = 'close';
            projectDeleteBtn.classList.add('material-icons-outlined');
            projectDeleteBtn.classList.add('delete');

            projectBtn.appendChild(projectBtnDiv);
            projectBtn.appendChild(projectDeleteBtn);

            projectsList.appendChild(projectBtn);


            projectBtn.addEventListener('click', openProject);
        },

        deleteProject(el) {
            el.parentElement.remove();
        },

        deleteProjectFromList(title) {

            allProjects.forEach((project, index) => {
                if (project.title === title) {
                    allProjects.splice(index, 1);
                }
            })
        }

    }
}

const myTodolist = todolist();
let activeProject;
//Store Class

let allProjects = [];
//Event: Display Project;

// document.addEventListener('DOMContentLoaded', myTodolist.displayProjects);

//Event: Add Project
document.getElementById('newProjectModal').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('newProjectTitle').value;

    const project = createProject(title);

    myTodolist.addProjectToList(project);

    allProjects.push(project);

    closeProjectModal();
})

//Event: Opening a Project

function openProject(e) {

    activeProject = allProjects.filter(checkProjectTitle)[0];

    function checkProjectTitle(project) {
        return project.title === e.currentTarget.firstElementChild.lastElementChild.innerText;
    }

    const projectTitle = document.getElementById('projectTitle');
    projectTitle.innerText = activeProject.title;
    const openNewTaskModalBtn = document.getElementById('openNewTaskModalBtn');
    openNewTaskModalBtn.style.display = 'block';

    showActiveProject(e);


    renderTasks();

    console.log(activeProject.tasks)
}

// Show Active Project 
function showActiveProject(e) {
    let projects = Array.from(document.querySelectorAll('.project'));
    projects.forEach((project) => {
        project.classList.remove('activeProject');
    })
    e.currentTarget.classList.add('activeProject')
}


//Event: Remove Project

document.getElementById('projectsList').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        myTodolist.deleteProject(e.target);

        myTodolist.deleteProjectFromList(e.target.previousElementSibling.lastElementChild.textContent);
    }
})




//Event: Add Task
const openNewTaskModalBtn = document.getElementById('openNewTaskModalBtn');

openNewTaskModalBtn.addEventListener('click', openTaskModal);


document.getElementById('newTaskModal').addEventListener('submit', (e) => {
    e.preventDefault();

    const tasksList = document.getElementById('tasksList');
    clearElements(tasksList);

    const newTaskTitle = document.getElementById('newTaskTitle');
    const newTaskDescription = document.getElementById('newTaskDescription');
    const newTaskDate = document.getElementById('newTaskDate');
    const newTaskPriority = document.getElementById('newTaskPriority');


    const newTask = createTask(newTaskTitle.value, newTaskDescription.value, newTaskDate.value, newTaskPriority.checked, activeProject.title);


    //add new task to project
    allProjects.forEach((project) => {
        if (activeProject.title === project.title) {
            project.addTask(newTask);
            activeProject = project;
        }
    })

    renderTasks();
})

//render Tasks
function renderTasks() {
    const tasksList = document.getElementById('tasksList');
    clearElements(tasksList);
    activeProject.tasks.forEach((task) => {
        const taskEntry = document.createElement('li');
        taskEntry.classList.add('task');


        const taskLeftSide = document.createElement('div');
        taskLeftSide.classList.add('taskLeftSide');

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('taskCompleteToggle');
        taskLeftSide.appendChild(checkbox);

        const taskText = document.createElement('div');
        taskText.classList.add('taskText');

        const taskTitle = document.createElement('input');
        taskTitle.type = 'text';
        taskTitle.value = task.title;
        taskTitle.setAttribute('readonly', true);
        taskText.appendChild(taskTitle);

        const taskDescription = document.createElement('input');
        taskDescription.type = 'text';
        taskDescription.value = task.description;
        taskDescription.setAttribute('readonly', true);
        taskText.appendChild(taskDescription);

        taskLeftSide.appendChild(taskText);
        taskEntry.appendChild(taskLeftSide);

        const taskRightSide = document.createElement('div');
        taskRightSide.classList.add('taskRightSide');

        const taskDueDate = document.createElement('input');
        taskDueDate.type = 'date';
        taskDueDate.value = task.dueDate;
        taskRightSide.appendChild(taskDueDate);

        const editBtn = document.createElement('span');
        editBtn.innerText = 'edit';
        editBtn.classList.add('material-icons-outlined');
        taskRightSide.appendChild(editBtn);

        let priorityToggler = document.createElement('input');
        priorityToggler.type = 'checkbox';
        priorityToggler.classList.add('material-icons-outlined', 'starCheckbox');
        if (task.priority) {
            priorityToggler.checked = true;
        } else {
            priorityToggler.checked = false;
        }

        taskRightSide.appendChild(priorityToggler);

        const deleteBtn = document.createElement('span');
        deleteBtn.innerText = 'delete';
        deleteBtn.classList.add('material-icons-outlined');
        deleteBtn.classList.add('delete');
        taskRightSide.appendChild(deleteBtn);

        taskEntry.appendChild(taskRightSide);

        if (task.completed) {
            taskEntry.classList.add('taskCompleted');
            checkbox.checked = true;
        }

        const tasksList = document.getElementById('tasksList');
        tasksList.appendChild(taskEntry);

        closeTaskModal();
    });
}

// Change Task Priority
document.getElementById('tasksList').addEventListener('change', (e) => {
    if (e.target.classList.contains('starCheckbox')) {
        let taskTitle = e.target.parentElement.previousElementSibling.lastElementChild.firstElementChild.value;
        let task = findTask(activeProject.title, taskTitle);
        task.priority = e.target.checked;
        console.log(task);
    }
    console.log(allProjects[0].tasks);
})

//Event Remove Task

document.getElementById('tasksList').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        activeProject.deleteTask(e.target);

        activeProject.deleteTaskFromList(e.target.parentElement.previousElementSibling.lastElementChild.firstElementChild.value);
        console.log(allProjects);
    }
})

//Mark Task as Completed
document.getElementById('tasksList').addEventListener('click', (e) => {
    if (e.target.classList.contains('taskCompleteToggle')) {
        e.target.parentElement.parentElement.classList.toggle('taskCompleted');

        let taskTitle = e.target.nextElementSibling.firstElementChild.value;
        let task = findTask(activeProject.title, taskTitle);
        task.completed = e.target.checked;

    }
})

function findTask(projectTitle, taskTitle) {
    let myTask;
    allProjects.forEach((project) => {

        if (project.title === projectTitle) {
            project.tasks.forEach((task) => {
                if (task.title === taskTitle) {
                    myTask = task;
                }
            })
        }
    })
    return myTask;
}



//Clean up tasks

function clearElements(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}



//New Project Modal
const openNewProjectModalBtn = document.getElementById('openNewProjectModalBtn')

openNewProjectModalBtn.addEventListener('click', openProjectModal);

function openProjectModal() {
    newProjectModal.style.display = 'block'
}

window.addEventListener('click', outsideClick);

function outsideClick(e) {
    if (e.target === newTaskModal) {
        newTaskModal.style.display = 'none';
        resetTaskForm();
    } else if (e.target === newProjectModal) {
        newProjectModal.style.display = 'none';
    }
}


const newProjectCloseBtn = document.getElementById('newProjectCloseBtn');

newProjectCloseBtn.addEventListener('click', closeProjectModal);

function closeProjectModal() {
    newProjectModal.style.display = 'none';
    newProjectTitle.value = '';
}

//New Task Modal


const newTaskModal = document.getElementById('newTaskModal');

function openTaskModal() {
    newTaskModal.style.display = 'block';
}

const newTaskCloseBtn = document.getElementById('newTaskCloseBtn');

newTaskCloseBtn.addEventListener('click', closeTaskModal);

function closeTaskModal() {
    newTaskModal.style.display = 'none';
    resetTaskForm();
}

function resetTaskForm() {
    newTaskTitle.value = "";
    newTaskDescription.value = "";
    newTaskDate.value = "";
    newTaskPriority.checked = false;
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxhQUFhLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFB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L3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHksIGh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU3QjlEO1xcbiAgICBwYWRkaW5nOiA1MHB4IDIwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4vKiBTSURFQkFSICovXFxuXFxubmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRkFFRTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblxcbi5kZWZhdWx0LXByb2plY3RzID4gdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uZGVmYXVsdC1wcm9qZWN0cyA+IHVsID4gbGkge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyNXB4IDAgMjVweCAyNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3RzSGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0cyA+IHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59IFxcblxcbi5wcm9qZWN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjVweCAyNXB4IDI1cHggMjVweDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlZWVjNDtcXG59XFxuXFxuLmFjdGl2ZVByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VlZWM0O1xcbn1cXG5cXG4ucHJvamVjdCA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0cyAgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDI1cHggMCAyNXB4IDI1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNvcGVuTmV3UHJvamVjdE1vZGFsQnRuIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGQUVFO1xcbn1cXG5cXG4jb3Blbk5ld1Byb2plY3RNb2RhbEJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWVlYzQ7XFxufVxcblxcbi5kZWxldGU6aG92ZXIge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi8qIE1BSU4gQ09OVEVOVCAqL1xcblxcbiNjb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDMwMHB4KTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI2NvbnRlbnQgaDIge1xcbiAgICBmb250LXNpemU6IDIuMjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcblxcbiN0YXNrc0xpc3Qge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTUyYmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrTGVmdFNpZGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrUmlnaHRTaWRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi50YXNrVGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrVGV4dCBpbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcbi50YXNrUmlnaHRTaWRlIGlucHV0IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2tUZXh0IGlucHV0ICsgaW5wdXQge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLnRhc2tEdWVEYXRlIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrQ29tcGxldGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZkOGJkZjtcXG59XFxuXFxuLnRhc2tDb21wbGV0ZWQgPiAudGFza0xlZnRTaWRlID4gLnRhc2tUZXh0ID4gaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogI2VlZTtcXG59XFxuXFxuXFxuI29wZW5OZXdUYXNrTW9kYWxCdG4ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogNDBweDtcXG4gICAgcmlnaHQ6IDQwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuXFxuZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEMzU1NztcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgICBjb2xvcjogI0YxRkFFRTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBORVcgVE9ETyBNT0RBTCAqL1xcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEMzU1NztcXG4gICAgbWFyZ2luOiAyMCUgYXV0bztcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTdCOUQ7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm1vZGFsLWNsb3NlQnRuIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5tb2RhbC1jbG9zZUJ0bjpob3ZlciwgLm1vZGFsLWNsb3NlQnRuOmZvY3VzIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsLWJvZHkge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jbmV3VGFza1RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59IFxcblxcbiNuZXdUYXNrRGVzY3JpcHRpb24ge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5tb2RhbC1mb3JtLWJvdHRvbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm1vZGFsLWZvcm0tYm90dG9tIGxpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5tb2RhbC1mb3JtLWJvdHRvbSBsaSBsYWJlbCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI25ld1Rhc2tEYXRlIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uc3RhckNoZWNrYm94IHtcXG4gICAgdmlzaWJpbGl0eTpoaWRkZW47XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbi5zdGFyQ2hlY2tib3g6OmJlZm9yZSB7XFxuICAgY29udGVudDogXFxcInN0YXJfb3V0bGluZVxcXCI7XFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgIHZpc2liaWxpdHk6dmlzaWJsZTtcXG4gICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zdGFyQ2hlY2tib3g6Y2hlY2tlZDo6YmVmb3JlIHtcXG4gICBjb250ZW50OiBcXFwic3RhclxcXCI7XFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgIGNvbG9yOiB5ZWxsb3c7XFxufVxcblxcblxcbiNhZGROZXdUYXNrQnRuIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1N0I5RDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLyogTkVXIFBST0pFQ1QgTU9EQUwgKi9cXG5cXG4jbmV3UHJvamVjdFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jYWRkTmV3UHJvamVjdEJ0biB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU3QjlEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxzQkFBc0I7SUFDdEIs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WUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBLHNCQUFzQjs7QUFFdEI7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSwgaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbi8qIEhFQURFUiAqL1xcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTdCOUQ7XFxuICAgIHBhZGRpbmc6IDUwcHggMjBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi8qIFNJREVCQVIgKi9cXG5cXG5uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGQUVFO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmRlZmF1bHQtcHJvamVjdHMgPiB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5kZWZhdWx0LXByb2plY3RzID4gdWwgPiBsaSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDI1cHggMCAyNXB4IDI1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdHNIZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnByb2plY3RzID4gdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn0gXFxuXFxuLnByb2plY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyNXB4IDI1cHggMjVweCAyNXB4O1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VlZWM0O1xcbn1cXG5cXG4uYWN0aXZlUHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWVlYzQ7XFxufVxcblxcbi5wcm9qZWN0ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3RzICBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMjVweCAwIDI1cHggMjVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI29wZW5OZXdQcm9qZWN0TW9kYWxCdG4ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUZBRUU7XFxufVxcblxcbiNvcGVuTmV3UHJvamVjdE1vZGFsQnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlZWVjNDtcXG59XFxuXFxuLmRlbGV0ZTpob3ZlciB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLyogTUFJTiBDT05URU5UICovXFxuXFxuI2NvbnRlbnQge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMzAwcHgpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4jY29udGVudCBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuXFxuI3Rhc2tzTGlzdCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi50YXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhNTJiZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2tMZWZ0U2lkZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2tSaWdodFNpZGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRhc2tUZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2tUZXh0IGlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuLnRhc2tSaWdodFNpZGUgaW5wdXQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFza1RleHQgaW5wdXQgKyBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4udGFza0R1ZURhdGUge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2tDb21wbGV0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ4YmRmO1xcbn1cXG5cXG4udGFza0NvbXBsZXRlZCA+IC50YXNrTGVmdFNpZGUgPiAudGFza1RleHQgPiBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiAjZWVlO1xcbn1cXG5cXG5cXG4jb3Blbk5ld1Rhc2tNb2RhbEJ0biB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiA0MHB4O1xcbiAgICByaWdodDogNDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG5cXG5mb290ZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUQzNTU3O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5mb290ZXIgcCB7XFxuICAgIGNvbG9yOiAjRjFGQUVFO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIE5FVyBUT0RPIE1PREFMICovXFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUQzNTU3O1xcbiAgICBtYXJnaW46IDIwJSBhdXRvO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1N0I5RDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubW9kYWwtY2xvc2VCdG4ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLm1vZGFsLWNsb3NlQnRuOmhvdmVyLCAubW9kYWwtY2xvc2VCdG46Zm9jdXMge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWwtYm9keSB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5tb2RhbC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNuZXdUYXNrVGl0bGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn0gXFxuXFxuI25ld1Rhc2tEZXNjcmlwdGlvbiB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm1vZGFsLWZvcm0tYm90dG9tIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubW9kYWwtZm9ybS1ib3R0b20gbGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLm1vZGFsLWZvcm0tYm90dG9tIGxpIGxhYmVsIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jbmV3VGFza0RhdGUge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5zdGFyQ2hlY2tib3gge1xcbiAgICB2aXNpYmlsaXR5OmhpZGRlbjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuLnN0YXJDaGVja2JveDo6YmVmb3JlIHtcXG4gICBjb250ZW50OiBcXFwic3Rhcl9vdXRsaW5lXFxcIjtcXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgdmlzaWJpbGl0eTp2aXNpYmxlO1xcbiAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnN0YXJDaGVja2JveDpjaGVja2VkOjpiZWZvcmUge1xcbiAgIGNvbnRlbnQ6IFxcXCJzdGFyXFxcIjtcXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgY29sb3I6IHllbGxvdztcXG59XFxuXFxuXFxuI2FkZE5ld1Rhc2tCdG4ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU3QjlEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4vKiBORVcgUFJPSkVDVCBNT0RBTCAqL1xcblxcbiNuZXdQcm9qZWN0VGl0bGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNhZGROZXdQcm9qZWN0QnRuIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTdCOUQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vL1Byb2plY3QgQ2xhc3NcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgdGFza3M6IFtdLFxuICAgICAgICBhZGRUYXNrKHRhc2spIHtcbiAgICAgICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlVGFzayhlbCkge1xuICAgICAgICAgICAgZWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9LFxuICAgICAgICBkZWxldGVUYXNrRnJvbUxpc3QodGFza1RpdGxlKSB7XG4gICAgICAgICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZVByb2plY3QudGl0bGUgPT09IHByb2plY3QudGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2sudGl0bGUgPT09IHRhc2tUaXRsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vL1Rhc2sgQ2xhc3NcbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIHByb2plY3RcbiAgICB9XG59XG5cbi8vdG9kb2xpc3QgQ2xhc3NcbmZ1bmN0aW9uIHRvZG9saXN0KCkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkUHJvamVjdFRvTGlzdChwcm9qZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHNMaXN0Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgcHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEJ0bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBwcm9qZWN0QnRuSWNvbi5pbm5lclRleHQgPSAnbGlzdCc7XG4gICAgICAgICAgICBwcm9qZWN0QnRuSWNvbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCcpO1xuICAgICAgICAgICAgcHJvamVjdEJ0bkRpdi5hcHBlbmRDaGlsZChwcm9qZWN0QnRuSWNvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICAgICAgcHJvamVjdEJ0bkRpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcHJvamVjdERlbGV0ZUJ0bi5pbm5lclRleHQgPSAnY2xvc2UnO1xuICAgICAgICAgICAgcHJvamVjdERlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCcpO1xuICAgICAgICAgICAgcHJvamVjdERlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcblxuICAgICAgICAgICAgcHJvamVjdEJ0bi5hcHBlbmRDaGlsZChwcm9qZWN0QnRuRGl2KTtcbiAgICAgICAgICAgIHByb2plY3RCdG4uYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ0bik7XG5cbiAgICAgICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0QnRuKTtcblxuXG4gICAgICAgICAgICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblByb2plY3QpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlbGV0ZVByb2plY3QoZWwpIHtcbiAgICAgICAgICAgIGVsLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVsZXRlUHJvamVjdEZyb21MaXN0KHRpdGxlKSB7XG5cbiAgICAgICAgICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3QudGl0bGUgPT09IHRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5jb25zdCBteVRvZG9saXN0ID0gdG9kb2xpc3QoKTtcbmxldCBhY3RpdmVQcm9qZWN0O1xuLy9TdG9yZSBDbGFzc1xuXG5sZXQgYWxsUHJvamVjdHMgPSBbXTtcbi8vRXZlbnQ6IERpc3BsYXkgUHJvamVjdDtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIG15VG9kb2xpc3QuZGlzcGxheVByb2plY3RzKTtcblxuLy9FdmVudDogQWRkIFByb2plY3RcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0TW9kYWwnKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0VGl0bGUnKS52YWx1ZTtcblxuICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KHRpdGxlKTtcblxuICAgIG15VG9kb2xpc3QuYWRkUHJvamVjdFRvTGlzdChwcm9qZWN0KTtcblxuICAgIGFsbFByb2plY3RzLnB1c2gocHJvamVjdCk7XG5cbiAgICBjbG9zZVByb2plY3RNb2RhbCgpO1xufSlcblxuLy9FdmVudDogT3BlbmluZyBhIFByb2plY3RcblxuZnVuY3Rpb24gb3BlblByb2plY3QoZSkge1xuXG4gICAgYWN0aXZlUHJvamVjdCA9IGFsbFByb2plY3RzLmZpbHRlcihjaGVja1Byb2plY3RUaXRsZSlbMF07XG5cbiAgICBmdW5jdGlvbiBjaGVja1Byb2plY3RUaXRsZShwcm9qZWN0KSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0LnRpdGxlID09PSBlLmN1cnJlbnRUYXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQ7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpO1xuICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBhY3RpdmVQcm9qZWN0LnRpdGxlO1xuICAgIGNvbnN0IG9wZW5OZXdUYXNrTW9kYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbk5ld1Rhc2tNb2RhbEJ0bicpO1xuICAgIG9wZW5OZXdUYXNrTW9kYWxCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICBzaG93QWN0aXZlUHJvamVjdChlKTtcblxuXG4gICAgcmVuZGVyVGFza3MoKTtcblxuICAgIGNvbnNvbGUubG9nKGFjdGl2ZVByb2plY3QudGFza3MpXG59XG5cbi8vIFNob3cgQWN0aXZlIFByb2plY3QgXG5mdW5jdGlvbiBzaG93QWN0aXZlUHJvamVjdChlKSB7XG4gICAgbGV0IHByb2plY3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlUHJvamVjdCcpO1xuICAgIH0pXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZVByb2plY3QnKVxufVxuXG5cbi8vRXZlbnQ6IFJlbW92ZSBQcm9qZWN0XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c0xpc3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlJykpIHtcbiAgICAgICAgbXlUb2RvbGlzdC5kZWxldGVQcm9qZWN0KGUudGFyZ2V0KTtcblxuICAgICAgICBteVRvZG9saXN0LmRlbGV0ZVByb2plY3RGcm9tTGlzdChlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQpO1xuICAgIH1cbn0pXG5cblxuXG5cbi8vRXZlbnQ6IEFkZCBUYXNrXG5jb25zdCBvcGVuTmV3VGFza01vZGFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5OZXdUYXNrTW9kYWxCdG4nKTtcblxub3Blbk5ld1Rhc2tNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5UYXNrTW9kYWwpO1xuXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrTW9kYWwnKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHRhc2tzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrc0xpc3QnKTtcbiAgICBjbGVhckVsZW1lbnRzKHRhc2tzTGlzdCk7XG5cbiAgICBjb25zdCBuZXdUYXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza1RpdGxlJyk7XG4gICAgY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2tEZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IG5ld1Rhc2tEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2tEYXRlJyk7XG4gICAgY29uc3QgbmV3VGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2tQcmlvcml0eScpO1xuXG5cbiAgICBjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFzayhuZXdUYXNrVGl0bGUudmFsdWUsIG5ld1Rhc2tEZXNjcmlwdGlvbi52YWx1ZSwgbmV3VGFza0RhdGUudmFsdWUsIG5ld1Rhc2tQcmlvcml0eS5jaGVja2VkLCBhY3RpdmVQcm9qZWN0LnRpdGxlKTtcblxuXG4gICAgLy9hZGQgbmV3IHRhc2sgdG8gcHJvamVjdFxuICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZVByb2plY3QudGl0bGUgPT09IHByb2plY3QudGl0bGUpIHtcbiAgICAgICAgICAgIHByb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcbiAgICAgICAgICAgIGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJlbmRlclRhc2tzKCk7XG59KVxuXG4vL3JlbmRlciBUYXNrc1xuZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XG4gICAgY29uc3QgdGFza3NMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzTGlzdCcpO1xuICAgIGNsZWFyRWxlbWVudHModGFza3NMaXN0KTtcbiAgICBhY3RpdmVQcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgdGFza0VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgdGFza0VudHJ5LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcblxuXG4gICAgICAgIGNvbnN0IHRhc2tMZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrTGVmdFNpZGUuY2xhc3NMaXN0LmFkZCgndGFza0xlZnRTaWRlJyk7XG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgndGFza0NvbXBsZXRlVG9nZ2xlJyk7XG4gICAgICAgIHRhc2tMZWZ0U2lkZS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICAgICAgY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza1RleHQuY2xhc3NMaXN0LmFkZCgndGFza1RleHQnKTtcblxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0YXNrVGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgdGFza1RpdGxlLnZhbHVlID0gdGFzay50aXRsZTtcbiAgICAgICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCB0cnVlKTtcbiAgICAgICAgdGFza1RleHQuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb24udHlwZSA9ICd0ZXh0JztcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCB0cnVlKTtcbiAgICAgICAgdGFza1RleHQuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcblxuICAgICAgICB0YXNrTGVmdFNpZGUuYXBwZW5kQ2hpbGQodGFza1RleHQpO1xuICAgICAgICB0YXNrRW50cnkuYXBwZW5kQ2hpbGQodGFza0xlZnRTaWRlKTtcblxuICAgICAgICBjb25zdCB0YXNrUmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tSaWdodFNpZGUuY2xhc3NMaXN0LmFkZCgndGFza1JpZ2h0U2lkZScpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGFza0R1ZURhdGUudHlwZSA9ICdkYXRlJztcbiAgICAgICAgdGFza0R1ZURhdGUudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgIHRhc2tSaWdodFNpZGUuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuXG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGVkaXRCdG4uaW5uZXJUZXh0ID0gJ2VkaXQnO1xuICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zLW91dGxpbmVkJyk7XG4gICAgICAgIHRhc2tSaWdodFNpZGUuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cbiAgICAgICAgbGV0IHByaW9yaXR5VG9nZ2xlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByaW9yaXR5VG9nZ2xlci50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgcHJpb3JpdHlUb2dnbGVyLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zLW91dGxpbmVkJywgJ3N0YXJDaGVja2JveCcpO1xuICAgICAgICBpZiAodGFzay5wcmlvcml0eSkge1xuICAgICAgICAgICAgcHJpb3JpdHlUb2dnbGVyLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJpb3JpdHlUb2dnbGVyLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhc2tSaWdodFNpZGUuYXBwZW5kQ2hpbGQocHJpb3JpdHlUb2dnbGVyKTtcblxuICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRlbGV0ZUJ0bi5pbm5lclRleHQgPSAnZGVsZXRlJztcbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zLW91dGxpbmVkJyk7XG4gICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcbiAgICAgICAgdGFza1JpZ2h0U2lkZS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgICAgIHRhc2tFbnRyeS5hcHBlbmRDaGlsZCh0YXNrUmlnaHRTaWRlKTtcblxuICAgICAgICBpZiAodGFzay5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIHRhc2tFbnRyeS5jbGFzc0xpc3QuYWRkKCd0YXNrQ29tcGxldGVkJyk7XG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhc2tzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrc0xpc3QnKTtcbiAgICAgICAgdGFza3NMaXN0LmFwcGVuZENoaWxkKHRhc2tFbnRyeSk7XG5cbiAgICAgICAgY2xvc2VUYXNrTW9kYWwoKTtcbiAgICB9KTtcbn1cblxuLy8gQ2hhbmdlIFRhc2sgUHJpb3JpdHlcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrc0xpc3QnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXJDaGVja2JveCcpKSB7XG4gICAgICAgIGxldCB0YXNrVGl0bGUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC52YWx1ZTtcbiAgICAgICAgbGV0IHRhc2sgPSBmaW5kVGFzayhhY3RpdmVQcm9qZWN0LnRpdGxlLCB0YXNrVGl0bGUpO1xuICAgICAgICB0YXNrLnByaW9yaXR5ID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgY29uc29sZS5sb2codGFzayk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzWzBdLnRhc2tzKTtcbn0pXG5cbi8vRXZlbnQgUmVtb3ZlIFRhc2tcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzTGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUnKSkge1xuICAgICAgICBhY3RpdmVQcm9qZWN0LmRlbGV0ZVRhc2soZS50YXJnZXQpO1xuXG4gICAgICAgIGFjdGl2ZVByb2plY3QuZGVsZXRlVGFza0Zyb21MaXN0KGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLnZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICAgIH1cbn0pXG5cbi8vTWFyayBUYXNrIGFzIENvbXBsZXRlZFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzTGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrQ29tcGxldGVUb2dnbGUnKSkge1xuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgndGFza0NvbXBsZXRlZCcpO1xuXG4gICAgICAgIGxldCB0YXNrVGl0bGUgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQudmFsdWU7XG4gICAgICAgIGxldCB0YXNrID0gZmluZFRhc2soYWN0aXZlUHJvamVjdC50aXRsZSwgdGFza1RpdGxlKTtcbiAgICAgICAgdGFzay5jb21wbGV0ZWQgPSBlLnRhcmdldC5jaGVja2VkO1xuXG4gICAgfVxufSlcblxuZnVuY3Rpb24gZmluZFRhc2socHJvamVjdFRpdGxlLCB0YXNrVGl0bGUpIHtcbiAgICBsZXQgbXlUYXNrO1xuICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcblxuICAgICAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gcHJvamVjdFRpdGxlKSB7XG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay50aXRsZSA9PT0gdGFza1RpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIG15VGFzayA9IHRhc2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIG15VGFzaztcbn1cblxuXG5cbi8vQ2xlYW4gdXAgdGFza3NcblxuZnVuY3Rpb24gY2xlYXJFbGVtZW50cyhlbGVtZW50KSB7XG4gICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5cblxuLy9OZXcgUHJvamVjdCBNb2RhbFxuY29uc3Qgb3Blbk5ld1Byb2plY3RNb2RhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuTmV3UHJvamVjdE1vZGFsQnRuJylcblxub3Blbk5ld1Byb2plY3RNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Qcm9qZWN0TW9kYWwpO1xuXG5mdW5jdGlvbiBvcGVuUHJvamVjdE1vZGFsKCkge1xuICAgIG5ld1Byb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvdXRzaWRlQ2xpY2spO1xuXG5mdW5jdGlvbiBvdXRzaWRlQ2xpY2soZSkge1xuICAgIGlmIChlLnRhcmdldCA9PT0gbmV3VGFza01vZGFsKSB7XG4gICAgICAgIG5ld1Rhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICByZXNldFRhc2tGb3JtKCk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PT0gbmV3UHJvamVjdE1vZGFsKSB7XG4gICAgICAgIG5ld1Byb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbn1cblxuXG5jb25zdCBuZXdQcm9qZWN0Q2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdENsb3NlQnRuJyk7XG5cbm5ld1Byb2plY3RDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUHJvamVjdE1vZGFsKTtcblxuZnVuY3Rpb24gY2xvc2VQcm9qZWN0TW9kYWwoKSB7XG4gICAgbmV3UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbmV3UHJvamVjdFRpdGxlLnZhbHVlID0gJyc7XG59XG5cbi8vTmV3IFRhc2sgTW9kYWxcblxuXG5jb25zdCBuZXdUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza01vZGFsJyk7XG5cbmZ1bmN0aW9uIG9wZW5UYXNrTW9kYWwoKSB7XG4gICAgbmV3VGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5jb25zdCBuZXdUYXNrQ2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza0Nsb3NlQnRuJyk7XG5cbm5ld1Rhc2tDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVGFza01vZGFsKTtcblxuZnVuY3Rpb24gY2xvc2VUYXNrTW9kYWwoKSB7XG4gICAgbmV3VGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcmVzZXRUYXNrRm9ybSgpO1xufVxuXG5mdW5jdGlvbiByZXNldFRhc2tGb3JtKCkge1xuICAgIG5ld1Rhc2tUaXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgbmV3VGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICBuZXdUYXNrRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgbmV3VGFza1ByaW9yaXR5LmNoZWNrZWQgPSBmYWxzZTtcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9