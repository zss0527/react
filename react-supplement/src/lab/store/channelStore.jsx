const URL = 'http://geek.itheima.net/v1_0/channels'

const createChannelStore = (set) => {
  return {
    channelList: [],
    fetchChannelList: async () => {
      const res = await fetch(URL)
      const jsonData = await res.json()
      set({
        channelList: jsonData.data.channels
      })
    }
  }
}

export { createChannelStore }