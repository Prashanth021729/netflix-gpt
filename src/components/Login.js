import { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);

    const handlesSignInForm = () =>{
        setSignInForm(!isSignInForm);
    };

    return(
        <div >
            <Header/>
            <div className="absolute">
            <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/af676bd6-ca61-4cb3-ad8a-bd817d320741/US-en-20240513-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="img"/>
            </div>
            <form className="w-3/12 p-10 right-0 my-40 left-0 bg-black mx-auto absolute text-white bg-opacity-80 ">
                
                <h1 
                className="font-bold text-4xl py-4">
                    {isSignInForm ?"Sign In":"Sign Up"}
                </h1>
                {!isSignInForm &&(
                <input
                type="text"
                placeholder="First Name"
                className=" bg-gray-200 p-3 my-4 w-full text-gray-400 rounded"/> )}
                {!isSignInForm&&(
                <input
                type="text"
                placeholder="Last Name"
                className=" bg-gray-200 p-3 my-4 w-full text-gray-400 rounded"/>)}
               
                <input 
                type="text" 
                placeholder="Email or mobile number"
                className=" bg-gray-200 p-3 my-4 w-full text-gray-400 rounded" 
                />
                <input 
                type="password" 
                placeholder="Password" 
                className="bg-gray-200 w-full p-3 my-4 text-gray-400 rounded"
                />
                <button 
                className="bg-red-500 hover:bg-red-700 p-2 my-4 w-full rounded" 
                type="submit">
                    {isSignInForm ?"Sign In":"Sign Up"}
                </button>
    
                <p>{isSignInForm ?"New to Netflix?": "Already a user!"} <Link className="underline underline-offset-1" onClick={handlesSignInForm}>{isSignInForm ?"Sign up now":"Sign In"}</Link></p>
            </form>    
        </div>
    )
}
export default Login;