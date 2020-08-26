<template>
  <div>
    <h1>这是路由测试组件</h1>
    <router-link to="/test/login">登录</router-link>
    <router-link to="/test/regist">注册</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Test',
}
</script>

<style>
</style>