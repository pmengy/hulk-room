<template>
  <div>
    <van-nav-bar
      class="navbar"
      title="城市列表"
      left-arrow
      @click-left="$router.back()"
    />
    <van-index-bar>
      <van-index-anchor index="当前城市" />
      <van-cell title="文本" />

      <van-index-anchor index="热门城市" />
      <van-cell title="文本" />

      <van-index-anchor index="A" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
    </van-index-bar>
  </div>
</template>

<script>
import { getCityList } from '@/api/city'
export default {
  name: 'city',

  data() {
    return {
      level: 1
    }
  },

  created() {
    this.getCityList(this.level)
  },

  methods: {
    async getCityList(level) {
      const res = await getCityList(level)
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  margin-bottom: 0px;
  :deep(.van-nav-bar__content) {
    background-color: #21b97a;
    font-size: 30px;
  }
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
}
:deep(.van-nav-bar .van-icon) {
  color: #fff !important;
}
</style>
