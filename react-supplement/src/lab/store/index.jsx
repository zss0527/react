import { createChannelStore } from "./channelStore";
import { createCounterStore } from "./counterStore";
import { create } from 'zustand'

const useStore = create((...a) => ({
  ...createCounterStore(...a),
  ...createChannelStore(...a)
}))

export default useStore