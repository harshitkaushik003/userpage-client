import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    teams: []
}

export const getInitialTeam = createAsyncThunk('team/get', async ()=>{
    const response = await axios.get('http://localhost:8000/team');
    return response.data.data;
})

export const addNewTeam = createAsyncThunk('team/add', async (userData)=>{
    const response = await axios.post('http://localhost:8000/team', userData, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });

    return response.data.data;
})

export const addUserToTeam = createAsyncThunk('team/add-user', async (args)=>{
    const response = await axios.post(`http://localhost:8000/team/${args.id}/add/${args.userId}`);
    getInitialTeam();
    return response.data.message;
})

const teamSlice = createSlice({
    name: 'team',
    initialState: initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getInitialTeam.fulfilled, (state, action)=>{
            state.teams = action.payload;
        }).addCase(addNewTeam.fulfilled, (state, action)=>{
            state.teams.unshift(action.payload);
        }).addCase(addUserToTeam.fulfilled, (state, action)=>{
            state.teams = [...state.teams];
        })
    }
})

export const teamReducer = teamSlice.reducer;
export const actions = teamSlice.actions;
export const teamSelector = (state)=>state.teamReducer;