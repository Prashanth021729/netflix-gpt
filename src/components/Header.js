import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Icon, Logo } from "../utils/constants";

const Header = () =>{
    
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    
    const signoutbtn = ()=>{
    
        signOut(auth).then(() => {
        
        }).catch((error) => {
        
        });
        }

    useEffect(() =>{
    
       const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
        const {uid, fname,lname,email }= user;
        dispatch(addUser({uid:uid, email:email, fname:fname,lname:lname}));
        navigate("/browse")
        
        } 
        else {
          dispatch(removeUser());
          navigate("/")
        }
    });
    return () => unsubscribe();
    },[]);
      
    return(
        <div className="absolute w-screen px-10 py-3  z-10 flex justify-between">
            <img className="w-44 " 
            src={Logo}
            alt="logo"
            />
            {user &&(
            <div className="flex " >
                <img
                className=" mt-2 mr-4 w-14 h-14"
                src={Icon} 
                alt="icon" />
                <div>
                <button 
                type="submit" 
                onClick={signoutbtn}
                className="font-bold bg-red-500 text-white p-2 mt-4 rounded"> 
                Logout
                </button>
                </div>
            </div>
            )}
        </div>
        
    )
};

export default Header;