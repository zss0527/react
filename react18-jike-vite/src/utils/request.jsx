
import axios from "axios";

/*封装axios
1. 根域名配置
2. 超时时间
3. 请求/响应拦截器
*/
const request = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000
})

//请求拦截器，发送请求前做一些自定义配置
request.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

//响应拦截器，在响应返回到客户端之前做拦截，重点处理返回的数据
request.interceptors.response.use((response) => {
  //2xx对数据做处理
  return response.data
}, (error) => {
  //超出2xx对错误做处理
  return Promise.reject(error)
})
export { request }