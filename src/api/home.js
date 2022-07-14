import request from '@/utils/request'

export const getGroups = (area) => {
  return request({
    url: '/home/groups',
    params: { area }
  })
}
