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

// 取消收藏房屋
export const cancelFavoriteHouse = (id) => {
  return request({
    url: `/user/favorites/${id}`,
    method: 'DELETE'
  })
}

// 房屋是否收藏
export const checkFavoriteHouse = (id) => {
  return request({
    url: `/user/favorites/${id}`
  })
}

// 添加收藏房屋
export const addFavoriteHouse = (id) => {
  return request({
    url: `/user/favorites/${id}`,
    method: 'POST'
  })
}
