<template>
  <h2>{{ $store.state.title }}</h2>
  <router-link to="/login">登录</router-link>
  <router-link to="/main">首页</router-link>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App'
})
const flag = ref(false)
console.log(flag.value)
flag.value = true
console.log(flag.value)
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
