import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {GroupCategory,Category} from '../../interfaces/index';

/*
  Generated class for the CetegoriasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CetegoriasProvider {
  categories_dt: GroupCategory []= [
    {
    id:1,
    title:'Vocabulario',
    colorBt:'#662D91',
    icon:'../../assets/imgs/home/vocabulario.png',        
    list: [
        {
            id:1,
            title:'A',
            icon:'../../assets/imgs/categorias/a.png',
            sing:'',
            isvocal:true,
            est:true
        },
        {
            id:2,
            title:'I',
            icon:'../../assets/imgs/categorias/i.png',
            sing:'',
            isvocal:true,
            est:true
        },
        {
            id:3,
            title:'U',
            icon:'../../assets/imgs/categorias/u.png',
            sing:'',
            isvocal:true,
            est:true
        },
        {
            id:4,
            title:'CH',
            icon:'../../assets/imgs/categorias/ch.png',
            sing:'',
            isvocal:false,
            est:true
        },
        {
            id:5,
            title:'H',
            icon:'../../assets/imgs/categorias/h.png',
            sing:'',
            isvocal:false,
            est:true
        },
        {
            id:6,
            title:'K',
            icon:'../../assets/imgs/categorias/k.png',
            sing:'',
            isvocal:false,
            est:true
        },
        {
            id:7,
            title:'L',
            icon:'../../assets/imgs/categorias/l.png',
            sing:'',
            isvocal:false,
            est:true
        },
        {
            id:8,
            title:'LL',
            icon:'../../assets/imgs/categorias/ll.png',
            sing:'',
            isvocal:false,
            est:false
        },
        {
            id:9,
            title:'M',
            icon:'../../assets/imgs/categorias/m.png',
            sing:'',
            isvocal:false,
            est:true
        },
        {
            id:10,
            title:'N',
            icon:'../../assets/imgs/categorias/n.png',
            sing:'',
            isvocal:false,
            est:true
        },
        {
            id:11,
            title:'Ñ',
            icon:'../../assets/imgs/categorias/nie.png',
            sing:'',
            isvocal:false,
            est:false
        },
        {
            id:12,
            title:'P',
            icon:'../../assets/imgs/categorias/p.png',
            sing:'',
            isvocal:false,
            est:true
        },
        {
            id:13,
            title:'R',
            icon:'../../assets/imgs/categorias/r.png',
            sing:'',
            isvocal:false,
            est:true
        },
        {
            id:14,
            title:'T',
            icon:'../../assets/imgs/categorias/t.png',
            sing:'',
            isvocal:false,
            est:true
        },
        {
            id:15,
            title:'TS',
            icon:'../../assets/imgs/categorias/ts.png',
            sing:'',
            isvocal:false,
            est:true
        },
        {
            id:16,
            title:'S',
            icon:'../../assets/imgs/categorias/s.png',
            sing:'',
            isvocal:false,
            est:true
        },
        {
            id:17,
            title:'SH',
            icon:'../../assets/imgs/categorias/sh.png',
            sing:'',
            isvocal:false,
            est:true
        },
        {
            id:18,
            title:'W',
            icon:'../../assets/imgs/categorias/w.png',
            sing:'',
            isvocal:false,
            est:true
        },
        {
            id:19,
            title:'Y',
            icon:'../../assets/imgs/categorias/y.png',
            sing:'',
            isvocal:false,
            est:true
        },
        {
            id:20,
            title:'z',
            icon:'../../assets/imgs/categorias/z.png',
            sing:'',
            isvocal:false,
            est:true
        }
    ],
    est:true        
    },
    {
        id:2,
        title:'Numeros',
        titlek:'Yupaykuna',
        colorBt:'#006837',
        icon:'../../assets/imgs/home/numeros.png',
        list: [
            {
                id:1,
                title:'uno',
                titlek:'Shunk',
                icon:'../../assets/imgs/categorias/1.png',
                sing:'',
                est:true
            },
            {
                id:2,
                title:'dos',
                titlek:'Iskay',
                icon:'../../assets/imgs/categorias/2.png',
                sing:'',
                est:true
            },
            {
                id:3,
                title:'tres',
                titlek:'Kimsa',
                icon:'../../assets/imgs/categorias/3.png',
                sing:'',
                est:true
            },   
            {
                id:4,
                title:'cuatro',
                titlek:'Chusku',
                icon:'../../assets/imgs/categorias/4.png',
                sing:'',
                est:true
            },
            {
                id:5,
                title:'cinco',
                titlek:'Pichka',
                icon:'../../assets/imgs/categorias/5.png',
                sing:'',
                est:true
            },
            {
                id:6,
                title:'seis',
                titlek:'Sukta',
                icon:'../../assets/imgs/categorias/6.png',
                sing:'',
                est:true
            },
            {
                id:7,
                title:'siete',
                titlek:'Kanchis',
                icon:'../../assets/imgs/categorias/7.png',
                sing:'',
                est:true
            },
            {
                id:8,
                title:'ocho',
                titlek:'Pusak',
                icon:'../../assets/imgs/categorias/8.png',
                sing:'',
                est:true
            },
            {
                id:9,
                title:'nuevo',
                titlek:'Iskun',
                icon:'../../assets/imgs/categorias/9.png',
                sing:'',
                est:true
            },
            {
                id:0,
                title:'cero',
                titlek:'Illa',
                icon:'../../assets/imgs/categorias/0.png',
                sing:'',
                est:true
            }                      
        ],
        est:true        
    },
    {
        id:3,
        title:'Colores',
        titlek:'Tullpukuna',
        icon:'../../assets/imgs/home/colores.png',
        colorBt:'#FFFF00',
        list: [
            {
                id:1,
                title:'amarrillo',
                titlek:'Killu',
                icon:'../../assets/imgs/categorias/amarillo.png',
                sing:'',
                est:true
            },               
            {
                id:2,
                title:'azul',
                titlek:'Ankas',
                icon:'../../assets/imgs/categorias/azul.png',
                sing:'',
                est:true
            },                
            {
                id:3,
                title:'cafe',
                titlek:'Paku',
                icon:'../../assets/imgs/categorias/cafe.png',
                sing:'',
                est:true
            },   
            {
                id:4,
                title:'negro',
                titlek:'Yana',
                icon:'../../assets/imgs/categorias/negro.png',
                sing:'',
                est:true
            },  
            {
                id:5,
                title:'rojo',
                titlek:'Puka',
                icon:'../../assets/imgs/categorias/rojo.png',
                sing:'',
                est:true
            },        
            {
                id:6,
                title:'verde',
                titlek:'Waylla',
                icon:'../../assets/imgs/categorias/verde.png',
                sing:'',
                est:true
            }      
        ],
        est:true        
    } ,
    {
        id:4,
        title:'Cuerpo Humano',
        titlek:'Runa aycha',
        icon:'../../assets/imgs/home/cuerpo.png',
        colorBt:'#FF7900',
        list: [
            {
                id:1,
                title:'cabeza',
                titlek:'Uma',
                icon:'../../assets/imgs/categorias/cabeza.png',
                sing:'',
                est:true
            },    
            {
                id:2,
                title:'ojos',
                titlek:'Ñawi',
                icon:'../../assets/imgs/categorias/ojos.png',
                sing:'',
                est:true
            },            
            {
                id:3,
                title:'boca',
                titlek:'Shimi',
                icon:'../../assets/imgs/categorias/boca.png',
                sing:'',
                est:true
            },                
            {
                id:4,
                title:'nariz',
                titlek:'Sinka',
                icon:'../../assets/imgs/categorias/nariz.png',
                sing:'',
                est:true
            },   
            {
                id:5,
                title:'oido',
                titlek:'Rinri',
                icon:'../../assets/imgs/categorias/oido.png',
                sing:'',
                est:true
            },                                
            {
                id:6,
                title:'mano',
                titlek:'Maki',
                icon:'../../assets/imgs/categorias/mano.png',
                sing:'',
                est:true
            },  
            {
                id:7,
                title:'pie',
                titlek:'Chaki',
                icon:'../../assets/imgs/categorias/pie.png',
                sing:'',
                est:true
            },              
        ],
        est:true        
    } ,
    {
        id:5,
        title:'Familia',
        titlek:'Ayllukuna',
        icon:'../../assets/imgs/home/familia.png',
        colorBt:'#ED1C24',
        list: [
            {
                id:1,
                title:'abuelo',
                titlek:'Hatun tayta',
                icon:'../../assets/imgs/categorias/abuelito.png',
                sing:'',
                est:true
            },               
            {
                id:2,
                title:'abuela',
                titlek:'Hatun mama',
                icon:'../../assets/imgs/categorias/abuelita.png',
                sing:'',
                est:true
            },                
            {
                id:3,
                title:'papa',
                titlek:'Tayta',
                icon:'../../assets/imgs/categorias/papa.png',
                sing:'',
                est:true
            },  
            {
                id:4,
                title:'mama',
                titlek:'Mama',
                icon:'../../assets/imgs/categorias/mama.png',
                sing:'',
                est:true
            },              
        ],
        est:true        
    } ,
    {
        id:6,
        title:'Animales',
        titlek:'Wiwakuna',
        icon:'../../assets/imgs/home/animal.png',
        colorBt:'#662D91',
        list: [
            {
                id:1,
                title:'perro',
                titlek:'Allku',
                icon:'../../assets/imgs/categorias/perro.png',
                sing:'',
                est:true
            },               
            {
                id:2,
                title:'pollito',
                titlek:'Kulta',
                icon:'../../assets/imgs/categorias/pollito.png',
                sing:'',
                est:true
            },                
            {
                id:3,
                title:'conejo',
                titlek:'Wallinku',
                icon:'../../assets/imgs/categorias/conejo.png',
                sing:'',
                est:true
            },   
            {
                id:4,
                title:'gallina',
                titlek:'Atallpa',
                icon:'../../assets/imgs/categorias/gallina.png',
                sing:'',
                est:true
            },    
            {
                id:5,
                title:'gato',
                titlek:'Misi',
                icon:'../../assets/imgs/categorias/gato.png',
                sing:'',
                est:true
            },
            {
                id:6,
                title:'hormiga',
                titlek:'Añanku',
                icon:'../../assets/imgs/categorias/hormiga.png',
                sing:'',
                est:true
            },          
        ],
        est:true        
    } ,
    {
        id:7,
        title:'Frutas',
        titlek:'Rurukuna',
        icon:'../../assets/imgs/home/frutas.png',
        colorBt:'#006837',
        list: [
            {
                id:1,
                title:'banana',
                titlek:'Pal anta',
                icon:'../../assets/imgs/categorias/banana.png',
                sing:'',
                est:true
            },               
            {
                id:2,
                title:'naranja',
                titlek:'Chilina',
                icon:'../../assets/imgs/categorias/naranja.png',
                sing:'',
                est:true
            },                
            {
                id:3,
                title:'piña',
                titlek:'Chiwila',
                icon:'../../assets/imgs/categorias/pina.png',
                sing:'',
                est:true
            },   
            {
                id:4,
                title:'uvas',
                titlek:'Paku',
                icon:'../../assets/imgs/categorias/uvas.png',
                sing:'',
                est:true
            },  
            {
                id:5,
                title:'capuli',
                titlek:'Kapulli',
                icon:'../../assets/imgs/categorias/capuli.png',
                sing:'',
                est:true
            }, 
            {
                id:6,
                title:'manzana',
                titlek:'Manzana',
                icon:'../../assets/imgs/categorias/manzana.png',
                sing:'',
                est:true
            }, 
            {
                id:7,
                title:'aguacate',
                titlek:'Palta',
                icon:'../../assets/imgs/categorias/aguacate.png',
                sing:'',
                est:true
            }, 
            {
                id:8,
                title:'Chirimoya',
                titlek:'Ananas',
                icon:'../../assets/imgs/categorias/chirimoya.png',
                sing:'',
                est:true
            }, 
            {
                id:9,
                title:'papaya',
                titlek:'papaya',
                icon:'../../assets/imgs/categorias/papaya.png',
                sing:'',
                est:true
            },           
        ],
        est:true        
    },
    {
        id:8,
        title:'Saludos',
        titlek:'',
        icon:'../../assets/imgs/home/saludos.png',
        colorBt:'#FFFF00',
        list: [
                        
        ],
        est:true        
    }
];
  categorias:Category[];

  constructor(public http: HttpClient) {
    console.log('Hello CetegoriasProvider Provider');
    this.llenarDatos(this.categories_dt);    
  }

  public llenarDatos(categoriasgp){
    this.categorias=[];   
    for (let index = 1; index < categoriasgp.length; index++) {     
     for (let jindex = 0; jindex < categoriasgp[index].list.length; jindex++) {       
        categoriasgp[index].list[jindex].words=this.vaciarCajas(categoriasgp[index].list[jindex].titlek);
       // this.separarLetra(this.categorias[index].titlek);
        this.categorias.push(categoriasgp[index].list[jindex]);          
     }
    }
  }
  public mesclarDatos(){
    let i,j,k;
    for (i = this.categorias.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = this.categorias[i - 1];
      this.categorias[i - 1] = this.categorias[j];
      this.categorias[j] = k;
    }
    return this.categorias.map(resp=>{
      return resp;
    });
  }
  public presentarDatos(limitto){
    let cats: Category[];
    for (let index = 0; index <limitto; index++) {
      cats.push(this.categorias[index]);      
    }
    return cats;
  }

  public  vaciarCajas (palabra) {
    let espacioslen = palabra.length;
    let espacios = new Array;

    for (let i = 0; i < espacioslen; i++) {
      espacios.push('_');      
    }
    return espacios;
    
  }
  public separarLetra(palabra){
    let arrpalabra= palabra.split("");
    console.log(arrpalabra);
  }

}
