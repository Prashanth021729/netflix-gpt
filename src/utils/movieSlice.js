import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowplayingMovies: null,
        trailerVideo: null,
    },
    reducers:{
        addnowplayingMovies:(state, action)=>{
            state.nowplayingMovies = action.payload;
        },
        addTrailerVideo:(state, action) =>{
            state.trailerVideo = action.payload;
        }

    },
});

export const{addnowplayingMovies, addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;