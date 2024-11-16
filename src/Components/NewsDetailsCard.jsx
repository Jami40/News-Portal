import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";


const NewsDetailsCard = ({newsDetail}) => {
    return (
        <div>

            <div className="card bg-base-100 border-2">
              <figure className="px-5 pt-5">
                <img
                  src={newsDetail?.image_url}
                  alt="Shoes"
                  className="rounded-xl" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{newsDetail.title}</h2>
                <p>{newsDetail.details}</p>
                <div className="card-actions">
                  <Link to={`/category/${newsDetail?.category_id}`} className="btn btn-neutral"><FaArrowLeft></FaArrowLeft> All news in this category</Link>
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default NewsDetailsCard;