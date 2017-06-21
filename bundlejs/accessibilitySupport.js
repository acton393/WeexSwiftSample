/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)

	__weex_define__('@weex-component/8d0ba59e02225d6e1b5321f090cb0297', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/8d0ba59e02225d6e1b5321f090cb0297',undefined,undefined)

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "scoller",
	  "style": {
	    "padding": 30
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "direction"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "role:button  text btn"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "box"
	          ],
	          "attr": {
	            "role": "button",
	            "ariaLabel": "I am a button with text",
	            "value": "text button"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "direction"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "role:button  div btn"
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "box"
	          ],
	          "attr": {
	            "role": "button",
	            "ariaLabel": "I am a button with div"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "direction"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "role:input"
	          }
	        },
	        {
	          "type": "input",
	          "classList": [
	            "box"
	          ],
	          "attr": {
	            "ariaLabel": "I am a input",
	            "placeholder": "please input"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "direction"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "role:search"
	          }
	        },
	        {
	          "type": "input",
	          "classList": [
	            "box"
	          ],
	          "attr": {
	            "role": "search",
	            "ariaLabel": "I am a search item",
	            "placeholder": "please input something to search"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "direction"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "role:link"
	          }
	        },
	        {
	          "type": "a",
	          "classList": [
	            "box"
	          ],
	          "attr": {
	            "role": "link",
	            "href": "http://g.tbcdn.cn/ali-wireless-h5/res/0.0.16/hello.js",
	            "ariaLabel": "I am a link"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "direction"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "role:img"
	          }
	        },
	        {
	          "type": "image",
	          "classList": [
	            "box"
	          ],
	          "attr": {
	            "role": "img",
	            "src": "https://imgsa.baidu.com/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=5f234c7e0d7b020818c437b303b099b6/d4628535e5dde711a1ca272da0efce1b9c1661d4.jpg",
	            "ariaLabel": "I am a image, a little dog with brown hair"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "direction"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "ariaHidden": "true",
	            "value": "hidden from voice-over/talkback"
	          }
	        },
	        {
	          "type": "image",
	          "classList": [
	            "box"
	          ],
	          "attr": {
	            "ariaHidden": "true",
	            "role": "img",
	            "src": "https://imgsa.baidu.com/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=5f234c7e0d7b020818c437b303b099b6/d4628535e5dde711a1ca272da0efce1b9c1661d4.jpg",
	            "ariaLabel": "I am a image"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = {
	  "box": {
	    "borderWidth": 2,
	    "borderColor": "#FF0000",
	    "width": 200,
	    "height": 50,
	    "marginLeft": 20
	  },
	  "direction": {
	    "flexDirection": "row",
	    "padding": 20,
	    "margin": 10,
	    "borderBottomWidth": 2,
	    "borderColor": "#000000"
	  }
	}

/***/ })
/******/ ]);