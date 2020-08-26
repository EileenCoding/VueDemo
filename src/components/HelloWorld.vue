<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link to="/test">路由测试</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
}
</script>

<style>
</style>
