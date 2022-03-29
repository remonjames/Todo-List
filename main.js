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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody, html {\n    height: 100%;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: auto 1fr auto;\n    height: 100vh;\n    font-size: 10px;\n}\n\n/* HEADER */\n\nheader {\n    background-color: #457B9D;\n    padding: 50px 20px;\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    width: 100vw;\n}\n\nheader h1 {\n    font-size: 3.5rem;\n    height: 100%;\n    color: white;\n}\n\nmain {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    width: 100vw;\n}\n\n/* SIDEBAR */\n\nnav {\n    background-color: #F1FAEE;\n    grid-column: 1 / 2;\n    width: 300px;\n}\n\n/* .default-projects > ul {\n    list-style: none;\n}\n\n.default-projects > ul > li {\n    font-size: 1.5rem;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 25px 0 25px 25px;\n    width: 100%;\n} */\n\n.projectsHeading {\n    font-size: 2rem;\n    margin-top: 20px;\n    margin-left: 25px;\n    margin-bottom: 20px;\n}\n\n.projects > ul {\n    list-style: none;\n} \n\n.project {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 25px 25px 25px 25px;\n    font-size: 1.25rem;\n    cursor: pointer;\n}\n\n.project:hover {\n    background-color: #ceeec4;\n}\n\n.activeProject {\n    background-color: #ceeec4;\n}\n\n.project > div {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    width: 100%;\n}\n\n.projects  button {\n    font-size: 1.25rem;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 25px 0 25px 25px;\n    width: 100%;\n    cursor: pointer;\n}\n\n#openNewProjectModalBtn {\n    border: none;\n    background-color: #F1FAEE;\n}\n\n#openNewProjectModalBtn:hover {\n    background-color: #ceeec4;\n}\n\n.delete:hover {\n    color: red;\n    cursor: pointer;\n}\n\n\n/* MAIN CONTENT */\n\n#content {\n    grid-column: 2 / 3;\n    width: calc(100vw - 300px);\n    padding: 20px;\n}\n\n#content h2 {\n    font-size: 2.25rem;\n    margin-bottom: 25px;\n}\n\n#tasksList {\n    list-style: none;\n}\n\n.task {\n    background-color: #2a52be;\n    border: 1px solid black;\n    border-radius: 20px;\n    padding: 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    margin-bottom: 20px;\n    color: white;\n}\n\n.taskLeftSide {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    width: 600px;\n}\n\n.taskRightSide {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.taskText {\n    display: flex;\n    flex-direction: column;\n}\n\n.taskText input {\n    border: none;\n    background: none;\n    font-size: 1.25rem;\n    color: white;\n    width: 500px;\n}\n\n\n.taskRightSide input {\n    color: white;\n    border: none;\n    background: none;\n    font-size: 1rem;\n}\n\n.taskText input + input {\n    font-size: 0.8rem;\n}\n\n.taskDueDate {\n    font-family: 'Roboto', sans-serif;\n    font-size: .9rem;\n    border: 1px solid black;\n    padding: 5px;\n    border-radius: 10px;\n    width: 100px;\n    text-align: center;\n}\n\n.taskCompleted {\n    background-color: #6d8bdf;\n}\n\n.taskCompleted > .taskLeftSide > .taskText > input[type=text] {\n    text-decoration: line-through;\n    text-decoration-color: black;\n    color: #eee;\n}\n\n\n#openNewTaskModalBtn {\n    border-radius: 50%;\n    border: none;\n    display: none;\n    background-color: white;\n    font-size: 3.5rem;\n    position: fixed;\n    bottom: 40px;\n    right: 40px;\n    cursor: pointer;\n}\n\n/* FOOTER */\n\nfooter {\n    width: 100vw;\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n    background-color: #1D3557;\n    padding: 10px;\n}\n\nfooter p {\n    color: #F1FAEE;\n    text-align: center;\n}\n\n/* NEW TODO MODAL */\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, .5);\n}\n\n.modal-content {\n    background-color: #1D3557;\n    margin: 20% auto;\n    width: 550px;\n    border-radius: 7px;\n    border: none;\n}\n\n.modal-header {\n    background-color: #457B9D;\n    padding: 20px;\n    color: white;\n    font-size: 1.25rem;\n    border-top-right-radius: 7px;\n    border-top-left-radius: 7px;\n    border: none;\n}\n\n.modal-closeBtn {\n    float: right;\n     font-size: 1.5rem;\n}\n\n.modal-closeBtn:hover, .modal-closeBtn:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.modal-body {\n    padding: 20px;\n}\n\n.modal-form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-size: 1rem;\n}\n\n#newTaskTitle {\n    font-size: 1rem;\n    border: 1px solid lightgray;\n    border-radius: 3px;\n} \n\n#newTaskDescription {\n    resize: none;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n    border: 1px solid lightgray;\n    border-radius: 3px;\n}\n\n.modal-form-bottom {\n    display: flex;\n    justify-content: space-between;\n    list-style: none;\n}\n\n.modal-form-bottom li {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.modal-form-bottom li label {\n    color: white;\n}\n\n#newTaskDate {\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.9rem;\n    border: none;\n    border-radius: 3px;\n}\n\n.starCheckbox {\n    visibility: hidden;\n    font-size: 1rem;\n    cursor: pointer;\n    -moz-appearance: inherit;\n}\n\n.starCheckbox::before {\n   content: \"star_outline\";\n   position: relative;\n   visibility: visible;\n   color: white;\n   -moz-appearance: inherit;\n}\n\n.starCheckbox:checked::before {\n   content: \"star\";\n   position: relative;\n   color: yellow;\n   -moz-appearance: inherit;\n}\n\n\n#addNewTaskBtn {\n    border: none;\n    padding: 5px 10px;\n    background-color: #457B9D;\n    color: white;\n    border-radius: 7px;\n    font-size: 1rem;\n}\n\n/* NEW PROJECT MODAL */\n\n#newProjectTitle {\n    font-size: 1rem;\n}\n\n#addNewProjectBtn {\n    width: 150px;\n    padding: 5px 10px;\n    border: none;\n    border-radius: 7px;\n    background-color: #457B9D;\n    color: white;\n    font-size: 1rem;\n    align-self: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody, html {\n    height: 100%;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: auto 1fr auto;\n    height: 100vh;\n    font-size: 10px;\n}\n\n/* HEADER */\n\nheader {\n    background-color: #457B9D;\n    padding: 50px 20px;\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    width: 100vw;\n}\n\nheader h1 {\n    font-size: 3.5rem;\n    height: 100%;\n    color: white;\n}\n\nmain {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    width: 100vw;\n}\n\n/* SIDEBAR */\n\nnav {\n    background-color: #F1FAEE;\n    grid-column: 1 / 2;\n    width: 300px;\n}\n\n/* .default-projects > ul {\n    list-style: none;\n}\n\n.default-projects > ul > li {\n    font-size: 1.5rem;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 25px 0 25px 25px;\n    width: 100%;\n} */\n\n.projectsHeading {\n    font-size: 2rem;\n    margin-top: 20px;\n    margin-left: 25px;\n    margin-bottom: 20px;\n}\n\n.projects > ul {\n    list-style: none;\n} \n\n.project {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 25px 25px 25px 25px;\n    font-size: 1.25rem;\n    cursor: pointer;\n}\n\n.project:hover {\n    background-color: #ceeec4;\n}\n\n.activeProject {\n    background-color: #ceeec4;\n}\n\n.project > div {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    width: 100%;\n}\n\n.projects  button {\n    font-size: 1.25rem;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 25px 0 25px 25px;\n    width: 100%;\n    cursor: pointer;\n}\n\n#openNewProjectModalBtn {\n    border: none;\n    background-color: #F1FAEE;\n}\n\n#openNewProjectModalBtn:hover {\n    background-color: #ceeec4;\n}\n\n.delete:hover {\n    color: red;\n    cursor: pointer;\n}\n\n\n/* MAIN CONTENT */\n\n#content {\n    grid-column: 2 / 3;\n    width: calc(100vw - 300px);\n    padding: 20px;\n}\n\n#content h2 {\n    font-size: 2.25rem;\n    margin-bottom: 25px;\n}\n\n#tasksList {\n    list-style: none;\n}\n\n.task {\n    background-color: #2a52be;\n    border: 1px solid black;\n    border-radius: 20px;\n    padding: 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    margin-bottom: 20px;\n    color: white;\n}\n\n.taskLeftSide {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    width: 600px;\n}\n\n.taskRightSide {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.taskText {\n    display: flex;\n    flex-direction: column;\n}\n\n.taskText input {\n    border: none;\n    background: none;\n    font-size: 1.25rem;\n    color: white;\n    width: 500px;\n}\n\n\n.taskRightSide input {\n    color: white;\n    border: none;\n    background: none;\n    font-size: 1rem;\n}\n\n.taskText input + input {\n    font-size: 0.8rem;\n}\n\n.taskDueDate {\n    font-family: 'Roboto', sans-serif;\n    font-size: .9rem;\n    border: 1px solid black;\n    padding: 5px;\n    border-radius: 10px;\n    width: 100px;\n    text-align: center;\n}\n\n.taskCompleted {\n    background-color: #6d8bdf;\n}\n\n.taskCompleted > .taskLeftSide > .taskText > input[type=text] {\n    text-decoration: line-through;\n    text-decoration-color: black;\n    color: #eee;\n}\n\n\n#openNewTaskModalBtn {\n    border-radius: 50%;\n    border: none;\n    display: none;\n    background-color: white;\n    font-size: 3.5rem;\n    position: fixed;\n    bottom: 40px;\n    right: 40px;\n    cursor: pointer;\n}\n\n/* FOOTER */\n\nfooter {\n    width: 100vw;\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n    background-color: #1D3557;\n    padding: 10px;\n}\n\nfooter p {\n    color: #F1FAEE;\n    text-align: center;\n}\n\n/* NEW TODO MODAL */\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, .5);\n}\n\n.modal-content {\n    background-color: #1D3557;\n    margin: 20% auto;\n    width: 550px;\n    border-radius: 7px;\n    border: none;\n}\n\n.modal-header {\n    background-color: #457B9D;\n    padding: 20px;\n    color: white;\n    font-size: 1.25rem;\n    border-top-right-radius: 7px;\n    border-top-left-radius: 7px;\n    border: none;\n}\n\n.modal-closeBtn {\n    float: right;\n     font-size: 1.5rem;\n}\n\n.modal-closeBtn:hover, .modal-closeBtn:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.modal-body {\n    padding: 20px;\n}\n\n.modal-form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-size: 1rem;\n}\n\n#newTaskTitle {\n    font-size: 1rem;\n    border: 1px solid lightgray;\n    border-radius: 3px;\n} \n\n#newTaskDescription {\n    resize: none;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n    border: 1px solid lightgray;\n    border-radius: 3px;\n}\n\n.modal-form-bottom {\n    display: flex;\n    justify-content: space-between;\n    list-style: none;\n}\n\n.modal-form-bottom li {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.modal-form-bottom li label {\n    color: white;\n}\n\n#newTaskDate {\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.9rem;\n    border: none;\n    border-radius: 3px;\n}\n\n.starCheckbox {\n    visibility: hidden;\n    font-size: 1rem;\n    cursor: pointer;\n    -moz-appearance: inherit;\n}\n\n.starCheckbox::before {\n   content: \"star_outline\";\n   position: relative;\n   visibility: visible;\n   color: white;\n   -moz-appearance: inherit;\n}\n\n.starCheckbox:checked::before {\n   content: \"star\";\n   position: relative;\n   color: yellow;\n   -moz-appearance: inherit;\n}\n\n\n#addNewTaskBtn {\n    border: none;\n    padding: 5px 10px;\n    background-color: #457B9D;\n    color: white;\n    border-radius: 7px;\n    font-size: 1rem;\n}\n\n/* NEW PROJECT MODAL */\n\n#newProjectTitle {\n    font-size: 1rem;\n}\n\n#addNewProjectBtn {\n    width: 150px;\n    padding: 5px 10px;\n    border: none;\n    border-radius: 7px;\n    background-color: #457B9D;\n    color: white;\n    font-size: 1rem;\n    align-self: center;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEs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QUNMO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5LCBodG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU3QjlEO1xcbiAgICBwYWRkaW5nOiA1MHB4IDIwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4vKiBTSURFQkFSICovXFxuXFxubmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRkFFRTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblxcbi8qIC5kZWZhdWx0LXByb2plY3RzID4gdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uZGVmYXVsdC1wcm9qZWN0cyA+IHVsID4gbGkge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyNXB4IDAgMjVweCAyNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59ICovXFxuXFxuLnByb2plY3RzSGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0cyA+IHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59IFxcblxcbi5wcm9qZWN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjVweCAyNXB4IDI1cHggMjVweDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlZWVjNDtcXG59XFxuXFxuLmFjdGl2ZVByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VlZWM0O1xcbn1cXG5cXG4ucHJvamVjdCA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0cyAgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDI1cHggMCAyNXB4IDI1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNvcGVuTmV3UHJvamVjdE1vZGFsQnRuIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGQUVFO1xcbn1cXG5cXG4jb3Blbk5ld1Byb2plY3RNb2RhbEJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWVlYzQ7XFxufVxcblxcbi5kZWxldGU6aG92ZXIge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi8qIE1BSU4gQ09OVEVOVCAqL1xcblxcbiNjb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDMwMHB4KTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI2NvbnRlbnQgaDIge1xcbiAgICBmb250LXNpemU6IDIuMjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcblxcbiN0YXNrc0xpc3Qge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTUyYmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrTGVmdFNpZGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA2MDBweDtcXG59XFxuXFxuLnRhc2tSaWdodFNpZGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRhc2tUZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2tUZXh0IGlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG5cXG4udGFza1JpZ2h0U2lkZSBpbnB1dCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrVGV4dCBpbnB1dCArIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi50YXNrRHVlRGF0ZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrQ29tcGxldGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZkOGJkZjtcXG59XFxuXFxuLnRhc2tDb21wbGV0ZWQgPiAudGFza0xlZnRTaWRlID4gLnRhc2tUZXh0ID4gaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogI2VlZTtcXG59XFxuXFxuXFxuI29wZW5OZXdUYXNrTW9kYWxCdG4ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogNDBweDtcXG4gICAgcmlnaHQ6IDQwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuXFxuZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEMzU1NztcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgICBjb2xvcjogI0YxRkFFRTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBORVcgVE9ETyBNT0RBTCAqL1xcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEMzU1NztcXG4gICAgbWFyZ2luOiAyMCUgYXV0bztcXG4gICAgd2lkdGg6IDU1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTdCOUQ7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm1vZGFsLWNsb3NlQnRuIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5tb2RhbC1jbG9zZUJ0bjpob3ZlciwgLm1vZGFsLWNsb3NlQnRuOmZvY3VzIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsLWJvZHkge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jbmV3VGFza1RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59IFxcblxcbiNuZXdUYXNrRGVzY3JpcHRpb24ge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm1vZGFsLWZvcm0tYm90dG9tIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubW9kYWwtZm9ybS1ib3R0b20gbGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLm1vZGFsLWZvcm0tYm90dG9tIGxpIGxhYmVsIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jbmV3VGFza0RhdGUge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnN0YXJDaGVja2JveCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogaW5oZXJpdDtcXG59XFxuXFxuLnN0YXJDaGVja2JveDo6YmVmb3JlIHtcXG4gICBjb250ZW50OiBcXFwic3Rhcl9vdXRsaW5lXFxcIjtcXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICBjb2xvcjogd2hpdGU7XFxuICAgLW1vei1hcHBlYXJhbmNlOiBpbmhlcml0O1xcbn1cXG5cXG4uc3RhckNoZWNrYm94OmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgY29udGVudDogXFxcInN0YXJcXFwiO1xcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICBjb2xvcjogeWVsbG93O1xcbiAgIC1tb3otYXBwZWFyYW5jZTogaW5oZXJpdDtcXG59XFxuXFxuXFxuI2FkZE5ld1Rhc2tCdG4ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU3QjlEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4vKiBORVcgUFJPSkVDVCBNT0RBTCAqL1xcblxcbiNuZXdQcm9qZWN0VGl0bGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNhZGROZXdQcm9qZWN0QnRuIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTdCOUQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQSxXQUFXOztBQUVYO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUEsWUFBWTs7QUFFWjtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTs7Ozs7Ozs7Ozs7R0FXRzs7QUFFSDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lB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Yiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCOztBQUVBO0dBQ0csdUJBQXVCO0dBQ3ZCLGtCQUFrQjtHQUNsQixtQkFBbUI7R0FDbkIsWUFBWTtHQUNaLHdCQUF3QjtBQUMzQjs7QUFFQTtHQUNHLGVBQWU7R0FDZixrQkFBa0I7R0FDbEIsYUFBYTtHQUNiLHdCQUF3QjtBQUMzQjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUEsc0JBQXNCOztBQUV0QjtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5LCBodG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU3QjlEO1xcbiAgICBwYWRkaW5nOiA1MHB4IDIwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4vKiBTSURFQkFSICovXFxuXFxubmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRkFFRTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblxcbi8qIC5kZWZhdWx0LXByb2plY3RzID4gdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uZGVmYXVsdC1wcm9qZWN0cyA+IHVsID4gbGkge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyNXB4IDAgMjVweCAyNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59ICovXFxuXFxuLnByb2plY3RzSGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0cyA+IHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59IFxcblxcbi5wcm9qZWN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjVweCAyNXB4IDI1cHggMjVweDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlZWVjNDtcXG59XFxuXFxuLmFjdGl2ZVByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VlZWM0O1xcbn1cXG5cXG4ucHJvamVjdCA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0cyAgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDI1cHggMCAyNXB4IDI1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNvcGVuTmV3UHJvamVjdE1vZGFsQnRuIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGQUVFO1xcbn1cXG5cXG4jb3Blbk5ld1Byb2plY3RNb2RhbEJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWVlYzQ7XFxufVxcblxcbi5kZWxldGU6aG92ZXIge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi8qIE1BSU4gQ09OVEVOVCAqL1xcblxcbiNjb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDMwMHB4KTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI2NvbnRlbnQgaDIge1xcbiAgICBmb250LXNpemU6IDIuMjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcblxcbiN0YXNrc0xpc3Qge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTUyYmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrTGVmdFNpZGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA2MDBweDtcXG59XFxuXFxuLnRhc2tSaWdodFNpZGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRhc2tUZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2tUZXh0IGlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG5cXG4udGFza1JpZ2h0U2lkZSBpbnB1dCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrVGV4dCBpbnB1dCArIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi50YXNrRHVlRGF0ZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrQ29tcGxldGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZkOGJkZjtcXG59XFxuXFxuLnRhc2tDb21wbGV0ZWQgPiAudGFza0xlZnRTaWRlID4gLnRhc2tUZXh0ID4gaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogI2VlZTtcXG59XFxuXFxuXFxuI29wZW5OZXdUYXNrTW9kYWxCdG4ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogNDBweDtcXG4gICAgcmlnaHQ6IDQwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuXFxuZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEMzU1NztcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgICBjb2xvcjogI0YxRkFFRTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBORVcgVE9ETyBNT0RBTCAqL1xcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEMzU1NztcXG4gICAgbWFyZ2luOiAyMCUgYXV0bztcXG4gICAgd2lkdGg6IDU1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTdCOUQ7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm1vZGFsLWNsb3NlQnRuIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5tb2RhbC1jbG9zZUJ0bjpob3ZlciwgLm1vZGFsLWNsb3NlQnRuOmZvY3VzIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsLWJvZHkge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jbmV3VGFza1RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59IFxcblxcbiNuZXdUYXNrRGVzY3JpcHRpb24ge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm1vZGFsLWZvcm0tYm90dG9tIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubW9kYWwtZm9ybS1ib3R0b20gbGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLm1vZGFsLWZvcm0tYm90dG9tIGxpIGxhYmVsIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jbmV3VGFza0RhdGUge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnN0YXJDaGVja2JveCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogaW5oZXJpdDtcXG59XFxuXFxuLnN0YXJDaGVja2JveDo6YmVmb3JlIHtcXG4gICBjb250ZW50OiBcXFwic3Rhcl9vdXRsaW5lXFxcIjtcXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICBjb2xvcjogd2hpdGU7XFxuICAgLW1vei1hcHBlYXJhbmNlOiBpbmhlcml0O1xcbn1cXG5cXG4uc3RhckNoZWNrYm94OmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgY29udGVudDogXFxcInN0YXJcXFwiO1xcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICBjb2xvcjogeWVsbG93O1xcbiAgIC1tb3otYXBwZWFyYW5jZTogaW5oZXJpdDtcXG59XFxuXFxuXFxuI2FkZE5ld1Rhc2tCdG4ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU3QjlEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4vKiBORVcgUFJPSkVDVCBNT0RBTCAqL1xcblxcbiNuZXdQcm9qZWN0VGl0bGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNhZGROZXdQcm9qZWN0QnRuIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTdCOUQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vL1Byb2plY3QgQ2xhc3NcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgdGFza3M6IFtdLFxuICAgICAgICBhZGRUYXNrKHRhc2spIHtcbiAgICAgICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlVGFzayhlbCkge1xuICAgICAgICAgICAgZWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9LFxuICAgICAgICBkZWxldGVUYXNrRnJvbUxpc3QodGFza1RpdGxlKSB7XG4gICAgICAgICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZVByb2plY3QudGl0bGUgPT09IHByb2plY3QudGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2sudGl0bGUgPT09IHRhc2tUaXRsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vL1Rhc2sgQ2xhc3NcbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIHByb2plY3RcbiAgICB9XG59XG5cbi8vdG9kb2xpc3QgQ2xhc3NcbmZ1bmN0aW9uIHRvZG9saXN0KCkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGFza3M6IFtdLFxuICAgICAgICBhZGRQcm9qZWN0VG9MaXN0KHByb2plY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c0xpc3QnKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBwcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0QnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHByb2plY3RCdG5JY29uLmlubmVyVGV4dCA9ICdsaXN0JztcbiAgICAgICAgICAgIHByb2plY3RCdG5JY29uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zLW91dGxpbmVkJyk7XG4gICAgICAgICAgICBwcm9qZWN0QnRuRGl2LmFwcGVuZENoaWxkKHByb2plY3RCdG5JY29uKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgICAgICBwcm9qZWN0QnRuRGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBwcm9qZWN0RGVsZXRlQnRuLmlubmVyVGV4dCA9ICdjbG9zZSc7XG4gICAgICAgICAgICBwcm9qZWN0RGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zLW91dGxpbmVkJyk7XG4gICAgICAgICAgICBwcm9qZWN0RGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuXG4gICAgICAgICAgICBwcm9qZWN0QnRuLmFwcGVuZENoaWxkKHByb2plY3RCdG5EaXYpO1xuICAgICAgICAgICAgcHJvamVjdEJ0bi5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlQnRuKTtcblxuICAgICAgICAgICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKHByb2plY3RCdG4pO1xuXG5cbiAgICAgICAgICAgIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuUHJvamVjdCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVsZXRlUHJvamVjdChlbCkge1xuICAgICAgICAgICAgZWwucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZWxldGVQcm9qZWN0RnJvbUxpc3QodGl0bGUpIHtcblxuICAgICAgICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gdGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsUHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmNvbnN0IG15VG9kb2xpc3QgPSB0b2RvbGlzdCgpO1xubGV0IGFjdGl2ZVByb2plY3Q7XG4vL1N0b3JlIENsYXNzXG5cbmxldCBhbGxQcm9qZWN0cyA9IFtdO1xuLy9FdmVudDogRGlzcGxheSBQcm9qZWN0O1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbXlUb2RvbGlzdC5kaXNwbGF5UHJvamVjdHMpO1xuXG4vL0V2ZW50OiBBZGQgUHJvamVjdFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RNb2RhbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RUaXRsZScpLnZhbHVlO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QodGl0bGUpO1xuXG4gICAgbXlUb2RvbGlzdC5hZGRQcm9qZWN0VG9MaXN0KHByb2plY3QpO1xuXG4gICAgYWxsUHJvamVjdHMucHVzaChwcm9qZWN0KTtcblxuICAgIGNsb3NlUHJvamVjdE1vZGFsKCk7XG59KVxuXG4vL0V2ZW50OiBPcGVuaW5nIGEgUHJvamVjdFxuXG5mdW5jdGlvbiBvcGVuUHJvamVjdChlKSB7XG5cbiAgICBhY3RpdmVQcm9qZWN0ID0gYWxsUHJvamVjdHMuZmlsdGVyKGNoZWNrUHJvamVjdFRpdGxlKVswXTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrUHJvamVjdFRpdGxlKHByb2plY3QpIHtcbiAgICAgICAgcmV0dXJuIHByb2plY3QudGl0bGUgPT09IGUuY3VycmVudFRhcmdldC5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlJyk7XG4gICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IGFjdGl2ZVByb2plY3QudGl0bGU7XG4gICAgY29uc3Qgb3Blbk5ld1Rhc2tNb2RhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuTmV3VGFza01vZGFsQnRuJyk7XG4gICAgb3Blbk5ld1Rhc2tNb2RhbEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgIHNob3dBY3RpdmVQcm9qZWN0KGUpO1xuXG5cbiAgICByZW5kZXJUYXNrcyhhY3RpdmVQcm9qZWN0KTtcblxuICAgIGNvbnNvbGUubG9nKGFjdGl2ZVByb2plY3QudGFza3MpXG59XG5cbi8vIFNob3cgQWN0aXZlIFByb2plY3QgXG5mdW5jdGlvbiBzaG93QWN0aXZlUHJvamVjdChlKSB7XG4gICAgbGV0IHByb2plY3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlUHJvamVjdCcpO1xuICAgIH0pXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZVByb2plY3QnKVxufVxuXG5cbi8vRXZlbnQ6IFJlbW92ZSBQcm9qZWN0XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c0xpc3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlJykpIHtcbiAgICAgICAgbXlUb2RvbGlzdC5kZWxldGVQcm9qZWN0KGUudGFyZ2V0KTtcblxuICAgICAgICBteVRvZG9saXN0LmRlbGV0ZVByb2plY3RGcm9tTGlzdChlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9ICcnO1xuICAgICAgICBjbGVhckVsZW1lbnRzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrc0xpc3QnKSlcbiAgICB9XG59KVxuXG5cbi8vRXZlbnQ6IEFkZCBUYXNrXG5jb25zdCBvcGVuTmV3VGFza01vZGFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5OZXdUYXNrTW9kYWxCdG4nKTtcblxub3Blbk5ld1Rhc2tNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5UYXNrTW9kYWwpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza01vZGFsJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB0YXNrc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3NMaXN0Jyk7XG4gICAgY2xlYXJFbGVtZW50cyh0YXNrc0xpc3QpO1xuXG4gICAgY29uc3QgbmV3VGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2tUaXRsZScpO1xuICAgIGNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrRGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBuZXdUYXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrRGF0ZScpO1xuICAgIGNvbnN0IG5ld1Rhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrUHJpb3JpdHknKTtcblxuXG4gICAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2sobmV3VGFza1RpdGxlLnZhbHVlLCBuZXdUYXNrRGVzY3JpcHRpb24udmFsdWUsIG5ld1Rhc2tEYXRlLnZhbHVlLCBuZXdUYXNrUHJpb3JpdHkuY2hlY2tlZCwgYWN0aXZlUHJvamVjdC50aXRsZSk7XG5cbiAgICAvL2FkZCBuZXcgdGFzayB0byBwcm9qZWN0XG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlUHJvamVjdC50aXRsZSA9PT0gcHJvamVjdC50aXRsZSkge1xuICAgICAgICAgICAgcHJvamVjdC5hZGRUYXNrKG5ld1Rhc2spO1xuICAgICAgICAgICAgYWN0aXZlUHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmVuZGVyVGFza3MoYWN0aXZlUHJvamVjdCk7XG59KVxuXG4vL3JlbmRlciBUYXNrc1xuZnVuY3Rpb24gcmVuZGVyVGFza3MocHJvamVjdCkge1xuICAgIGNvbnN0IHRhc2tzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrc0xpc3QnKTtcbiAgICBjbGVhckVsZW1lbnRzKHRhc2tzTGlzdCk7XG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHRhc2tFbnRyeS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG5cbiAgICAgICAgY29uc3QgdGFza0xlZnRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tMZWZ0U2lkZS5jbGFzc0xpc3QuYWRkKCd0YXNrTGVmdFNpZGUnKTtcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCd0YXNrQ29tcGxldGVUb2dnbGUnKTtcbiAgICAgICAgdGFza0xlZnRTaWRlLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgICAgICBjb25zdCB0YXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrVGV4dC5jbGFzc0xpc3QuYWRkKCd0YXNrVGV4dCcpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRhc2tUaXRsZS50eXBlID0gJ3RleHQnO1xuICAgICAgICB0YXNrVGl0bGUudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgICAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKCdyZWFkb25seScsIHRydWUpO1xuICAgICAgICB0YXNrVGV4dC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi50eXBlID0gJ3RleHQnO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdyZWFkb25seScsIHRydWUpO1xuICAgICAgICB0YXNrVGV4dC5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuXG4gICAgICAgIHRhc2tMZWZ0U2lkZS5hcHBlbmRDaGlsZCh0YXNrVGV4dCk7XG4gICAgICAgIHRhc2tFbnRyeS5hcHBlbmRDaGlsZCh0YXNrTGVmdFNpZGUpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tSaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza1JpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKCd0YXNrUmlnaHRTaWRlJyk7XG5cbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0YXNrRHVlRGF0ZS50eXBlID0gJ2RhdGUnO1xuICAgICAgICB0YXNrRHVlRGF0ZS52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgdGFza1JpZ2h0U2lkZS5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG5cbiAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZWRpdEJ0bi5pbm5lclRleHQgPSAnZWRpdCc7XG4gICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnKTtcbiAgICAgICAgdGFza1JpZ2h0U2lkZS5hcHBlbmRDaGlsZChlZGl0QnRuKTtcblxuICAgICAgICBsZXQgcHJpb3JpdHlUb2dnbGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgcHJpb3JpdHlUb2dnbGVyLnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICBwcmlvcml0eVRvZ2dsZXIuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnLCAnc3RhckNoZWNrYm94Jyk7XG4gICAgICAgIGlmICh0YXNrLnByaW9yaXR5KSB7XG4gICAgICAgICAgICBwcmlvcml0eVRvZ2dsZXIuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcmlvcml0eVRvZ2dsZXIuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFza1JpZ2h0U2lkZS5hcHBlbmRDaGlsZChwcmlvcml0eVRvZ2dsZXIpO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZGVsZXRlQnRuLmlubmVyVGV4dCA9ICdkZWxldGUnO1xuICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnKTtcbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICAgICAgICB0YXNrUmlnaHRTaWRlLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICAgICAgdGFza0VudHJ5LmFwcGVuZENoaWxkKHRhc2tSaWdodFNpZGUpO1xuXG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgdGFza0VudHJ5LmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb21wbGV0ZWQnKTtcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFza3NMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzTGlzdCcpO1xuICAgICAgICB0YXNrc0xpc3QuYXBwZW5kQ2hpbGQodGFza0VudHJ5KTtcblxuICAgICAgICBjbG9zZVRhc2tNb2RhbCgpO1xuICAgIH0pO1xufVxuXG4vLyBDaGFuZ2UgVGFzayBQcmlvcml0eVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzTGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3RhckNoZWNrYm94JykpIHtcbiAgICAgICAgbGV0IHRhc2tUaXRsZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLnZhbHVlO1xuICAgICAgICBsZXQgdGFzayA9IGZpbmRUYXNrKGFjdGl2ZVByb2plY3QudGl0bGUsIHRhc2tUaXRsZSk7XG4gICAgICAgIHRhc2sucHJpb3JpdHkgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYWxsUHJvamVjdHNbMF0udGFza3MpO1xufSlcblxuLy9FdmVudCBSZW1vdmUgVGFza1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3NMaXN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZScpKSB7XG4gICAgICAgIGFjdGl2ZVByb2plY3QuZGVsZXRlVGFzayhlLnRhcmdldCk7XG5cbiAgICAgICAgYWN0aXZlUHJvamVjdC5kZWxldGVUYXNrRnJvbUxpc3QoZS50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG4gICAgfVxufSlcblxuLy9NYXJrIFRhc2sgYXMgQ29tcGxldGVkXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3NMaXN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2tDb21wbGV0ZVRvZ2dsZScpKSB7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrQ29tcGxldGVkJyk7XG5cbiAgICAgICAgbGV0IHRhc2tUaXRsZSA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC52YWx1ZTtcbiAgICAgICAgbGV0IHRhc2sgPSBmaW5kVGFzayhhY3RpdmVQcm9qZWN0LnRpdGxlLCB0YXNrVGl0bGUpO1xuICAgICAgICB0YXNrLmNvbXBsZXRlZCA9IGUudGFyZ2V0LmNoZWNrZWQ7XG5cbiAgICB9XG59KVxuXG5mdW5jdGlvbiBmaW5kVGFzayhwcm9qZWN0VGl0bGUsIHRhc2tUaXRsZSkge1xuICAgIGxldCBteVRhc2s7XG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuXG4gICAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnRpdGxlID09PSB0YXNrVGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbXlUYXNrID0gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gbXlUYXNrO1xufVxuXG5cbi8vQ2xlYW4gdXAgdGFza3NcblxuZnVuY3Rpb24gY2xlYXJFbGVtZW50cyhlbGVtZW50KSB7XG4gICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5cbi8vIC8vU2hvdyBhbGwgdGFza3Ncbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxUYXNrcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FsbFRhc2tzKTtcblxuLy8gZnVuY3Rpb24gc2hvd0FsbFRhc2tzKCkge1xuLy8gICAgIHRvZG9saXN0LnRhc2tzID0gW107XG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpLmlubmVyVGV4dCA9ICdBbGwgVGFza3MnO1xuXG4vLyAgICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuLy8gICAgICAgICB0b2RvbGlzdC50YXNrcyA9IHRvZG9saXN0LnRhc2tzLmNvbmNhdChwcm9qZWN0LnRhc2tzKTtcbi8vICAgICB9KVxuXG4vLyAgICAgcmVuZGVyVGFza3ModG9kb2xpc3QpO1xuXG4vLyAgICAgY29uc29sZS5sb2codG9kb2xpc3QudGFza3MpXG4vLyB9XG5cbi8vIC8vU2hvdyB0YXNrcyBkdWUgVE9EQVlcbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrc0R1ZVRvZGF5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VGFza3NEdWVUb2RheSk7XG5cblxuLy9OZXcgUHJvamVjdCBNb2RhbFxuY29uc3Qgb3Blbk5ld1Byb2plY3RNb2RhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuTmV3UHJvamVjdE1vZGFsQnRuJylcblxub3Blbk5ld1Byb2plY3RNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Qcm9qZWN0TW9kYWwpO1xuXG5mdW5jdGlvbiBvcGVuUHJvamVjdE1vZGFsKCkge1xuICAgIG5ld1Byb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvdXRzaWRlQ2xpY2spO1xuXG5mdW5jdGlvbiBvdXRzaWRlQ2xpY2soZSkge1xuICAgIGlmIChlLnRhcmdldCA9PT0gbmV3VGFza01vZGFsKSB7XG4gICAgICAgIG5ld1Rhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICByZXNldFRhc2tGb3JtKCk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PT0gbmV3UHJvamVjdE1vZGFsKSB7XG4gICAgICAgIG5ld1Byb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbn1cblxuXG5jb25zdCBuZXdQcm9qZWN0Q2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdENsb3NlQnRuJyk7XG5cbm5ld1Byb2plY3RDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUHJvamVjdE1vZGFsKTtcblxuZnVuY3Rpb24gY2xvc2VQcm9qZWN0TW9kYWwoKSB7XG4gICAgbmV3UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbmV3UHJvamVjdFRpdGxlLnZhbHVlID0gJyc7XG59XG5cbi8vTmV3IFRhc2sgTW9kYWxcblxuXG5jb25zdCBuZXdUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza01vZGFsJyk7XG5cbmZ1bmN0aW9uIG9wZW5UYXNrTW9kYWwoKSB7XG4gICAgbmV3VGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5jb25zdCBuZXdUYXNrQ2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza0Nsb3NlQnRuJyk7XG5cbm5ld1Rhc2tDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVGFza01vZGFsKTtcblxuZnVuY3Rpb24gY2xvc2VUYXNrTW9kYWwoKSB7XG4gICAgbmV3VGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcmVzZXRUYXNrRm9ybSgpO1xufVxuXG5mdW5jdGlvbiByZXNldFRhc2tGb3JtKCkge1xuICAgIG5ld1Rhc2tUaXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgbmV3VGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICBuZXdUYXNrRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgbmV3VGFza1ByaW9yaXR5LmNoZWNrZWQgPSBmYWxzZTtcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9