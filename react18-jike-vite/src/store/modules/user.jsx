//用户相关的状态管理
import { request } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

//创建store
const userStore = createSlice({
  name: "user",
  //数据状态
  initialState: {
    token: ''
  },
  //同步的状态修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload
    }
  }
})

//解构actionCreater
const { setToken } = userStore.actions

//异步方法，登录获取token
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    //1.发送异步请求
    const res = await request.post('/authorizations', loginForm)
    //2.提交同步action进行token的状态存入
    dispatch(setToken(res.data.token))
  }
}

//获取reducer函数
const userReducer = userStore.reducer
export { fetchLogin }
export default userReducer