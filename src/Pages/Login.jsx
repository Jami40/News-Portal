import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {
    const {login,setUser}=useContext(AuthContext)
    const [error,setError]=useState({})
    const navigate=useNavigate()
    const location=useLocation();
    // console.log(location)
    const handleLoginSubmit = e =>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        login(email,password)
        .then(result=>{
            // console.log(result.user);
            setUser(result.user)
            navigate(location?.state ? location.state:"/")
        })
        .catch(err=>{
            // alert(error.message)
            setError({...error,login:err.code})
        })
    }
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-8">
            <form onSubmit={handleLoginSubmit} className="card-body">
                <h2 className="text-2xl font-semibold text-center mb-5-">Login your account</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                {
                  error.login &&
                  <label className="label text-xs text-rose-500 font-semibold">
                  {error.login}
                </label>
                }
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-[#403F3F]">Login</button>
              </div>
            </form>
            <p className="text-center text-[#706F6F] -mt-6 mb-8">Don't Have An Account?<Link className="text-[#FF8C47]" to="/auth/register">Register</Link></p>
          </div>
            
        </div>
    );
};

export default Login;
Login