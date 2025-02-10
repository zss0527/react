import { useEffect } from 'react'
// import { create } from 'zustand'
import useStore from './store'

// const URL = 'http://geek.itheima.net/v1_0/channels'

/*
const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  channelList: [],
  fetchChannelList: async () => {
    const res = await fetch(URL)
    const jsonData = await res.json()
    set({
      channelList: jsonData.data.channels
    })
  }
}))
*/

//zustand切片模式，可以把子store拆分到不同文件中
/*
const createCounterStore = (set) => {
  return {
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 }))
  }
}
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
  */
//zustand切片模式
/*
const useStore = create((...a) => ({
  ...createCounterStore(...a),
  ...createChannelStore(...a)
}))
*/

const ZustandLab = () => {
  const { count, inc, fetchChannelList, channelList } = useStore()
  useEffect(() => {
    fetchChannelList()
  }, [fetchChannelList])
  return <div>
    <span>{count}</span>
    <button onClick={inc}> one up</button>
    <ul>
      {
        channelList.map(item => <li key={item.id}>{item.name}</li>)
      }
    </ul>
  </div>
}

export default ZustandLab