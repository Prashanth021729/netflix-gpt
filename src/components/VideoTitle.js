const VideoTitle = ({title, overview}) =>{

    return(
        <div className="pt-40 px-12 absolute text-white"> 
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/2">{overview}</p>
            <div className="">
                <button 
                type="button"
                className="bg-gray-400 text-red-600 px-3 py-1 bg-opacity-50 ">
                ▶️ Play
                </button>
                <button 
                type="button"
                className="bg-gray-400 text-red-600 px-3 py-1 mx-4 bg-opacity-50">
                More Info
                </button>
            </div>

        </div>
    )
};

export default VideoTitle;