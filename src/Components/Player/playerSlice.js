import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const init = {
    isPlay: false,
    source:''
}

const playerSlice = createSlice({
    name: 'player',
    initialState: init,
    reducers: {
        doPlay: (state, action) => {   
            state.isPlay = action.payload;
        },
        laysources: (state, action) => {   
            state.source = action.payload;
            console.log(action)
        },
    },
    extraReducers: {
        
    }
});

export const playerSelector = (state) => state.player.isPlay;
export const source = (state) => state.player.source;

export const playerListenerSelector = (state) => state.player.playerListener;

export const {doPlay, doPlayerListener,laysources} = playerSlice.actions;

export default playerSlice.reducer;