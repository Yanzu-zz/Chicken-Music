<template>
  <div class="singer">
  </div>
</template>

<script>
  import { ERR_OK } from 'api/config'
  import { getSingerList } from 'api/singer'
  import Singer from 'common/js/singer'

  const HOT_NAME = '热门' // 歌手顶部的列表名
  const HOT_SINGER_LEN = 10 // 热门歌手的个数

  export default {
    data() {
      return {
        singers: []
      }
    },
    created() {
      this._getSingerList()
    },
    methods: {
      // 获取歌手列表值
      _getSingerList() {
        getSingerList().then((res) => {
          if(res.code === ERR_OK) {
            this.singers = res.data.list
            console.log(this._normalizeSinger(this.singers))
          }
        })
      },
      // 排序歌手列表
      _normalizeSinger(list) {
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        }

        list.forEach((item, index) => {
          if(index < HOT_SINGER_LEN) {
            map.hot.items.push(new Singer({
              id: item.Fsinger_mid,
              name: item.Fsinger_name
            }))
          }

          const key = item.Findex
          if(!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }

          map[key].items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        })
        // 为了得到有序列表，我们需要处理 map
        let hot = []
        let ret = []
        for(let key in map) {
          let val = map[key]
          // 判断是否非热门歌手
          if(val.title.match(/[a-zA-Z]/)) {
            ret.push(val) // 不是的话加进普通列表中
          } else if(val.title === HOT_NAME) { // 判断是否热门歌手
            hot.push(val) // 使得话加进热门列表中
          }
        }

        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })

        return hot.concat(ret)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
