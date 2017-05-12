<template>
  <div id="app">
    <header-top></header-top>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderTop from './components/common/Header.vue'

  export default {
    name: 'app',
    components: {
      HeaderTop
    }
  }
</script>
