<template>
  <div>
    <div class="rent-title">
      <van-nav-bar
        title="房屋管理"
        left-arrow
        @click-left="$router.push('/home/profile')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HulkRoomIndex',

  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.rent-title {
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
</style>
