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

/***/ "./src/scripts/modules/app.js":
/*!************************************!*\
  !*** ./src/scripts/modules/app.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images.js */ "./src/scripts/modules/images.js");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.js */ "./src/scripts/modules/elements.js");
/* harmony import */ var _checks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checks.js */ "./src/scripts/modules/checks.js");




function preparePage() {
  _elements_js__WEBPACK_IMPORTED_MODULE_1__.searchBtn.addEventListener("click", searchBtnHandler);
  _elements_js__WEBPACK_IMPORTED_MODULE_1__.searchInput.addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
      searchBtnHandler();
    }
  });
  _elements_js__WEBPACK_IMPORTED_MODULE_1__.searchInput.addEventListener("input", () => {
    if (!(_elements_js__WEBPACK_IMPORTED_MODULE_1__.searchInput.value === "")) {
      _elements_js__WEBPACK_IMPORTED_MODULE_1__.searchError.textContent = "";
    }
  });
}

function searchBtnHandler() {
  if (_elements_js__WEBPACK_IMPORTED_MODULE_1__.searchInput.value === "") {
    _elements_js__WEBPACK_IMPORTED_MODULE_1__.searchError.textContent = "Please enter a location";
  } else {
    weatherForecast(_elements_js__WEBPACK_IMPORTED_MODULE_1__.searchInput.value);
  }
}

async function weatherForecast(location) {
  try {
    loadingScreen();
    const data = await getWeatherData(location);

    const obj = buildWeatherObject(data);
    _elements_js__WEBPACK_IMPORTED_MODULE_1__.loading.addEventListener(
      "transitionend",
      () => {
        _elements_js__WEBPACK_IMPORTED_MODULE_1__.startText.remove();
        populateDisplay(obj);
        clearLoadingScreen();
      },
      { once: true }
    );
  } catch (err) {
    _elements_js__WEBPACK_IMPORTED_MODULE_1__.searchError.textContent = err;
    _elements_js__WEBPACK_IMPORTED_MODULE_1__.loading.addEventListener(
      "transitionend",
      () => {
        clearLoadingScreen();
      },
      { once: true }
    );
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

  if ((0,_checks_js__WEBPACK_IMPORTED_MODULE_2__.checkForAtmosphere)(lowerCaseWeather)) {
    obj.background = _images_js__WEBPACK_IMPORTED_MODULE_0__.images.atmosphere;
  } else {
    obj.background = _images_js__WEBPACK_IMPORTED_MODULE_0__.images[`${lowerCaseWeather}`];
  }

  obj.desc = obj.desc.charAt(0).toUpperCase() + obj.desc.slice(1);

  obj.icon = `http://openweathermap.org/img/wn/${(0,_checks_js__WEBPACK_IMPORTED_MODULE_2__.determineIcon)(
    obj.weatherID
  )}@2x.png`;

  console.log(obj);
  return obj;
}

function populateDisplay(obj) {
  _elements_js__WEBPACK_IMPORTED_MODULE_1__.infoDiv.classList.remove("hidden");
  _elements_js__WEBPACK_IMPORTED_MODULE_1__.iconDiv.classList.remove("hidden");

  _elements_js__WEBPACK_IMPORTED_MODULE_1__.weatherIcon.src = obj.icon;

  _elements_js__WEBPACK_IMPORTED_MODULE_1__.temperature.innerHTML = obj.temp + "&#176;";

  _elements_js__WEBPACK_IMPORTED_MODULE_1__.location.textContent = obj.name;

  _elements_js__WEBPACK_IMPORTED_MODULE_1__.description.textContent = obj.desc;

  _elements_js__WEBPACK_IMPORTED_MODULE_1__.displayContainer.style.backgroundImage = `url(${obj.background})`;
}

function loadingScreen() {
  if (window.getComputedStyle(_elements_js__WEBPACK_IMPORTED_MODULE_1__.loading).visibility === "hidden") {
    _elements_js__WEBPACK_IMPORTED_MODULE_1__.loading.style.visibility = "visible";
  }
  _elements_js__WEBPACK_IMPORTED_MODULE_1__.loading.style.opacity = "1";
}

function clearLoadingScreen() {
  _elements_js__WEBPACK_IMPORTED_MODULE_1__.loading.style.opacity = "0";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (preparePage);


/***/ }),

/***/ "./src/scripts/modules/checks.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/checks.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkForAtmosphere": () => (/* binding */ checkForAtmosphere),
/* harmony export */   "determineIcon": () => (/* binding */ determineIcon)
/* harmony export */ });
function checkForAtmosphere(weather) {
  const types = [
    "mist",
    "smoke",
    "haze",
    "dust",
    "fog",
    "sand",
    "ash",
    "squall",
    "tornado",
  ];

  const found = types.find((type) => type === weather);

  return found;
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




/***/ }),

/***/ "./src/scripts/modules/elements.js":
/*!*****************************************!*\
  !*** ./src/scripts/modules/elements.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startText": () => (/* binding */ startText),
/* harmony export */   "searchBtn": () => (/* binding */ searchBtn),
/* harmony export */   "searchInput": () => (/* binding */ searchInput),
/* harmony export */   "searchError": () => (/* binding */ searchError),
/* harmony export */   "infoDiv": () => (/* binding */ infoDiv),
/* harmony export */   "iconDiv": () => (/* binding */ iconDiv),
/* harmony export */   "displayContainer": () => (/* binding */ displayContainer),
/* harmony export */   "weatherIcon": () => (/* binding */ weatherIcon),
/* harmony export */   "location": () => (/* binding */ location),
/* harmony export */   "description": () => (/* binding */ description),
/* harmony export */   "temperature": () => (/* binding */ temperature),
/* harmony export */   "loading": () => (/* binding */ loading)
/* harmony export */ });
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-box");
const searchError = document.querySelector(".search-error");
const infoDiv = document.getElementById("info-div");
const iconDiv = document.getElementById("icon-temp-div");
const displayContainer = document.getElementById("weather-container");
const weatherIcon = document.getElementById("weather-icon");
const location = document.getElementById("location");
const description = document.getElementById("desc");
const temperature = document.getElementById("temp");
const loading = document.getElementById("loading-screen");
const startText = document.getElementById("start-text");




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
/* harmony import */ var _assets_atmosphere_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../assets/atmosphere.jpg */ "./src/assets/atmosphere.jpg");
/* harmony import */ var _assets_rain_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../assets/rain.jpg */ "./src/assets/rain.jpg");
/* harmony import */ var _assets_snow_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../assets/snow.jpg */ "./src/assets/snow.jpg");
/* harmony import */ var _assets_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../assets/thunderstorm.jpg */ "./src/assets/thunderstorm.jpg");
/* harmony import */ var _assets_start_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../assets/start.jpg */ "./src/assets/start.jpg");









const images = {
  atmosphere: _assets_atmosphere_jpg__WEBPACK_IMPORTED_MODULE_3__,
  clouds: _assets_clouds_jpg__WEBPACK_IMPORTED_MODULE_0__,
  clear: _assets_clear_jpg__WEBPACK_IMPORTED_MODULE_1__,
  drizzle: _assets_drizzle_jpg__WEBPACK_IMPORTED_MODULE_2__,
  rain: _assets_rain_jpg__WEBPACK_IMPORTED_MODULE_4__,
  snow: _assets_snow_jpg__WEBPACK_IMPORTED_MODULE_5__,
  start: _assets_start_jpg__WEBPACK_IMPORTED_MODULE_7__,
  thunderstorm: _assets_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_6__,
};




/***/ }),

/***/ "./src/assets/atmosphere.jpg":
/*!***********************************!*\
  !*** ./src/assets/atmosphere.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f65c47a80628a3fdabc.jpg";

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

/***/ "./src/assets/start.jpg":
/*!******************************!*\
  !*** ./src/assets/start.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4cfd540cdf4582555f08.jpg";

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
/* harmony import */ var _modules_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/app.js */ "./src/scripts/modules/app.js");



window.onload = (0,_modules_app_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDZmdDO0FBQ1c7O0FBRTNDLGdCQUFnQiwyREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0ZTkiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zY3JpcHRzL21vZHVsZXMvY2hlY2tzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zY3JpcHRzL21vZHVsZXMvaW1hZ2VzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IGltYWdlcyB9IGZyb20gXCIuL2ltYWdlcy5qc1wiO1xuaW1wb3J0ICogYXMgZWwgZnJvbSBcIi4vZWxlbWVudHMuanNcIjtcbmltcG9ydCB7IGNoZWNrRm9yQXRtb3NwaGVyZSwgZGV0ZXJtaW5lSWNvbiB9IGZyb20gXCIuL2NoZWNrcy5qc1wiO1xuXG5mdW5jdGlvbiBwcmVwYXJlUGFnZSgpIHtcbiAgZWwuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWFyY2hCdG5IYW5kbGVyKTtcbiAgZWwuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PSAxMykge1xuICAgICAgc2VhcmNoQnRuSGFuZGxlcigpO1xuICAgIH1cbiAgfSk7XG4gIGVsLnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgaWYgKCEoZWwuc2VhcmNoSW5wdXQudmFsdWUgPT09IFwiXCIpKSB7XG4gICAgICBlbC5zZWFyY2hFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoQnRuSGFuZGxlcigpIHtcbiAgaWYgKGVsLnNlYXJjaElucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgZWwuc2VhcmNoRXJyb3IudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBlbnRlciBhIGxvY2F0aW9uXCI7XG4gIH0gZWxzZSB7XG4gICAgd2VhdGhlckZvcmVjYXN0KGVsLnNlYXJjaElucHV0LnZhbHVlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiB3ZWF0aGVyRm9yZWNhc3QobG9jYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBsb2FkaW5nU2NyZWVuKCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKTtcblxuICAgIGNvbnN0IG9iaiA9IGJ1aWxkV2VhdGhlck9iamVjdChkYXRhKTtcbiAgICBlbC5sb2FkaW5nLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInRyYW5zaXRpb25lbmRcIixcbiAgICAgICgpID0+IHtcbiAgICAgICAgZWwuc3RhcnRUZXh0LnJlbW92ZSgpO1xuICAgICAgICBwb3B1bGF0ZURpc3BsYXkob2JqKTtcbiAgICAgICAgY2xlYXJMb2FkaW5nU2NyZWVuKCk7XG4gICAgICB9LFxuICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICApO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBlbC5zZWFyY2hFcnJvci50ZXh0Q29udGVudCA9IGVycjtcbiAgICBlbC5sb2FkaW5nLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInRyYW5zaXRpb25lbmRcIixcbiAgICAgICgpID0+IHtcbiAgICAgICAgY2xlYXJMb2FkaW5nU2NyZWVuKCk7XG4gICAgICB9LFxuICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICApO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZBUFBJRD1jNTAyMWE2ZGI5ZWU2YjFjMmY2YTcxMzFmNjIxOTNlNGBcbiAgKTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG5cbiAgaWYgKCEoZGF0YS5jb2QgPT0gMjAwKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkV2VhdGhlck9iamVjdChkYXRhKSB7XG4gIGNvbnN0IG9iaiA9IHtcbiAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgdGVtcDogTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCAtIDI3My4xNSksXG4gICAgd2VhdGhlcjogZGF0YS53ZWF0aGVyWzBdLm1haW4sXG4gICAgZGVzYzogZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgIHdlYXRoZXJJRDogZGF0YS53ZWF0aGVyWzBdLmlkLFxuICB9O1xuXG4gIGxldCBsb3dlckNhc2VXZWF0aGVyID1cbiAgICBvYmoud2VhdGhlci5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIG9iai53ZWF0aGVyLnNsaWNlKDEpO1xuXG4gIGlmIChjaGVja0ZvckF0bW9zcGhlcmUobG93ZXJDYXNlV2VhdGhlcikpIHtcbiAgICBvYmouYmFja2dyb3VuZCA9IGltYWdlc1tcImF0bW9zcGhlcmVcIl07XG4gIH0gZWxzZSB7XG4gICAgb2JqLmJhY2tncm91bmQgPSBpbWFnZXNbYCR7bG93ZXJDYXNlV2VhdGhlcn1gXTtcbiAgfVxuXG4gIG9iai5kZXNjID0gb2JqLmRlc2MuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBvYmouZGVzYy5zbGljZSgxKTtcblxuICBvYmouaWNvbiA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RldGVybWluZUljb24oXG4gICAgb2JqLndlYXRoZXJJRFxuICApfUAyeC5wbmdgO1xuXG4gIGNvbnNvbGUubG9nKG9iaik7XG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRGlzcGxheShvYmopIHtcbiAgZWwuaW5mb0Rpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBlbC5pY29uRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cbiAgZWwud2VhdGhlckljb24uc3JjID0gb2JqLmljb247XG5cbiAgZWwudGVtcGVyYXR1cmUuaW5uZXJIVE1MID0gb2JqLnRlbXAgKyBcIiYjMTc2O1wiO1xuXG4gIGVsLmxvY2F0aW9uLnRleHRDb250ZW50ID0gb2JqLm5hbWU7XG5cbiAgZWwuZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBvYmouZGVzYztcblxuICBlbC5kaXNwbGF5Q29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtvYmouYmFja2dyb3VuZH0pYDtcbn1cblxuZnVuY3Rpb24gbG9hZGluZ1NjcmVlbigpIHtcbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLmxvYWRpbmcpLnZpc2liaWxpdHkgPT09IFwiaGlkZGVuXCIpIHtcbiAgICBlbC5sb2FkaW5nLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgfVxuICBlbC5sb2FkaW5nLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbn1cblxuZnVuY3Rpb24gY2xlYXJMb2FkaW5nU2NyZWVuKCkge1xuICBlbC5sb2FkaW5nLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJlcGFyZVBhZ2U7XG4iLCJmdW5jdGlvbiBjaGVja0ZvckF0bW9zcGhlcmUod2VhdGhlcikge1xuICBjb25zdCB0eXBlcyA9IFtcbiAgICBcIm1pc3RcIixcbiAgICBcInNtb2tlXCIsXG4gICAgXCJoYXplXCIsXG4gICAgXCJkdXN0XCIsXG4gICAgXCJmb2dcIixcbiAgICBcInNhbmRcIixcbiAgICBcImFzaFwiLFxuICAgIFwic3F1YWxsXCIsXG4gICAgXCJ0b3JuYWRvXCIsXG4gIF07XG5cbiAgY29uc3QgZm91bmQgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB0eXBlID09PSB3ZWF0aGVyKTtcblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmZ1bmN0aW9uIGRldGVybWluZUljb24oaWQpIHtcbiAgLy8gJ3RodW5kZXJzdG9ybSdcbiAgaWYgKGlkID49IDIwMCAmJiBpZCA8PSAyMzIpIHtcbiAgICByZXR1cm4gXCIxMWRcIjtcbiAgfVxuICAvLyBjYXNlICdkcml6emxlJzpcbiAgaWYgKGlkID49IDMwMCAmJiBpZCA8PSAzMjEpIHtcbiAgICByZXR1cm4gXCIwOWRcIjtcbiAgfVxuICAvLyBcInJhaW5cIjpcbiAgaWYgKGlkID49IDUwMCAmJiBpZCA8PSA1MDQpIHtcbiAgICByZXR1cm4gXCIxMGRcIjtcbiAgfVxuICBpZiAoaWQgPT0gNTExKSB7XG4gICAgcmV0dXJuIFwiMTNkXCI7XG4gIH1cbiAgaWYgKGlkID49IDUyMCAmJiBpZCA8PSA1MzEpIHtcbiAgICByZXR1cm4gXCIwOWRcIjtcbiAgfVxuICAvLyBjYXNlICdzbm93JzpcbiAgaWYgKGlkID49IDYwMCAmJiBpZCA8PSA2MjIpIHtcbiAgICByZXR1cm4gXCIxM2RcIjtcbiAgfVxuICAvLyBjYXNlICdhdG1vc3BoZXJlJ1xuICBpZiAoaWQgPj0gNzAxICYmIGlkIDw9IDc4MSkge1xuICAgIHJldHVybiBcIjUwZFwiO1xuICB9XG4gIC8vIFwiY2xlYXJcIjpcbiAgaWYgKGlkID09IDgwMCkge1xuICAgIHJldHVybiBcIjAxZFwiO1xuICB9XG4gIC8vIFwiY2xvdWRzXCI6XG4gIGlmIChpZCA9PSA4MDEpIHtcbiAgICByZXR1cm4gXCIwMmRcIjtcbiAgfVxuICBpZiAoaWQgPT0gODAyKSB7XG4gICAgcmV0dXJuIFwiMDNkXCI7XG4gIH1cbiAgaWYgKGlkID09IDgwMyB8fCBpZCA9PSA4MDQpIHtcbiAgICByZXR1cm4gXCIwNGRcIjtcbiAgfVxufVxuXG5leHBvcnQgeyBjaGVja0ZvckF0bW9zcGhlcmUsIGRldGVybWluZUljb24gfTtcbiIsImNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWJ0blwiKTtcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYm94XCIpO1xuY29uc3Qgc2VhcmNoRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1lcnJvclwiKTtcbmNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm8tZGl2XCIpO1xuY29uc3QgaWNvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWNvbi10ZW1wLWRpdlwiKTtcbmNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItY29udGFpbmVyXCIpO1xuY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItaWNvblwiKTtcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjXCIpO1xuY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBcIik7XG5jb25zdCBsb2FkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nLXNjcmVlblwiKTtcbmNvbnN0IHN0YXJ0VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtdGV4dFwiKTtcblxuZXhwb3J0IHtcbiAgc3RhcnRUZXh0LFxuICBzZWFyY2hCdG4sXG4gIHNlYXJjaElucHV0LFxuICBzZWFyY2hFcnJvcixcbiAgaW5mb0RpdixcbiAgaWNvbkRpdixcbiAgZGlzcGxheUNvbnRhaW5lcixcbiAgd2VhdGhlckljb24sXG4gIGxvY2F0aW9uLFxuICBkZXNjcmlwdGlvbixcbiAgdGVtcGVyYXR1cmUsXG4gIGxvYWRpbmcsXG59O1xuIiwiaW1wb3J0IGNsb3VkcyBmcm9tIFwiLi8uLi8uLi9hc3NldHMvY2xvdWRzLmpwZ1wiO1xuaW1wb3J0IGNsZWFyIGZyb20gXCIuLy4uLy4uL2Fzc2V0cy9jbGVhci5qcGdcIjtcbmltcG9ydCBkcml6emxlIGZyb20gXCIuLy4uLy4uL2Fzc2V0cy9kcml6emxlLmpwZ1wiO1xuaW1wb3J0IGF0bW9zcGhlcmUgZnJvbSBcIi4vLi4vLi4vYXNzZXRzL2F0bW9zcGhlcmUuanBnXCI7XG5pbXBvcnQgcmFpbiBmcm9tIFwiLi8uLi8uLi9hc3NldHMvcmFpbi5qcGdcIjtcbmltcG9ydCBzbm93IGZyb20gXCIuLy4uLy4uL2Fzc2V0cy9zbm93LmpwZ1wiO1xuaW1wb3J0IHRodW5kZXJzdG9ybSBmcm9tIFwiLi8uLi8uLi9hc3NldHMvdGh1bmRlcnN0b3JtLmpwZ1wiO1xuaW1wb3J0IHN0YXJ0IGZyb20gXCIuLy4uLy4uL2Fzc2V0cy9zdGFydC5qcGdcIjtcblxuY29uc3QgaW1hZ2VzID0ge1xuICBhdG1vc3BoZXJlLFxuICBjbG91ZHMsXG4gIGNsZWFyLFxuICBkcml6emxlLFxuICByYWluLFxuICBzbm93LFxuICBzdGFydCxcbiAgdGh1bmRlcnN0b3JtLFxufTtcblxuZXhwb3J0IHsgaW1hZ2VzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgXCIuLy4uL3N0eWxlcy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgcHJlcGFyZVBhZ2UgZnJvbSBcIi4vbW9kdWxlcy9hcHAuanNcIjtcblxud2luZG93Lm9ubG9hZCA9IHByZXBhcmVQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=