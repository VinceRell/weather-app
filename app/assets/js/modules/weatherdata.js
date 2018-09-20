export class WeatherData {
    constructor(cityName, description) {
        this.cityName = cityName;
        this.description = description;
        this.temperature = "";
    }
}

export  const weatherProxyHandler = {
    get: function(target, prop) {
        return Reflect.get(target, prop);
    },
    set: function(target, prop, val) {
      const newVal = (val * 1.8 + 32).toFixed(2) + "F.";
      return Reflect.set(target, prop, newVal);
    }
}