// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(28)
)

/* script */
__vue_exports__ = __webpack_require__(29)

/* template */
var __vue_template__ = __webpack_require__(30)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/WEIDONGMING/wwwroot/weex_weiui/src/side_panel.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-fcf61a68"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof weex === "object" && weex && weex.document) {
  try {
    weex.document.registerStyleSheets(__vue_options__._scopeId, __vue_styles__)
  } catch (e) {}
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "width": "750",
    "flex": 1
  },
  "side_panel": {
    "width": "750",
    "flex": 1
  },
  "panel_menu": {
    "width": "380",
    "paddingTop": "26",
    "paddingBottom": "26",
    "paddingRight": "20",
    "paddingLeft": "20",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#ffffff"
  },
  "content": {
    "width": "750"
  },
  "content-navbar": {
    "width": "750",
    "height": "100"
  },
  "content-navbar-icon": {
    "width": "100",
    "height": "100",
    "color": "#ffffff"
  },
  "content-navbar-title": {
    "color": "#ffffff"
  },
  "content-body": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "content-body-toggle": {
    "textAlign": "center",
    "marginTop": "20",
    "paddingTop": "20",
    "paddingBottom": "20",
    "paddingLeft": "30",
    "paddingRight": "30",
    "color": "#ffffff",
    "backgroundColor": "#00B4FF"
  }
}

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var weiui = weex.requireModule('weiui');

exports.default = {
    methods: {
        itemClick: function itemClick(params) {
            weiui.toast("点击了" + (params.position + 1) + "项，name：" + params.name);
        },
        menuToggle: function menuToggle() {
            this.$refs.reflectName.menuToggle();
        }
    }
};

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('weiui_side_panel', {
    ref: "reflectName",
    staticClass: ["side_panel"],
    attrs: {
      "weiui": {
        width: '380px',
        scrollbar: false,
        backgroundColor: '#26c9ff'
      }
    },
    on: {
      "itemClick": _vm.itemClick
    }
  }, [_c('weiui_side_panel_menu', {
    staticClass: ["panel_menu"],
    attrs: {
      "name": "菜单1"
    }
  }, [_c('text', [_vm._v("菜单①")])]), _c('weiui_side_panel_menu', {
    staticClass: ["panel_menu"],
    attrs: {
      "name": "菜单2"
    }
  }, [_c('text', [_vm._v("菜单②")])]), _c('div', {
    staticClass: ["content"]
  }, [_c('weiui_navbar', {
    staticClass: ["content-navbar"]
  }, [_c('weiui_navbar_item', {
    attrs: {
      "type": "left"
    }
  }, [_c('weiui_icon', {
    staticClass: ["content-navbar-icon"],
    attrs: {
      "icon": "navicon-round"
    },
    on: {
      "click": _vm.menuToggle
    }
  })], 1), _c('weiui_navbar_item', {
    attrs: {
      "type": "title"
    }
  }, [_c('text', {
    staticClass: ["content-navbar-title"]
  }, [_vm._v("标题")])]), _c('weiui_navbar_item', {
    attrs: {
      "type": "right"
    }
  }, [_c('weiui_icon', {
    staticClass: ["content-navbar-icon"],
    attrs: {
      "icon": "refresh"
    }
  })], 1)], 1), _c('scroller', {
    staticClass: ["content-body"]
  }, [_c('text', [_vm._v("正文内容，屏幕右划试试看。")]), _c('text', {
    staticClass: ["content-body-toggle"],
    on: {
      "click": _vm.menuToggle
    }
  }, [_vm._v("切换显示状态")])])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });