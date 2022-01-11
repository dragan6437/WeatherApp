<template>
  <div>
    <h1>
      ERROR 404
      <br />NOT FOUND
    </h1>
    <button @click="$router.push('/')">Back to homepage</button>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: 50px;
}
button {
  display: flex;
  margin: auto;
  background: #fff;
  color: #022851;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  padding: 20px;
  cursor: pointer;
}
button:hover {
  background: #206bbd;
  color: #fff;
}
button:active {
  background: #004c9c;
}
</style>