import Header from "./Header";
import useNowplayingMovies from "../hooks/useNowplaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopular from "../hooks/usePopular";
import useTopRatedMovies from "../hooks/useTopRatedMovies";


const Browse = () => {

   useNowplayingMovies();
   usePopular();
   useTopRatedMovies();

    return(
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>  
        </div>    
    )
};

export default Browse;