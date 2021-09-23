import { images } from "./images.js";
import * as el from "./elements.js";
import { checkForAtmosphere, determineIcon } from "./checks.js";

function preparePage() {
  el.searchBtn.addEventListener("click", searchBtnHandler);
  el.searchInput.addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
      searchBtnHandler();
    }
  });
  el.searchInput.addEventListener("input", () => {
    if (!(el.searchInput.value === "")) {
      el.searchError.textContent = "";
    }
  });
}

function searchBtnHandler() {
  if (el.searchInput.value === "") {
    el.searchError.textContent = "Please enter a location";
  } else {
    weatherForecast(el.searchInput.value);
  }
}

async function weatherForecast(location) {
  try {
    loadingScreen();
    const data = await getWeatherData(location);

    const obj = buildWeatherObject(data);
    el.loading.addEventListener(
      "transitionend",
      () => {
        populateDisplay(obj);
        clearLoadingScreen();
      },
      { once: true }
    );
  } catch (err) {
    el.searchError.textContent = err;
    el.loading.addEventListener(
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

  if (checkForAtmosphere(lowerCaseWeather)) {
    obj.background = images["atmosphere"];
  } else {
    obj.background = images[`${lowerCaseWeather}`];
  }

  obj.desc = obj.desc.charAt(0).toUpperCase() + obj.desc.slice(1);

  obj.icon = `http://openweathermap.org/img/wn/${determineIcon(
    obj.weatherID
  )}@2x.png`;

  console.log(obj);
  return obj;
}

function populateDisplay(obj) {
  el.infoDiv.classList.remove("hidden");
  el.iconDiv.classList.remove("hidden");

  el.weatherIcon.src = obj.icon;

  el.temperature.innerHTML = obj.temp + "&#176;";

  el.location.textContent = obj.name;

  el.description.textContent = obj.desc;

  el.displayContainer.style.backgroundImage = `url(${obj.background})`;
}

function loadingScreen() {
  el.loading.style.opacity = "1";
}

function clearLoadingScreen() {
  el.loading.style.opacity = "0";
}

export default preparePage;
