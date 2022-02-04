import * as Yup from 'yup';

export default Yup.object({
    name: Yup.string().required("Поле обов'язкове для заповнення!"),
    description: Yup.string().required("Поле обов'язкове для заповнення!"),
    price: Yup.number().required("Поле обов'язкове для заповнення!").nullable(false)
});