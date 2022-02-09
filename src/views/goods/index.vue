<template>
  <div class="xtx-goods-page" v-if="goods">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem :to="`/category/${goods.categories[1].id}`">
          {{ goods.categories[1].name }}
        </XtxBreadItem>
        <XtxBreadItem :to="`/category/sub/${goods.categories[0].id}`">
          {{ goods.categories[0].name }}
        </XtxBreadItem>
        <XtxBreadItem>{{ goods.name }}</XtxBreadItem>
      </XtxBread>
      <!-- 商品信息 -->
      <div class="goods-info"></div>
      <!-- 商品推荐 -->
      <GoodsRelevant />
      <!-- 商品详情 -->
      <div class="goods-footer">
        <div class="goods-article">
          <!-- 商品+评价 -->
          <!-- 注意事项 -->
        </div>
        <!-- 24热榜+周热销榜 -->
        <div class="goods-aside"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import GoodsRelevant from './components/goods-relevant.vue'
  import { ref } from 'vue'
  import { findGoods } from '@/api/home'
  import { useRoute } from 'vue-router'
  export default {
    name: 'XtxGoodsPage',
    components: {
      GoodsRelevant
    },
    setup() {
      const goods = useGoods()
      return { goods }
    }
  }
  //获取商品详情
  const useGoods = () => {
    const goods = ref(null)
    const route = useRoute()
    findGoods(route.params.id).then(data => {
      goods.value = data.result
    })
    return goods
  }
</script>

<style scoped lang="less">
  .goods-info {
    min-height: 600px;
    background: #fff;
    display: flex;
    .media {
      width: 580px;
      height: 600px;
      padding: 30px 50px;
    }
    .spec {
      flex: 1;
      padding: 30px 30px 30px 0;
    }
  }
  .goods-footer {
    display: flex;
    margin-top: 20px;
    .goods-article {
      width: 940px;
      margin-right: 20px;
    }
    .goods-aside {
      width: 280px;
      min-height: 1000px;
    }
  }
  // .goods-tabs {
  //   min-height: 600px;
  //   background: #fff;
  // }
  // .goods-warn {
  //   min-height: 600px;
  //   background: #fff;
  //   margin-top: 20px;
  // }
</style>
