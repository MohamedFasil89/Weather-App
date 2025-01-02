const apiKey = "47d3e75dc4fd00d4977095438b030947";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function weatherCheck(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();

  console.log(data);

  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

  document.querySelector(".city").innerHTML = data.name;

  document.querySelector(".humidity-percent").innerHTML =
    data.main.humidity + "%";

  document.querySelector(".wind-speed").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "img/clouds.gif";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "img/clear.gif";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "img/rain.gif";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "img/drizzle.gif";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "img/mist.gif";
  }

  document.querySelector(".weather") .style.display = "block"

}

searchBtn.addEventListener("click", () => {
  weatherCheck(searchInput.value);
});