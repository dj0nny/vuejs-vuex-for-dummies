<template>
  <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          Made with ️️❤️ by <a href="https://github.com/dj0nny" target="_blank">dj0nny</a> &copy; {{ year }}
        </div>
      </div>
    </div>
  </footer>  
</template>


<script>
export default {
  name: 'Footer',
  data: () => ({
    year: new Date().getFullYear()
  })
}
</script>

<style>
#footer {
  background: #35495e;
  color: #fff;
  padding: 50px;
  margin-top: 50px;
}

#footer a {
  color: #fff;
  font-weight: bold;
}
</style>

