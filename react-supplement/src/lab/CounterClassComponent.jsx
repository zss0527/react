import { Component } from "react";
/*类组件生命周期
挂载时：constructor -》 render -》 componentDidMount（类似于ng中的nginit）
更新时：render -》 componnetDidUpdate
卸载时：componentWillUnmount
*/
/*
类组件父子组件通信和function组件方式一样，通过props绑定属性和函数
*/
class Counter extends Component {
  componentDidMount() {
    console.log('component rendered, begin to call api...')
  }
  componentWillUnmount() {
    console.log('component will unmount, please do some clear work!')
  }
  //定义状态变量
  state = {
    count: 0
  }

  //事件回调
  clickHandler = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  //UI模版
  render() {
    return <button onClick={this.clickHandler}>{this.state.count}</button>
  }
}

export default Counter