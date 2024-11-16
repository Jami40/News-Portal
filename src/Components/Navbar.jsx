import { Link } from "react-router-dom";
import propile from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
    const{LogOut,user}=useContext(AuthContext)
    return (
        <div className="flex justify-between items-center">
            <div className="text-xl font-semibold">{user?.email}</div>
            <div className="flex space-x-5 items-center text-[#706F6F]">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className="flex gap-2 items-center">
                <div>
                    {
                        user && user?.email ? <div>
                            <img className="w-12 rounded-full" src={user.photoURL} alt="" />
                            <p>{user.displayName
                            }</p>
                        </div> : <img src={propile} alt="" />
                    }
                    
                </div>
                <div>
                    {
                        user ? <button onClick={LogOut} className="bg-[#403F3F] px-5 py-2 rounded-none text-white font-medium">LogOut</button>:<Link to="/auth/login" className="bg-[#403F3F] px-5 py-2 rounded-none text-white font-medium">Login</Link>
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;