//账单相关的store

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
  name: "bill",
  initialState: {
    billList: [],
  },
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload;
    },
    addBill(state, action) {
      state.billList.push(action.payload)
    }
  },
});

//结构出来actionCreater函数
const { setBillList, addBill } = billStore.actions;
const url = 'http://localhost:8888/ka'
//异步代码
const getBillList = () => {
  return async (dispatch) => {
    const res = await axios.get(url)
    //触发reducer
    dispatch(setBillList(res.data))
  }
}

const addBillList = (data) => {
  return async (dispatch) => {
    const res = await axios.post(url, data)
    dispatch(addBill(res.data))
  }
}

export { getBillList, addBillList }
//导出reducer
const billReducer = billStore.reducer;

export default billReducer;
