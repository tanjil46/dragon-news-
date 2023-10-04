import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { useRef } from "react";


const Loginform = () => {
 const{singInUser,forgetPass}=useContext(AuthContext)
 const hook=useRef(null)
 const navigate=useNavigate()
 const location=useLocation()
 console.log(location.pathname)

 const loginHanlder=e=>{
  e.preventDefault()
  const form=new FormData(e.currentTarget)
  const email=form.get('email')
  const password=form.get('password')
  
  console.log(email,password)
  singInUser(email,password)
  .then((result)=>{
    console.log(result.user)
   
    navigate(location?.state ? location.state :'/')
    alert('login succesfully')
    return
  })
    .catch(error=>console.log(error.message))

 }


 const forgetPassHandler=()=>{
   const email=hook.current.value

  forgetPass(email)
  .then(()=>{
    alert('email sent')
    return
  })
  .catch(error=>console.log(error))

 }








    return (
        <div>
             <Navbar></Navbar>
           <div className="hero min-h-screen bg-base-200">
           
           
  <div className="hero-content flex-col lg:flex-row-reverse">
      
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-purple-500 to-pink-500">
      <form onSubmit={loginHanlder} className="card-body">
     
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input ref={hook} type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
           <p onClick={forgetPassHandler} className="">New Here!<Link className="text-white text-xl" to='/resis'>Plase Resister</Link> </p>
      </form>
    </div>
    
  </div>
</div>











        </div>
    );
};

export default Loginform;