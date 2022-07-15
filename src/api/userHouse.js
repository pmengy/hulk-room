import request from '@/utils/request'

export const getFavoriteHouses = () => {
  return request({
    url: 'user/favorites'
  })
}
