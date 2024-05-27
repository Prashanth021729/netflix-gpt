import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovie = (movieid) =>{
    const dispatch = useDispatch();

    const getMovieVideos = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+ movieid +"/videos?language=en-US", 
        API_Options);
        const json = await data.json();
        const filteredData = json.results.filter((video)=>video.type ==="Trailer");
        const trailer = filteredData.length? filteredData[0]:json.results[0];
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(()=>{
        getMovieVideos();

    },[]);

};

export default useMovie;