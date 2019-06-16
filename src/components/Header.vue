<template>
  <header id="header">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h1 class="project-title">Vuex for dummies</h1> 
        </div>
        <div class="col-md-8">
          <ul class="menu">
            <li class="menu-item" v-for="(links, index) in menuItems" :key="index">
              <router-link :to="links.href">{{ links.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    menuItems: [
      {
        name: "Local",
        href: "/local"
      },
      {
        name: "From API",
        href: "/api"
      }
    ]
  })
}
</script>

<style>
#header {
    padding: 20px;
    box-shadow: 0 2px 2px rgba(0,0,0,.2);
    margin-bottom: 50px;
}

.project-title {
    font-size: 30px;
}

ul.menu {
    margin: 0;
    padding: 0;
    text-align: right;
}

ul.menu li.menu-item {
    display: inline-block;
    list-style-type: none;
    padding: 10px;
}

li.menu-item a {
    color: #000;
}
</style>
