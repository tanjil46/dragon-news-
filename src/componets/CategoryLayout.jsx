import { useEffect } from "react";
import { useState } from "react";
import Newsname from "./Newsname";


const CategoryLayout = () => {
const[categoris,setcategoris]=useState([])


 useEffect(()=>{
  
    fetch('categories.json')
    .then(res=>res.json())
    .then(data=>setcategoris(data))

  },[])










    return (
        <div>
              <p className="text-xl font-bold">All Categories</p>
               {
                categoris.map(news=><Newsname key={news.id} newsName={news.name}></Newsname>)
               }
              
        </div>
    );
};

export default CategoryLayout;