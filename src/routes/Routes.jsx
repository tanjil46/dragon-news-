import {
    createBrowserRouter

  } from "react-router-dom";
import Root from "../Layouts.jsx/Root";
import Home from "../componets/Home";
import Loginform from "../componets/Loginform";
import ResisterForm from "../componets/ResisterForm";
import ErrorHandler from "../componets/ErrorHandler";
import Newssetails from "../componets/Newssetails";
import Privateroute from "../componets/Privateroute";





 
    const router=createBrowserRouter([

     {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorHandler></ErrorHandler>,
        children:[

      {
        path:'/',
        loader:()=>fetch('news.json'),
        element:<Home></Home>
      },
      {
        path:'/news/:id',
        loader:()=>fetch('news.json'),
        element:<Privateroute><Newssetails></Newssetails></Privateroute>
      },
      {
        path:'/login',
        element:<Loginform></Loginform>
      },
      {
        path:'/resis',
        element:<ResisterForm></ResisterForm>
      }




        ]
     }





    ])



    export default router
    
















