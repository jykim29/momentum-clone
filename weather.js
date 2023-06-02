let weatherURL = "";
const API_KEY = "abcd";
const city = document.getElementById("city");
const weather = document.getElementById("weather");
const temp = document.getElementById("temp");

function geolocationOK(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`;
  fetch(weatherURL);
  fetch(weatherURL)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `위치 : ${data.name}`;
      weather.innerText = `날씨 : ${data.weather[0].main}`;
      temp.innerText = `현재온도 : ${data.main.temp}˚`;
    });
}

function geoError() {
  city.innerText = `위치정보 수신 오류`;
}

navigator.geolocation.getCurrentPosition(geolocationOK, geoError);
