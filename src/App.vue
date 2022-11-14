<template>
  <div id="app">
    <div class="container">
      <img src="@/assets/Banner FNI.jpg" alt="banner fni" id="banner" />
      <b-card title="Card Title" no-body>
        <b-card-header header-tag="nav">
          <menu-publi></menu-publi>
        </b-card-header>
        <b-card-body>
          <router-view></router-view>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>
<script>
import MenuPubli from '@/components/MenuPubli.vue'
  export default{
    components:{
      MenuPubli
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#banner {
  width: 100%;
}
</style>
