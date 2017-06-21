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
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(206)
	var __weex_style__ = __webpack_require__(207)
	var __weex_script__ = __webpack_require__(208)

	__weex_define__('@weex-component/c90fb40e28668dc487c3cb9e5dc4fabd', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/c90fb40e28668dc487c3cb9e5dc4fabd',undefined,undefined)

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "style": {
	    "alignItems": "center"
	  },
	  "children": [
	    {
	      "type": "div",
	      "style": {
	        "marginTop": 20
	      },
	      "children": [
	        {
	          "type": "text",
	          "style": {
	            "color": "#FF0000",
	            "fontSize": 50
	          },
	          "attr": {
	            "value": "only support font for ttf and woff"
	          }
	        }
	      ]
	    },
	    {
	      "type": "text",
	      "classList": [
	        "title2"
	      ],
	      "style": {
	        "marginTop": 50,
	        "width": 500
	      },
	      "attr": {
	        "value": "http ttf: "
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "title3"
	      ],
	      "style": {
	        "marginTop": 50,
	        "width": 500
	      },
	      "attr": {
	        "value": "http woff: "
	      }
	    },
	    {
	      "type": "div",
	      "style": {
	        "flexDirection": "row",
	        "marginTop": 50
	      },
	      "children": [
	        {
	          "type": "text",
	          "style": {
	            "fontFamily": "iconfont4",
	            "fontSize": 50,
	            "color": "#008000"
	          },
	          "attr": {
	            "value": ""
	          }
	        },
	        {
	          "type": "text",
	          "style": {
	            "fontFamily": "iconfont4",
	            "fontSize": 50
	          },
	          "attr": {
	            "value": ""
	          }
	        },
	        {
	          "type": "text",
	          "style": {
	            "fontFamily": "iconfont4",
	            "fontSize": 60,
	            "color": "#0000FF"
	          },
	          "attr": {
	            "value": ""
	          }
	        },
	        {
	          "type": "text",
	          "style": {
	            "fontFamily": "iconfont4",
	            "fontSize": 60,
	            "color": "#008000"
	          },
	          "attr": {
	            "value": ""
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "style": {
	        "flexDirection": "row",
	        "marginTop": 50
	      },
	      "children": [
	        {
	          "type": "text",
	          "style": {
	            "fontFamily": "iconfont4",
	            "fontSize": 50,
	            "color": "#008000"
	          },
	          "attr": {
	            "value": ""
	          }
	        },
	        {
	          "type": "text",
	          "style": {
	            "fontFamily": "iconfont4",
	            "fontSize": 50
	          },
	          "attr": {
	            "value": ""
	          }
	        },
	        {
	          "type": "text",
	          "style": {
	            "fontFamily": "iconfont4",
	            "fontSize": 60,
	            "color": "#0000FF"
	          },
	          "attr": {
	            "value": ""
	          }
	        },
	        {
	          "type": "text",
	          "style": {
	            "fontFamily": "iconfont4",
	            "fontSize": 60,
	            "color": "#008000"
	          },
	          "attr": {
	            "value": ""
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "children": [
	        {
	          "type": "text",
	          "style": {
	            "fontFamily": "iconfont4",
	            "fontSize": 100,
	            "marginTop": 50
	          },
	          "attr": {
	            "value": ""
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "children": [
	        {
	          "type": "text",
	          "style": {
	            "fontFamily": "iconfont4",
	            "fontSize": 100,
	            "color": "#008000",
	            "marginTop": 50
	          },
	          "attr": {
	            "value": ""
	          }
	        },
	        {
	          "type": "text",
	          "style": {
	            "fontFamily": "iconfont4",
	            "fontSize": 100,
	            "marginTop": 50
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "style": {
	        "flexDirection": "row"
	      },
	      "children": [
	        {
	          "type": "text",
	          "style": {
	            "fontFamily": "iconfont4",
	            "fontSize": 70,
	            "width": 750
	          },
	          "attr": {
	            "value": ""
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

	module.exports = {
	  "title1": {
	    "color": "#FF0000",
	    "fontSize": 36,
	    "fontFamily": "iconfont1"
	  },
	  "title2": {
	    "color": "#808080",
	    "fontSize": 36,
	    "fontFamily": "iconfont2"
	  },
	  "title3": {
	    "color": "#FFC0CB",
	    "fontSize": 36,
	    "fontFamily": "iconfont3"
	  },
	  "title4": {
	    "color": "#FF0000",
	    "fontSize": 36,
	    "fontFamily": "iconfont4"
	  }
	}

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  created: function created() {
	    var domModule = __weex_require__('@weex-module/dom');


	    domModule.addRule('fontFace', {
	      'fontFamily': "iconfont2",
	      'src': "url('http://at.alicdn.com/t/font_1469606063_76593.ttf')"
	    });
	    domModule.addRule('fontFace', {
	      'fontFamily': "iconfont3",
	      'src': "url('http://at.alicdn.com/t/font_1469606522_9417143.woff')"
	    });

	    domModule.addRule('fontFace', {
	      'fontFamily': "iconfont4",
	      'src': "url('http://at.alicdn.com/t/font_zn5b3jswpofuhaor.ttf')"
	    });
	  }
	};}
	/* generated by weex-loader */


/***/ })

/******/ });