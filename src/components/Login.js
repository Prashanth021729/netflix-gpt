import { useState, useRef } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkvalidation } from "../utils/validate";
import { auth } from "../utils/firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {

//created state variables update the state

    const [isSignInForm, setSignInForm] = useState(true);
    const [errormessage , seterrormessage] = useState(null);
  
// Intially we set the value to null in use reference
    const email = useRef(null);
    const password = useRef(null);
    const fname = useRef(null);
    const lname = useRef(null);
    
    
// created a buttonclick function that checks validation after the click on submit button
    const buttonclick=()=>{
       if(!isSignInForm){
        const message = checkvalidation(fname.current.value, lname.current.value,email.current.value,password.current.value);
        seterrormessage(message);

       }
       else{
       const message = checkvalidation(email.current.value,password.current.value);
       seterrormessage(message);
       if(message) return;
       }
       

       if(!isSignInForm){
        createUserWithEmailAndPassword(
            auth, 
            email.current.value, 
            password.current.value)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
  })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrormessage(errorCode +"-" +errorMessage)
  });
       } 
       else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
         // Signed in 
        const user = userCredential.user;
        console.log(user)

  })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrormessage(errorCode+"-"+errorMessage)
  });
       }
    }
// This function handles the signIn and SignUp Form
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
            <form onSubmit={(e)=> e.preventDefault()} className="w-3/12 p-10 right-0 my-40 left-0 bg-black mx-auto absolute text-white bg-opacity-80 ">
                
                <h1 
                className="font-bold text-4xl py-4">
                    {isSignInForm ?"Sign In":"Sign Up"}
                </h1>
                {!isSignInForm &&(
                <input
                ref={fname}
                type="text"
                placeholder="First Name"
                className=" bg-gray-600 p-3 my-4 w-full text-white rounded"/> )}
                {!isSignInForm&&(
                <input
                ref={lname}
                type="text"
                placeholder="Last Name"
                className=" bg-gray-600 p-3 my-4 w-full text-white rounded"/>)}
               
                <input 
                ref = {email}
                type="text" 
                placeholder="Email or mobile number"
                className=" bg-gray-600 p-3 my-4 w-full text-white rounded" 
                />
                <input 
                ref={password}
                type="password" 
                placeholder="Password" 
                className="bg-gray-600 w-full p-3 my-4 text-white rounded"
                />
                <p className="text-err text-red-400"> {errormessage}</p>
                <button 
                className="bg-red-500 hover:bg-red-700 p-2 my-4 w-full rounded"
                onClick={buttonclick} 
                type="submit">
                    {isSignInForm ?"Sign In":"Sign Up"}
                </button>
    
                <p>{isSignInForm ?"New to Netflix?": "Already a user!"} <Link className="underline underline-offset-1" onClick={handlesSignInForm}>{isSignInForm ?"Sign up now":"Sign In"}</Link></p>
            </form>    
        </div>
    )
}
export default Login;