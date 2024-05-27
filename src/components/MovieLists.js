import MovieCards from "./MovieCards";

const MovieLists = ({title, movies}) =>{
    if(!movies) return;
    return(
        <div className="py-2 ">
            <h1 className="text-2xl py-3 text-white">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                {movies.map((movie) => (
                <MovieCards key={movie.id} posterPath={movie.poster_path} />
                ))};   
                </div>
            </div>    
        </div>
    )
};

export default MovieLists;