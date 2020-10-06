function getDayAndTime(event) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  if (hours < 10) hours = `0${hours}`;
  let minutes = now.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;
  let fullTime = `${hours}:${minutes}`;
  let dayAndTime = `${day} ${fullTime}`;
  return `${dayAndTime}`;
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#citySearch").value;
  city = city.trim();
  city = city.toLowerCase();
  cityLocation(city);
}

function cityLocation(city) {
  let apiKey = "65f06ea937ff0ead217cbd4698c89acf";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(`${apiUrl}`).then(showLocationWeather);
}

function showLocationWeather(responce) {
  document.querySelector(".temperature").innerHTML = Math.round(
    responce.data.main.temp
  );
  document.querySelector("#city").innerHTML = responce.data.name;
  document.querySelector("#description").innerHTML =
    responce.data.weather[0].description;
  document.querySelector("#humidity-today").innerHTML =
    responce.data.main.humidity;
  document.querySelector("#wind-today").innerHTML = Math.round(
    responce.data.wind.speed
  );
}

function callMyCurrentPosition(position) {
  let units = "metric";
  let apiKey = `d6f748e993063f854666ff2303ac05d1`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;
  axios.get(`${apiUrl}`).then(showLocationWeather);
}

function geolocation() {
  navigator.geolocation.getCurrentPosition(callMyCurrentPosition);
}

let button = document.querySelector("button");
button.addEventListener("click", geolocation);

let citySearchBar = document.querySelector("#searchBar");
citySearchBar.addEventListener("submit", search);

let todayTime = document.querySelector("#todayAndTime");
let now = new Date();
todayTime.innerHTML = getDayAndTime(now);

cityLocation("Birmingham");

// function fahrenheit(event) {
//   event.preventDefault();
//   let temperatureF = document.querySelector("#temperature");
//   temperatureF.innerHTML = 66;
// }

// function celsius(event) {
//   event.preventDefault();
//   let temperatureF = document.querySelector("#temperature");
//   temperatureF.innerHTML = 19;
// }

// let fahrenheitChangeTemp = document.querySelector("#fahrenheit-link");
// fahrenheitChangeTemp.addEventListener("click", fahrenheit);

// let celsiusChangeTemp = document.querySelector("#celsius-link");
// celsiusChangeTemp.addEventListener("click", celsius);
