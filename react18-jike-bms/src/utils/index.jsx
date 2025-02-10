import { request } from './request'
import { getToken, setToken, removeToken } from './token'

//多个封装模块统一从这里出去
//使用的时候直接import {xxx,xxx} from '@/utils'
export {
  request,
  getToken,
  setToken,
  removeToken
}