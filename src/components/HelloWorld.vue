<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Login v-if="!isLogin"/>
    <Home v-else />
  </div>
</template>

<script>
import Login from './Login'
import Home from './Home'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    isLogin: Number
  },
  components: {
    Login,
    Home
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
