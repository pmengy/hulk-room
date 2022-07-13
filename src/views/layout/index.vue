<template>
  <div>
    <router-view></router-view>
    <van-tabbar route active-color="#21b97a" inactive-color="#888">
      <van-tabbar-item to="/home/"
        >首页
        <template #icon
          ><van-icon class="iconfont" class-prefix="icon" name="shouye"
        /></template>
      </van-tabbar-item>
      <van-tabbar-item to="/home/list"
        >找房<template #icon
          ><van-icon
            class="iconfont"
            class-prefix="icon"
            name="zhaofang" /></template
      ></van-tabbar-item>
      <van-tabbar-item to="/home/news"
        >资讯<template #icon
          ><van-icon
            class="iconfont"
            class-prefix="icon"
            name="zixun" /></template
      ></van-tabbar-item>
      <van-tabbar-item to="/home/profile"
        >我的<template #icon
          ><van-icon
            class="iconfont"
            class-prefix="icon"
            name="wode" /></template
      ></van-tabbar-item>
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

<style lang="less" scoped>
.van-tabbar-item {
  font-size: 20px;
  .iconfont {
    font-size: 44px;
  }
}
</style>
