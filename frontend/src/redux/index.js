import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'


const RootReducer = combineReducers({
    auth: authReducer
})


const store = configureStore({
    reducer: RootReducer
})


export default store