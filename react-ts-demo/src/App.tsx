import { useRef, useState } from 'react'
type User = {
  name: string,
  age: number
}

//定义类型用type和interface效果一样
// type Props = {
//   className: string
// }
interface Props {
  className: string
  //React.ReactNode比较特殊，可以适配很多情况，功能相当于angular中的内容映射
  children: React.ReactNode
}
function App() {
  const [list, setList] = useState([1, 2, 3])
  const [user, setUser] = useState<User | null>()
  const domRef = useRef<HTMLInputElement>(null)
  const update = () => {
    setList(list.concat([3, 4, 5]))
    setUser({
      name: 'jack',
      age: 18
    })
  }
  return (
    <>
      <div>
        <ul>
          {list.map(item => <li>{item}</li>)}
          <button onClick={update}>concat</button>
          {user?.name}
        </ul>
        <input ref={domRef} />
        <button onClick={() => domRef.current?.focus()}>focus</button>
        <Button className="test"><h2>Button Content</h2></Button>
        <Son onGetMsg={(msg) => console.log(msg)}></Son>
      </div>
    </>
  )
}

function Button(props: Props) {
  const { className, children } = props
  console.log("children: ", children)
  return (
    <>
      <button>{className}</button>
      <div>{children}</div>
    </>

  )
}

type MyProps = {
  onGetMsg?: (msg: string) => void
}

function Son(props: MyProps) {
  const { onGetMsg } = props
  const sonValue = "son value"
  const clickHandler = (value: string) => {
    onGetMsg?.(value)
  }

  return <div>
    <button onClick={() => clickHandler(sonValue)}>sendMsg</button>
  </div>
}

export default App
