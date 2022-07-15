<template>
  <div>
    <!-- 轮播图 -->
    <div class="swiper-container">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in picList" :key="item.id">
          <img :src="`http://liufusong.top:8080${item.imgSrc}`" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 搜索框 -->
    <div class="search-container">
      <van-search v-model="address" show-action placeholder="请输入小区或地址">
        <template #left>
          <span @click="getCityList">北京</span>
          <van-icon name="arrow-down" />
        </template>
        <template #action>
          <van-icon class="iconfont" class-prefix="icon" name="dituzhaofang" />
        </template>
      </van-search>
    </div>
    <!-- 导航栏 -->
    <div class="navItem">
      <van-grid :border="false">
        <van-grid-item>
          <template #default>
            <img src="@/assets/img/all.png" alt="" />
            <p>整租</p>
          </template>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="合租"
          ><template #default>
            <img src="@/assets/img/each.png" alt="" />
            <p>合租</p>
          </template></van-grid-item
        >
        <van-grid-item
          ><template #default>
            <img src="@/assets/img/local.png" alt="" />
            <p>地图找房</p>
          </template></van-grid-item
        >
        <van-grid-item
          ><template #default>
            <img src="@/assets/img/rent.png" alt="" />
            <p>去出租</p>
          </template></van-grid-item
        >
      </van-grid>
    </div>
    <!-- 租房小组 -->
    <div class="group">
      <h3 class="group-title">租房小组</h3>
      <span class="more">更多</span>
    </div>
    <van-grid direction="horizontal" :column-num="2" class="group-list" gutter="10">
      <van-grid-item v-for="item in groupList" :key="item.id">
        <template #default>
          <van-image
            :src="`http://liufusong.top:8080${item.imgSrc}`"
            alt=""
            width="70"
            height="60"
          />
          <div class="group-content">
            <p>{{ item.title }}</p>
            <p>{{ item.desc }}</p>
          </div>
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { swiper } from '@/api/swipe'
import { getGroups } from '@/api/home'
export default {
  name: 'Home',

  data() {
    return {
      picList: [],
      groupList: [],
      address: '',
      area: 1
    }
  },

  created() {
    this.swiper()
    this.getGroups(this.area)
  },

  methods: {
    async swiper() {
      try {
        const res = await swiper()
        this.picList = res.data.body
      } catch (err) {
        this.$toast.fail('图片请求失败')
      }
    },
    getCityList() {
      this.$router.push('/city')
    },
    async getGroups(area) {
      try {
        const res = await getGroups(area)
        this.groupList = res.data.body
      } catch (err) {
        this.$toast.fail('获取数据失败')
      }
    }
  }
}
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.my-swipe {
  height: 400px;
  img {
    width: 100%;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.search-container {
  position: absolute;
  left: 80px;
  top: 20px;
  span {
    font-size: 20px;
  }
  .van-icon-arrow-down {
    font-size: 20px;
  }
  .van-search__content.van-search__content--square {
    background-color: #fff;
  }
  .van-search--show-action {
    height: 68px;
    width: 100%;
  }
  .icon-dituzhaofang {
    font-size: 44px;
    color: #666;
  }
}
.swiper-container {
  position: relative;
  left: 0;
  top: 0;
}
.navItem {
  padding-top: 20px;
  // margin-left: 16px;
}
.van-grid-item__content--center {
  img {
    width: 80%;
    height: 100%;
  }
  p {
    font-size: 28px;
  }
}
.group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-right: 16px;
  background-color: #f6f5f6;
  .group-title {
    font-size: 30px;
    margin: 0px 0 15px 20px;
  }
  .more {
    color: #787d82;
    font-size: 28px;
  }
}
.group-list {
  background-color: #f6f5f6;
  margin-bottom: 100px;
  padding-bottom: 20px;
  .group-content {
    padding-left: 10px;
  }
}
</style>
