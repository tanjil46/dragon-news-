import { Link } from "react-router-dom";


const Thenews = ({news}) => {

        const{title,thumbnail_url,details,_id}=news

    return (
        <div>
           
           <div className="card w-full border border-black py-3 px-8 my-5  bg-base-100">
           <h2 className="card-title text-center">{title}</h2>
  <figure><img className="w-9/12" src={thumbnail_url} alt="Shoes" /></figure>
  <div className="card-body">
    
     {
      details.length>200 ?
      <p>{details.slice(0,200)}<Link to={`news/${_id}`} className="text-blue-600 font-bold">See More...</Link ></p>
      :
        <p>{details}</p>
     }

   
    
  </div>
</div>














        </div>
    );
};

export default Thenews;