export class GroupCategory
{
    id: number;
    title:string;
    titlek?:string;
    icon?: string;
    colorBt?:string;
    list:Category[];     
    est:boolean;
}
export class Category{
    id:number;
    title:string;
    titlek?:string;
    icon?: string;
    sing:string;
    isvocal?:boolean;
    est:boolean;    
}