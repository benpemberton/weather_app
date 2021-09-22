/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/modules/images.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/images.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "images": () => (/* binding */ images)
/* harmony export */ });
/* harmony import */ var _assets_clouds_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../assets/clouds.jpg */ "./src/assets/clouds.jpg");
/* harmony import */ var _assets_clear_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../assets/clear.jpg */ "./src/assets/clear.jpg");
/* harmony import */ var _assets_drizzle_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../assets/drizzle.jpg */ "./src/assets/drizzle.jpg");
/* harmony import */ var _assets_mist_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../assets/mist.jpg */ "./src/assets/mist.jpg");
/* harmony import */ var _assets_rain_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../assets/rain.jpg */ "./src/assets/rain.jpg");
/* harmony import */ var _assets_snow_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../assets/snow.jpg */ "./src/assets/snow.jpg");
/* harmony import */ var _assets_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../assets/thunderstorm.jpg */ "./src/assets/thunderstorm.jpg");








const images = {
  clouds: _assets_clouds_jpg__WEBPACK_IMPORTED_MODULE_0__,
  clear: _assets_clear_jpg__WEBPACK_IMPORTED_MODULE_1__,
  drizzle: _assets_drizzle_jpg__WEBPACK_IMPORTED_MODULE_2__,
  mist: _assets_mist_jpg__WEBPACK_IMPORTED_MODULE_3__,
  rain: _assets_rain_jpg__WEBPACK_IMPORTED_MODULE_4__,
  snow: _assets_snow_jpg__WEBPACK_IMPORTED_MODULE_5__,
  thunderstorm: _assets_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_6__,
};




/***/ }),

/***/ "./src/assets/clear.jpg":
/*!******************************!*\
  !*** ./src/assets/clear.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d0425e2c77d8271d71e0.jpg";

/***/ }),

/***/ "./src/assets/clouds.jpg":
/*!*******************************!*\
  !*** ./src/assets/clouds.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5666b99e54d6f8666fc.jpg";

/***/ }),

/***/ "./src/assets/drizzle.jpg":
/*!********************************!*\
  !*** ./src/assets/drizzle.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc231c4418df874fd418.jpg";

/***/ }),

/***/ "./src/assets/mist.jpg":
/*!*****************************!*\
  !*** ./src/assets/mist.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f65c47a80628a3fdabc.jpg";

/***/ }),

/***/ "./src/assets/rain.jpg":
/*!*****************************!*\
  !*** ./src/assets/rain.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6bcd9112507585eed0ad.jpg";

/***/ }),

/***/ "./src/assets/snow.jpg":
/*!*****************************!*\
  !*** ./src/assets/snow.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "afc6c54fd9a4c6ef98b3.jpg";

/***/ }),

/***/ "./src/assets/thunderstorm.jpg":
/*!*************************************!*\
  !*** ./src/assets/thunderstorm.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7a6384577e7b526a001.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _modules_images_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/images.js */ "./src/scripts/modules/images.js");



const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-box");
const searchError = document.querySelector(".search-error");
const infoDiv = document.getElementById("info-div");
const iconDiv = document.getElementById("icon-temp-div");
const displayContainer = document.getElementById("weather-container");

searchBtn.addEventListener("click", searchBtnHandler);
searchInput.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    searchBtnHandler();
  }
});
searchInput.addEventListener("input", () => {
  if (!(searchInput.value === "")) {
    searchError.textContent = "";
  }
});

function searchBtnHandler() {
  if (searchInput.value === "") {
    searchError.textContent = "Please enter a location";
  } else {
    weatherForecast(searchInput.value);
  }

  async function weatherForecast(location) {
    try {
      const data = await getWeatherData(location);
      const obj = buildWeatherObject(data);
      populateDisplay(obj);
    } catch (err) {
      searchError.textContent = err;
      console.log(err);
    }
  }
}

async function getWeatherData(location) {
  const request = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=[redacted]`
  );

  const data = await request.json();

  if (!(data.cod == 200)) {
    throw new Error(data.message);
  } else {
    console.log(data);
    return data;
  }
}

function buildWeatherObject(data) {
  const obj = {
    name: data.name,
    temp: Math.round(data.main.temp - 273.15),
    weather: data.weather[0].main,
    desc: data.weather[0].description,
    weatherID: data.weather[0].id,
  };

  let lowerCaseWeather =
    obj.weather.charAt(0).toLowerCase() + obj.weather.slice(1);

  obj.background = _modules_images_js__WEBPACK_IMPORTED_MODULE_1__.images[`${lowerCaseWeather}`];

  obj.icon = `http://openweathermap.org/img/wn/${determineIcon(
    obj.weatherID
  )}@2x.png`;

  console.log(obj);
  return obj;
}

function populateDisplay(obj) {
  clearDisplay();

  infoDiv.classList.remove("hidden");
  iconDiv.classList.remove("hidden");

  const icon = document.createElement("img");

  icon.src = obj.icon;

  iconDiv.appendChild(icon);

  displayContainer.style.backgroundImage = `url(${obj.background})`;
}

function clearDisplay() {
  if (iconDiv.querySelector("img")) {
    iconDiv.querySelector("img").remove();
  }
}

function determineIcon(id) {
  // 'thunderstorm'
  if (id >= 200 && id <= 232) {
    return "11d";
  }
  // case 'drizzle':
  if (id >= 300 && id <= 321) {
    return "09d";
  }
  // "rain":
  if (id >= 500 && id <= 504) {
    return "10d";
  }
  if (id == 511) {
    return "13d";
  }
  if (id >= 520 && id <= 531) {
    return "09d";
  }
  // case 'snow':
  if (id >= 600 && id <= 622) {
    return "13d";
  }
  // case 'atmosphere'
  if (id >= 701 && id <= 781) {
    return "50d";
  }
  // "clear":
  if (id == 800) {
    return "01d";
  }
  // "clouds":
  if (id == 801) {
    return "02d";
  }
  if (id == 802) {
    return "03d";
  }
  if (id == 803 || id == 804) {
    return "04d";
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQStDO0FBQ0Y7QUFDSTtBQUNOO0FBQ0E7QUFDQTtBQUNnQjs7QUFFM0Q7QUFDQSxRQUFRO0FBQ1IsT0FBTztBQUNQLFNBQVM7QUFDVCxNQUFNO0FBQ04sTUFBTTtBQUNOLE1BQU07QUFDTixjQUFjO0FBQ2Q7O0FBRWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmZ0M7QUFDYTs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQXlELFNBQVM7QUFDbEU7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLHNEQUFNLElBQUksaUJBQWlCOztBQUU5QyxpREFBaUQ7QUFDakQ7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsa0RBQWtELGVBQWU7QUFDakU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNGU5Iiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IGNsb3VkcyBmcm9tIFwiLi8uLi8uLi9hc3NldHMvY2xvdWRzLmpwZ1wiO1xuaW1wb3J0IGNsZWFyIGZyb20gXCIuLy4uLy4uL2Fzc2V0cy9jbGVhci5qcGdcIjtcbmltcG9ydCBkcml6emxlIGZyb20gXCIuLy4uLy4uL2Fzc2V0cy9kcml6emxlLmpwZ1wiO1xuaW1wb3J0IG1pc3QgZnJvbSBcIi4vLi4vLi4vYXNzZXRzL21pc3QuanBnXCI7XG5pbXBvcnQgcmFpbiBmcm9tIFwiLi8uLi8uLi9hc3NldHMvcmFpbi5qcGdcIjtcbmltcG9ydCBzbm93IGZyb20gXCIuLy4uLy4uL2Fzc2V0cy9zbm93LmpwZ1wiO1xuaW1wb3J0IHRodW5kZXJzdG9ybSBmcm9tIFwiLi8uLi8uLi9hc3NldHMvdGh1bmRlcnN0b3JtLmpwZ1wiO1xuXG5jb25zdCBpbWFnZXMgPSB7XG4gIGNsb3VkcyxcbiAgY2xlYXIsXG4gIGRyaXp6bGUsXG4gIG1pc3QsXG4gIHJhaW4sXG4gIHNub3csXG4gIHRodW5kZXJzdG9ybSxcbn07XG5cbmV4cG9ydCB7IGltYWdlcyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi8uLi9zdHlsZXMvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgaW1hZ2VzIH0gZnJvbSBcIi4vbW9kdWxlcy9pbWFnZXMuanNcIjtcblxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYnRuXCIpO1xuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1ib3hcIik7XG5jb25zdCBzZWFyY2hFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWVycm9yXCIpO1xuY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mby1kaXZcIik7XG5jb25zdCBpY29uRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpY29uLXRlbXAtZGl2XCIpO1xuY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1jb250YWluZXJcIik7XG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VhcmNoQnRuSGFuZGxlcik7XG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcbiAgaWYgKGUua2V5Q29kZSA9PSAxMykge1xuICAgIHNlYXJjaEJ0bkhhbmRsZXIoKTtcbiAgfVxufSk7XG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICBpZiAoIShzZWFyY2hJbnB1dC52YWx1ZSA9PT0gXCJcIikpIHtcbiAgICBzZWFyY2hFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzZWFyY2hCdG5IYW5kbGVyKCkge1xuICBpZiAoc2VhcmNoSW5wdXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICBzZWFyY2hFcnJvci50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGVudGVyIGEgbG9jYXRpb25cIjtcbiAgfSBlbHNlIHtcbiAgICB3ZWF0aGVyRm9yZWNhc3Qoc2VhcmNoSW5wdXQudmFsdWUpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gd2VhdGhlckZvcmVjYXN0KGxvY2F0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbik7XG4gICAgICBjb25zdCBvYmogPSBidWlsZFdlYXRoZXJPYmplY3QoZGF0YSk7XG4gICAgICBwb3B1bGF0ZURpc3BsYXkob2JqKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNlYXJjaEVycm9yLnRleHRDb250ZW50ID0gZXJyO1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pIHtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPWM1MDIxYTZkYjllZTZiMWMyZjZhNzEzMWY2MjE5M2U0YFxuICApO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcblxuICBpZiAoIShkYXRhLmNvZCA9PSAyMDApKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cblxuZnVuY3Rpb24gYnVpbGRXZWF0aGVyT2JqZWN0KGRhdGEpIHtcbiAgY29uc3Qgb2JqID0ge1xuICAgIG5hbWU6IGRhdGEubmFtZSxcbiAgICB0ZW1wOiBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wIC0gMjczLjE1KSxcbiAgICB3ZWF0aGVyOiBkYXRhLndlYXRoZXJbMF0ubWFpbixcbiAgICBkZXNjOiBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgd2VhdGhlcklEOiBkYXRhLndlYXRoZXJbMF0uaWQsXG4gIH07XG5cbiAgbGV0IGxvd2VyQ2FzZVdlYXRoZXIgPVxuICAgIG9iai53ZWF0aGVyLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgb2JqLndlYXRoZXIuc2xpY2UoMSk7XG5cbiAgb2JqLmJhY2tncm91bmQgPSBpbWFnZXNbYCR7bG93ZXJDYXNlV2VhdGhlcn1gXTtcblxuICBvYmouaWNvbiA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RldGVybWluZUljb24oXG4gICAgb2JqLndlYXRoZXJJRFxuICApfUAyeC5wbmdgO1xuXG4gIGNvbnNvbGUubG9nKG9iaik7XG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRGlzcGxheShvYmopIHtcbiAgY2xlYXJEaXNwbGF5KCk7XG5cbiAgaW5mb0Rpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBpY29uRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgaWNvbi5zcmMgPSBvYmouaWNvbjtcblxuICBpY29uRGl2LmFwcGVuZENoaWxkKGljb24pO1xuXG4gIGRpc3BsYXlDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke29iai5iYWNrZ3JvdW5kfSlgO1xufVxuXG5mdW5jdGlvbiBjbGVhckRpc3BsYXkoKSB7XG4gIGlmIChpY29uRGl2LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikpIHtcbiAgICBpY29uRGl2LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikucmVtb3ZlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGV0ZXJtaW5lSWNvbihpZCkge1xuICAvLyAndGh1bmRlcnN0b3JtJ1xuICBpZiAoaWQgPj0gMjAwICYmIGlkIDw9IDIzMikge1xuICAgIHJldHVybiBcIjExZFwiO1xuICB9XG4gIC8vIGNhc2UgJ2RyaXp6bGUnOlxuICBpZiAoaWQgPj0gMzAwICYmIGlkIDw9IDMyMSkge1xuICAgIHJldHVybiBcIjA5ZFwiO1xuICB9XG4gIC8vIFwicmFpblwiOlxuICBpZiAoaWQgPj0gNTAwICYmIGlkIDw9IDUwNCkge1xuICAgIHJldHVybiBcIjEwZFwiO1xuICB9XG4gIGlmIChpZCA9PSA1MTEpIHtcbiAgICByZXR1cm4gXCIxM2RcIjtcbiAgfVxuICBpZiAoaWQgPj0gNTIwICYmIGlkIDw9IDUzMSkge1xuICAgIHJldHVybiBcIjA5ZFwiO1xuICB9XG4gIC8vIGNhc2UgJ3Nub3cnOlxuICBpZiAoaWQgPj0gNjAwICYmIGlkIDw9IDYyMikge1xuICAgIHJldHVybiBcIjEzZFwiO1xuICB9XG4gIC8vIGNhc2UgJ2F0bW9zcGhlcmUnXG4gIGlmIChpZCA+PSA3MDEgJiYgaWQgPD0gNzgxKSB7XG4gICAgcmV0dXJuIFwiNTBkXCI7XG4gIH1cbiAgLy8gXCJjbGVhclwiOlxuICBpZiAoaWQgPT0gODAwKSB7XG4gICAgcmV0dXJuIFwiMDFkXCI7XG4gIH1cbiAgLy8gXCJjbG91ZHNcIjpcbiAgaWYgKGlkID09IDgwMSkge1xuICAgIHJldHVybiBcIjAyZFwiO1xuICB9XG4gIGlmIChpZCA9PSA4MDIpIHtcbiAgICByZXR1cm4gXCIwM2RcIjtcbiAgfVxuICBpZiAoaWQgPT0gODAzIHx8IGlkID09IDgwNCkge1xuICAgIHJldHVybiBcIjA0ZFwiO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=