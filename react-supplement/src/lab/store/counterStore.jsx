const createCounterStore = (set) => {
  return {
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 }))
  }
}

export { createCounterStore }