import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";





const Newssetails = () => {
const[newsId,setNewsId]=useState([])
const anews=useLoaderData()
 const {id}=useParams()





 


 

 const matchId=anews.find(news => news.id===id)

  console.log(matchId)




    return (
        <div>
            <Navbar></Navbar>




            <p>length:</p>
            
            
           
        </div>
    );
};

export default Newssetails;