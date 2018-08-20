import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {GroupGame,game,GroupCategory,Category,option} from '../../interfaces/index';
import {Globals} from '../../app/datos/categories_d';
/**
 * Generated class for the Game3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game3',
  templateUrl: 'game3.html',
})
export class Game3Page {
  item:GroupGame;
  words:number=1;
  option:number=6;
  limitto:number=4;
  listcat:GroupCategory[];
  categorias:Category[];
  options:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,  public gl:Globals,private toastCtrl: ToastController,private vibration: Vibration ) {
    this.item=this.navParams.data.item;
    this.listcat= this.mesclarDatos(this.gl.categories_dt) ; 
    
    this.quitarVocabulario();
    console.log(this.listcat);
   /* Promise.all(this.listcat).then(()=>{ 
      this.llenarDatos(this.listcat);      
    }).then(
      ()=>{
       this.categorias= this.mesclarDatos(this.categorias);
      }      
    ).then(()=>{
      console.log(this.categorias); 
    })
    ;  */

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Game3Page');
  }
  public quitarVocabulario(){
    let indexj:number=-1;
    for (let index = 0; index < this.listcat.length; index++) {
      if(this.listcat[index].id==1) {
        indexj=index;
      }  
    }
    if(indexj>-1){
      this.listcat.splice(indexj,1);
    }
  }

  public llenarDatos(categoriasgp){
    this.categorias=[];   
    for (let index = 1; index < categoriasgp.length; index++) {     
     for (let jindex = 0; jindex < categoriasgp[index].list.length; jindex++) {       
       if(categoriasgp[index].list[jindex].est){          
          this.categorias.push(categoriasgp[index].list[jindex]);  
       }                
     }
    }
  }
  public mesclarDatos(arreglo:any[]){
    let i,j,k;
    for (i = arreglo.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = arreglo[i - 1];
      arreglo[i - 1] = arreglo[j];
      arreglo[j] = k;
    }
    return  arreglo;
  }
  public presentarDatos(limitto){
    let cats: Category[];
    for (let index = 0; index <limitto; index++) {
      cats.push(this.categorias[index]);      
    }
    return cats;
  }

  presentToast(messa:string,duration:number,classcss:string) {
    let toast = this.toastCtrl.create({
      message: messa,
      duration: duration,
      position: 'middle',
      cssClass:classcss
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
