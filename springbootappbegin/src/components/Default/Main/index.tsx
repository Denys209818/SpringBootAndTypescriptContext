import React, { ReactEventHandler, useContext, useEffect, useState } from "react";
import { CarContext } from "../../../App";
import { CarModel } from "../../../interfaces/AxiosInterfaces";
import { CarData } from "../../../interfaces/RouterIntefaces";
import axiosService from "../../../services/axiosService";
import  AxiosService from "../../../services/axiosService";


const Main: React.FC = () => 
{

    const carData: CarData = useContext(CarContext);

    const onDeleteHandler = (e: React.MouseEvent<HTMLInputElement>) => 
    {
        e.preventDefault();
        var item = e.target as HTMLInputElement;
        var identifier = item.getAttribute("id");
        AxiosService.delete(identifier);
        item.closest("tr")?.remove();

    }
    
    useEffect(() => {
        axiosService.get().then(item => {
            carData.setCars(item);
        });
    }, [carData.setCars]);
    
    return (
        <>
        <div className="container mt-4">
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Ідентифікатор</th>
                        <th scope="col">Назва</th>
                        <th scope="col">Опис</th>
                        <th scope="col">Ціна</th>
                        <th scope="col">Інструменти</th>
                    </tr>
                </thead>
                <tbody>
                    {carData.cars && carData.cars.map((element, index) => {
                        return <tr key={index}>
                            <th scope="row">{element.id}</th>
                            <td>{element.name}</td>
                            <td>{element.description}</td>
                            <td>{element.price}</td>
                            <td><p><i className="fa fa-2x fa-trash text-danger" 
                            id={element.id.toString()} onClick={onDeleteHandler}></i></p></td>
                        </tr>
                    })}
                    
                </tbody>
            </table>
        </div>
        </>
    );
}

export default Main;