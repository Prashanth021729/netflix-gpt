import { icon } from "../utils/constants";
const VideoTitle = ({title, overview}) =>{

    return(
        <div className="w-screen aspect-video pt-[22%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black"> 
            <h1 className=" text-2xl md:text-4xl font-bold">{title}</h1>
            <p className="hidden md:inline-block py-6 text-lg w-1/2">{overview}</p>
            <div className="flex">
                <button 
                type="button"
                className="bg-white hover:bg-gray-300 text-black px-4 py-1  rounded ">
                ▶️ Play
                </button>
                <button 
                type="button"
                className="bg-white hidden md:inline-block text-black px-4 py-1 mx-4 bg-opacity-50 md:flex rounded">
                {icon}
                More Info
                </button>
            </div>

        </div>
    )
};

export default VideoTitle;