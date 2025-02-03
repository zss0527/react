import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
//导入创建action对象的方法
import { decrement, increment, addToNum } from './store/modules/counterStore'
import { fetchChannelList } from "./store/modules/channelStore";

function App() {
  //使用useSelector获取store中的state数据，效果是subscribe
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
