<template>
  <div>
    <!-- 顶部搜索框 -->
    <div class="search-container">
      <div class="search-left">
        <van-icon name="arrow-left" />
      </div>
      <div class="search-middle">
        <span class="text">广州<van-icon name="arrow-down" /></span>
        <van-icon name="search" />
        <input type="text" placeholder="     请输入小区名或地址" />
      </div>
      <div class="search-right">
        <van-icon class="iconfont" class-prefix="icon" name="dituzhaofang" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Find',

  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
.search-container {
  padding: 10px;
  font-size: 20px;
  background-color: #21b97a;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .search-left .van-icon-arrow-left {
    font-size: 50px;
    color: #fff;
    padding-right: 20px;
  }
  .search-middle {
    position: relative;
    left: 0;
    top: 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    height: 60px;
    border-radius: 10px;
    flex: 1;
    .van-icon-search {
      position: absolute;
      padding-left: 5px;
      padding-right: 15px;
      left: 110px;
      top: 17px;
      font-size: 30px;
      color: #a5b8c5;
    }
    .text {
      padding-left: 15px;
      margin-right: 20px;
    }
    input {
      padding-left: 10px;
      border: none;
      border-left: 1px solid #a5b8c5;
    }
  }
  .search-right {
    padding-left: 20px;
    padding-right: 20px;
    .iconfont {
      font-size: 40px;
      color: #fff;
    }
  }
}
</style>
