import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar";


const DefaultLayout: React.FC = () => 
{
    return (<>
        <Navbar/>
        <Outlet/>
    </>);
}

export default DefaultLayout;