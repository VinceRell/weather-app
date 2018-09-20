import {Http} from "./http.js";
import {WeatherData, weatherProxyHandler} from "./weatherdata.js";

class AppComps {
    constructor() {
      this.ELEMENT_SEARCH_BUTTON = document.querySelector("button");
      this.ELEMENT_SEARCHED_CITY = document.querySelector("#city");
      this.ELEMENT_LOADING_TEXT = document.querySelector("#load");
      this.ELEMENT_WEATHER_BOX = document.querySelector("#weather");
      this.ELEMENT_WEATHER_CITY = document.querySelector("#weatherCity");
      this.ELEMENT_WEATHER_DESCRIPTION = document.querySelector("#weatherDescription");
      this.ELEMENT_WEATHER_TEMPERATURE = document.querySelector("#weatherTemperature");
      this.handlers();
    }
    
    handlers() {
       this.ELEMENT_SEARCH_BUTTON.addEventListener("click", () => this.searchWeather());
    }
    
    
    searchWeather() {
      const city_name =  this.ELEMENT_SEARCHED_CITY.value.trim();
      const app_ID = "b17eae06be63f181c170c4352a5a48f0"; 
      const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city_name +  "&units=metric&appid=" + app_ID;
      if(city_name.length === 0){
        alert("please enter a city name")
      }
      Http.fetchDataURL(url)
              .then(responseData => {
                const weatherData = new WeatherData(city_name, responseData.weather[0].description.toUpperCase());
                const weatherProxy = new Proxy(weatherData, weatherProxyHandler);
                weatherProxy.temperature = responseData.main.temp;
                this.displayWeather(weatherProxy);
              })
              .catch(error => alert(error));
    }

    displayWeather(Data) {
      this.ELEMENT_WEATHER_CITY.textContent = Data.cityName;
      this.ELEMENT_WEATHER_DESCRIPTION.textContent = Data.description;
      this.ELEMENT_WEATHER_TEMPERATURE.textContent = Data.temperature;
      this.ELEMENT_WEATHER_BOX.style.display = "block";
    }
  }
  
export default AppComps;
  
  