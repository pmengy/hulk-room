<template>
  <div>
    <!-- 头部区域 -->
    <div class="favorite-title">
      <van-nav-bar
        title="收藏列表"
        left-arrow
        @click-left="$router.push('/home/profile')"
      />
    </div>
    <van-empty
      v-if="favoriteList.length === 0"
      class="custom-image"
      image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
      description="您还没有收藏任何房源"
    />
    <!-- 列表区域 -->
    <van-card
      v-else
      currency=""
      v-for="item in favoriteList"
      :key="item.houseCode"
      :desc="item.desc"
      :title="item.title"
      :thumb="`http://liufusong.top:8080${item.houseImg}`"
    >
      <template #tags>
        <van-tag
          color="#e1f5f8"
          text-color="#39becd"
          v-for="(tag, index) in item.tags"
          :key="index"
          >{{ tag }}</van-tag
        >
      </template>
      <template #price>
        <div>
          {{ item.price }}
          <span>元/月</span>
        </div>
      </template>
    </van-card>
  </div>
</template>

<script>
import { getFavoriteHouses } from '@/api/userHouse'
export default {
  name: 'Favorite',

  data() {
    return {
      favoriteList: []
    }
  },

  created() {
    this.getFavoriteList()
  },

  methods: {
    async getFavoriteList() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      try {
        const { data } = await getFavoriteHouses()
        this.favoriteList = data.body
      } catch (error) {
        this.$toast.fail('获取房源失败，请重试')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.custom-image .van-empty__image {
  width: 160px;
  height: 160px;
}
.favorite-title {
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
</style>
