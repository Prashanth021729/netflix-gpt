import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopular = () =>{
    const dispatch = useDispatch();

    const getPopularMovies = async ()=>{
    const data = await fetch (
        'https://api.themoviedb.org/3/movie/popular', 
        API_Options
        );
        const json = await data.json();    
        dispatch(addPopularMovies(json.results))
    };

    useEffect (() => {
        getPopularMovies();
    }, []);

};

export default usePopular;