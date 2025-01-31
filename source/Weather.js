document.getElementById("searchForm").addEventListener("submit", function(event){
    event.preventDefault();
    const city =document.getElementById("cityInput").value;

    const api_key = 'e23baa385d86a26dcc2c7311ae9fd17d'
    

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
    .then(response => response.json())
    .then(data => {
        // Extracting the necessary data from the API response
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
            incon: data.weather.icon
        };


        // Show the weather table
        document.getElementById("weatherData").style.display = "block";

        // Populate the table with data
        const table = document.getElementById("weatherTable");
        table.innerHTML = `
            <tr><th colspan='2' class='name'>${weather.location}</th></tr>
            <tr><th>Field</th><th>Value</th></tr>
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
        alert("Error fetching weather data: " + error);
    });
});