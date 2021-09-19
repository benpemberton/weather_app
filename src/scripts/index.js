import "./../styles/styles.css";
import { images } from "./modules/images.js";

console.log(images);

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

  let lowerCaseBackground =
    obj.weather.charAt(0).toLowerCase() + obj.weather.slice(1);

  obj.background = images[`${lowerCaseBackground}`];

  console.log(obj);
}
