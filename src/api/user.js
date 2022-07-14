import request from '@/utils/request'

export const login = (username, password) => {
  return request({
    method: 'POST',
    url: 'user/login',
    data: { username, password }
  })
}

// 获取获取用户的信息资料
export const getUserInfo = () => {
  return request({
    url: 'user'
  })
}
