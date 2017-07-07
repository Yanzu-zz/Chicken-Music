// 管理所有状态的文件（原始数据）

import { playMode } from 'common/js/config'

const state = {
  // 存储歌手页面的数据
  singer: {},
  // 存储播放时候的数据
  playing: false, // 播放时为 true，默认为 false
  fullScreen: false, // 播放器是否展开（全屏）默认为 false
  playlist: [], // 播放列表，存储当前需要播放的歌曲列表，可点击展开显示全部歌曲
  sequenceList: [], // 播放列表，与 playlist 不同的是当播放顺序为顺序播放的时候与 playlist 一致，当为随机播放的时候则与 playlist 不同
  mode: playMode.sequence, // 播放模式
  currentIndex: -1 // 当前播放的歌曲
}

export default state
