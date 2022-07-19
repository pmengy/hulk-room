<template>
  <div>
    <div class="city-title">
      <van-nav-bar
        title="城市列表"
        left-arrow
        @click-left="$router.push('/home/')"
      />
    </div>
    <van-index-bar :index-list="indexList" :sticky="false">
      <div v-for="(val, index) in indexList" :key="index">
        <van-index-anchor :index="val">
          {{
            val === '#' ? '当前城市' : val === '热' ? '热门城市' : val
          }}</van-index-anchor
        >
        <van-cell
          class="eachCity"
          @click="handleCellClick(item)"
          :title="item.label"
          v-for="(item, index) in allCityList[val]"
          :key="index"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { getCityList, getHotCityList } from '@/api/city'
import { mapState } from 'vuex'
export default {
  name: 'city',

  data() {
    return {
      indexList: ['#', '热'],
      hotCityList: [],
      allCityList: {}
    }
  },

  created() {
    this.getAllCityList()
  },

  methods: {
    async getCityList() {
      try {
        const {
          data: { body }
        } = await getCityList(1)
        const cityList = {}
        body.forEach((item) => {
          const first = item.short.substr(0, 1).toUpperCase()
          if (cityList[first]) {
            cityList[first].push(item)
          } else {
            cityList[first] = [item]
          }
        })
        this.allCityList = { ...this.allCityList, ...cityList }
        const allCityListIndex = Object.keys(cityList).sort()
        console.log(cityList)
        this.indexList = [...this.indexList, ...allCityListIndex]
      } catch (error) {}
    },
    async getAllCityList() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      try {
        const res = await getHotCityList()
        this.hotCityList = res.data.body
        this.allCityList = {
          ...this.allCityList,
          热: [...this.hotCityList],
          '#': [{ ...this.currentCity }]
        }
        this.getCityList()
      } catch (error) {
        this.$toast('获取城市列表失败')
      }
    },
    handleCellClick(val) {
      const result = this.hotCityList.some((item) => item.label === val.label)
      if (result) {
        this.$store.commit('setCurrentCity', val)
        this.$router.push('/home/')
      } else {
        this.$toast('该城市暂无房源')
      }
    }
  },
  computed: {
    ...mapState(['currentCity'])
  }
}
</script>

<style lang="less" scoped>
.city-title {
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
.van-index-bar {
  box-sizing: border-box;
  height: 1244px;
  width: 750px;
  overflow: hidden auto;
  :deep(.van-index-anchor) {
    font-size: 28px;
    color: #999;
    border-top:2px solid #ededed ;
  }
}
:deep(.van-index-bar__sidebar) {
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 53%;
  right: 5px;
  z-index: 3;
  height: 90%;
  box-sizing: border-box;
  padding-top: 20px;
  text-align: center;
  cursor: pointer;
  .van-index-bar__index {
    padding: 0;
    flex: 1;
    font-size: 28px;
    width: 30px;
    border-radius: 50%;
    box-sizing: border-box;
    margin: 14px 0;
    text-align: center;
  }
}
.van-cell::after {
  border-bottom: 4px solid #ededed;
}
.van-cell__title {
  font-size: 32px;
  color: #333;
}
:deep(.van-index-bar__index--active) {
  background-color: #21b97a !important;
  color: #fff;
}
</style>
