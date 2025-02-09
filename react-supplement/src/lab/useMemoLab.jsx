import { useMemo, useState } from "react"
//useMemo使用场景：对于运算非常大的逻辑，可以用useMemo进行缓存，防止每次组件渲染重新计算
function fib(n) {
  console.log('计算函数执行了')
  if (n < 3) {
    return 1
  }
  return fib(n - 2) + fib(n - 1)
}
const UseMemoLab = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  // let result = fib(count1)
  const result = useMemo(() => {
    return fib(count1)
  }, [count1])
  console.log('组件重新渲染了')


  return <div>
    {count1}<button onClick={() => setCount1(count1 + 1)} > change count1</button>
    {count2}<button onClick={() => setCount2(count2 + 1)} > change count2</button>
    <br />
    {result}
    <br />
    <div>
      useMemo使用场景：对于运算非常大的逻辑，可以用useMemo进行缓存，防止每次组件渲染重新计算
    </div>
  </div>
}

export default UseMemoLab