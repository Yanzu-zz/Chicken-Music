<template>
  <div id="app">
    <!-- APP头部 -->
    <m-header></m-header>
    <!-- APP tab 标签 -->
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
  import Tab from 'components/tab/tab'
  import Player from 'components/player/player'
  import MHeader from 'components/m-header/m-header'

  export default {
    components: {
      Tab,
      Player,
      MHeader
    }
  }
</script>
  
<style scoped lang="stylus">

</style>
