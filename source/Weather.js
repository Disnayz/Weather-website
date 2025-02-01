document.getElementById("searchForm").addEventListener("submit", function(event){
    
    event.preventDefault();
    const city =document.getElementById("cityInput").value;
    
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
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
    .then(response => response.json())
    .then(data => {
        // Extracting the necessary data from the API response
        const icon = allIcon[data.weather[0].icon]
        const weather = {
            location: data.name,
            timezone: data.timezone,
            sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
            sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
            temp: Math.floor(data.main.temp),
            feelsLike: Math.floor(data.main.feels_like),
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            clouds: data.clouds.all,
            windSpeed: data.wind.speed,
        };

       
        
        
        // Show the weather table and hide main tables
        document.getElementById("weatherData").style.display = "block";
        document.getElementById("weather-tables-container").style.display = "none";

        // Populate the table with data
        const table = document.getElementById("weatherTable");
        table.innerHTML = `
            <tr><th colspan='2' class='name'>${weather.location}<img src=${icon} style="height: 75px;" id="weather-icon"></th></tr>
            <tr><td>Timezone</td><td>${weather.timezone}</td></tr>
            <tr><td>Sunrise</td><td>${weather.sunrise}</td></tr>
            <tr><td>Sunset</td><td>${weather.sunset}</td></tr>
            <tr><td>Temperature</td><td>${weather.temp} °C</td></tr>
            <tr><td>Feels Like Temperature</td><td>${weather.feelsLike} °C</td></tr>
            <tr><td>Pressure</td><td>${weather.pressure} hPa</td></tr>
            <tr><td>Humidity</td><td>${weather.humidity} %</td></tr>
            <tr><td>Cloud Cover</td><td>${weather.clouds} %</td></tr>
            <tr><td>Wind Speed</td><td>${weather.windSpeed} m/s</td></tr>
            `;
    })
    .catch(error => {
        document.getElementById("weather-tables-container").style.display = "none";
        const alert = document.getElementById("alert");
        alert.style.visibility = "visible";
        
        alert.innerHTML = `
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
            ${error}
            <button type="button" class="btn-close" aria-label="Close" id="close-alert"></button>
            </div>`

        document.getElementById("close-alert").addEventListener("click", function(){
            alert.style.visibility = "hidden";
            document.getElementById("weather-tables-container").style.display = "flex";
        })
    });
});

