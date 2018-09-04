<template>
  <div id="app">
    <router-view name="Headertop"></router-view>
    <router-view/>
    <router-view name="Coptright"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    // 在页面刷新时将vuex里的信息保存到localStorage里

    window.addEventListener('beforeunload', () => {
      if (this.$store.state.isLogin === true) {
        localStorage.setItem('user', JSON.stringify(this.$store.state))
      }
    })

    // 在页面加载时读取localStorage里的状态信息放到vuex中
    localStorage.getItem('user') && this.$store.replaceState(Object.assign(this.$store.state, JSON.parse(localStorage.getItem('user'))))
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.sel {
  width: 200px;
}
</style>
