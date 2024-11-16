import { useContext } from "react";
// import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const { creatUser,setUser,updatePropile }=useContext(AuthContext)
    const navigate=useNavigate()
    const handleSubmit = e =>{
        e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        const email=e.target.email.value;
        const password=e.target.password.value

        // console.log(name,photo,email,password)

        creatUser(email,password)
        .then(result=>{
            // console.log(result.user)
            setUser(result.user)
            updatePropile({displayName:name,photoURL:photo
            })
            .then(()=>{
             navigate("/");

            })
            .catch(err=>{
              console.log(err)
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
          });
    }
    return (
        <div>
            <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-8">
            <form onSubmit={handleSubmit} className="card-body">
                <h2 className="text-2xl font-semibold text-center mb-5">Register your account</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Your Name</span>
                </label>
                <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Photo Url</span>
                </label>
                <input type="text" name="photo" placeholder="Enter your password" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="flex gap-2 items-center">
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input type="checkbox" className="checkbox checkbox-accent" />
                </label>
              </div>
              <div>Accept Term & Conditions</div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-[#403F3F]">Register</button>
              </div>
            </form>
          </div>
            
        </div>
            
        </div>
    );
};

export default Register;