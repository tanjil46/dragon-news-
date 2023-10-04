import { Link } from "react-router-dom";


const ErrorHandler = () => {
    return (
        <div>
           <p>ERROR</p> 
           <Link to='/'>Home</Link>
       
        </div>
    );
};

export default ErrorHandler;