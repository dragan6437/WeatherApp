<template>
  <footer>
    Copyright &copy;
    {{ new Date().getFullYear() }}
    <a href="https://github.com/dragan6437"><span>Dragan Talevski</span></a>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 30px;
  padding: 10px 0;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  color: #022851;
  box-shadow: 0px -3px 5px -1px rgb(255 255 255 / 25%)
}
a {
  text-decoration: none;
  color: #022851;
}
span{
  font-weight: bold;
}
</style>