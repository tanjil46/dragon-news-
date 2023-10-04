import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Authprovider";





const Navbar = () => {
      
   const{user,logOutUser}=useContext(AuthContext)
  


   const singOutHandler=()=>{
    logOutUser()
    .then(()=>{
     alert('Log Out sucessfully')
      })
    .catch(error=>console.log(error))
   
   }

 






    return (
        <div className="flex justify-between my-6">
        <div className="text-center my-3 space-x-3">
          
           <NavLink to='/'>Home</NavLink>
           <NavLink to=''>About</NavLink>
           <NavLink to=''>Career</NavLink>
          </div>


        <div className="flex items-center">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="./assets/user.png" />
        </div>
      </label>


        {
          user ? <button onClick={singOutHandler} className="btn btn-primary" >SING OUT</button>
          : <Link to='/login' className="btn btn-primary">LOGIN</Link>
        }
            

        </div>


            
           
        </div>
       
       

    );
};

export default Navbar;