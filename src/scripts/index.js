import "./../styles/styles.css";
import { images } from "./modules/images.js";

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

  obj.background = images[`${lowerCaseWeather}`];

  // making description upper case
  obj.desc = obj.desc.charAt(0).toUpperCase() + obj.desc.slice(1);

  obj.icon = `http://openweathermap.org/img/wn/${determineIcon(
    obj.weatherID
  )}@2x.png`;

  console.log(obj);
  return obj;
}

function populateDisplay(obj) {
  // clearDisplay();

  infoDiv.classList.remove("hidden");
  iconDiv.classList.remove("hidden");

  weatherIcon.src = obj.icon;

  temperature.innerHTML = obj.temp + "&#176;";

  location.textContent = obj.name;

  description.textContent = obj.desc;

  displayContainer.style.backgroundImage = `url(${obj.background})`;
}

// function clearDisplay() {
//   if (weatherIcon.src !== "") {
//     console.log("icon here");
//     // iconDiv.querySelector("img").remove();
//   }
// }

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
