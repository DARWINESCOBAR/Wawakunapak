export class GroupCategory
{
    id: number;
    title:string;
    titlek?:string;
    icon?: string;
    colorBt?:string;
    list:Category[];     
    listaux?:Category[];
    est:boolean;
}
export class Category{
    id:number;
    title:string;
    titlek?:string;
    icon?: string;
    sing:string;
    isvocal?:boolean;
    words?:string[];
    wordstitle?:string[];
    compart?:boolean;
    isimg?:boolean;    
    est:boolean;    
}