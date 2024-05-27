import { useSelector } from "react-redux";
import MovieLists from "./MovieLists";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    return(
        <div className="bg-black ">
            <div className=" -mt-52 relative z-20 pl-10">
            <MovieLists title={"Now Playing"} movies={movies.nowplayingMovies}/>
            <MovieLists title={"Top Rated"} movies={movies.topRatedMovies}/>
            <MovieLists title={"Popular"} movies={movies.popularMovies}/>
            </div>
        </div>
    )
};

export default SecondaryContainer;