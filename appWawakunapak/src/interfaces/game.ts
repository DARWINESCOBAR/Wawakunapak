import {Category} from './categories';
export class GroupGame{
    id:number;
    title:string;
    titlek?:string;
    img?:string;
    colorBt?:string;
    listOpcion?:game[];
    est:boolean;
}

export class game{
    id:number;
    question?:string;
    sing?:string;
    listOption:option[];
}
export class option {
    id:number;
    answer:Category; 
    palabra?:string[];       
    obs?:string;    
    compartida?:number;
    isCorrect?:boolean;
    est:boolean;
}