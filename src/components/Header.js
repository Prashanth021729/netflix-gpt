import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useSelector } from "react-redux";

const Header = () =>{
const navigate = useNavigate()
const user = useSelector((store) => store.user)
const signoutbtn = ()=>{
    
    signOut(auth).then(() => {
        
        navigate("/");
        
      }).catch((error) => {
        
        
      });
    }
      
    return(
        <div className="absolute w-screen px-10 py-3  z-10 flex justify-between">
            <img className="w-44 " 
            src=" https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
            alt="logo"
            />
            {user &&(
            <div className="flex " >
                <img
                className=" mt-2 mr-2 w-14 h-14"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="icon" />
                <button 
                type="submit" 
                onClick={signoutbtn}
                className="font-bold text-red-600"> 
                SIGN OUT
                </button>
            </div>
            )}
        </div>
        
    )
}

export default Header;