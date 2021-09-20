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
      buildWeatherObject(data);
    } catch (err) {
      searchError.textContent = err;
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
    return data;
  }
}

function buildWeatherObject(data) {
  const obj = {
    name: data.name,
    temp: Math.round(data.main.temp - 273.15),
    weather: data.weather[0].main,
    desc: data.weather[0].description,
  };

  let lowerCaseWeather =
    obj.weather.charAt(0).toLowerCase() + obj.weather.slice(1);

  obj.background = _modules_images_js__WEBPACK_IMPORTED_MODULE_1__.images[`${lowerCaseWeather}`];

  console.log(obj);
}

// function determineIcon(weather) {
//   switch (weather) {
//     case
//   }
// }

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQStDO0FBQ0Y7QUFDSTtBQUNOO0FBQ0E7QUFDQTtBQUNnQjs7QUFFM0Q7QUFDQSxRQUFRO0FBQ1IsT0FBTztBQUNQLFNBQVM7QUFDVCxNQUFNO0FBQ04sTUFBTTtBQUNOLE1BQU07QUFDTixjQUFjO0FBQ2Q7O0FBRWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmZ0M7QUFDYTs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBeUQsU0FBUztBQUNsRTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixzREFBTSxJQUFJLGlCQUFpQjs7QUFFOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTRlOSIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zY3JpcHRzL21vZHVsZXMvaW1hZ2VzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBjbG91ZHMgZnJvbSBcIi4vLi4vLi4vYXNzZXRzL2Nsb3Vkcy5qcGdcIjtcbmltcG9ydCBjbGVhciBmcm9tIFwiLi8uLi8uLi9hc3NldHMvY2xlYXIuanBnXCI7XG5pbXBvcnQgZHJpenpsZSBmcm9tIFwiLi8uLi8uLi9hc3NldHMvZHJpenpsZS5qcGdcIjtcbmltcG9ydCBtaXN0IGZyb20gXCIuLy4uLy4uL2Fzc2V0cy9taXN0LmpwZ1wiO1xuaW1wb3J0IHJhaW4gZnJvbSBcIi4vLi4vLi4vYXNzZXRzL3JhaW4uanBnXCI7XG5pbXBvcnQgc25vdyBmcm9tIFwiLi8uLi8uLi9hc3NldHMvc25vdy5qcGdcIjtcbmltcG9ydCB0aHVuZGVyc3Rvcm0gZnJvbSBcIi4vLi4vLi4vYXNzZXRzL3RodW5kZXJzdG9ybS5qcGdcIjtcblxuY29uc3QgaW1hZ2VzID0ge1xuICBjbG91ZHMsXG4gIGNsZWFyLFxuICBkcml6emxlLFxuICBtaXN0LFxuICByYWluLFxuICBzbm93LFxuICB0aHVuZGVyc3Rvcm0sXG59O1xuXG5leHBvcnQgeyBpbWFnZXMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBcIi4vLi4vc3R5bGVzL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IGltYWdlcyB9IGZyb20gXCIuL21vZHVsZXMvaW1hZ2VzLmpzXCI7XG5cbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWJ0blwiKTtcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYm94XCIpO1xuY29uc3Qgc2VhcmNoRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1lcnJvclwiKTtcblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWFyY2hCdG5IYW5kbGVyKTtcbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuICBpZiAoZS5rZXlDb2RlID09IDEzKSB7XG4gICAgc2VhcmNoQnRuSGFuZGxlcigpO1xuICB9XG59KTtcbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gIGlmICghKHNlYXJjaElucHV0LnZhbHVlID09PSBcIlwiKSkge1xuICAgIHNlYXJjaEVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHNlYXJjaEJ0bkhhbmRsZXIoKSB7XG4gIGlmIChzZWFyY2hJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgIHNlYXJjaEVycm9yLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZW50ZXIgYSBsb2NhdGlvblwiO1xuICB9IGVsc2Uge1xuICAgIHdlYXRoZXJGb3JlY2FzdChzZWFyY2hJbnB1dC52YWx1ZSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiB3ZWF0aGVyRm9yZWNhc3QobG9jYXRpb24pIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKTtcbiAgICAgIGJ1aWxkV2VhdGhlck9iamVjdChkYXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNlYXJjaEVycm9yLnRleHRDb250ZW50ID0gZXJyO1xuICAgIH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbikge1xuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9YzUwMjFhNmRiOWVlNmIxYzJmNmE3MTMxZjYyMTkzZTRgXG4gICk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuXG4gIGlmICghKGRhdGEuY29kID09IDIwMCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuXG5mdW5jdGlvbiBidWlsZFdlYXRoZXJPYmplY3QoZGF0YSkge1xuICBjb25zdCBvYmogPSB7XG4gICAgbmFtZTogZGF0YS5uYW1lLFxuICAgIHRlbXA6IE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXAgLSAyNzMuMTUpLFxuICAgIHdlYXRoZXI6IGRhdGEud2VhdGhlclswXS5tYWluLFxuICAgIGRlc2M6IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgfTtcblxuICBsZXQgbG93ZXJDYXNlV2VhdGhlciA9XG4gICAgb2JqLndlYXRoZXIuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBvYmoud2VhdGhlci5zbGljZSgxKTtcblxuICBvYmouYmFja2dyb3VuZCA9IGltYWdlc1tgJHtsb3dlckNhc2VXZWF0aGVyfWBdO1xuXG4gIGNvbnNvbGUubG9nKG9iaik7XG59XG5cbi8vIGZ1bmN0aW9uIGRldGVybWluZUljb24od2VhdGhlcikge1xuLy8gICBzd2l0Y2ggKHdlYXRoZXIpIHtcbi8vICAgICBjYXNlXG4vLyAgIH1cbi8vIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==