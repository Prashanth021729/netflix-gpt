import { useDispatch } from "react-redux";
import { addnowplayingMovies } from "../utils/movieSlice";
import { API_Options } from "../utils/constants";
import { useEffect } from "react";

const useNowplayingMovies = () =>{
    
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
    const data = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing', 
         API_Options
         );
    const json = await data.json();
    dispatch(addnowplayingMovies(json.results));
    };

    useEffect (()=> {
        getNowPlayingMovies();
    }, []);
};

export default useNowplayingMovies;