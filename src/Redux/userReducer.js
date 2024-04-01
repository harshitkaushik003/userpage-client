import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    users: []
}

export const getInitialState = createAsyncThunk('user/get', async ()=>{
    const response = await axios.get("http://localhost:8000/user");
    return response.data.data;
})

const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getInitialState.fulfilled, (state, action)=>{
            state.users = action.payload; 
        })
    }
});

export const userReducer = userSlice.reducer;
export const actions = userSlice.actions;
export const userSelector = (state) => state.userReducer;


