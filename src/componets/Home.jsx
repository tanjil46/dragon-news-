import { useLoaderData } from "react-router-dom";
import CategoryLayout from "./CategoryLayout";
import Heading from "./Heading";
import LoginSection from "./LoginSection";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Thenews from "./Thenews";



const Home = () => {

const anews=useLoaderData()
console.log(anews)








    return (
        <div>
             <Heading></Heading>
             <Slider></Slider>
             <Navbar></Navbar>
           
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

             <div className="">
                <CategoryLayout></CategoryLayout>
             </div>

              <div className="lg:col-span-2">
                {
                  anews.map(news =><Thenews key={news.id}news={news} ></Thenews>)
                }
              </div>

              <div className="">
                <LoginSection></LoginSection>
              </div>






            </div>








        
        </div>
    );
};

export default Home;