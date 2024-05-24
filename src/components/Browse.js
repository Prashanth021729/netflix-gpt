import Header from "./Header";
import useNowplayingMovies from "../hooks/useNowplaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {

   useNowplayingMovies();

    return(
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>

        
    )
}

export default Browse;