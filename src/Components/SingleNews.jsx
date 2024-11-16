

// const SingleNews = ({singleNews}) => {
    // console.log(singleNews)
//     return (
//         <div>
//             <h2>New is {singleNews.title}</h2>
            
//         </div>
//     );
// };

import { AiFillStar } from 'react-icons/ai';
import { FaShareAlt, FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleNews  = ({ singleNews }) => {
    return (
        <div className="mx-auto bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
            {/* Card Header */}
            <div className="flex items-center p-4">
                <div className=''>
                <img
                    className="w-10 h-10 rounded-full"
                    src={singleNews.author.img}
                    alt="Author"
                />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800">{singleNews.author.name}</h4>
                    <p className="text-sm text-gray-500">{singleNews.author.published_date}</p>
                </div>
                <FaShareAlt className="ml-auto text-gray-500 cursor-pointer" />
            </div>

            {/* Card Title */}
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">
                    {singleNews.title}
                </h2>
            </div>

            {/* Thumbnail Image */}
           <div className='p-3 rounded-xl'>
           <img
                className="w-full rounded-2xl  h-full object-cover"
                src={singleNews.thumbnail_url}
                alt="Thumbnail"
            />
           </div>

            {/* Card Content */}
            <div className="p-4">
                <p className="text-sm text-gray-600 mb-4">
                    {singleNews.details.substring(0, 150)}...
                </p>
                <Link to={`/news/${singleNews._id}`} className="text-red-500 font-semibold">Read More</Link>
            </div>

            {/* Card Footer */}
            <div className="p-4 border-t flex items-center justify-between text-gray-600 text-sm">
                <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                    <AiFillStar
                      key={i}
                      className={`text-yellow-500 ${
                        i < Math.round(singleNews.rating.number) ? "" : "opacity-50"
                      }`}
                    />
                  ))}
                    <span>{singleNews.rating.number}</span>
                </div>
                <div className="flex items-center">
                    <FaEye className="mr-1" />
                    <span>{singleNews.total_view}</span>
                </div>
            </div>
        </div>
    );
};




export default SingleNews;