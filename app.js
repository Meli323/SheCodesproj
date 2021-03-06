function formatDate(date) {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  if (hours < 10) {
    hours = "0${hours}";
  }

  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = "0${minutes}";
  }
  let dayIndex = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[dayIndex];

  return "☀️ ${day} ${hours}: ${minutes}";
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = "cityInput.value";
  let cityInput = document.querySelector("#city-input");
}

let currentTime = new Date();
let searchForm = document.querySelector("#search-form");

let dateElement = document.querySelector("#date");
searchForm.addEventListener("submit", search);
dateElement.innerHTML = formatDate(currentTime);

function convertToFarenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("temperature");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = 29;
}

function convertToCelcius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("temperature");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = Math.round;
}

let farenheitLink = document.querySelector("#farenheit-link");
farenheitLink.addEventListener("click", convertToFarenheit);

let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", convertToCelcius);
