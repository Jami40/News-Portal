import { useLoaderData } from "react-router-dom";
import Header from "../Components/Header/Header";
import RightSide from "../Components/RightSide";
import NewsDetailsCard from "../Components/NewsDetailsCard";


const NewsDetails = () => {
    const data=useLoaderData();
    const news=data.data[0]
    // console.log(news)
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 mt-7 gap-5">
             <section className="col-span-9">
                <h2 className="text-xl font-semibold mb-5">Dragon News</h2>
                <NewsDetailsCard newsDetail={news}></NewsDetailsCard>
             </section>
             <section className="col-span-3">
                <RightSide></RightSide>
             </section>

            </main>
            
        </div>
    );
};

export default NewsDetails;