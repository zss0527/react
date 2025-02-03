//
import { createContext, useContext, useEffect, useRef, useState } from "react";
import MyButton from "./MyButton";
//引入样式
import './index.css';

const message = 'this is a message';
const count = 100;
const list = [
  {
    id: 1,
    name: '张三'
  },
  {
    id: 2,
    name: '李四'
  },
  {
    id: 3,
    name: '王五'
  }
]

const isLogin = true;
const articalType = 1;

/*
1. 使用React.createContext()创建一个上下文对象
2. 在顶层组件中使用Provider组件包裹子组件，value属性传递数据
3. 在子组件中使用useContext()函数接收上下文对象，获取数据
*/
const MsgContext = createContext();

/*Redux
Redux是react最常用的状态管理工具，用于解决组件之间的数据传递问题，可独立运行于任何UI层框架
通过集中是管理的方式管理应用的状态
Redux的核心概念：store、action、reducer
store：保存数据的地方，整个应用只有一个store
action：动作，是一个对象，描述发生了什么事情
reducer：是一个函数，根据action更新state
Redux的数据流：view -> action -> reducer -> store -> view
Redux的工作流程：
1.组件通过dispatch一个action来更新state
2.Reducer接收action，返回新的state
3.新的state保存在store中
4.组件通过订阅store来获取state
Redux的使用步骤：
1.安装redux：npm install redux
2.创建reducer：const reducer = (state, action) => {return newState;}
3.创建store：import { createStore } from 'redux'; const store = createStore(reducer);
4.创建action：const action = {type: 'ADD', payload: 1};
5.派发action：store.dispatch(action);
6.订阅store：store.subscribe(() => {console.log(store.getState());});
7.获取state：store.getState();
*/





//项目的根组件App
function App() {
  /*React Hooks
  1. react hook只能在组件中或者其它自定义hook中使用，不能在普通的js函数中使用
  2. 只能在组件的顶层中使用，不能在if，for，while等语句中使用，不能在内部函数中使用
  */
  /*
    useState是一个hook函数，它允许我们向组件添加一个状态变量，从而控制影响组件的渲染结果
    和普通js变量不同的是，状态变量的改变会触发组件的重新渲染（数据驱动试图），而普通js变量的改变不会触发组件的重新渲染
    状态变量是只读的，应该始终替换它而不是修改它，直接修改状态变量不能触发组件的重新渲染
    对于对象类型的状态变量，应该始终给set方法一个全新的对象来进行修改，而不是修改原对象
  */
  const [stateCount, setStateCount] = useState(0);
  const [stateObj, setStateObj] = useState({ name: '张三', age: 18 });

  const handleStateClick = () => {
    //stateCount++   //不能直接修改状态变量，应该始终替换它
    setStateCount(stateCount + 1);
  }

  const handleStateObjClick = () => {
    //错误写法
    // stateObj.age += 1;

    //正确写法，用一个全新的对象替换原对象
    setStateObj({
      ...stateObj,
      age: stateObj.age + 1
    });
  }

  //受控绑定表单
  const [value, setValue] = useState('');

  //react中获取和操作dom元素
  //dom可用时（组件挂载完成），inputRef.current就是绑定的dom元素
  const inputRef = useRef(null);

  //组件通信
  const parentData = '父组件数据';
  const [sonData, setSonData] = useState();
  const [sonName, setSonName] = useState();
  const pToGranSonData = '父传孙数据';
  const getMsg = (msg) => {
    console.log(msg);
    setSonData(msg);
  }
  const getSonName = (name) => {
    console.log(name);
    setSonName(name);
  }

  //useEffect是一个hook函数，用于在React组件中创建不是由事件引起而是由渲染本身引起的操作，比如发送ajax请求，更改dom等
  //useEffect接收一个函数作为参数，这个函数就是effect，useEffect在组件渲染后执行effect，每次渲染后都会执行effect
  //useEffect还可以返回一个函数，这个函数就是清除函数，用于清除effect，会在每次组件卸载时执行清除函数
  //useEffect的第二个参数是一个数组，用于控制effect的执行时机
  //  如果不传第二个参数，effect会在每次组件重新渲染时执行
  //  如果数组为空，effect只会在组件初次渲染时执行
  //  如果数组内有特定依赖项，effect会在每次依赖项发生变化时执行
  //useEffect(() => {},[])
  const URL = "http://geek.itheima.net/v1_0/channels";
  const [listData, setListData] = useState([]);
  let timerCount = 0;
  useEffect(() => {
    console.log('useEffect');
    async function fetchData() {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data);
      setListData(data.data.channels);
    }
    fetchData();
    // const timer = setInterval(() => {
    //   console.log('setInterval:', timerCount++);
    // }, 1000);
    //组件卸载时执行清除函数
    return () => {
      console.log('clear effect');
      // clearInterval(timer);
    }
  }, [stateCount]);

  // const [flag, setFlag] = useState(true);
  // const toggle = () => setFlag(!flag);
  //自定义hook
  const { flag, toggle } = useToggle();









  //babel解析jsx语法
  return (
    <div>
      <h2>this is a React App</h2>
      {/*大括号里面是js表达式，语句不能写在大括号中例如if、switch等*/}
      {message}
      {/*使用单引号包裹字符串*/}
      {`this is a message`}
      {/*识别js变量*/}
      {count}
      {/*函数调用*/}
      {getName()}
      {/*方法调用*/}
      {new Date().getDate()}
      {/*使用js对象*/}
      <div style={{ color: 'red' }}>this is a div</div>
      {/*渲染列表*/}
      {/*map循环哪个结构就return哪个结构，需要绑定一个独一无二的key*/}
      <ul>
        {
          list.map((item, index) => {
            return <li key={index}>{item.name}</li>
          })
        }
      </ul>

      {/*在react中，通过逻辑与&&或者三元运算符来实现基础条件渲染*/}
      {isLogin && <div>条件渲染&&：已登录</div>}
      {isLogin ? <div>条件渲染三元：已登录</div> : <div>未登录</div>}

      {/*根据不同的文章内容类型，渲染不同的jsx模版*/}
      {getArticalType()}<br />

      {/*基础事件处理, on+事件名={funcName},这种方式可以获得默认事件e，驼峰命名*/}
      <button onClick={clickHandle}>基础事件绑定</button><br />
      {/*参数绑定事件处理1, on+事件名={()=>funcName(params)},驼峰命名*/}
      <button onClick={() => clickHandle('自定义参数')}>自定义参数事件绑定1</button><br />
      {/*参数绑定事件处理2, on+事件名={()=>funcName(params)},同时获取自定义参数和e，驼峰命名*/}
      <button onClick={(e) => clickHandle2('自定义参数', e)}>自定义参数事件绑定2</button><br /><br />

      {/*渲染组件*/}
      <MyButton /><br /><br />



      <button onClick={handleStateClick}>状态管理基础useState：{stateCount}</button>
      <button onClick={handleStateObjClick}>状态管理对象useState：name:{stateObj.name} age:{stateObj.age}</button>

      {/*React样式控制*/}
      <p className="foo">React样式控制</p>


      {/*受控绑定表单*/}
      <div>
        <label>受控绑定表单</label>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <p>{value}</p>
      </div>

      {/*react中获取和操作dom元素*/}
      <div>
        <label>react中获取和操作dom元素</label>
        {/*ref绑定一个dom元素，inputRef.current就是绑定的dom元素*/}
        <input type="text" ref={inputRef} />
        <button onClick={() => inputRef.current.focus()}>获取焦点</button>
      </div><br /><br />

      {/*
      组件通信
      1.自组件可通过props接收父组件传递的数据，数据类型可以是任意类型
      2.props是只读的，不能在子组件中修改props，父组件数据智能在赋组件中修改
      3.props.children是一个特殊的props，用于接收组件标签内部的内容
      4.父组件给子组件定义函数，自组件通过调用props中的函数来实现子传父
      5.通过状态提升（通过共同的父组件）来实现兄弟组件之间的通信
      6.通过context来实现跨层级组件通信,context是一个全局的数据存储对象，可以在任意组件中读取和修改数据,context的使用分为三步：
        6.1 使用React.createContext()创建一个上下文对象
        6.2 在顶层组件中使用Provider组件包裹子组件，value属性传递数据
        6.3 在子组件中使用useContext()函数接收上下文对象，获取数据
      */}
      <MsgContext.Provider value={pToGranSonData}>
        <Son
          name={parentData}
          age={18}
          isLogin={true}
          list={[1, 2, 3]}
          obj={{ name: '张三', age: 18 }}
          func={() => { console.log('func') }}
          child={<span>this is a jsx</span>}

          onGetMsg={getMsg}
          onGetSonName={getSonName}
        >
          <div>这是子组件的content</div>
        </Son><br />
      </MsgContext.Provider>

      {sonData && <div>父组件接收到的子组件的数据：{sonData}</div>}

      <br />
      <Daughter
        // sonName={sonName} 
        sonName={sonName}
      />
      <br />

      {/*useEffect清除副作用*/}
      <div>
        {flag && <EffectDemo />}
        <button onClick={toggle}>toggle</button>
      </div>


    </div>
  );
}

function getName() {
  return "return a name";
}

//根据不同的文章内容类型，渲染不同的jsx模版
function getArticalType() {
  if (articalType === 1) {
    return <div>文章类型1</div>
  } else if (articalType === 2) {
    return <div>文章类型2</div>
  } else {
    return <div>文章类型3</div>
  }
}

//事件处理函数
function clickHandle(e) {
  console.log('clicked', e);
}
function clickHandle2(params, e) {
  console.log('clicked', params, e);
}

function Son(props) {
  console.log(props);
  const sonMsg = '子组件数据';
  const sonName = "this is sonName";
  return <>
    <div>我是子组件A</div><br />
    <button>父传子</button>
    <div>props：{props.name}</div>
    <div>props.children：{props.children}</div><br />
    <button onClick={() => props.onGetMsg(sonMsg)}>子传父</button>&nbsp;&nbsp;

    <button onClick={() => props.onGetSonName(sonName)}>兄弟组件通信</button>

    <Grandson />
  </>
}

function Daughter(props) {
  return <>
    <div>我是子组件B</div>
    {props.sonName && <div>Daughter接收到的Son传递的数据：{props.sonName}</div>}
  </>

}

function Grandson() {
  const data = useContext(MsgContext);
  return <div>{data}</div>
}

function EffectDemo() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('setInterval');
    }, 1000);
    return () => {
      console.log('clear effect');
      clearInterval(timer);
    }
  }, []);
  return <div>
    useEffect清除副作用
  </div>
}

//自定义Hook，用来复用逻辑代码
function useToggle() {
  //可复用的逻辑代码
  const [flag, setFlag] = useState(true);
  const toggle = () => {
    setFlag(!flag);
  }
  return {
    flag,
    toggle
  }
}

export default App;
