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

export {
  startText,
  searchBtn,
  searchInput,
  searchError,
  infoDiv,
  iconDiv,
  displayContainer,
  weatherIcon,
  location,
  description,
  temperature,
  loading,
};
