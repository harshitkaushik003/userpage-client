import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    users: []
}

export const getInitialState = createAsyncThunk('user/get', async ()=>{
    const response = await axios.get("http://localhost:8000/user");
    return response.data.data;
})

export const getSearchResults = createAsyncThunk('user/search', async (arg1)=>{
    const response = await axios.get(`http://localhost:8000/user?search=${arg1}`);
    return response.data.data;
})

export const applyFilters = createAsyncThunk('user/filters', async(args)=>{
    const response = await axios.get(`http://localhost:8000/user?domain=${args.arg1}&gender=${args.arg2}&available=${args.arg3}`);
    return response.data.data;
})

const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getInitialState.fulfilled, (state, action)=>{
            state.users = action.payload; 
        }).addCase(getSearchResults.fulfilled, (state, action)=>{
            state.users = action.payload;
        }).addCase(applyFilters.fulfilled, (state, action)=>{
            state.users = action.payload;
        })
    }
});

export const userReducer = userSlice.reducer;
export const actions = userSlice.actions;
export const userSelector = (state) => state.userReducer;


