<template>
  <div>
      <div class="photo"></div>
<main>
   <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="page-title">
          Portfolio
        </h1>
        <h3>Antonija Babić</h3>
      </div>
    </div>
   </div>
</main>
<body>

  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="page-title">

        </h1>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#home_tab">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#weather_tab">
              Weather forecast
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#vat_tab">
              VAT calculator
            </a>
          </li>

          <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#calculator_tab">
                Calculator
              </a>
            </li>


        </ul>

        <!-- Tab panes -->
        <div class="tab-content">
          <div class="tab-pane container active" id="home_tab">
            <p>
              My name's Antonija Babić, I'm a graphic designer and a wannabe front-end web developer based in Zagreb, Croatia.

				My skills in creating include logo designing and finalizing, graphic design for print (brochures, posters, business cards etc.) and digital design (UI/UX, web design with some development experience).

				Here on this page you can find some of my personal portfolio projects!</p>
          </div>
          <div class="tab-pane container fade" id="weather_tab">
            <p class="lead" id="city"></p>
            <img id="weather_icon" />
            <p>Description: <span id="weather_description"></span></p>
            <p>Main Temperature: <span id="main_temperature" class="badge badge-info"></span> &deg;C</p>
            <p>Main Feels: <span id="main_feels"></span>&deg;C</p>
            <p>Min. Temperature: <span id="main_temp_min" class="badge badge-danger"></span> &deg;C</p>
            <p>Max. Temperature: <span id="main_temp_max" class="badge badge-success"></span> &deg;C</p>

            <p>Pressure: <span id="pressure"></span> hPa</p>
            <p>Humidity: <span id="humidity"></span> %</p>


            <div class="lead">

              <div class="form-group">
                <input type="text" id="city_input" class="form_control" required>
              </div>
              <button class="btn btn-primary" id="get_weather_info" >Get weather info</button>

              <img id="weather_icon2" />

            </div>
            <p>Description: <span id="weather_description2"></span></p>
            <p>Main Temperature: <span id="main_temperature2" class="badge badge-info"></span> &deg;C</p>
            <p>Main Feels: <span id="main_feels2"></span>&deg;C</p>
            <p>Min. Temperature: <span id="main_temp_min2" class="badge badge-danger"></span> &deg;C</p>
            <p>Max. Temperature: <span id="main_temp_max2" class="badge badge-success"></span> &deg;C</p>

            <p>Pressure: <span id="pressure2"></span> hPa</p>
            <p>Humidity: <span id="humidity2"></span> %</p>


          </div>
          <div class="tab-pane container fade" id="vat_tab">
            <div class="row">
              <div class="col-4">
                <h4>
                  VAT calculator
                </h4>
                <form>
                  <div class="form-group">
                    <input type="number" id="sum" class="form-control" placeholder="Enter sum" />
                  </div>
                  <div class="form-group">
                    <input type="number" id="vat" class="form-control" placeholder="Enter VAT %" />
                  </div>
                  <div class="form-group">
                    <p class="lead" id="total"></p>
                    <p class="lead error" id="error"></p>
                  </div>
                  <div class="form-group">
                    <button class="btn btn-primary" id="vat_add">
                      Add VAT
                    </button>
                    <button class="btn btn-primary" id="vat_subtract">
                      Subtract VAT
                    </button>
                    <button class="btn btn-light" id="vat_clear">
                      Clear
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>


          <div class="tab-pane container fade" id="calculator_tab">
            <div class="row">
              <div class="col-4">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</div>
</template>

<script>
export default {
  name: 'AppHeader'
 
 
}
</script>


<style scoped>

body, main{color:white;
  font-family: futura-pt, sans-serif;
font-style: normal;
font-weight: 300;
}





main{height:200px;background: linear-gradient(#4eafff, #9198e5);}




.page-title {
  margin-top: 40px;
  margin-bottom: 30px;
}

.tab-pane {
  margin-top: 30px;
}

form {
  margin-top: 20px;
}

.error {
  color: red;
}

#total {
  font-weight: bold;
}

body{background-color: #131414;}



</style>