import { CarAddModel } from "../interfaces/AxiosInterfaces";
import axiosService from "../services/axiosService";


export const AddCarAction = (data: CarAddModel) : Number => 
{
    axiosService.create(data).then(result => {
        
        return result;
    });
    return -1;
}