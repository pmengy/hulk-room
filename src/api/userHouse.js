import request from '@/utils/request'

export const getFavoriteHouses = () => {
  return request({
    url: 'user/favorites'
  })
}

// 查询房屋具体信息
export const getHouseDetails = (id) => {
  return request({
    url: `/houses/${id}`
  })
}
