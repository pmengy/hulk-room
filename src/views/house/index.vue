<template>
  <div>
    <!-- 头部区域 -->
    <div class="detail-title">
      <van-nav-bar
        :title="houseInfo.community ? houseInfo.community : '房屋信息'"
        left-arrow
        @click-left="$router.push('/favorite')"
      />
    </div>
    <!-- 房屋图片轮播图 -->
    <div class="swiper-container">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in houseInfo.houseImg" :key="item">
          <img :src="`http://liufusong.top:8080${item}`" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 房屋详情信息 -->
    <div class="detail-info">
      <!-- 标题 -->
      <div class="title">
        {{ houseInfo.community ? houseInfo.community : '' }}
        <div>
          <!-- {{houseInfo.tags[0]}} -->
          <van-tag color="#e1f5f8" text-color="#50c1ce" size="large"
            >近地铁</van-tag
          >
        </div>
      </div>
      <!-- 租金房型面积 -->
      <div class="house-size">
        <van-grid :column-num="3" :border="false">
          <van-grid-item text="租金">
            <template #icon> {{ houseInfo.price }}<span>/月</span> </template>
          </van-grid-item>
          <van-grid-item text="房型">
            <template #icon>
              {{ houseInfo.roomType ? houseInfo.roomType : '尚无数据' }}
            </template>
          </van-grid-item>
          <van-grid-item text="面积">
            <template #icon>
              {{ houseInfo.size ? houseInfo.size : '尚无数据' }}
            </template>
          </van-grid-item>
        </van-grid>
      </div>
      <!-- 房屋具体情况 -->
      <div class="house-detail">
        <van-grid :column-num="2" :border="false" :center="false">
          <van-grid-item
            ><span><i>装修：</i>精装</span
            ><span><i>朝向：</i>东</span></van-grid-item
          >
          <van-grid-item
            ><span><i>楼层：</i>高楼层</span
            ><span><i>类型：</i>普通住宅</span></van-grid-item
          >
        </van-grid>
      </div>
      <!-- 房屋所在区域地图 -->
      <div class="detail-map">
        <div class="location">
          <p><span>小区：</span>天山星城</p>
          <!-- TODO :地图定位 -->
        </div>
      </div>
      <!-- 房屋配套设施 -->
      <div class="supporting">
        <div class="title">
          <h4>房屋配套</h4>
        </div>
        <van-grid :border="false" :column-num="5">
          <van-grid-item v-for="item in houseInfo.supporting" :key="item">
            <div class="each-item">
              <i class="iconfont" v-html="supportings[item]"></i>
              <p>{{ item }}</p>
            </div>
          </van-grid-item>
        </van-grid>
      </div>
      <!-- 房源概况 -->
      <div class="supporting">
        <div class="title">
          <h4>房屋概况</h4>
        </div>
        <!-- 房屋信息 -->
        <div class="info">
          <div class="host">
            <img src="http://liufusong.top:8080/img/avatar.png" alt="" />
            <div class="host-info">
              <p class="name">王女士</p>
              <p class="auth">
                <i class="iconfont icon-renzheng"></i>已认证房主
              </p>
            </div>
            <button class="msg">发消息</button>
          </div>
          <div class="desc">
            1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
            2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
            3.人车分流，环境优美。
            4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。
          </div>
        </div>
      </div>

      <!-- 猜你喜欢 -->

      <!-- 标题 -->
      <div class="supporting">
        <div class="title">
          <h4>猜你喜欢</h4>
        </div>
        <!-- 房屋列表 -->
        <van-card
          currency=""
          desc="72.32m²/南 北/低楼层"
          title="安贞西里 3室1厅"
          thumb="http://liufusong.top:8080/img/message/1.png"
        >
          <template #tags>
            <van-tag color="#e1f5f8" text-color="#39becd">随时看房</van-tag>
          </template>
          <template #price>
            <div>4500<span>元/月</span></div>
          </template>
        </van-card>
        <van-card
          currency=""
          desc="83m²/南/高楼层"
          title="天居园 2室1厅"
          thumb="http://liufusong.top:8080/img/message/2.png"
        >
          <template #tags>
            <van-tag color="#e1f5f8" text-color="#39becd">随时看房</van-tag>
          </template>
          <template #price>
            <div>7200<span>元/月</span></div>
          </template>
        </van-card>
        <van-card
          currency=""
          desc="52m²/西南/低楼层"
          title="角门甲4号院 1室1厅"
          thumb="http://liufusong.top:8080/img/message/3.png"
        >
          <template #tags>
            <van-tag color="#e1f5f8" text-color="#39becd">随时看房</van-tag>
          </template>
          <template #price>
            <div>4300<span>元/月</span></div>
          </template>
        </van-card>
      </div>
    </div>
    <!-- 底部区域 -->
    <footer>
      <van-grid
        direction="horizontal"
        :column-num="3"
        icon-size="16"
        clickable
        class="grid"
      >
        <van-grid-item icon="star-o" text="收藏" class="like" />
        <van-grid-item text="在线咨询" class="online" />
        <van-grid-item text="电话预约" class="phone" />
      </van-grid>
    </footer>
  </div>
</template>

<script>
import { getHouseDetails } from '@/api/userHouse'
export default {
  name: 'HouseDetail',

  data() {
    return {
      houseInfo: {},
      supportings: {
        衣柜: '&#xe7eb;',
        空调: '&#xe632;',
        宽带: '&#xe66c;',
        洗衣机: '&#xe67d;',
        天然气: '&#xe60f;',
        电视: '&#xe680;',
        冰箱: '&#xe625;',
        暖气: '&#xe610;',
        床: '&#xe662;',
        热水器: '&#xe611;'
      }
    }
  },

  created() {
    this.getHouseDetails()
  },

  methods: {
    async getHouseDetails() {
      const id = this.$router.currentRoute.params.id
      const { data } = await getHouseDetails(id)
      this.houseInfo = data.body
    }
  }
}
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
body {
  background-color: #f6f5f6;
}
// 头部样式
.detail-title {
  :deep(.van-nav-bar__content) {
    background-color: #21b97a;
  }
  :deep(.van-nav-bar__title) {
    font-size: 36px;
    color: #fff;
  }
  :deep(.van-nav-bar__arrow) {
    color: #fff;
  }
}
// 轮播图样式
.my-swipe {
  height: 400px;
  img {
    width: 100%;
  }
}
// 房屋信息
.detail-info {
  padding: 30px;
  margin-bottom: 120px;
  > .title {
    font-size: 32px;
    color: #333;
    margin-bottom: 20px;
  }
  .van-tag {
    margin-top: 20px;
    padding: 10px;
  }
  .house-size {
    border-top: 2px solid #ededed;
    :deep(.van-grid-item__icon-wrapper) {
      font-weight: bold;
      font-size: 36px;
      color: #fa5741;
      margin-bottom: 10px;
      span {
        font-size: 24px;
        color: #fa5741;
      }
    }
    :deep(.van-grid-item__text) {
      font-size: 28px;
      color: #999;
    }
  }
  .house-detail {
    padding: 20px 10px;
    border-top: 2px solid #ededed;
    font-size: 32px;
    background-color: #fff;
    .van-grid-item__content {
      span {
        color: #333;
        font-size: 32px;
        i {
          font-style: normal;
          color: #999;
          font-size: 32px;
        }
      }
    }
  }
  .detail-map {
    .location {
      font-size: 28px;
      p {
        font-size: 28px;
        color: #333;
        span {
          color: #666;
        }
      }
    }
  }
  .supporting {
    .title {
      padding: 20px;
      border-bottom: 2px solid #ededed;
      font-size: 30px;
      color: #333;
    }
    .each-item {
      .iconfont {
        color: #333;
        font-size: 46px;
      }
      text-align: center;
      p {
        padding: 10px;
        font-size: 28px;
      }
    }
  }
}
.info {
  .host {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    img {
      padding: 15px;
      flex: 1;
      width: 104px;
      height: 104px;
    }
    .host-info {
      flex: 4;
      padding: 15px;
      .name {
        padding-left: 8px;
        padding-bottom: 15px;
        font-size: 28px;
      }
      .auth {
        color: #fa5741;
        font-size: 24px;
        .iconfont {
          font-size: 32px;
        }
      }
    }
    .msg {
      padding: 10px 30px;
      font-size: 28px;
      color: #33be85;
      background-color: #fff;
      border: 1px solid #33be85;
    }
  }
  .desc {
    font-size: 28px;
    margin-bottom: 20px;
  }
}
.van-card {
  background-color: #fff;
  margin-bottom: 20px;
  .van-card__thumb {
    margin-right: 20px;
    :deep(.van-image__img) {
      border-radius: unset !important;
    }
  }
}
.van-card__content {
  padding-left: 10px;
  .van-card__desc {
    color: #afb2b3;
    margin-bottom: 10px;
  }
  .van-card__price {
    font-size: 32px;
    color: #fa5741;
    font-weight: 700;
    span {
      font-size: 24px;
      font-weight: 400;
    }
  }
}
.van-card__title {
  font-size: 30px;
  font-weight: 700;
  padding-bottom: 10px;
}
footer {
  .grid {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    .like,
    .online {
      :deep(.van-grid-item__text) {
        font-size: 34px;
        color: #999;
      }
    }
    .phone {
      :deep(.van-grid-item__content) {
        background-color: #21b97a;
      }
      :deep(.van-grid-item__text) {
        font-size: 34px;
        color: #fff;
      }
    }
  }
}
</style>
