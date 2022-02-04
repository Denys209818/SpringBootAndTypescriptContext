import React from "react";
import { RoutesData } from "../interfaces/RouterIntefaces";


const Main = React.lazy(() => import("../components/Default/Main"));
const Create = React.lazy(()=> import("../components/Default/Create"));

const DefaultRoutes: Array<RoutesData> = [
    {path:"/", element:Main},
    {path:"/create", element:Create},
];

export default DefaultRoutes;