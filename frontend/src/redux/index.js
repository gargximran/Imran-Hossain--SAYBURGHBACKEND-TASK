import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'


const RootReducer = combineReducers({
    counter: counterReducer
})


const store = configureStore({
    reducer: RootReducer
})


export default store