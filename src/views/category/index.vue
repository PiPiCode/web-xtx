<template>
  <div class="top-category">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread>
        <XtxBreadItem></XtxBreadItem>
        <XtxBreadItem></XtxBreadItem>
        <XtxBreadItem></XtxBreadItem>
      </XtxBread>
      <!-- 轮播图 -->
      <!-- 全部分类 -->
      <!-- 各个分类推荐商品 -->
    </div>
  </div>
</template>
<script setup>
  import XtxBread from '@/components/library/xtx-bread.vue'
  import XtxBreadItem from '@/components/library/xtx-bread-item.vue'
</script>
<style lang="less" scoped></style>
