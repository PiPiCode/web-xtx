// 提供首页相关 API函数
import request from '@utils/request'

/**
 * desc:获取品牌
 * @param limit 品牌个数
 */
export const findBrand = (limit = 6) => {
  return request('/home/brand', 'get', { limit })
}
