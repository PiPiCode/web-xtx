<template>
  <div class="home-hot">
    <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
      <div ref="target" style="position: relative; height: 426px">
        <!-- 面板内容 -->
        <transition name="fade">
          <ul class="goods-list" v-if="list.length">
            <li v-for="item in list" :key="item.id">
              <router-link to="/">
                <img :src="item.picture" alt="" />
                <p class="name">{{ item.title }}</p>
                <p class="desc">{{ item.alt }}</p>
              </router-link>
            </li>
          </ul>
          <HomeSkeleton v-else />
        </transition>
      </div>
    </HomePanel>
  </div>
</template>
<script setup>
  import { findHot } from '@/api/home'
  import { useLazyData } from '@/hooks'
  // import { ref } from 'vue'
  import HomePanel from './home-panel.vue'
  import HomeSkeleton from './home-skeleton.vue'
  // let list = ref([])
  // findHot().then(data => {
  //   list.value = data.result
  // })
  const { result: list, target } = useLazyData(findHot)
</script>
<style lang="less" scoped>
  .goods-list {
    display: flex;
    justify-content: space-between;
    height: 426px;
    li {
      width: 306px;
      height: 406px;
      .hoverShadow();
      img {
        width: 306px;
        height: 306px;
      }
      p {
        font-size: 22px;
        padding-top: 12px;
        text-align: center;
      }
      .desc {
        color: #999;
        font-size: 18px;
      }
    }
  }
</style>
