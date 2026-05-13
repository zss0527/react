import {createSlice, type PayloadAction} from "@reduxjs/toolkit"
import {STORAGE} from "@/utils/constants.ts";


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem(STORAGE.ACCESS_TOKEN) || '',
        user: localStorage.getItem(STORAGE.USER) || '',
        permissions: [],
        menuData: [],
    },
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload
            localStorage.setItem(STORAGE.ACCESS_TOKEN, action.payload)
        },
        removeToken(state) {
            state.token = ''
            localStorage.removeItem(STORAGE.ACCESS_TOKEN)
        },
        setUser(state, action: PayloadAction<string>) {
            state.user = action.payload
            localStorage.setItem(STORAGE.USER, action.payload)
        },
        removeUser(state) {
            state.user = ''
            localStorage.removeItem(STORAGE.USER)
        },
        setPermissions(state, action: PayloadAction<any>) {
            state.permissions = action.payload
        },
        setMenuData(state, action: PayloadAction<any>) {
            state.menuData = action.payload
        },
    },
})

export const {setToken, removeToken, setUser, removeUser,setPermissions,setMenuData} = authSlice.actions
export default authSlice.reducer