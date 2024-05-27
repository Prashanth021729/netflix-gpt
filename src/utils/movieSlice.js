import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowplayingMovies: null,
        popularMovies:null,
        topRatedMovies: null,
        trailerVideo: null,
    },
    reducers:{
        addnowplayingMovies:(state, action)=>{
            state.nowplayingMovies = action.payload;
        },
        addTrailerVideo:(state, action) =>{
            state.trailerVideo = action.payload;
        },
        addPopularMovies:(state, action) =>{
            state.popularMovies= action.payload
        },
        addTopRatedMovies:(state, action) =>{
            state.topRatedMovies= action.payload
        }

    },
});

export const{addnowplayingMovies, addTrailerVideo , addPopularMovies, addTopRatedMovies} = movieSlice.actions;
export default movieSlice.reducer;