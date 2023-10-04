import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { useState } from "react";



const ResisterForm = () => {
const[success,setSuccess]=useState('')
const[wrong,setWrong]=useState('')
const navigate=useNavigate()
const[showPass,setShowPass]=useState(null)

const{createUser}=useContext(AuthContext)




const resisterHandler =e=>{
   e.preventDefault()
  const form=new FormData(e.currentTarget)
  const email=form.get('email')
  const password=form.get('password')
  const name=form.get('name')
  const photoUrl=form.get('photo')
  console.log(email,password,name,photoUrl)

  if(password.length<7){
    setWrong('password must be 7 charecters or above')
    return
  }
  else if(!/[A-Z]/.test(password)){
    setWrong('There must be a captital latter')
    return
  }












   createUser(email,password)
   .then((result)=>{
    console.log(result.user)
    setSuccess('Succesfully Resisterd')
    navigate('/')
   })
   .catch(error=>setWrong(error.message))

   }

   const showType=()=>{

   }















 return (
        <div>
            <Navbar></Navbar>

            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-purple-500 to-pink-500">
      <form onSubmit={resisterHandler} className="card-body">
     
        <div className="form-control">

        <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type='text' placeholder="name" name="name"  className="input input-bordered" />

          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="photo url" name="photo"  className="input input-bordered"  />






          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email"  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="flex">
          <input
          
          type={showPass ? 'password' :'text'}    placeholder="password" name="password" className="input input-bordered" required />
          <button onClick={()=>showType(setShowPass(!false))} className="btn">{showPass?'hide':'show'}</button>
         </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Resister</button>
        </div>
           <p className="">Already Resistered!<Link className="text-white text-xl" to='/login'>Login </Link> </p>
      </form>
   
    </div>
    
    {
      wrong && <p>{wrong}</p>
    }
    {
      success && <p>{success}</p>
    }
  </div>
</div>


















        </div>
    );
};

export default ResisterForm;