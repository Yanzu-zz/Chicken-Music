<template>
  <div class="loading">
    <span class="circles-loader">Loading&#8230;</span>
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

  @-moz-keyframes circles-loader {
    0% {
      -moz-transform: rotate(-720deg);
      transform: rotate(-720deg);
    }
    50% {
      -moz-transform: rotate(720deg);
      transform: rotate(720deg);
    }
  }
  @-webkit-keyframes circles-loader {
    0% {
      -webkit-transform: rotate(-720deg);
      transform: rotate(-720deg);
    }
    50% {
      -webkit-transform: rotate(720deg);
      transform: rotate(720deg);
    }
  }
  @keyframes circles-loader {
    0% {
      -moz-transform: rotate(-720deg);
      -ms-transform: rotate(-720deg);
      -webkit-transform: rotate(-720deg);
      transform: rotate(-720deg);
    }
    50% {
      -moz-transform: rotate(720deg);
      -ms-transform: rotate(720deg);
      -webkit-transform: rotate(720deg);
      transform: rotate(720deg);
    }
  }
  /* :not(:required) hides this rule from IE9 and below */
  .circles-loader:not(:required) {
    position: relative;
    text-indent: -9999px;
    display: inline-block;
    width: 25px;
    height: 25px;
    background: rgba(255, 204, 51, 0.9);
    border-radius: 100%;
    -moz-animation: circles-loader 3s infinite ease-in-out;
    -webkit-animation: circles-loader 3s infinite ease-in-out;
    animation: circles-loader 3s infinite ease-in-out;
    -moz-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
  }
  .circles-loader:not(:required)::before {
    background: rgba(255, 102, 0, 0.6);
    border-radius: 100%;
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    top: 18.75px;
    left: -10.82532px;
  }
  .circles-loader:not(:required)::after {
    background: rgba(255, 51, 0, 0.4);
    border-radius: 100%;
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    top: 18.75px;
    left: 10.82532px;
  }
</style>
