import { createSlice } from "@reduxjs/toolkit"

const counterStore = createSlice({
    name: 'counter',
    //初始状态数据
    initialState: {
        count: 0
    },
    //修改数据的同步方法，action
    reducers: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        //调用actionCreater的时候传递的参数会被action对象的payload属性接收
        addToNum(state, action) {
            state.count = action.payload
        }
    }
})

//解构出创建action对象的函数(actionCreater)
const { increment, decrement, addToNum } = counterStore.actions
//获取reducer函数
const counterRecuder = counterStore.reducer
//导出创建action对象的函数和reducer函数
export { increment, decrement, addToNum }

export default counterRecuder