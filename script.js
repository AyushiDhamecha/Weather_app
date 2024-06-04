const apiKey = "2fa7ae170ed9a07eff13790103f43b74";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiUrl2 = "https://api.openweathermap.org/data/2.5/forecast?q=";
const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function cheackWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    if (searchBox.value === '') {
        alert("Please Enter City name");
    }
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        document.querySelector(".weather-name").innerHTML = data.weather[0].description;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Smoke") {
            weatherIcon.src = "images/smoke.png";
            document.getElementById("bg").style.backgroundImage = "url(images/bgsmoke.jpg)";
        }
        else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/cloud.png";
            document.getElementById("bg").style.backgroundImage = "url(images/bgCloud.jpg)";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
            document.getElementById("bg").style.backgroundImage = "url(images/bgClear.jpg)";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
            document.getElementById("bg").style.backgroundImage = "url(images/bgrain.jpg)";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
            document.getElementById("bg").style.backgroundImage = "url(images/bgsnow.jpg)";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
            document.getElementById("bg").style.backgroundImage = "url(images/bgdrizzle.jpg)";
        }
        else if (data.weather[0].main == "Haze") {
            weatherIcon.src = "images/mist.png";
            document.getElementById("bg").style.backgroundImage = "url(images/bgmist.jpg)";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

    // else {
    //     weatherIcon.src = "images/404.png";
    // }


}

// async function daysWeather(city) {
//     const response = await fetch(apiUrl2 + city + `&appid=${apiKey}`);
//     var data = await response.json();

//     console.log(data);

// }


searchBtn.addEventListener("click", () => {
    cheackWeather(searchBox.value);
    // daysWeather(searchBox.value);
})



