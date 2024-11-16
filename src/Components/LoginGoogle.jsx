import { FaGithub, FaGoogle } from "react-icons/fa6";


const LoginGoogle = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold">Login With</h2>
            <div className="*:w-full pt-5">
                <button className="btn mb-2">
                 <FaGoogle></FaGoogle>   
                 Login with Google</button>
                <button className="btn">
                 <FaGithub></FaGithub>   
                 Login with Github</button>
            </div>
            
        </div>
    );
};

export default LoginGoogle;