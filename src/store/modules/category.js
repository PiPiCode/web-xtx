import { findAllCategory } from '@/api/category'
import { topCategory } from '@/api/constants'

// 商品分类
export default {
  namespaced: true,
  state() {
    return {
      // 分类信息集合，依赖topCategory重新设置，保证初始化就要数据，不至于白屏
      list: topCategory.map(item => ({
        name: item
      }))
    }
  },
  // 修改分类函数
  mutations: {
    // payload 所有的分类集合
    setCategory(state, payload) {
      state.list = payload
    },
    // 定义 show 和 hide 函数，控制当前分类的二级分类的显示和隐藏
    show(state, id) {
      const currCategory = state.list.find(item => item.id === id)
      currCategory.open = true
    },
    hide(state, id) {
      const currCategory = state.list.find(item => item.id === id)
      currCategory.open = false
    }
  },
  // 获取分类函数
  actions: {
    async getList({ commit }) {
      // 获取分类数据
      const data = await findAllCategory()
      data.result.forEach(item => (item.open = false))
      // 修改分类数据
      commit('setCategory', data.result)
    }
  }
}
