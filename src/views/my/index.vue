<template>
  <div>
    <div class="my-title">
      <img src="@/assets/img/bg.png" alt="" style="width: 100%" />
      <div class="my-profile">
        <div class="my-avatar">
          <img src="@/assets/img/avatar.png" />
        </div>
        <div class="login-btn">
          <p>游客</p>
          <van-button
            type="primary"
            class="login"
            size="small"
            @click="$router.push({ path: '/login' })"
            >去登录</van-button
          >
        </div>
      </div>
    </div>
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
    <div class="join">
      <img src="@/assets/img/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'
export default {
  name: 'My',

  data() {
    return {}
  },

  created() {
    this.getUserInfo()
  },

  methods: {
    async getUserInfo() {
      const res = await getUserInfo()
      console.log(res)
    }
  }
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
.my-title {
  position: relative;
  min-height: 650px;
  img {
    height: 388px;
  }
  .my-profile {
    position: absolute;
    top: 272px;
    left: 58px;
    width: 85%;
    height: 360px;
    background-color: #fff;
    box-shadow: 0 0 10px 3px #ddd;
    .my-avatar {
      width: 120px;
      height: 120px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 8px solid #f5f5f5;
      border-radius: 50%;
      box-shadow: 0 2px 2px #bdbdbd;
      img {
        width: 100%;
        height: 120px;
      }
    }
    .login-btn {
      text-align: center;
      padding-top: 80px;
      font-size: 26px;
    }
  }
}
.join {
  width: 100%;
  text-align: center;
  margin-top: 30px;
  img {
    width: 92%;
  }
}
</style>
