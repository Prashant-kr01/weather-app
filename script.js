
const apiKey = "1dc1388322a370512c35dea9ec848734";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button")
const WeatherIcon = document.querySelector(".Weather-icon");
const error = document.querySelector(".error");
async function checkweather(city) {
    const respose = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(respose.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await respose.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"; 
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if(data.weather[0].main == "Clouds"){
            WeatherIcon.src = "image/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            WeatherIcon.src = "image/clear.png";
        }else if(data.weather[0].main == "Rain"){
            WeatherIcon.src = "image/rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            WeatherIcon.src = "image/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            WeatherIcon.src = "image/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
   
}
searchBtn.addEventListener("click", ()=> {
    checkweather(searchBox.value);

});