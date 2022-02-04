import React, { Dispatch, SetStateAction } from "react";
import { CarModel } from "./AxiosInterfaces";

export interface RoutesData 
{
    path: string,
    element: React.FC
}

export interface CarData 
  {
    cars: Array<CarModel>,
    setCars: React.Dispatch<React.SetStateAction<CarModel[]>>
  }