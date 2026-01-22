const api_key = "778733942a9f0cd5abf5e44290c341a0";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city = document.querySelector(".search input");
const button = document.querySelector(".search i");
const weatherIcon = document.querySelector("#rainImage");


const checkWhether = async (city) => {
    let data = await fetch(api_url + city + `&appid=${api_key}`);
    let weatherData = await data.json();
    console.log(weatherData);

    document.querySelector(".temperature").innerHTML = weatherData.main.temp + "°C";
    document.querySelector(".description").innerHTML = weatherData.name;
    
    document.querySelector(".humidityRate").innerHTML = weatherData.main.humidity + "%";
    document.querySelector(".windRate").innerHTML = weatherData.wind.speed + " km/h";

    if (weatherData.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }
    else if (weatherData.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    }
    else if (weatherData.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    }
    else if (weatherData.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    }
    else if (weatherData.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    }

     
    

    
}

button.addEventListener("click", () => {
    checkWhether(city.value);
});


