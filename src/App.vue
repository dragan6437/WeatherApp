<script setup>
import Header from './components/shared/Header.vue';
import Footer from './components/shared/Footer.vue';
</script>

<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>
  <Footer />
</template>

<style>
@font-face {
  font-family: "Spartan";
  src: local("Spartan"),
    url(./fonts/Spartan/Spartan-Regular.ttf) format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Spartan";
  src: local("Spartan"),
    url(./fonts/Spartan/Spartan-Bold.ttf) format("truetype");
  font-weight: 700;
}

body {
  background-color: #022851;
  margin: 0;
  line-height: 1.5;
}
#app {
  font-family: Spartan, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  position: relative;
  min-height: 100vh;
}
main{
  padding-bottom: 2.5rem;
}
</style>
