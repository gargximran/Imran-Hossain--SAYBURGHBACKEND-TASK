import { createSlice } from "@reduxjs/toolkit";


const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        user: {}
    },
    reducers: {
        login: (state, {payload}) => {
            state.isAuth = true;
            state.user = payload;
        },
        logout: (state) => {
            state.isAuth = false;
            state.user = {};
        }
    }
})


export default AuthSlice.reducer

export const {login: loginAction, logout: logoutAction}  = AuthSlice.actions

export const authSelector = state => state.auth