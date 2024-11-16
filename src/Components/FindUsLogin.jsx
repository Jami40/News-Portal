import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";


const FindUsLogin = () => {
    return (
        <div className="pt-8">
            <h2 className="text-xl font-semibold">Find Us On</h2>
            <div className="*:w-full">
            <div className="join flex join-vertical mt-3 *:bg-base-200">
              <button className="btn join-item justify-start">
                <FaFacebook></FaFacebook>
                FaceBook</button>
              <button className="btn join-item justify-start">
                <FaInstagram></FaInstagram>
              Instagram</button>
              <button className="btn join-item justify-start">
                <FaTwitter></FaTwitter>
              Twitter</button>
            </div>
            </div>
            
        </div>
    );
};

export default FindUsLogin;