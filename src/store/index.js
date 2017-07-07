// VUEX 入口文件
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import createLogger from 'vuex/dist/logger'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 检测是否生产环境，如果为 dev 环境则开启严格模式（怕你出错）
// 如果是生产环境，则关闭，因为这会有一些性能损耗
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
