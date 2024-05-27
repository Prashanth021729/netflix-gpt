import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants"
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";


const useTopRatedMovies = () =>{
    const dispatch = useDispatch();
    const getTopRatedMovies = async () =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated",
        API_Options);
        const json = await data.json()
        dispatch( addTopRatedMovies(json.results))
    };

    useEffect (()=>{
        getTopRatedMovies();

    }, []);

};

export default useTopRatedMovies;