<template>
  <div class="home-con">
    <h2>你好, {{ age }}岁的{{ userName }}</h2>
    <p class="desc">{{ desc }}</p>
    <p class="exit-btn" @click="handleExit">退出登录</p>
  </div>
</template>

<script>
import { getUserInfo } from '../api/user'
import cookie from 'component-cookie'

export default {
  name: 'Home',
  data() {
    return {
      userName: '',
      age: '',
      desc: ''
    }
  },
  mounted() {
    this.handleUserInfo()
  },
  methods: {
    handleUserInfo() {
      const userId = cookie('userId')
      userId &&
      getUserInfo(userId)
        .then(res => {
          const { username, desc, age } = res
          this.userName = username
          this.desc = desc
          this.age = age
        })
    },
    handleExit() {
      cookie('isLogin', 0)
      cookie('userId', null)
      window.location.reload()
    }
  }
}
</script>

<style lang="css">
  .home-con {
    width: 800px;
    height: 400px;
    margin: 20px auto;
    border: 2px dotted gray;
    border-radius: 6px;
    padding: 30px;
  }
  .desc {
    color: gray;
    margin-top: 10px;
    text-indent: 20px;
  }
  .exit-btn {
    margin-top: 320px;
    cursor: pointer;
    border: 1px solid gray;
    padding: 4px 10px;
    display: inline-block;
    border-radius: 4px;
  }
</style>