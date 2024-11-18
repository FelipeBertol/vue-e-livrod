<!-- APP -->

<template>
  <div id="app">
     <AppNavbar/>
    <router-view class="teste"></router-view>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';

export default {
  name: 'App',
  components: {
    AppNavbar
  }
};
</script>



<style>
  * {
    color:black;
    text-decoration: none;
    padding: 0;
    margin:0;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
  }
  .teste {
      background-color: #ffff;
      height: 100vh;
      background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
  }
</style>
