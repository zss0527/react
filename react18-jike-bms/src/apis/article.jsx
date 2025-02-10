//封装和文章相关的接口函数

import { request } from '@/utils'

//获取频道列表
export function getChannelAPI() {
  return request({
    url: '/channels',
    method: 'GET'
  })
}

// 提交文章表单
export function createArticleAPI(data) {
  return request({
    url: '/mp/articles?draft=false',
    method: 'POST',
    data
  })
}

//获取文章列表
export function getArticleListAPI(params) {
  return request({
    url: '/mp/articles',
    method: 'GET',
    params
  })
}

//删除指定文章
export function delArticleAPI(id) {
  return request({
    url: `mp/articles/${id}`,
    method: 'DELETE',
  })
}

//获取指定文章详情
export function getArticleByIdAPI(id) {
  return request({
    url: `/mp/articles/${id}`,
    method: 'GET',
  })
}

//更新指定文章
export function updateArticleByIdAPI(data) {
  return request({
    url: `/mp/articles/${data.id}?draft=false`,
    method: 'PUT',
    data
  })
}