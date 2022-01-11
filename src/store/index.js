import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'
// vue2.0 创建仓库  new Vuex.Store({})
// vue3.0 创建仓库 createStore({})
// state 区分命名空间，需要带模块名
// getters mutations actions 不区分 挂载在全局，访问不需要

export default createStore({
  modules: {
    cart,
    user,
    category
  },
  // 配置插件
  plugins: [
    // 默认存储在 localStorage
    createPersistedState({
      // 本地存储的名字
      key: 'vue3-xtx',
      // 需要存储的模块
      paths: ['user', 'cart']
    })
  ]
})
