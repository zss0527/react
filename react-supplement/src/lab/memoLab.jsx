/*
react中默认情况下父组件状态发生变化的时候其自身和所有自组件都会重新渲染，
经过memo函数包裹生成的缓存组件只有在props发生变化的时候才会重新渲染
*/

import { useState, memo } from "react"

const MemoLab = () => {
  const [count, setCount] = useState(0)
  const [memoProps, setMemoProps] = useState(0)
  return <div>
    {count}
    <button onClick={() => { setCount(count - 1) }}>update count in father comp</button>
    <br />
    {memoProps}<button onClick={() => { setMemoProps(memoProps + 1) }}>update memo Props in memo son</button>
    <Son />
    <MemoSon value={memoProps} />

    <br />
    <p>
      react中默认情况下父组件状态发生变化的时候其自身和所有自组件都会重新渲染，
      经过memo函数包裹生成的缓存组件只有在props发生变化的时候才会重新渲染
    </p>
  </div>
}

const Son = (props) => {
  console.log('son re-rendered!', props)
}

const MemoSon = memo(function Sonn(props) {
  console.log('memoson re-rendered!', props)
})

export default MemoLab