import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    users: [],
    totalPages: 1
}

export const getInitialState = createAsyncThunk('user/get', async (page)=>{
    const response = await axios.get(`https://userpage-api.onrender.com/user?page=${page}`);
    return response.data;
})

export const getSearchResults = createAsyncThunk('user/search', async (arg1)=>{
    const response = await axios.get(`https://userpage-api.onrender.com/user?search=${arg1}`);
    return response.data.data;
})

export const applyFilters = createAsyncThunk('user/filters', async(args)=>{
    const response = await axios.get(`https://userpage-api.onrender.com/user?domain=${args.arg1}&gender=${args.arg2}&available=${args.arg3}`);
    console.log(response);
    return response.data;
})

export const AddNewData = createAsyncThunk('user/add', async(userData)=>{
    const response = await axios.post("https://userpage-api.onrender.com/user", userData, {
        headers:{
            'Content-Type' : 'application/x-www-form-urlencoded'
        }
    });
    console.log(response.data);
    return response.data.data;
})

const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getInitialState.fulfilled, (state, action)=>{
            state.users = action.payload.data;
            state.totalPages = action.payload.totalPages; 
        }).addCase(getSearchResults.fulfilled, (state, action)=>{
            state.users = action.payload;
        }).addCase(applyFilters.fulfilled, (state, action)=>{
            state.users = action.payload.data;
            state.totalPages = action.payload.page
        }).addCase(AddNewData.fulfilled, (state, action)=>{
            state.users.unshift(action.payload);
        })
    }
});

export const userReducer = userSlice.reducer;
export const actions = userSlice.actions;
export const userSelector = (state) => state.userReducer;


