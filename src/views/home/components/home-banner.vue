<template>
  <div class="home-banner">
    <XtxCarousel :sliders="sliders" autoPlay />
  </div>
</template>
<script setup>
  import { findBanner } from '@/api/home'
  import { ref } from 'vue'
  const sliders = ref([])
  findBanner().then(data => (sliders.value = data.result))
</script>
<style lang="less" scoped>
  .home-banner {
    width: 1240px;
    height: 500px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 98;
  }

  // 覆盖样式
  .xtx-carousel {
    :deep(.carousel-btn.prev) {
      left: 270px;
    }
    :deep(.carousel-indicator) {
      padding-left: 250px;
    }
  }
</style>
