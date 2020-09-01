<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import './assets/reset.css'

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
html,body{
  min-height: 100%;
  width: 100%;
}
#app{
  width: 100%;
  height: 100%;
  background: #000000;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #434343, #333333);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #434343, #333333); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
