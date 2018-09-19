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
      alert("clicked"); 
    }
  }
  
export default AppComps;
  
  