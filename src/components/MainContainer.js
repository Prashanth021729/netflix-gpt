import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector((store)=> store.movies?.nowplayingMovies)
    if(!movies) return;
    const mainMovie = movies[0];
    const{original_title, overview, id} = mainMovie

    return(
        <div className="pt-0">
            <VideoTitle title={original_title} overview ={overview}/>
            <VideoBackground movieid={id}/>
        </div>
    )
};

export default MainContainer;
