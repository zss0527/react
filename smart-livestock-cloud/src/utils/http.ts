import axios, {type AxiosInstance, type InternalAxiosRequestConfig, type AxiosResponse} from "axios";
import {message} from "antd";
import { store } from '@/store'

const http: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000
})

//请求拦截器
http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    // console.log('请求拦截器', config)
    const { token } = store.getState().authSlice
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

//响应拦截器
http.interceptors.response.use(
    (response: AxiosResponse) => {
        // console.log('响应拦截器', response)
        if (response.status === 200) {
            return response
        } else {
            console.log('请求失败', response.status)
            message.error("请求失败！")
            return Promise.reject(response.data)
        }
    },
    (error) => {
        // console.log('响应失败', error.response.data.error)
        message.error(error.response.data.error)
        return Promise.reject(error.data)
    }
)

export default http