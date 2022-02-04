import classNames from "classnames";
import { FormikErrors, FormikTouched, useField } from "formik";
import { CarAddModel } from "../../../interfaces/AxiosInterfaces";


export interface TextInputData 
{
    label: string,
    field: string,
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    type?: "text" | string,
    error?: FormikErrors<String> | undefined,
    touched?: FormikTouched<String> | undefined
}


const TextInput: React.FC<TextInputData> =({label, changeHandler, field, type="text", error, touched}) => 
{
    return (<div className="form-group">
        <label htmlFor={field} className="form-label">{label}</label>
        <input id={field} name={field} className={classNames("form-control", {"is-valid": touched && !error },
            {"is-invalid": touched && error})} type={type} onChange={changeHandler} />

        {touched && error && 
        <div className="invalid-feedback">
            {error}
        </div>}
    </div>)
}

export default TextInput;