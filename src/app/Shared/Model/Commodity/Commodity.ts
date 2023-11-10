export class Commodity
{
    id!:number;
    name!:string;
    price!:number;
    tags?:string[];
    favorite!:boolean;
    description!:string;
    stars!:number;
    imageURL!:string;
    origins!:string[];
    stock!:number;
}