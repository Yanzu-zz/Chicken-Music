// 作用是异步修改状态（state）（一次修改多个 state ）或者是对 mutation 做一些封装

import * as types from './mutation-types'

export const selectPlay = function({commit, state}, {list, index}) {
  commit(types.SET_SEQUENCE_LIST, list) // 设置播放列表
  commit(types.SET_PLAYLIST, list) // 设置播放列表
  commit(types.SET_CURRENT_INDEX, index) // 设置当前播放歌曲的索引
  commit(types.SET_FULL_SCREEN, true) // 设置为全屏播放
  commit(types.SET_PLAYING_STATE, true) // 设置播放状态为 true
}
