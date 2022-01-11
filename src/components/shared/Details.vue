<template>
  <div v-if="$store.state.hasData">
    <hr />
    <table>
      <tbody>
        <tr>
          <td
            class="top location"
            colspan="2"
          >{{ $store.getters.name }}, {{ $store.getters.country }}</td>
        </tr>
        <tr>
          <td class="top" colspan="2">{{ capitalizeFirstLetter($store.getters.description) }}</td>
        </tr>
        <tr>
          <th>
            {{ setWeatherIcon($store.getters.id) }}
            <img
              class="icon-img"
              :src="imgSrc"
              :alt="$store.getters.description"
            />
          </th>
          <td class="temp">{{ Math.round($store.getters.temp) }}{{ this.unitsTemp() }}</td>
        </tr>
        <tr>
          <th>Feels like</th>
          <td>{{ Math.round($store.getters.feelsLike * 10) / 10 }}{{ this.unitsTemp() }}</td>
        </tr>
        <tr>
          <th>Humidity</th>
          <td>{{ $store.getters.humidity }}%</td>
        </tr>
        <tr>
          <th>Pressure</th>
          <td>{{ $store.getters.pressure }}hPa</td>
        </tr>
        <tr>
          <th>Wind speed</th>
          <td>{{ Math.round($store.getters.windSpeed * 10) / 10 }}{{ this.unitsWind() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="$store.getters.errorMessage">
    <p class="error-message">{{ $store.getters.errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data() {
    return {
      imgSrc: ''
    };
  },
  methods: {
    capitalizeFirstLetter(text) {
      return text[0].toUpperCase() + text.slice(1);
    },
    setWeatherIcon(code) {
      const hours = new Date().getHours();
      if (code >= 200 && code <= 299) {
        this.imgSrc = 'src/assets/icons/110808_storm_storm.png';
      }
      else if (code >= 300 && code <= 399) {
        this.imgSrc = 'src/assets/icons/110824_2_rain_rain.png';
      }
      else if (code >= 500 && code <= 599)
        this.imgSrc = 'src/assets/icons/110820_rain_rain.png';
      else if (code >= 600 && code <= 699) {
        this.imgSrc = 'src/assets/icons/110813_snow_snow_symbol.png';
      }
      else if (code >= 700 && code <= 799) {
        this.imgSrc = 'src/assets/icons/110832_lines_fog.png';
      }
      else if (code == 800) {
        if (hours >= 6 && hours <= 17)
          this.imgSrc = 'src/assets/icons/110805_black_sun_sun.png';
        else
          this.imgSrc = 'src/assets/icons/110831_moon_moon_black.png';
      }
      else if (code == 801) {
        if (hours >= 6 && hours <= 17)
          this.imgSrc = 'src/assets/icons/110803_cloud_cloud_sun_sun.png';
        else
          this.imgSrc = 'src/assets/icons/110829_moon_cloud_moon_cloud.png';
      }
      else if (code >= 802 && code <= 804) {
        this.imgSrc = 'src/assets/icons/110838_clouds_clouds.png';
      }
      else
        this.imgSrc = 'src/assets/icons/a.png';
    },
    unitsTemp() {
      if (this.$store.state.units == 'metric')
        return '°C';
      else
        return '°F';
    },
    unitsWind() {
      if (this.$store.state.units == 'metric')
        return 'kmh';
      else
        return 'mph';
    }
  }
}
</script>

<style scoped>
hr {
  width: 400px;
  margin-top: 30px;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(255, 255, 255, 0.75),
    rgba(0, 0, 0, 0)
  );
}
.top {
  text-align: center !important;
}
.location {
  font-weight: bold;
  font-size: 30px;
}
table,
th,
td {
  margin: 20px auto;
  border-collapse: collapse;
  font-size: 20px;
}
table {
  width: 300px;
}
th {
  text-align: left;
}
td {
  text-align: right;
}
.error-message {
  font-size: 20px;
  font-weight: bold;
  color: #e12626;
}
.temp {
  font-size: 50px;
  text-align: center;
}
.icon-img {
  filter: brightness(0) invert(1);
  width: 80px;
  padding: 20px;
}
</style>