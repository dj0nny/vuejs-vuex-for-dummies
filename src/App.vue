<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

body {
  font-display: 'Montserrat';
}
</style>
