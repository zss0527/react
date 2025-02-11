import { http } from "@/utils"
import { ChannelRes, ListRes, ReqParams, ResType } from "./shared"


export function fetchChannelAPI() {
  return http.request<ResType<ChannelRes>>({
    url: '/channels',
  })
}


export function fetchListAPI(params: ReqParams) {
  return http.request<ResType<ListRes>>({
    url: '/articles',
    method: 'GET',
    params
  })
}

