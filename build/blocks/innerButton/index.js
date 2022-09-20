/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Divider.js":
/*!***********************************!*\
  !*** ./src/components/Divider.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Divider; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function Divider() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
    className: "mchymcak-separator"
  });
}

/***/ }),

/***/ "./src/components/NewColorPalette.js":
/*!*******************************************!*\
  !*** ./src/components/NewColorPalette.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NewColorPalette; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_randomString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././utils/randomString */ "./src/utils/randomString.js");




function NewColorPalette(props) {
  const [color, setColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(props.default === undefined ? '#FFFF' : props.default);
  const randomID = (0,_utils_randomString__WEBPACK_IMPORTED_MODULE_2__.randomString)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: props.label,
    id: randomID,
    help: props.help
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
    color: color,
    id: randomID,
    onChange: newColor => {
      props.setAttributes({
        [props.target]: newColor
      });
      setColor(newColor.toString());
    },
    copyFormat: "hex"
  }));
}

/***/ }),

/***/ "./src/utils/randomString.js":
/*!***********************************!*\
  !*** ./src/utils/randomString.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomString": function() { return /* binding */ randomString; }
/* harmony export */ });
const randomString = () => {
  return (Math.random() + 1).toString(36).substring(7);
};

/***/ }),

/***/ "./src/blocks/innerButton/editor.scss":
/*!********************************************!*\
  !*** ./src/blocks/innerButton/editor.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/innerButton/attributes.json":
/*!************************************************!*\
  !*** ./src/blocks/innerButton/attributes.json ***!
  \************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"button":{"type":"string","source":"attribute","selector":"button","default":"Send"},"type":{"type":"string","source":"attribute","selector":"button","attribute":"type","default":"submit"},"bg_Color":{"type":"string","source":"attribute","selector":"button","attribute":"background-color","default":"#efefef"},"text_Color":{"type":"string","source":"attribute","selector":"button","attribute":"color","default":"#000000"},"padding_vert":{"type":"string","source":"attribute","selector":"button","attribute":"padding-top","default":"5px"},"padding_hor":{"type":"string","source":"attribute","selector":"button","attribute":"padding-left","default":"15px"},"border_Color":{"type":"string","source":"attribute","selector":"button","attribute":"border-color","default":"#d8d8d8"},"border_Width":{"type":"string","source":"attribute","selector":"button","attribute":"border-width","default":"1px"}}');

/***/ }),

/***/ "./src/blocks/innerButton/block.json":
/*!*******************************************!*\
  !*** ./src/blocks/innerButton/block.json ***!
  \*******************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"mchymcak/emailjs-button","title":"Button Element","icon":"button","description":"Button of the Contact Form","category":"text","supports":{"html":false},"textdomain":"emailjs-button","editorScript":"file:./index.js","editorStyle":"file:./index.css","parent":["mchymcak/emailjs-pattern"]}');

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*****************************************!*\
  !*** ./src/blocks/innerButton/index.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_NewColorPalette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../.././components/NewColorPalette */ "./src/components/NewColorPalette.js");
/* harmony import */ var _components_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../.././components/Divider */ "./src/components/Divider.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/innerButton/editor.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./block.json */ "./src/blocks/innerButton/block.json");
/* harmony import */ var _attributes_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attributes.json */ "./src/blocks/innerButton/attributes.json");







/**
 *
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal Data
 */



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_8__.name, {
  attributes: _attributes_json__WEBPACK_IMPORTED_MODULE_9__,
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Design Settings', 'gutenpride')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_NewColorPalette__WEBPACK_IMPORTED_MODULE_5__["default"], {
      attributes: attributes,
      setAttributes: setAttributes,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', 'gutenpride'),
      target: "text_Color",
      default: attributes.text_Color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Divider__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_NewColorPalette__WEBPACK_IMPORTED_MODULE_5__["default"], {
      attributes: attributes,
      setAttributes: setAttributes,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'gutenpride'),
      target: "bg_Color",
      default: attributes.bg_Color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Divider__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Horizontally', 'gutenpride'),
      value: attributes.padding_hor,
      onChange: val => setAttributes({
        padding_hor: val
      }),
      min: 0,
      max: 30,
      initialPosition: 15,
      renderTooltipContent: value => value + 'px'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Divider__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Vertically', 'gutenpride'),
      value: attributes.padding_vert,
      onChange: val => setAttributes({
        padding_vert: val
      }),
      min: 0,
      max: 30,
      initialPosition: 5,
      renderTooltipContent: value => value + 'px'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Divider__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_NewColorPalette__WEBPACK_IMPORTED_MODULE_5__["default"], {
      attributes: attributes,
      setAttributes: setAttributes,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Color', 'gutenpride'),
      target: "border_Color",
      default: attributes.border_Color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Divider__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Width', 'gutenpride'),
      value: attributes.border_Width,
      onChange: val => setAttributes({
        border_Width: val
      }),
      min: 0,
      max: 10,
      initialPosition: 1,
      renderTooltipContent: value => value + 'px'
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Settings', 'gutenpride')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Type Attribute', 'gutenpride'),
      value: attributes.type,
      onChange: val => setAttributes({
        type: val
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockControls, {
      group: "block"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
      className: attributes.textAlign
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      tagName: "button",
      allowedFormats: [],
      value: attributes.button,
      onChange: val => setAttributes({
        input: val,
        button: val
      }),
      placeholder: attributes.placeholder,
      style: {
        paddingTop: attributes.padding_vert,
        paddingBottom: attributes.padding_vert,
        paddingLeft: attributes.padding_hor,
        paddingRight: attributes.padding_hor,
        backgroundColor: attributes.bg_Color,
        borderColor: attributes.border_Color,
        borderWidth: attributes.border_Width,
        color: attributes.text_Color
      }
    })));
  },
  save: _ref => {
    let {
      attributes
    } = _ref;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: attributes.type,
      style: {
        paddingTop: attributes.padding_vert,
        paddingBottom: attributes.padding_vert,
        paddingLeft: attributes.padding_hor,
        paddingRight: attributes.padding_hor,
        backgroundColor: attributes.bg_Color,
        borderColor: attributes.border_Color,
        borderWidth: attributes.border_Width,
        color: attributes.text_Color
      }
    }, attributes.button);
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map