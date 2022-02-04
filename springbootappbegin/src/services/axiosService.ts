import { AxiosResponse } from "axios";
import { CarAddModel, CarModel } from "../interfaces/AxiosInterfaces";
import axiosCreate from "./axiosCreate";


class AxiosService 
{
    get = async():Promise<Array<CarModel>> => 
    {
        var res = (await axiosCreate.get<Array<CarModel>>("get")).data;
        return res;
    }

    delete = (id: string|null) => 
    {
        axiosCreate.post("delete", {id: id});
    }

    create = async (car: CarAddModel): Promise<Number> => 
    {
       return (await axiosCreate.post<Number>("create",car)).data;
    }
}

export default new AxiosService();