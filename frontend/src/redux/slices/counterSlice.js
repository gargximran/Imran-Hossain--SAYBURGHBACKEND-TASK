import { createSlice } from "@reduxjs/toolkit";


const CounterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        inc: state => state ++
    }
})


export default CounterSlice.reducer