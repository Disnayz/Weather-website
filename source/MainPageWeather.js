const cities = ["London", "New York", "Warsaw"];

const api_key = 'e23baa385d86a26dcc2c7311ae9fd17d'

const allIcon = {
    "01d": "source/assets/sun.png",
    "01n": "source/assets/moon.png",
    "02d": "source/assets/fewCloudsSun.png",
    "02n": "source/assets/fewCloudsMoon.png",
    "03d": "source/assets/cloud.png",
    "03n": "source/assets/cloud.png",
    "04d": "source/assets/brokenClouds.png",
    "04n": "source/assets/brokenClouds.png",
    "09d": "source/assets/showerRain.png",
    "09n": "source/assets/showerRain.png",
    "10d": "source/assets/rain.png",
    "10n": "source/assets/rain.png",
    "11d": "source/assets/thunderstorm.png",
    "11n": "source/assets/thunderstorm.png",
    "13d": "source/assets/snow.png",
    "13n": "source/assets/snow.png",
    "40d": "source/assets/mist.png",
    "40n": "source/assets/mist.png",
};

function showWeather(city){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
    .then(response => response.json())
    .then(data => {
        // Extracting the necessary data from the API response
        const icon = allIcon[data.weather[0].icon]
        const weather = {
            location: data.name,
            temp: Math.floor(data.main.temp),
            feelsLike: Math.floor(data.main.feels_like),
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
        };


        // Create div and populute it with weather data
        const cityCard = document.createElement("div");
          cityCard.classList.add("city-card");

          cityCard.innerHTML = `
            <table class="weather-table" id="mainPageTable">
            <tr><th colspan='2' class='name'>${weather.location}<img src=${icon} style="height: 75px;"></th></tr>
            <tr><td>Temperature</td><td>${weather.temp} °C</td></tr>
            <tr><td>Feels Like Temperature</td><td>${weather.feelsLike} °C</td></tr>
            <tr><td>Humidity</td><td>${weather.humidity} %</td></tr>
            <tr><td>Wind Speed</td><td>${weather.windSpeed} m/s</td></tr>
            </table>
          `;

          // Append the city card to the container
          document.getElementById("weather-tables-container").appendChild(cityCard);
    })
    .catch(error => {
        alert("Error fetching weather data: " + error);
    });
  };

  cities.forEach(city => {
    showWeather(city);
  });