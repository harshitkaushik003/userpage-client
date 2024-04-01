import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    users: []
}


const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers:{}
});

export const userReducer = userSlice.reducer;
export const actions = userSlice.actions;
export const userSelector = (state)=>state.reducer;


