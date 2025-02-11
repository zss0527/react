import { fetchChannelAPI } from "@/apis/list"
import { ChannelItem } from "@/apis/shared"
import { useEffect, useState } from "react"


function useTabs() {
  const [channels, setChannels] = useState<ChannelItem[]>([])
  useEffect(() => {
    // fetchChannelAPI().then(item => setChannels(item.data))
    // console.log('channelList:', channels)
    // const getChannels = async () => {
    //   try {
    //     const res = await fetchChannelAPI()
    //     setChannels(res.data.data.channels)
    //     console.log("channels: ", channels)
    //   } catch {
    //     throw new Error('fetch channel error!')
    //   }
    // }
    // getChannels()
    fetchChannelAPI().then(item => {
      setChannels(item.data.data.channels)
    })
  }, [])

  return {
    channels
  }
}

export { useTabs }