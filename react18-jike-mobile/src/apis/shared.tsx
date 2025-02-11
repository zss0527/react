//定义后段返回数据类型
export type ResType<T> = {
  message: string
  data: T
}

export type ChannelItem = {
  id: number
  name: string
}

export type ChannelRes = {
  channels: ChannelItem[]
}

export type ListItem = {
  art_id: string,
  title: string,
  aut_id: string,
  comm_count: number,
  pubdate: string,
  aut_name: string,
  is_top: number,
  cover: { type: number, images: string[] }
}

export type ListRes = {
  results: ListItem[],
  pre_timestamp: string
}

export type ReqParams = {
  channel_id: string,
  timestamp: string
}