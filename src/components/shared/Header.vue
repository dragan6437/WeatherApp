<template>
  <header>
    <nav>
      <ul class="routes">
        <li>
          <router-link to="/" class="nav-links">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-links">About</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 3px 5px -1px rgba(255, 255, 255, 0.25);
}
nav{
  max-width:500px;
  margin: 0 auto;
}
ul {
  display: inline-block;
  list-style: none;
  margin: 0;
  padding:0;
}
li {
  display: inline-block;
  padding: 15px;
}
a{
  text-decoration: none;
  font-weight: bold;
  font-size:26px;
  color:#022851;
  transition: 0.25s;
}
a:hover{
  color:#206bbd;

}
</style>