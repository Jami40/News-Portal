import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Latestnews from "../Components/Latestnews";
import LeftSide from "../Components/LeftSide";
import Navbar from "../Components/Navbar";
import RightSide from "../Components/RightSide";


const HomeLayout = () => {
    return (
        <div>
            <header>
            <Header></Header>
                <section className="w-11/12 mx-auto pt-3">
                    <Latestnews></Latestnews>
                </section>
            </header>   
            
            <nav className="w-11/12 mx-auto py-5">
                <Navbar></Navbar>
            </nav>

           <section className="w-11/12 mx-auto pt-7 grid grid-cols-12 gap-4">
            <aside className="left col-span-3"><LeftSide></LeftSide></aside>
            <main className="col-span-6">
                <Outlet></Outlet>
            </main>
            <aside className="col-span-3"><RightSide></RightSide></aside>

           </section>

            
        </div>
    );
};

export default HomeLayout;