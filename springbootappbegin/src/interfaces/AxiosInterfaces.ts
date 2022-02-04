

export interface CarReturnModel 
{
    data: Array<CarModel>
}

export interface CarModel 
{
    id:Number,
    name: String,
    description: String,
    price: Number
}

export interface CarAddModel 
{
    name: String,
    description: String,
    price: String
}