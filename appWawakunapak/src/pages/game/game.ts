import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration';
import { IonicPage, NavController, NavParams, ToastController,Platform ,Events } from 'ionic-angular';
import {GroupGame, game, option,Category, GroupCategory} from '../../interfaces/index';
import {Globals} from '../../app/datos/categories_d';
import { Storage } from '@ionic/storage';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';
/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  words:any=0;
  limitto:number=10;
  item:GroupGame;
  listcat:GroupCategory[];
  categorias:Category[];  
  isreto:boolean=false;
  filem:MediaObject;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public gl:Globals,private toastCtrl: ToastController,
    private platform: Platform, private media: Media, private file: File,
    private vibration: Vibration,private storage: Storage,  public events: Events) {
    this.item=navParams.data.item;  
    this.listcat=this.gl.categories_dt;    
    this.isreto = navParams.data.origin;
   Promise.all(this.listcat).then(()=>{ 
      this.llenarDatos(this.listcat);      
    }).then(
      ()=>{
       this.categorias= this.mesclarDatos(this.categorias);
      }      
    ).then(()=>{
     // console.log(this.categorias); 
    })
    ;    
  }
  public llenarDatos(categoriasgp){
    this.categorias=[];   
    for (let index = 1; index < categoriasgp.length; index++) {     
     for (let jindex = 0; jindex < categoriasgp[index].list.length; jindex++) {       
       if(categoriasgp[index].list[jindex].est){
          categoriasgp[index].list[jindex].words=this.vaciarCajas(categoriasgp[index].list[jindex].titlek);
          categoriasgp[index].list[jindex].wordstitle=this.separarLetra(categoriasgp[index].list[jindex].titlek);
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

  public  vaciarCajas (palabra) {
    let espacioslen = palabra.length;
    let espacios = new Array;

    for (let i = 0; i < espacioslen; i++) {
      espacios.push('_');      
    }
    return espacios;
    
  }
  public elegirLetra(letra:string,index:number){
    let letcomp=this.categorias[index].titlek.toLocaleUpperCase();
    let letupca=letra.toLocaleUpperCase();
    let letvac=this.categorias[index].words.indexOf("_");      
    if(letcomp.indexOf(letupca)>-1){
      this.categorias[index].words[letvac]=letupca;      
    } 
    letvac=this.categorias[index].words.indexOf("_");      
    if(letvac == -1){      
      if(this.categorias[index].words.join("")==this.categorias[index].titlek.toLocaleUpperCase()){        
        this.presentToast("Bien hecho :)",1000,"exitoMg");
        this.words++;
        this.playsingtitle(this.categorias[index].sing);
       // console.log(this.words,this.isreto );
        if(this.words >= this.limitto && this.isreto){
          this.storage.get("user").then((val)=>{
            if(val.puntaje<=4){
              val.puntaje++;
              this.storage.set("user",val);
              this.events.publish('cambio','reto');
              console.log(val); 
              this.presentToast("Feliciades, tienes una estella más ",3000,"exitoMg");
            }else{
              this.presentToast("Ha alcanzado todas las estrellas",3000,"exitoMg");
            }
           
          })        
        }
      }else{        
        this.presentToast("Intentalo de nuevo :(",1000,"errorMg");
        this.vibration.vibrate(1000);
      }
    }
  }
  public eliminarLetra(index:number,indexj:number){
    this.categorias[index].words[indexj]="_";
  }
  public separarLetra(palabra){
    let arrpalabra= palabra.split("");
    return this.mesclarDatos(arrpalabra);   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
    
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

  playsingtitle(ruta: string){
    this.platform.ready().then(()=>{
      this.file.resolveDirectoryUrl(this.file.applicationDirectory).then((rd)=>{
       this.file.checkDir(rd.nativeURL, 'www/assets/sounds/').then(_ =>
        {}
        ).catch(err => 
          {
            //this.presentToasterr('Directory doesn\'t exist'+JSON.stringify(err))
          });
        if(this.filem != null){
          this.filem.release();
        }
        this.filem= this.media.create(rd.nativeURL+'www/'+ruta);
        this.filem.onSuccess.subscribe(() => {});
     
         this.filem.onError.subscribe(error =>{           
          //this.presentToasterr(JSON.stringify(error)); console.log(error)
          } );
         this.filem.play()
         });
    });    
  } 
  presentToasterr(msg:string) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 10000
    });
    toast.present();
  }


}
