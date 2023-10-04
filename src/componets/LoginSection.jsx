import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "./firebase.config";

const LoginSection = () => {

   
const googleProvider=new GoogleAuthProvider()


 const GoogleHandler=()=>{
 
        signInWithPopup(auth,googleProvider)
        .then((result)=>{
            console.log(result.user)
        })
 .catch(error=>console.log(error))


 }


















    return (
        <div>
            
            <div className="">


                  
             <div className="">
                <h1 className="text-xl font-bold text-center">Login with</h1>

                 <div className="grid space-y-3">
             <button onClick={GoogleHandler} className="btn btn-">Google</button>
             <button className="btn btn-warning">Github</button>
             </div>
             </div>














            </div>





            
        </div>
    );
};

export default LoginSection;