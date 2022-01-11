<template>
  <!-- 顶部通栏 -->
  <AppNavbar>顶部通栏</AppNavbar>
  <!-- 头部组件 -->
  <AppHeader>头部组件</AppHeader>
  <!-- 吸顶头部 -->
  <AppHeaderSticky />
  <!-- 内容容器 -->
  <div class="app-body">
    <!-- 二级路由 -->
    <router-view />
  </div>
  <!-- 底部组件 -->
  <AppFooter>底部组件</AppFooter>
</template>

<script setup>
  import AppNavbar from '@/components/app-navbar'
  import AppHeader from '@/components/app-header'
  import AppFooter from '@/components/app-footer'
  import AppHeaderSticky from '@/components/app-header-sticky'
  import { useStore } from 'vuex'

  // 获取下分类数据
  const store = useStore()
  store.dispatch('category/getList')
</script>

<style lang="less" scoped></style>
