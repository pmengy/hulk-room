import request from '@/utils/request'

// 获取全部城市列表
export const getCityList = (level) => {
  return request({
    url: `/area/city?level=${level}`
  })
}

// 获取热门城市列表
export const getHotCityList = () => {
  return request({
    url: 'area/hot'
  })
}

// 根据城市名获取城市信息
export const getCurrentCity = (name) => {
  return request({
    url: `area/info?name=${name}`
  })
}
