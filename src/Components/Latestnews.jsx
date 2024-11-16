import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Latestnews = () => {
    return (
        <div className="flex items-center gap-2 bg-[#F3F3F3] p-2">
            <p className="bg-[#D72050] px-3 py-1 text-white">Latest</p>
            <Marquee pauseOnHover={true} className="space-x-10 font-semibold">
                <Link to="news">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, dolorum.
                </Link>
                <Link to="news">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, dolorum.
                </Link>
                <Link to="news">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, dolorum.
                </Link>
            </Marquee>


            
        </div>
    );
};

export default Latestnews;