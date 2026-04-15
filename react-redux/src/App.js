import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
//导入创建action对象的方法
import { decrement, increment, addToNum } from './store/modules/counterStore'
import { fetchChannelList } from "./store/modules/channelStore";

function App() {
  //使用useSelector获取store中的state数据，效果是subscribe
  //这样写相当于订阅整个counter的initialState对象，对象中任何一个字段发生变化都会导致组件渲染
  //如果只想订阅其中的某一个state变量，可以使用useSelector(state => state.counter.xxx)
  const { count } = useSelector(state => state.counter)
  const { channelList } = useSelector(state => state.channel)
  //使用useDispatch获取dispatch函数
  const dispatch = useDispatch()

  //使用useEffect触发异步请求执行
  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch])
  return (<>
    {/*调用dispatch提交action对象*/}
    <button onClick={() => dispatch(decrement())}>-</button>
    <span>{count}</span>
    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(addToNum(20))}>add to 20</button>
    <ul>
      {channelList.map(item => <li key={item.id}> {item.name} </li>)}
    </ul>
  </>
  );
}

export default App;
