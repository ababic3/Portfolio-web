<template>
  <div id="main" :class="isDay ? 'day' : 'night'">
    <div class="container my-5">
      <h1 class="title text-center">Enter your city</h1>
      <form class="search-location" v-on:submit.prevent="getWeather">
        <input
          type="text"
          class="form-control text-muted form-rounded p-4 shadow-sm"
          placeholder="City"
          v-model="citySearch"
          autocomplete="off"
        />
      </form>
      <p class="text-center my-3" v-if="cityFound">No city found</p>
      <div
        class="card rounded my-3 shadow-lg back-card overflow-hidden"
        v-if="visible">
        <div class="card-top text-center" style="margin-bottom: 240px">
          <div class="city-name my-3">
            <p>{{ weather.cityName }}</p>
            <!-- Put icons of clouds/sun etc..
            <img id="weather_icon" src="http://openweathermap.org/img/wn/01d@2x.png">-->
           <!-- <img src="{weather.icon}">-->
           <!--<img v-bind:src="'http://openweathermap.org/img/w/' + item + '.png' "  />-->
           <!--<img v-bind:src="{{weather.icon}}"/>-->
          <!-- <img v-bind:src="'weather.icon'"  />-->
          <p>{{ weather.country }}</p>
          </div>
        </div>

        <div class="card-body">
          <div class="card-mid">
            <div class="row">
              <div class="col-12 text-center temp">
                <span>{{ weather.temperature }}&deg;C</span>
                <p class="my-4">{{ weather.description }}</p>
              </div>
            </div>
          </div>


          <div class="card-bottom px-5 py-4 row">
            <div class="col text-center">
              <p>{{ weather.feelsLike }}&deg;C</p>
              <span>Feels like</span>
            </div>
            <div class="col text-center">
              <p>{{ weather.humidity }}%</p>
              <span>humidity</span>
            </div>
          </div>

          <div class="row">
           <div class="col-12 text-center " style="margin-top: 50px">
            <p class="title2">Suggestions for <b>{{ weather.description }}</b> mood songs</p>
           </div>
             <div class="col-4 text-center">
               <p>Suggestion#1</p>
               <img src="./assets/download1.jpg" alt="" />
               <p>Play</p>
               <p>to-do</p>
             </div>
             <div class="col-4 text-center">
               <p>Suggestion#2</p>
               <img src="./assets/download2.jpg" alt="" />
               <p>Play</p>
               <p>to-do</p>
             </div><div class="col-4 text-center">
               <p>Suggestion#3</p>
               <img src="./assets/download3.jpg" alt="" />
               <p>Play</p>
               <p>to-do</p>
             </div>
          </div>
        </div>  
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityFound: false,
     
      isDay: true,
      citySearch: "",
      weather: {
        cityName: "Zagreb",
        icon: "10n",
        country: "HR",
        temperature: 12,
        description: "Clouds everywhere",
        lowTemp: "3",
        highTemp: "15",
        feelsLike: "8",
        humidity: "55",
      },

      mounted() {
      console.log(process.env.API_KEY)}
    };
    
  },
  methods: {
    getWeather: async function () {
      console.log(this.citySearch);
      
      const key = "5299e83c9cf2fef510fb8ddaa3206ac8";
      const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${this.citySearch}&appid=${key}&units=metric`;
     
      const weatherIcon = 'http://openweathermap.org/img/wn/';
      const weatherIconExstension = '@2x.png';
     
      //fetch weather
      try {
        const response = await fetch(baseURL);
        const data = await response.json();
        console.log(data);
         
        this.citySearch = "";
        this.weather.cityName = data.name;

       // this.weather.icon=data.icon+ weatherIconExstension;
        this.weather.icon = weatherIcon + data.weather[0].icon + weatherIconExstension;
        //document.getElementById('weather_icon').src = weatherIcon + jsonResponse.weather[0].icon + weatherIconExstension;

        this.weather.country = data.sys.country;
        this.weather.temperature = Math.round(data.main.temp);
        this.weather.description = data.weather[0].description;
        this.weather.lowTemp = Math.round(data.main.temp_min);
        this.weather.highTemp = Math.round(data.main.temp_max);
        this.weather.feelsLike = Math.round(data.main.feels_like);
        this.weather.humidity = Math.round(data.main.humidity);

        const timeOfDay = data.weather[0].icon;


        if (timeOfDay.includes("n")) {
          this.isDay = false;
        } else {
          this.isDay = true;
        }

        this.visible = true;
        this.cityFound = false;
      } catch (error) {
        console.log(error);
        this.cityFound = true;
        this.visible = false;
      }
    },
  },
};
      
</script>

<style scoped>
@import "./assets/style.css";

 
</style>
