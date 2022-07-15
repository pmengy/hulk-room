<template>
  <div>
    <!-- 背景图和用户信息 -->
    <div class="my-title">
      <img src="@/assets/img/bg.png" alt="" style="width: 100%" />
      <div class="my-profile" v-if="user && userInfo">
        <div class="my-avatar">
          <img :src="`http://liufusong.top:8080${userInfo.avatar}`" />
        </div>
        <div class="login-btn">
          <p>{{ userInfo.nickname }}</p>
          <van-button type="primary" class="logout" round @click="logoutClick"
            >退出</van-button
          >
          <div class="edit-userInfo">
            <span>编辑个人资料</span>
            <van-icon name="play" />
          </div>
        </div>
      </div>
      <div class="my-profile" v-else>
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
    <!-- 中间导航模块 -->
    <van-grid :column-num="3" :border="false" class="list">
      <van-grid-item text="我的收藏" @click="clickStar">
        <template #icon
          ><van-icon class="iconfont" class-prefix="icon" name="shoucang"
        /></template>
      </van-grid-item>
      <van-grid-item text="我的出租" @click="clickRent">
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
    <!-- 下方ad -->
    <div class="join">
      <img src="@/assets/img/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'
import { mapState } from 'vuex'
export default {
  name: 'My',

  data() {
    return {
      userInfo: {}
    }
  },

  created() {
    this.getUserInfo()
  },

  methods: {
    logoutClick() {
      this.$dialog
        .confirm({
          title: '提示',
          message: '真的要退出吗？',
          confirmButtonColor: '#108ee9',
          cancelButtonText: '手滑了',
          confirmButtonText: '去意已决'
        })
        .then(() => {
          // 确定退出后清空 token 并切换到登录页面
          this.$store.commit('setUser', '')
          this.$toast('退出登录成功')
          this.$router.replace('/login')
        })
        .catch(() => {
          // on cancel
        })
    },
    async getUserInfo() {
      try {
        const res = await getUserInfo()
        this.userInfo = res.data.body
      } catch (err) {
        this.$toast.fail('获取用户信息失败，请重试')
      }
    },
    // 点击我的收藏
    clickStar() {
      const url = this.user ? 'favorite' : 'login'
      this.$router.push({ path: '/' + url })
    },
    // 点击我的出租
    clickRent() {
      const url = this.user ? 'rent' : 'login'
      this.$router.push({ path: '/' + url })
    }
  },
  computed: {
    ...mapState(['user'])
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
.login-btn {
  text-align: center;
  padding-top: 80px;
  font-size: 26px;
  .login {
    width: 144px;
    height: 64px;
    margin-top: 4px;
    border-radius: 10px;
  }
  .logout {
    width: 108px;
    height: 40px;
    font-size: 24px;
    margin-bottom: 40px;
  }
  .van-button--normal {
    padding: 0;
  }
  .edit-userInfo {
    color: #999;
  }
}

.van-dialog__message--has-title {
  font-size: 40px;
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
