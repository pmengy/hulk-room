<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/home/list">找房</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/home/news">资讯</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/home/profile"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Layout',

  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped></style>
