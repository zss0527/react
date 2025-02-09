import { useReducer } from "react"

const UseReducerLab = () => {
  //1. 定义reducer函数，在内部根据action不同状态返回不同state
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INC':
        return ++state
      case 'DEC':
        return --state
      case 'SET':
        return action.payload
      default:
        return state
    }
  }
  //2. 组件中调用useReducer(reducer, 0) => [state, dispatch]
  const [state, dispatch] = useReducer(reducer, 0)
  //3. 调用dispatch(action)  =>通知reducer产生一个新状态，使用这个新状态更新UI

  return (
    <>
      <button onClick={() => { dispatch({ type: 'SET', payload: 20 }) }}>to 20</button>
      <button onClick={() => { dispatch({ type: 'INC' }) }}>+</button>
      {state}
      <button onClick={() => { dispatch({ type: 'DEC' }) }}>-</button>
    </>
  )
}

export default UseReducerLab