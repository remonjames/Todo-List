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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody, html {\n    height: 100%;\n}\n\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: auto 1fr auto;\n    height: 100vh;\n    font-size: 10px;\n}\n\n/* HEADER */\n\nheader {\n    background-color: #457B9D;\n    padding: 50px 20px;\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    width: 100vw;\n}\n\nheader h1 {\n    font-size: 3.5rem;\n    height: 100%;\n    color: white;\n}\n\nmain {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    width: 100vw;\n}\n\n/* SIDEBAR */\n\nnav {\n    background-color: #F1FAEE;\n    grid-column: 1 / 2;\n    width: 300px;\n}\n\n/* .default-projects > ul {\n    list-style: none;\n}\n\n.default-projects > ul > li {\n    font-size: 1.5rem;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 25px 0 25px 25px;\n    width: 100%;\n} */\n\n.projectsHeading {\n    font-size: 2rem;\n    margin-top: 20px;\n    margin-left: 25px;\n    margin-bottom: 20px;\n}\n\n.projects > ul {\n    list-style: none;\n} \n\n.project {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 25px 25px 25px 25px;\n    font-size: 1.25rem;\n    cursor: pointer;\n}\n\n.project:hover {\n    background-color: #ceeec4;\n}\n\n.activeProject {\n    background-color: #ceeec4;\n}\n\n.project > div {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    width: 100%;\n}\n\n.projects  button {\n    font-size: 1.25rem;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 25px 0 25px 25px;\n    width: 100%;\n    cursor: pointer;\n}\n\n#openNewProjectModalBtn {\n    border: none;\n    background-color: #F1FAEE;\n}\n\n#openNewProjectModalBtn:hover {\n    background-color: #ceeec4;\n}\n\n.delete:hover {\n    color: red;\n    cursor: pointer;\n}\n\n\n/* MAIN CONTENT */\n\n#content {\n    grid-column: 2 / 3;\n    width: calc(100vw - 300px);\n    padding: 20px;\n}\n\n#content h2 {\n    font-size: 2.25rem;\n    margin-bottom: 25px;\n}\n\n#tasksList {\n    list-style: none;\n}\n\n.task {\n    background-color: #2a52be;\n    border: 1px solid black;\n    border-radius: 20px;\n    padding: 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    margin-bottom: 20px;\n    color: white;\n}\n\n.taskLeftSide {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    width: 600px;\n}\n\n.taskRightSide {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.taskText {\n    display: flex;\n    flex-direction: column;\n}\n\n.taskText input {\n    border: none;\n    background: none;\n    font-size: 1.25rem;\n    color: white;\n    width: 500px;\n}\n\n\n.taskRightSide input {\n    color: white;\n    border: none;\n    background: none;\n    font-size: 1rem;\n}\n\n.taskText input + input {\n    font-size: 0.8rem;\n}\n\n.taskDueDate {\n    font-size: .9rem;\n    border: 1px solid black;\n    padding: 5px;\n    border-radius: 10px;\n    width: 100px;\n    text-align: center;\n}\n\n.taskCompleted {\n    background-color: #6d8bdf;\n}\n\n.taskCompleted > .taskLeftSide > .taskText > input[type=text] {\n    text-decoration: line-through;\n    text-decoration-color: black;\n    color: #eee;\n}\n\n\n#openNewTaskModalBtn {\n    border-radius: 50%;\n    border: none;\n    display: none;\n    background-color: white;\n    font-size: 3.5rem;\n    position: fixed;\n    bottom: 40px;\n    right: 40px;\n    cursor: pointer;\n}\n\n/* FOOTER */\n\nfooter {\n    width: 100vw;\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n    background-color: #1D3557;\n    padding: 10px;\n}\n\nfooter p {\n    color: #F1FAEE;\n    text-align: center;\n}\n\n/* NEW TODO MODAL */\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, .5);\n}\n\n.modal-content {\n    background-color: #1D3557;\n    margin: 20% auto;\n    width: 450px;\n    border-radius: 7px;\n    border: none;\n}\n\n.modal-header {\n    background-color: #457B9D;\n    padding: 20px;\n    color: white;\n    font-size: 1.25rem;\n    border-top-right-radius: 7px;\n    border-top-left-radius: 7px;\n    border: none;\n}\n\n.modal-closeBtn {\n    float: right;\n     font-size: 1.5rem;\n}\n\n.modal-closeBtn:hover, .modal-closeBtn:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.modal-body {\n    padding: 20px;\n}\n\n.modal-form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-size: 1rem;\n}\n\n#newTaskTitle {\n    font-size: 1rem;\n    border: 1px solid lightgray;\n    border-radius: 3px;\n} \n\n#newTaskDescription {\n    resize: none;\n    font-size: 1rem;\n    border: 1px solid lightgray;\n    border-radius: 3px;\n}\n\n.modal-form-bottom {\n    display: flex;\n    justify-content: space-between;\n    list-style: none;\n}\n\n.modal-form-bottom li {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.modal-form-bottom li label {\n    color: white;\n}\n\n#newTaskDate {\n    font-size: 0.9rem;\n    border: none;\n    border-radius: 3px;\n}\n\n.starCheckbox {\n    visibility:hidden;\n    font-size: 1rem;\n    cursor:pointer;\n}\n\n.starCheckbox::before {\n   content: \"star_outline\";\n   position: absolute;\n   visibility:visible;\n   color: white;\n}\n\n.starCheckbox:checked::before {\n   content: \"star\";\n   position: absolute;\n   color: yellow;\n}\n\n\n#addNewTaskBtn {\n    border: none;\n    padding: 5px 10px;\n    background-color: #457B9D;\n    color: white;\n    border-radius: 7px;\n    font-size: 1rem;\n}\n\n/* NEW PROJECT MODAL */\n\n#newProjectTitle {\n    font-size: 1rem;\n}\n\n#addNewProjectBtn {\n    width: 150px;\n    padding: 5px 10px;\n    border: none;\n    border-radius: 7px;\n    background-color: #457B9D;\n    color: white;\n    font-size: 1rem;\n    align-self: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody, html {\n    height: 100%;\n}\n\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: auto 1fr auto;\n    height: 100vh;\n    font-size: 10px;\n}\n\n/* HEADER */\n\nheader {\n    background-color: #457B9D;\n    padding: 50px 20px;\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    width: 100vw;\n}\n\nheader h1 {\n    font-size: 3.5rem;\n    height: 100%;\n    color: white;\n}\n\nmain {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    width: 100vw;\n}\n\n/* SIDEBAR */\n\nnav {\n    background-color: #F1FAEE;\n    grid-column: 1 / 2;\n    width: 300px;\n}\n\n/* .default-projects > ul {\n    list-style: none;\n}\n\n.default-projects > ul > li {\n    font-size: 1.5rem;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 25px 0 25px 25px;\n    width: 100%;\n} */\n\n.projectsHeading {\n    font-size: 2rem;\n    margin-top: 20px;\n    margin-left: 25px;\n    margin-bottom: 20px;\n}\n\n.projects > ul {\n    list-style: none;\n} \n\n.project {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 25px 25px 25px 25px;\n    font-size: 1.25rem;\n    cursor: pointer;\n}\n\n.project:hover {\n    background-color: #ceeec4;\n}\n\n.activeProject {\n    background-color: #ceeec4;\n}\n\n.project > div {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    width: 100%;\n}\n\n.projects  button {\n    font-size: 1.25rem;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 25px 0 25px 25px;\n    width: 100%;\n    cursor: pointer;\n}\n\n#openNewProjectModalBtn {\n    border: none;\n    background-color: #F1FAEE;\n}\n\n#openNewProjectModalBtn:hover {\n    background-color: #ceeec4;\n}\n\n.delete:hover {\n    color: red;\n    cursor: pointer;\n}\n\n\n/* MAIN CONTENT */\n\n#content {\n    grid-column: 2 / 3;\n    width: calc(100vw - 300px);\n    padding: 20px;\n}\n\n#content h2 {\n    font-size: 2.25rem;\n    margin-bottom: 25px;\n}\n\n#tasksList {\n    list-style: none;\n}\n\n.task {\n    background-color: #2a52be;\n    border: 1px solid black;\n    border-radius: 20px;\n    padding: 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    margin-bottom: 20px;\n    color: white;\n}\n\n.taskLeftSide {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    width: 600px;\n}\n\n.taskRightSide {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.taskText {\n    display: flex;\n    flex-direction: column;\n}\n\n.taskText input {\n    border: none;\n    background: none;\n    font-size: 1.25rem;\n    color: white;\n    width: 500px;\n}\n\n\n.taskRightSide input {\n    color: white;\n    border: none;\n    background: none;\n    font-size: 1rem;\n}\n\n.taskText input + input {\n    font-size: 0.8rem;\n}\n\n.taskDueDate {\n    font-size: .9rem;\n    border: 1px solid black;\n    padding: 5px;\n    border-radius: 10px;\n    width: 100px;\n    text-align: center;\n}\n\n.taskCompleted {\n    background-color: #6d8bdf;\n}\n\n.taskCompleted > .taskLeftSide > .taskText > input[type=text] {\n    text-decoration: line-through;\n    text-decoration-color: black;\n    color: #eee;\n}\n\n\n#openNewTaskModalBtn {\n    border-radius: 50%;\n    border: none;\n    display: none;\n    background-color: white;\n    font-size: 3.5rem;\n    position: fixed;\n    bottom: 40px;\n    right: 40px;\n    cursor: pointer;\n}\n\n/* FOOTER */\n\nfooter {\n    width: 100vw;\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n    background-color: #1D3557;\n    padding: 10px;\n}\n\nfooter p {\n    color: #F1FAEE;\n    text-align: center;\n}\n\n/* NEW TODO MODAL */\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, .5);\n}\n\n.modal-content {\n    background-color: #1D3557;\n    margin: 20% auto;\n    width: 450px;\n    border-radius: 7px;\n    border: none;\n}\n\n.modal-header {\n    background-color: #457B9D;\n    padding: 20px;\n    color: white;\n    font-size: 1.25rem;\n    border-top-right-radius: 7px;\n    border-top-left-radius: 7px;\n    border: none;\n}\n\n.modal-closeBtn {\n    float: right;\n     font-size: 1.5rem;\n}\n\n.modal-closeBtn:hover, .modal-closeBtn:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.modal-body {\n    padding: 20px;\n}\n\n.modal-form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-size: 1rem;\n}\n\n#newTaskTitle {\n    font-size: 1rem;\n    border: 1px solid lightgray;\n    border-radius: 3px;\n} \n\n#newTaskDescription {\n    resize: none;\n    font-size: 1rem;\n    border: 1px solid lightgray;\n    border-radius: 3px;\n}\n\n.modal-form-bottom {\n    display: flex;\n    justify-content: space-between;\n    list-style: none;\n}\n\n.modal-form-bottom li {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.modal-form-bottom li label {\n    color: white;\n}\n\n#newTaskDate {\n    font-size: 0.9rem;\n    border: none;\n    border-radius: 3px;\n}\n\n.starCheckbox {\n    visibility:hidden;\n    font-size: 1rem;\n    cursor:pointer;\n}\n\n.starCheckbox::before {\n   content: \"star_outline\";\n   position: absolute;\n   visibility:visible;\n   color: white;\n}\n\n.starCheckbox:checked::before {\n   content: \"star\";\n   position: absolute;\n   color: yellow;\n}\n\n\n#addNewTaskBtn {\n    border: none;\n    padding: 5px 10px;\n    background-color: #457B9D;\n    color: white;\n    border-radius: 7px;\n    font-size: 1rem;\n}\n\n/* NEW PROJECT MODAL */\n\n#newProjectTitle {\n    font-size: 1rem;\n}\n\n#addNewProjectBtn {\n    width: 150px;\n    padding: 5px 10px;\n    border: none;\n    border-radius: 7px;\n    background-color: #457B9D;\n    color: white;\n    font-size: 1rem;\n    align-self: center;\n}\n"],"sourceRoot":""}]);
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
        tasks: [],
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


    renderTasks(activeProject);

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

        const projectTitle = document.getElementById('projectTitle');
        projectTitle.innerText = '';
        clearElements(document.getElementById('tasksList'))
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

    renderTasks(activeProject);
})

//render Tasks
function renderTasks(project) {
    const tasksList = document.getElementById('tasksList');
    clearElements(tasksList);
    project.tasks.forEach((task) => {
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


// //Show all tasks
// document.getElementById('allTasks').addEventListener('click', showAllTasks);

// function showAllTasks() {
//     todolist.tasks = [];
//     document.getElementById('projectTitle').innerText = 'All Tasks';

//     allProjects.forEach((project) => {
//         todolist.tasks = todolist.tasks.concat(project.tasks);
//     })

//     renderTasks(todolist);

//     console.log(todolist.tasks)
// }

// //Show tasks due TODAY
// document.getElementById('tasksDueToday').addEventListener('click', showTasksDueToday);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxhQUFhLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdB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O0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5LCBodG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuLyogSEVBREVSICovXFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1N0I5RDtcXG4gICAgcGFkZGluZzogNTBweCAyMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLyogU0lERUJBUiAqL1xcblxcbm5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUZBRUU7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4vKiAuZGVmYXVsdC1wcm9qZWN0cyA+IHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmRlZmF1bHQtcHJvamVjdHMgPiB1bCA+IGxpIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMjVweCAwIDI1cHggMjVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufSAqL1xcblxcbi5wcm9qZWN0c0hlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMgPiB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufSBcXG5cXG4ucHJvamVjdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDI1cHggMjVweCAyNXB4IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWVlYzQ7XFxufVxcblxcbi5hY3RpdmVQcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlZWVjNDtcXG59XFxuXFxuLnByb2plY3QgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdHMgIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyNXB4IDAgMjVweCAyNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jb3Blbk5ld1Byb2plY3RNb2RhbEJ0biB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRkFFRTtcXG59XFxuXFxuI29wZW5OZXdQcm9qZWN0TW9kYWxCdG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VlZWM0O1xcbn1cXG5cXG4uZGVsZXRlOmhvdmVyIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4vKiBNQUlOIENPTlRFTlQgKi9cXG5cXG4jY29udGVudCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAzMDBweCk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbiNjb250ZW50IGgyIHtcXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbn1cXG5cXG4jdGFza3NMaXN0IHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE1MmJlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFza0xlZnRTaWRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNjAwcHg7XFxufVxcblxcbi50YXNrUmlnaHRTaWRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi50YXNrVGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrVGV4dCBpbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuXFxuLnRhc2tSaWdodFNpZGUgaW5wdXQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFza1RleHQgaW5wdXQgKyBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4udGFza0R1ZURhdGUge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2tDb21wbGV0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ4YmRmO1xcbn1cXG5cXG4udGFza0NvbXBsZXRlZCA+IC50YXNrTGVmdFNpZGUgPiAudGFza1RleHQgPiBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiAjZWVlO1xcbn1cXG5cXG5cXG4jb3Blbk5ld1Rhc2tNb2RhbEJ0biB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiA0MHB4O1xcbiAgICByaWdodDogNDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG5cXG5mb290ZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUQzNTU3O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5mb290ZXIgcCB7XFxuICAgIGNvbG9yOiAjRjFGQUVFO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIE5FVyBUT0RPIE1PREFMICovXFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUQzNTU3O1xcbiAgICBtYXJnaW46IDIwJSBhdXRvO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1N0I5RDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubW9kYWwtY2xvc2VCdG4ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLm1vZGFsLWNsb3NlQnRuOmhvdmVyLCAubW9kYWwtY2xvc2VCdG46Zm9jdXMge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWwtYm9keSB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5tb2RhbC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNuZXdUYXNrVGl0bGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn0gXFxuXFxuI25ld1Rhc2tEZXNjcmlwdGlvbiB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm1vZGFsLWZvcm0tYm90dG9tIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubW9kYWwtZm9ybS1ib3R0b20gbGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLm1vZGFsLWZvcm0tYm90dG9tIGxpIGxhYmVsIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jbmV3VGFza0RhdGUge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5zdGFyQ2hlY2tib3gge1xcbiAgICB2aXNpYmlsaXR5OmhpZGRlbjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuLnN0YXJDaGVja2JveDo6YmVmb3JlIHtcXG4gICBjb250ZW50OiBcXFwic3Rhcl9vdXRsaW5lXFxcIjtcXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgdmlzaWJpbGl0eTp2aXNpYmxlO1xcbiAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnN0YXJDaGVja2JveDpjaGVja2VkOjpiZWZvcmUge1xcbiAgIGNvbnRlbnQ6IFxcXCJzdGFyXFxcIjtcXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgY29sb3I6IHllbGxvdztcXG59XFxuXFxuXFxuI2FkZE5ld1Rhc2tCdG4ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU3QjlEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4vKiBORVcgUFJPSkVDVCBNT0RBTCAqL1xcblxcbiNuZXdQcm9qZWN0VGl0bGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNhZGROZXdQcm9qZWN0QnRuIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTdCOUQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBKQUEwSjtJQUMxSixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQSxXQUFXOztBQUVYO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUEsWUFBWTs7QUFFWjtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTs7Ozs7Ozs7Ozs7R0FXRzs7QUFFSDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLFdB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QjtHQUNsQixrQkFBa0I7R0FDbEIsWUFBWTtBQUNmOztBQUVBO0dBQ0csZUFBZTtHQUNmLGtCQUFrQjtHQUNsQixhQUFhO0FBQ2hCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQSxzQkFBc0I7O0FBRXRCO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHksIGh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU3QjlEO1xcbiAgICBwYWRkaW5nOiA1MHB4IDIwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4vKiBTSURFQkFSICovXFxuXFxubmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRkFFRTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblxcbi8qIC5kZWZhdWx0LXByb2plY3RzID4gdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uZGVmYXVsdC1wcm9qZWN0cyA+IHVsID4gbGkge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyNXB4IDAgMjVweCAyNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59ICovXFxuXFxuLnByb2plY3RzSGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0cyA+IHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59IFxcblxcbi5wcm9qZWN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjVweCAyNXB4IDI1cHggMjVweDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlZWVjNDtcXG59XFxuXFxuLmFjdGl2ZVByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VlZWM0O1xcbn1cXG5cXG4ucHJvamVjdCA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0cyAgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDI1cHggMCAyNXB4IDI1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNvcGVuTmV3UHJvamVjdE1vZGFsQnRuIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGQUVFO1xcbn1cXG5cXG4jb3Blbk5ld1Byb2plY3RNb2RhbEJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWVlYzQ7XFxufVxcblxcbi5kZWxldGU6aG92ZXIge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi8qIE1BSU4gQ09OVEVOVCAqL1xcblxcbiNjb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDMwMHB4KTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI2NvbnRlbnQgaDIge1xcbiAgICBmb250LXNpemU6IDIuMjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcblxcbiN0YXNrc0xpc3Qge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTUyYmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrTGVmdFNpZGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA2MDBweDtcXG59XFxuXFxuLnRhc2tSaWdodFNpZGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRhc2tUZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2tUZXh0IGlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG5cXG4udGFza1JpZ2h0U2lkZSBpbnB1dCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrVGV4dCBpbnB1dCArIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi50YXNrRHVlRGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFza0NvbXBsZXRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZDhiZGY7XFxufVxcblxcbi50YXNrQ29tcGxldGVkID4gLnRhc2tMZWZ0U2lkZSA+IC50YXNrVGV4dCA+IGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6ICNlZWU7XFxufVxcblxcblxcbiNvcGVuTmV3VGFza01vZGFsQnRuIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDQwcHg7XFxuICAgIHJpZ2h0OiA0MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEZPT1RFUiAqL1xcblxcbmZvb3RlciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRDM1NTc7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gICAgY29sb3I6ICNGMUZBRUU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogTkVXIFRPRE8gTU9EQUwgKi9cXG5cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRDM1NTc7XFxuICAgIG1hcmdpbjogMjAlIGF1dG87XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU3QjlEO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5tb2RhbC1jbG9zZUJ0biB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ubW9kYWwtY2xvc2VCdG46aG92ZXIsIC5tb2RhbC1jbG9zZUJ0bjpmb2N1cyB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbC1ib2R5IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLm1vZGFsLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI25ld1Rhc2tUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufSBcXG5cXG4jbmV3VGFza0Rlc2NyaXB0aW9uIHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybS1ib3R0b20ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5tb2RhbC1mb3JtLWJvdHRvbSBsaSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybS1ib3R0b20gbGkgbGFiZWwge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNuZXdUYXNrRGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnN0YXJDaGVja2JveCB7XFxuICAgIHZpc2liaWxpdHk6aGlkZGVuO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4uc3RhckNoZWNrYm94OjpiZWZvcmUge1xcbiAgIGNvbnRlbnQ6IFxcXCJzdGFyX291dGxpbmVcXFwiO1xcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICB2aXNpYmlsaXR5OnZpc2libGU7XFxuICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3RhckNoZWNrYm94OmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgY29udGVudDogXFxcInN0YXJcXFwiO1xcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICBjb2xvcjogeWVsbG93O1xcbn1cXG5cXG5cXG4jYWRkTmV3VGFza0J0biB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTdCOUQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi8qIE5FVyBQUk9KRUNUIE1PREFMICovXFxuXFxuI25ld1Byb2plY3RUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI2FkZE5ld1Byb2plY3RCdG4ge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1N0I5RDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbi8vUHJvamVjdCBDbGFzc1xuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICB0YXNrczogW10sXG4gICAgICAgIGFkZFRhc2sodGFzaykge1xuICAgICAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICB9LFxuICAgICAgICBkZWxldGVUYXNrKGVsKSB7XG4gICAgICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZVRhc2tGcm9tTGlzdCh0YXNrVGl0bGUpIHtcbiAgICAgICAgICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZlUHJvamVjdC50aXRsZSA9PT0gcHJvamVjdC50aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFzay50aXRsZSA9PT0gdGFza1RpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vVGFzayBDbGFzc1xuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgcHJvamVjdFxuICAgIH1cbn1cblxuLy90b2RvbGlzdCBDbGFzc1xuZnVuY3Rpb24gdG9kb2xpc3QoKSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0YXNrczogW10sXG4gICAgICAgIGFkZFByb2plY3RUb0xpc3QocHJvamVjdCkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzTGlzdCcpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0QnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RCdG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcHJvamVjdEJ0bkljb24uaW5uZXJUZXh0ID0gJ2xpc3QnO1xuICAgICAgICAgICAgcHJvamVjdEJ0bkljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnKTtcbiAgICAgICAgICAgIHByb2plY3RCdG5EaXYuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bkljb24pO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgICAgIHByb2plY3RCdG5EaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHByb2plY3REZWxldGVCdG4uaW5uZXJUZXh0ID0gJ2Nsb3NlJztcbiAgICAgICAgICAgIHByb2plY3REZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnKTtcbiAgICAgICAgICAgIHByb2plY3REZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG5cbiAgICAgICAgICAgIHByb2plY3RCdG4uYXBwZW5kQ2hpbGQocHJvamVjdEJ0bkRpdik7XG4gICAgICAgICAgICBwcm9qZWN0QnRuLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVCdG4pO1xuXG4gICAgICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bik7XG5cblxuICAgICAgICAgICAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Qcm9qZWN0KTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZWxldGVQcm9qZWN0KGVsKSB7XG4gICAgICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlbGV0ZVByb2plY3RGcm9tTGlzdCh0aXRsZSkge1xuXG4gICAgICAgICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSB0aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICBhbGxQcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuY29uc3QgbXlUb2RvbGlzdCA9IHRvZG9saXN0KCk7XG5sZXQgYWN0aXZlUHJvamVjdDtcbi8vU3RvcmUgQ2xhc3NcblxubGV0IGFsbFByb2plY3RzID0gW107XG4vL0V2ZW50OiBEaXNwbGF5IFByb2plY3Q7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBteVRvZG9saXN0LmRpc3BsYXlQcm9qZWN0cyk7XG5cbi8vRXZlbnQ6IEFkZCBQcm9qZWN0XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdE1vZGFsJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdFRpdGxlJykudmFsdWU7XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdCh0aXRsZSk7XG5cbiAgICBteVRvZG9saXN0LmFkZFByb2plY3RUb0xpc3QocHJvamVjdCk7XG5cbiAgICBhbGxQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXG4gICAgY2xvc2VQcm9qZWN0TW9kYWwoKTtcbn0pXG5cbi8vRXZlbnQ6IE9wZW5pbmcgYSBQcm9qZWN0XG5cbmZ1bmN0aW9uIG9wZW5Qcm9qZWN0KGUpIHtcblxuICAgIGFjdGl2ZVByb2plY3QgPSBhbGxQcm9qZWN0cy5maWx0ZXIoY2hlY2tQcm9qZWN0VGl0bGUpWzBdO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tQcm9qZWN0VGl0bGUocHJvamVjdCkge1xuICAgICAgICByZXR1cm4gcHJvamVjdC50aXRsZSA9PT0gZS5jdXJyZW50VGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0O1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKTtcbiAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gYWN0aXZlUHJvamVjdC50aXRsZTtcbiAgICBjb25zdCBvcGVuTmV3VGFza01vZGFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5OZXdUYXNrTW9kYWxCdG4nKTtcbiAgICBvcGVuTmV3VGFza01vZGFsQnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgc2hvd0FjdGl2ZVByb2plY3QoZSk7XG5cblxuICAgIHJlbmRlclRhc2tzKGFjdGl2ZVByb2plY3QpO1xuXG4gICAgY29uc29sZS5sb2coYWN0aXZlUHJvamVjdC50YXNrcylcbn1cblxuLy8gU2hvdyBBY3RpdmUgUHJvamVjdCBcbmZ1bmN0aW9uIHNob3dBY3RpdmVQcm9qZWN0KGUpIHtcbiAgICBsZXQgcHJvamVjdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JykpO1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVQcm9qZWN0Jyk7XG4gICAgfSlcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlUHJvamVjdCcpXG59XG5cblxuLy9FdmVudDogUmVtb3ZlIFByb2plY3RcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzTGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUnKSkge1xuICAgICAgICBteVRvZG9saXN0LmRlbGV0ZVByb2plY3QoZS50YXJnZXQpO1xuXG4gICAgICAgIG15VG9kb2xpc3QuZGVsZXRlUHJvamVjdEZyb21MaXN0KGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gJyc7XG4gICAgICAgIGNsZWFyRWxlbWVudHMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzTGlzdCcpKVxuICAgIH1cbn0pXG5cblxuLy9FdmVudDogQWRkIFRhc2tcbmNvbnN0IG9wZW5OZXdUYXNrTW9kYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbk5ld1Rhc2tNb2RhbEJ0bicpO1xuXG5vcGVuTmV3VGFza01vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblRhc2tNb2RhbCk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrTW9kYWwnKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHRhc2tzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrc0xpc3QnKTtcbiAgICBjbGVhckVsZW1lbnRzKHRhc2tzTGlzdCk7XG5cbiAgICBjb25zdCBuZXdUYXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza1RpdGxlJyk7XG4gICAgY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2tEZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IG5ld1Rhc2tEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2tEYXRlJyk7XG4gICAgY29uc3QgbmV3VGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2tQcmlvcml0eScpO1xuXG5cbiAgICBjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFzayhuZXdUYXNrVGl0bGUudmFsdWUsIG5ld1Rhc2tEZXNjcmlwdGlvbi52YWx1ZSwgbmV3VGFza0RhdGUudmFsdWUsIG5ld1Rhc2tQcmlvcml0eS5jaGVja2VkLCBhY3RpdmVQcm9qZWN0LnRpdGxlKTtcblxuICAgIC8vYWRkIG5ldyB0YXNrIHRvIHByb2plY3RcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmVQcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0LnRpdGxlKSB7XG4gICAgICAgICAgICBwcm9qZWN0LmFkZFRhc2sobmV3VGFzayk7XG4gICAgICAgICAgICBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZW5kZXJUYXNrcyhhY3RpdmVQcm9qZWN0KTtcbn0pXG5cbi8vcmVuZGVyIFRhc2tzXG5mdW5jdGlvbiByZW5kZXJUYXNrcyhwcm9qZWN0KSB7XG4gICAgY29uc3QgdGFza3NMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzTGlzdCcpO1xuICAgIGNsZWFyRWxlbWVudHModGFza3NMaXN0KTtcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgdGFza0VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgdGFza0VudHJ5LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcblxuICAgICAgICBjb25zdCB0YXNrTGVmdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0xlZnRTaWRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tMZWZ0U2lkZScpO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb21wbGV0ZVRvZ2dsZScpO1xuICAgICAgICB0YXNrTGVmdFNpZGUuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tUZXh0LmNsYXNzTGlzdC5hZGQoJ3Rhc2tUZXh0Jyk7XG5cbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGFza1RpdGxlLnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRhc2tUaXRsZS52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgdHJ1ZSk7XG4gICAgICAgIHRhc2tUZXh0LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgdHJ1ZSk7XG4gICAgICAgIHRhc2tUZXh0LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG5cbiAgICAgICAgdGFza0xlZnRTaWRlLmFwcGVuZENoaWxkKHRhc2tUZXh0KTtcbiAgICAgICAgdGFza0VudHJ5LmFwcGVuZENoaWxkKHRhc2tMZWZ0U2lkZSk7XG5cbiAgICAgICAgY29uc3QgdGFza1JpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrUmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tSaWdodFNpZGUnKTtcblxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRhc2tEdWVEYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIHRhc2tEdWVEYXRlLnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICAgICAgICB0YXNrUmlnaHRTaWRlLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcblxuICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBlZGl0QnRuLmlubmVyVGV4dCA9ICdlZGl0JztcbiAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCcpO1xuICAgICAgICB0YXNrUmlnaHRTaWRlLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gICAgICAgIGxldCBwcmlvcml0eVRvZ2dsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBwcmlvcml0eVRvZ2dsZXIudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgIHByaW9yaXR5VG9nZ2xlci5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCcsICdzdGFyQ2hlY2tib3gnKTtcbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHByaW9yaXR5VG9nZ2xlci5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByaW9yaXR5VG9nZ2xlci5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0YXNrUmlnaHRTaWRlLmFwcGVuZENoaWxkKHByaW9yaXR5VG9nZ2xlcik7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkZWxldGVCdG4uaW5uZXJUZXh0ID0gJ2RlbGV0ZSc7XG4gICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCcpO1xuICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgICAgIHRhc2tSaWdodFNpZGUuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgICAgICB0YXNrRW50cnkuYXBwZW5kQ2hpbGQodGFza1JpZ2h0U2lkZSk7XG5cbiAgICAgICAgaWYgKHRhc2suY29tcGxldGVkKSB7XG4gICAgICAgICAgICB0YXNrRW50cnkuY2xhc3NMaXN0LmFkZCgndGFza0NvbXBsZXRlZCcpO1xuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXNrc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3NMaXN0Jyk7XG4gICAgICAgIHRhc2tzTGlzdC5hcHBlbmRDaGlsZCh0YXNrRW50cnkpO1xuXG4gICAgICAgIGNsb3NlVGFza01vZGFsKCk7XG4gICAgfSk7XG59XG5cbi8vIENoYW5nZSBUYXNrIFByaW9yaXR5XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3NMaXN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGFyQ2hlY2tib3gnKSkge1xuICAgICAgICBsZXQgdGFza1RpdGxlID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQudmFsdWU7XG4gICAgICAgIGxldCB0YXNrID0gZmluZFRhc2soYWN0aXZlUHJvamVjdC50aXRsZSwgdGFza1RpdGxlKTtcbiAgICAgICAgdGFzay5wcmlvcml0eSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2spO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0c1swXS50YXNrcyk7XG59KVxuXG4vL0V2ZW50IFJlbW92ZSBUYXNrXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrc0xpc3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlJykpIHtcbiAgICAgICAgYWN0aXZlUHJvamVjdC5kZWxldGVUYXNrKGUudGFyZ2V0KTtcblxuICAgICAgICBhY3RpdmVQcm9qZWN0LmRlbGV0ZVRhc2tGcm9tTGlzdChlLnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC52YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbiAgICB9XG59KVxuXG4vL01hcmsgVGFzayBhcyBDb21wbGV0ZWRcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrc0xpc3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFza0NvbXBsZXRlVG9nZ2xlJykpIHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3Rhc2tDb21wbGV0ZWQnKTtcblxuICAgICAgICBsZXQgdGFza1RpdGxlID0gZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLnZhbHVlO1xuICAgICAgICBsZXQgdGFzayA9IGZpbmRUYXNrKGFjdGl2ZVByb2plY3QudGl0bGUsIHRhc2tUaXRsZSk7XG4gICAgICAgIHRhc2suY29tcGxldGVkID0gZS50YXJnZXQuY2hlY2tlZDtcblxuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIGZpbmRUYXNrKHByb2plY3RUaXRsZSwgdGFza1RpdGxlKSB7XG4gICAgbGV0IG15VGFzaztcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG5cbiAgICAgICAgaWYgKHByb2plY3QudGl0bGUgPT09IHByb2plY3RUaXRsZSkge1xuICAgICAgICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2sudGl0bGUgPT09IHRhc2tUaXRsZSkge1xuICAgICAgICAgICAgICAgICAgICBteVRhc2sgPSB0YXNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBteVRhc2s7XG59XG5cblxuLy9DbGVhbiB1cCB0YXNrc1xuXG5mdW5jdGlvbiBjbGVhckVsZW1lbnRzKGVsZW1lbnQpIHtcbiAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cblxuLy8gLy9TaG93IGFsbCB0YXNrc1xuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbFRhc2tzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93QWxsVGFza3MpO1xuXG4vLyBmdW5jdGlvbiBzaG93QWxsVGFza3MoKSB7XG4vLyAgICAgdG9kb2xpc3QudGFza3MgPSBbXTtcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlJykuaW5uZXJUZXh0ID0gJ0FsbCBUYXNrcyc7XG5cbi8vICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4vLyAgICAgICAgIHRvZG9saXN0LnRhc2tzID0gdG9kb2xpc3QudGFza3MuY29uY2F0KHByb2plY3QudGFza3MpO1xuLy8gICAgIH0pXG5cbi8vICAgICByZW5kZXJUYXNrcyh0b2RvbGlzdCk7XG5cbi8vICAgICBjb25zb2xlLmxvZyh0b2RvbGlzdC50YXNrcylcbi8vIH1cblxuLy8gLy9TaG93IHRhc2tzIGR1ZSBUT0RBWVxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzRHVlVG9kYXknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dUYXNrc0R1ZVRvZGF5KTtcblxuXG4vL05ldyBQcm9qZWN0IE1vZGFsXG5jb25zdCBvcGVuTmV3UHJvamVjdE1vZGFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5OZXdQcm9qZWN0TW9kYWxCdG4nKVxuXG5vcGVuTmV3UHJvamVjdE1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblByb2plY3RNb2RhbCk7XG5cbmZ1bmN0aW9uIG9wZW5Qcm9qZWN0TW9kYWwoKSB7XG4gICAgbmV3UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG91dHNpZGVDbGljayk7XG5cbmZ1bmN0aW9uIG91dHNpZGVDbGljayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBuZXdUYXNrTW9kYWwpIHtcbiAgICAgICAgbmV3VGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHJlc2V0VGFza0Zvcm0oKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09PSBuZXdQcm9qZWN0TW9kYWwpIHtcbiAgICAgICAgbmV3UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxufVxuXG5cbmNvbnN0IG5ld1Byb2plY3RDbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Q2xvc2VCdG4nKTtcblxubmV3UHJvamVjdENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQcm9qZWN0TW9kYWwpO1xuXG5mdW5jdGlvbiBjbG9zZVByb2plY3RNb2RhbCgpIHtcbiAgICBuZXdQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBuZXdQcm9qZWN0VGl0bGUudmFsdWUgPSAnJztcbn1cblxuLy9OZXcgVGFzayBNb2RhbFxuXG5cbmNvbnN0IG5ld1Rhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrTW9kYWwnKTtcblxuZnVuY3Rpb24gb3BlblRhc2tNb2RhbCgpIHtcbiAgICBuZXdUYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmNvbnN0IG5ld1Rhc2tDbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrQ2xvc2VCdG4nKTtcblxubmV3VGFza0Nsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUYXNrTW9kYWwpO1xuXG5mdW5jdGlvbiBjbG9zZVRhc2tNb2RhbCgpIHtcbiAgICBuZXdUYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICByZXNldFRhc2tGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0VGFza0Zvcm0oKSB7XG4gICAgbmV3VGFza1RpdGxlLnZhbHVlID0gXCJcIjtcbiAgICBuZXdUYXNrRGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgIG5ld1Rhc2tEYXRlLnZhbHVlID0gXCJcIjtcbiAgICBuZXdUYXNrUHJpb3JpdHkuY2hlY2tlZCA9IGZhbHNlO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=