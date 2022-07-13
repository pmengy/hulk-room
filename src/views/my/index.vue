<template>
  <div>
    <van-grid :column-num="3" :border="false" class="list">
      <van-grid-item text="我的收藏">
        <template #icon
          ><van-icon class="iconfont" class-prefix="icon" name="shoucang"
        /></template>
      </van-grid-item>
      <van-grid-item text="我的出租">
        <template #icon
          ><van-icon class="iconfont" class-prefix="icon" name="shouye"
        /></template>
      </van-grid-item>
      <van-grid-item text="看房记录">
        <template #icon
          ><van-icon class="iconfont" class-prefix="icon" name="jilu"
        /></template>
      </van-grid-item>
      <van-grid-item text="成为房主">
        <template #icon
          ><van-icon class="iconfont" class-prefix="icon" name="fangzhu"
        /></template>
      </van-grid-item>
      <van-grid-item text="个人资料">
        <template #icon
          ><van-icon class="iconfont" class-prefix="icon" name="gerenziliao"
        /></template>
      </van-grid-item>
      <van-grid-item text="联系我们">
        <template #icon
          ><van-icon class="iconfont" class-prefix="icon" name="lianxiwomen"
        /></template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'My',

  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.list {
  .iconfont {
    font-size: 40px;
  }
  .van-grid-item__text {
    font-size: 26px;
  }
}
</style>
