<template>
  <div class="home-new">
    <HomePanel title="新鲜好物" sub-title="新鲜好物 品质靠谱">
      <template #right>
        <XtxMore path="/" />
      </template>
      <!-- 面板内容 -->
      <transition name="fade">
        <ul class="goods-list" v-if="goods.length">
          <li v-for="item in goods" :key="item.id">
            <router-link :to="`/product/${item.id}`">
              <img :src="item.picture" alt="" />
              <p class="name ellipsis">{{ item.name }}</p>
              <p class="price">&yen;{{ item.price }}</p>
            </router-link>
          </li>
        </ul>
        <HomeSkeleton bg="#f0f9f4" v-else />
      </transition>
    </HomePanel>
  </div>
</template>
<script setup>
  import HomePanel from '@views/home/components/home-panel'
  import XtxMore from '@components/library/xtx-more'
  import { findNew } from '@/api/home'
  import { ref } from 'vue'
  import HomeSkeleton from './home-skeleton.vue'
  const goods = ref([])
  findNew().then(data => {
    console.log(data.result)
    goods.value = data.result
  })
</script>
<style lang="less" scoped>
  .goods-list {
    display: flex;
    justify-content: space-between;
    height: 406px;
    li {
      width: 306px;
      height: 406px;
      background: #f0f9f4;
      .hoverShadow();
      img {
        width: 306px;
        height: 306px;
      }
      p {
        font-size: 22px;
        padding: 12px 30px 0 30px;
        text-align: center;
      }
      .price {
        color: @priceColor;
      }
    }
  }
</style>
