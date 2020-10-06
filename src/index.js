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
  let searchInput = document.querySelector("#city");
  let cityContent = document.querySelector("#citySearch");

  searchInput.innerHTML = cityContent.value;
}

function fahrenheit(event) {
  event.preventDefault();
  let temperatureF = document.querySelector("#temperature");
  temperatureF.innerHTML = 66;
}

function celsius(event) {
  event.preventDefault();
  let temperatureF = document.querySelector("#temperature");
  temperatureF.innerHTML = 19;
}

//Feature 1
let todayTime = document.querySelector("#todayAndTime");
let now = new Date();
todayTime.innerHTML = getDayAndTime(now);

//Feature 2
let cityForm = document.querySelector("#searchBar");
cityForm.addEventListener("submit", search);

//Challenge 3

let fahrenheitChangeTemp = document.querySelector("#fahrenheit-link");
fahrenheitChangeTemp.addEventListener("click", fahrenheit);

let celsiusChangeTemp = document.querySelector("#celsius-link");
celsiusChangeTemp.addEventListener("click", celsius);
