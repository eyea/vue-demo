<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Site" :isLogin='isLogin'/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import cookie from 'component-cookie'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      isLogin: 0
    }
  },
  mounted() {
    this.isLogin = cookie('isLogin') ? +cookie('isLogin') : 0
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
