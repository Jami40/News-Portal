import { useLoaderData } from "react-router-dom";
import SingleNews from "./SingleNews";


const NewSection = () => {
    const { data:news }=useLoaderData();
    // console.log(news)
    return (
        <div>
            <h2 className="text-xl font-semibold">Dragon News Home</h2>
            <div>
                {
                    news.map((news,i)=><SingleNews key={i} singleNews={news}></SingleNews>)
                }
            </div>
            
        </div>
    );
};

export default NewSection;