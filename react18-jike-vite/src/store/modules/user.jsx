//用户相关的状态管理
import { getToken, setToken as _setToken, request, removeToken } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

//创建store
const userStore = createSlice({
  name: "user",
  //数据状态
  initialState: {
    //redux中每次浏览器刷新都会使所有state值为这里的初始值
    token: getToken() || '',  //防止登录后刷新浏览器state丢失token
    userInfo: {},
  },
  //同步的状态修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      //localStorage存一份
      _setToken(action.payload)
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
    clearUserInfo(state) {
      state.token = ''
      state.userInfo = {}
      removeToken()
    }
  }
})

//解构actionCreater
const { setToken, setUserInfo, clearUserInfo } = userStore.actions

//异步方法，登录获取token
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    //1.发送异步请求
    const res = await request.post('/authorizations', loginForm)
    //2.提交同步action进行token的状态存入
    dispatch(setToken(res.data.token))
  }
}

const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await request.get('/user/profile')
    dispatch(setUserInfo(res.data))
  }
}

//获取reducer函数
const userReducer = userStore.reducer
export { fetchLogin, fetchUserInfo, clearUserInfo }
export default userReducer