import { Form, FormikProvider, useFormik } from "formik";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AddCarAction } from "../../../actions/AddCarAction";
import { CarContext } from "../../../App";
import { CarAddModel, CarModel } from "../../../interfaces/AxiosInterfaces";
import { CarData } from "../../../interfaces/RouterIntefaces";
import axiosService from "../../../services/axiosService";
import TextInput from "../TextInputs/TextInput";
import validation from "./validation";


const Create:React.FC = () => 
{

    const carContext:CarData = useContext(CarContext);
    const navigate = useNavigate();

    var initialValues:CarAddModel = {
            name: "",
            price: "",
            description: ""
    };

    const onSubmitHandler = async(values: CarAddModel) => 
    {
        AddCarAction(values);

        axiosService.get().then(item => {
            carContext.setCars(item);
        });

        navigate("/");
    }

    const formik = useFormik({
       initialValues: initialValues,
       onSubmit: onSubmitHandler,
       validationSchema: validation
    });

    const {errors, touched, handleChange} = formik;

    return (<>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 offset-3">
                    <h2 className="text-center">Додати новий автомобіль</h2>
                    <FormikProvider value={formik}>
                        <Form>
                            <TextInput
                                field="name"
                                label="Назва"
                                changeHandler={handleChange}
                                type="text"
                                error={errors.name}
                                touched={touched.name}
                            />
                            <TextInput
                                field="description"
                                label="Опис"
                                changeHandler={handleChange}
                                type="text"
                                error={errors.description}
                                touched={touched.description}
                            />
                            <TextInput
                                field="price"
                                label="Ціна"
                                changeHandler={handleChange}
                                type="number"
                                error={errors.price}
                                touched={touched.price}
                            />

                            <input type="submit" className="btn btn-success mt-3" value="Додати"/>
                        </Form>
                    </FormikProvider>
                </div>
            </div>
        </div>
   
    </>);
}

export default Create;