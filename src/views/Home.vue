<template>
  <div class="home">
    <div class="row">
      <div class="col-md-4">
        <img id="logo" src="../assets/logo.png">
      </div>
      <div class="col-md-8">
        <h1>Vuex for dummies</h1>
        <div class="buttons">
          <router-link class="examples" to="/local">View examples</router-link>
          <a class="github" target="_blank" href="https://github.com/dj0nny/vuejs-vuex-for-dummies">View repository on Github</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
img#logo {
  width: 50%;
  float: right;
}

.buttons {
  margin-top: 33px;
}

.examples {
    color: #42b983;
    border: 1px solid #42b983;
    padding: 10px 30px 10px 30px;
    margin-right: 50px;
    transition: .3s all;
    background: #fff;
    font-weight: 600;
}

.examples:hover {
    color: #fff;
    background: #42b983;
    text-decoration: none;
}

.github {
    color: #000;
    border: 1px solid #000;
    padding: 10px 30px 10px 30px;
    font-weight: 600;
    transition: .3s all;
}

.github:hover {
  background: #000;
  color: #fff;
  text-decoration: none;
}

</style>

