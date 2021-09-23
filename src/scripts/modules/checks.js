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

export { checkForAtmosphere, determineIcon };
