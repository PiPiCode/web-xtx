// 提供复用逻辑的函数（钩子）

import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'

/**
 * 数据懒加载函数(观察dom进入可视区，才加载数据)
 * @param {Element} target 监听的目标元素（DOM 对象）
 * @param {Function} apiFn 获取数据的接口函数
 * @return data
 */
export const useLazyData = apiFn => {
  const result = ref([])
  const target = ref(null)
  // stop 停止观察
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      // isIntersecting 是否进入可视区
      if (isIntersecting) {
        stop()
        // 调用 API 函数获取数据
        apiFn().then(data => (result.value = data.result))
      }
    },
    // 配置选项，
    // threshold 默认值大于0，可视比例达到之后才触发， 避免不同盒子可视高度不一致，才触发
    // 所以设置0，只要可视，即>0,即触发
    {
      threshold: 0
    }
  )
  return { result, target }
}
