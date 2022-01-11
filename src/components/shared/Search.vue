<template>
  <div class="search-form">
    <input
      class="input-search"
      @keyup.enter="getWeatherInfo()"
      @focus="increaseInputSize()"
      type="text"
      placeholder="Enter city"
      v-model="city"
    />
    <font-awesome-icon class="button-search" icon="magnifying-glass" @click="getWeatherInfo()"></font-awesome-icon>
    <div class="units">
      <input type="radio" id="celsius" name="units" value="metric" v-model="units" checked />
      <label for="celsius">Celsius</label>
      <input type="radio" id="fahrenheit" name="units" value="imperial" v-model="units" />
      <label for="fahrenheit">Fahrenheit</label>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Search',
  data() {
    return {
      url: 'https://api.openweathermap.org/data/2.5/weather',
      city: '',
      units: 'metric',
      appid: '591d20c8c62041d4e4b12504a8cacf44'
    };
  },
  methods: {
    getWeatherInfo() {
      axios.get(`${this.url}?q=${this.city}&units=${this.units}&appid=${this.appid}`)
        .then((res) => {
          this.$store.commit('setErrorMessage', '');
          this.$store.commit('setUnits', this.units);
          this.$store.commit('setWeatherData', res.data);
        })
        .catch((err) => {
          this.$store.commit('setErrorMessage', err.message);
        });

      const searchInput = document.querySelector('.input-search');
      searchInput.style.width = "250px";
    },
    increaseInputSize() {
      const searchInput = document.querySelector('.input-search');
      searchInput.style.width = "350px";
    }
  }
}
</script>

<style scoped>
.search-form {
  margin: 30px auto 0;
}
.input-search,
.button-search {
  border: none;
}
.input-search {
  width: 250px;
  border-radius: 30px;
  color: #022851;
  transition: 0.25s;
  font-size: 20px;
  padding: 10px 20px;
}
.input-search:focus {
  box-shadow: 0px 0px 3px 5px rgba(221, 221, 221, 0.25);
}
.button-search {
  position: relative;
  top: 9px;
  cursor: pointer;
  background-color: #022851;
  color: #fff;
  margin-left: -40px;
  border-radius: 50%;
  padding: 10px;
  transition: 0.25s;
}
.button-search:hover {
  background-color: #206bbd;
}
.button-search:active {
  background-color: #022851;
}
.units {
  margin-top: 20px;
}
.units > label {
  padding: 5px;
}
</style>