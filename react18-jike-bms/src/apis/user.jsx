//跟用户相关的所有请求

//登录
import { request } from '@/utils'
export function loginAPI(formData) {
  return request({
    url: '/authorizations',
    method: 'POST',
    data: formData
  })
}

//获取用户信息
export function getProfileAPI() {
  return request({
    url: '/user/profile',
    method: 'GET'
  })
}


