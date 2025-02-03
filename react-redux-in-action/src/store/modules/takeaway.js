import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const foodsStore = createSlice({
    name: 'foods',
    initialState: {
        //商品列表
        foodsList: [],
        //菜单激活下标状态
        activeIndex: 0,
        //购物车列表
        cartList: []
    },

    reducers: {
        setFoodsList(state, action) {
            state.foodsList = action.payload
        },
        changeActiveIndex(state, action) {
            state.activeIndex = action.payload
        },
        addCart(state, action) {
            //是否添加过
            const item = state.cartList.find(item => item.id === action.payload.id)
            if (item) {
                item.count++
            } else {
                state.cartList.push(action.payload)
            }
        },
        increCount(state, action) {
            const item = state.cartList.find(item => item.id === action.payload.id)
            item.count++
        },
        decreCount(state, action) {
            const item = state.cartList.find(item => item.id === action.payload.id)
            if (item.count === 0) {
                return
            }
            item.count--
        },
        clearCount(state) {
            state.cartList = []
        }
    }
})

const { setFoodsList, changeActiveIndex, addCart, increCount, decreCount, clearCount } = foodsStore.actions
const fetchFoodsList = () => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:3004/takeaway")
        dispatch(setFoodsList(res.data))
    }
}

export { fetchFoodsList, changeActiveIndex, addCart, increCount, decreCount, clearCount }
const reducer = foodsStore.reducer

export default reducer