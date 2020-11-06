

const city = geoplugin_city();
const countryCode = geoplugin_countryCode();
document.getElementById('city').innerHTML = city + ', ' + countryCode


const apiKey = '6c28a0e602359b59ac4d4e3ff865dc1d';
const weatherApi = 'http://api.openweathermap.org/data/2.5/weather?q=';


const weatherIcon = 'http://openweathermap.org/img/wn/';
const weatherIconExstension = '@2x.png';

const url = `${weatherApi}${city},${countryCode}&apiKey=${apiKey}`;




function toCelsius(temp) {

    return temp - 273.15;
}

fetch(url)
    .then(response => response.json())
    .then((jsonResponse) => {
        console.log(jsonResponse);

        //console.log(jsonResponse.weather[0].description)
        document.getElementById('weather_description').innerHTML = jsonResponse.weather[0].description;


        //console.log(toCelsius(jsonResponse.main.temp))
        const temp = toCelsius(jsonResponse.main.temp).toFixed(1);
        document.getElementById('main_temperature').innerHTML = temp;


        // console.log(toCelsius(jsonResponse.main.feels_like))
        const main = toCelsius(jsonResponse.main.feels_like).toFixed(1);
        document.getElementById('main_feels').innerHTML = main;


        // console.log(toCelsius(jsonResponse.main.temp_min))
        const min = toCelsius(jsonResponse.main.temp_min).toFixed(1);
        document.getElementById('main_temp_min').innerHTML = min;


        //console.log(toCelsius(jsonResponse.main.temp_max))
        const max = toCelsius(jsonResponse.main.temp_max).toFixed(1);
        document.getElementById('main_temp_max').innerHTML = max;

        //console.log(jsonResponse.main.pressure)
        const pressure = jsonResponse.main.pressure.toFixed(1);
        document.getElementById('pressure').innerHTML = pressure;

        // console.log(jsonResponse.main.humidity)
        const humidity = jsonResponse.main.humidity.toFixed(1);
        document.getElementById('humidity').innerHTML = humidity;

        document.getElementById('weather_icon').src = weatherIcon + jsonResponse.weather[0].icon + weatherIconExstension;
    }
    )

    .catch(error => console.log(error));

//_______________________________________________________________________________________________________________________________________

const getWeather = document.getElementById('get_weather_info');
getWeather.addEventListener('click', function () {

    const city = document.getElementById('city_input').value.replace(", ",",");

    console.log(city);

    const cityUrl = `${weatherApi}${city}&apiKey=${apiKey}`;

    fetch(cityUrl)
        .then(response => response.json())
        .then((jsonResponse) => {
            console.log(jsonResponse);

            document.getElementById('weather_description2').innerHTML = jsonResponse.weather[0].description;


            const temp = toCelsius(jsonResponse.main.temp).toFixed(1);
            document.getElementById('main_temperature2').innerHTML = temp;


            const main = toCelsius(jsonResponse.main.feels_like).toFixed(1);
            document.getElementById('main_feels2').innerHTML = main;


            const min = toCelsius(jsonResponse.main.temp_min).toFixed(1);
            document.getElementById('main_temp_min2').innerHTML = min;


            const max = toCelsius(jsonResponse.main.temp_max).toFixed(1);
            document.getElementById('main_temp_max2').innerHTML = max;

            const pressure = jsonResponse.main.pressure.toFixed(1);
            document.getElementById('pressure2').innerHTML = pressure;

            const humidity = jsonResponse.main.humidity.toFixed(1);
            document.getElementById('humidity2').innerHTML = humidity;

            document.getElementById('weather_icon2').src = weatherIcon + jsonResponse.weather[0].icon + weatherIconExstension;
        }
        )

        .catch(error => console.log(error));

});