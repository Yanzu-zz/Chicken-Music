<template>
  <transition name="slide">
    <music-list :bg-image="bgImage" :songs="songs" :title="title"></music-list>
  </transition>
</template>

<script>
  import { ERR_OK } from 'api/config'
  import { mapGetters } from 'vuex'
  import { createSong } from 'common/js/song'
  import { getSingerDetail } from 'api/singer'
  import MusicList from 'components/music-list/music-list'

  export default {
    data() {
      return {
        songs: []
      }
    },
    computed: {
      title() {
        return this.singer.name
      },
      ...mapGetters([
        'singer'
      ]),
      bgImage() {
        return `https://y.gtimg.cn/music/photo_new/T001R800x800M000${this.singer.id}.jpg?max_age=2592000`
      }
    },
    created() {
      this._getDetail()
    },
    methods: {
      _getDetail() {
        if(!this.singer.id) {
          this.$router.push('/singer')
        }
        getSingerDetail(this.singer.id).then((res) => {
          if(res.code === ERR_OK) {
            this.songs = this._normalizeSongs(res.data.list)
          }
        })
      },
      _normalizeSongs(list) {
        let ret = [] // 最终需要的返回值
        list.forEach((item) => {
          let { musicData } = item
          if(musicData.songid && musicData.albumid) {
            ret.push(createSong(musicData))
          }
        })

        return ret
      }
    },
    components: {
      MusicList
    }
  }
</script>

<style lang="stylus">
  @import "~common/stylus/variable"

  .slide-enter-active, .slide-leave-active
    transition: all .3s
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
