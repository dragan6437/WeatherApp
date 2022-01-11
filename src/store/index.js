import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      weatherData: '',
      hasData: false,
      units: '',
      errorMessage: ''
    };
  },
  mutations: {
    setWeatherData(state, payload) {
      state.weatherData = payload;
      state.hasData = true;
    },
    setUnits(state, payload) {
      state.units = payload;
    },
    setErrorMessage(state, payload) {
      state.errorMessage = payload;
      state.hasData = false;
    },
  },
  getters: {
    id(state) {
      return state.weatherData.weather[0].id;
    },
    name(state) {
      return state.weatherData.name;
    },
    country(state) {
      return state.weatherData.sys.country;
    },
    description(state) {
      return state.weatherData.weather[0].description;
    },
    temp(state) {
      return state.weatherData.main.temp;
    },
    feelsLike(state) {
      return state.weatherData.main.feels_like;
    },
    humidity(state) {
      return state.weatherData.main.humidity;
    },
    pressure(state) {
      return state.weatherData.main.pressure;
    },
    windSpeed(state) {
      return state.weatherData.wind.speed;
    },
    units(state) {
      return state.units;
    },
    errorMessage(state) {
      return state.errorMessage;
    }
  }
});