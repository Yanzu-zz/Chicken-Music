<template>
  <div class="loading">
    <img src="./loading.gif" width="25" height="25">
    <p class="desc">{{ title }}</p>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: '正在加载...'
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .loading
    position: relative
    width: 100%
    text-align: center
    .desc
      margin-top: 30px
      line-height: 20px
      font-size: $font-size-small
      color: $color-text-l
</style>

