import "./../styles/styles.css";

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

async function searchBtnHandler() {
  if (searchInput.value === "") {
    searchError.textContent = "Please enter a location";
  } else {
    const data = await getWeatherData();
    convertWeatherObject(data);
  }
}

function searchLocation() {
  return searchInput.value;
}

async function getWeatherData() {
  const location = searchLocation();
  try {
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
  } catch (err) {
    console.log(err);
  }
}

function convertWeatherObject(data) {
  const obj = {
    name: data.name,
    temp: Math.round(data.main.temp - 273.15),
    weather: data.weather[0].main,
    desc: data.weather[0].description,
  };

  console.log(obj);
}
