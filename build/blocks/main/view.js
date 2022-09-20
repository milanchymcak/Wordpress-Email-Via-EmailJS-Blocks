/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

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
/*!*********************************!*\
  !*** ./src/blocks/main/view.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/* exported emailjs */
window.addEventListener('load', event => {
  const EmailjsForm = document.querySelector('#emailjs-form');

  if (EmailjsForm !== undefined && EmailjsForm !== null) {
    // Check for the keys
    // Add Recaptcha
    if (EmailjsForm.hasAttribute('data_recaptcha_key') && EmailjsForm.getAttribute('data_recaptcha_key') !== '') {
      const grecaptcha = document.createElement('div');
      grecaptcha.classList.add('g-recaptcha');
      grecaptcha.setAttribute('data-sitekey', EmailjsForm.getAttribute('data_recaptcha_key'));
      const formButton = EmailjsForm.querySelector('button');

      if (formButton !== undefined && formButton !== null) {
        EmailjsForm.insertBefore(grecaptcha, formButton); // Add Google Script

        const reScript = document.createElement('script');
        reScript.id = 'recaptcha-script';
        reScript.async = true;
        reScript.defer = true;
        reScript.src = 'https://www.google.com/recaptcha/api.js';
        document.head.appendChild(reScript);
      }
    }

    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "g-recaptcha",
      "data-sitekey": "your_site_key"
    }); // Add CDN Script

    const cdn = document.createElement('script');
    cdn.type = 'text/javascript';
    cdn.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';

    cdn.onload = () => {
      (function () {
        // Start emailjs
        emailjs.init(EmailjsForm.getAttribute('data_public_key')); // On Submit Handler

        EmailjsForm.onsubmit = form => {
          form.preventDefault();
          emailjs.sendForm(EmailjsForm.getAttribute('data_service_key'), EmailjsForm.getAttribute('data_template_id'), '#emailjs-form').then(function (response) {// Success
          }, function (error) {// Fail
          });
        };
      })();
    };

    document.head.appendChild(cdn);
  }
});
}();
/******/ })()
;
//# sourceMappingURL=view.js.map