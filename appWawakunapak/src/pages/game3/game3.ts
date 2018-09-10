import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration';
import { IonicPage, NavController, NavParams,ToastController,Platform } from 'ionic-angular';
import {GroupGame,game,GroupCategory,Category,option} from '../../interfaces/index';
import {Globals} from '../../app/datos/categories_d';
import { Storage } from '@ionic/storage';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';
/**
 * 
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
  listcat:GroupCategory[]=[];
  categorias:Category[];
  options:any[];
  idselect1:number=-1;
  idselect2:number=-1;
  isreto:boolean=false;
  jindext:number=-1;
  filem:MediaObject;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public gl:Globals,
              private toastCtrl: ToastController,private vibration: Vibration, 
              private platform: Platform, private media: Media, private file: File,
              private storage: Storage ) {
    this.item=this.navParams.data.item;
    this.isreto = navParams.data.origin;
    this.listcat=this.gl.categories_dt.slice();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Game3Page');
    Promise.all(this.listcat).then(()=>{
      this.listcat= this.mesclarDatos(this.listcat); 
    }).then(()=>{
      this.quitarVocabulario();    
    }).then(()=>{   
      this.mostrarBotones();   
    }).then(()=>{      
      console.log(this.listcat);  
    });
   
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

  mostrarBotones(){
    this.categorias=[];
    let cat1:Category;
    let cat2:Category;
    
    this.listcat.forEach(element => {
      element.listaux=[];
      for (let index = 0; index < element.list.length && index < this.option ; index++) {
        cat1 = {
          id: element.list[index].id,
          title: element.list[index].title,
          titlek: element.list[index].titlek,
          icon: element.list[index].icon,
          sing: element.list[index].sing,
          isimg: true,
          compart:false,
          est:true
        };
        element.listaux.push(cat1);        
        cat2 = {
          id: element.list[index].id,
          title: element.list[index].title,
          titlek: element.list[index].titlek,
          icon: element.list[index].icon,
          sing: element.list[index].sing,
          isimg: false,
          compart:false,
          est:true
        };       
        element.listaux.push(cat2);
      }
      element.listaux=this.mesclarDatos(element.listaux);
    });
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

  selecionarObjeto(id:number, index: number, keyt: string, jindex:number){
    if( this.jindext != jindex){
      this.jindext=jindex;
      console.log(id,"id-selec",this.idselect1,this.idselect2, index );
        if( this.idselect1 == -1){
          this.idselect1 = id;        
        }else{
          this.idselect2 = id;
        }
        if(this.idselect2!==-1){
          if(this.idselect1==this.idselect2){
            console.log("Eleccion correcta");            
            this.listcat[index].listaux.forEach(element => {
              if(element.id==id){
                element.compart=true
                this.playsingtitle(element.sing);
              }
            });
            this.idselect1= -1;
            this.idselect2=-1;
            if(this.listcat[index].listaux.filter(aux => aux.compart==false).length <= 0){
              this.words++;
              if(this.words >= this.limitto && this.isreto){
                this.storage.get("user").then((val)=>{
                  if(val.puntaje<=4){
                    val.puntaje++;
                    this.storage.set("user",val);
                    console.log(val); 
                    this.presentToast("Feliciades, tienes una estella más ",3000,"exitoMg");
                  }else{
                    this.presentToast("Ha alcanzado todas las estrellas",3000,"exitoMg");
                  }
                 
                })        
              }
              this.presentToast("Bien hecho :)",1000,"exitoMg");
            }
            //console.log(this.listcat[index]);
          }else{
            console.log("Eleccion incorrecta");
            this.idselect1= -1;
            this.idselect2=-1;
            this.vibration.vibrate(1000);
          }
        }
    }
    
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
        //this.presentToast(rd.nativeURL+'www/'+ruta);
       this.file.checkDir(rd.nativeURL, 'www/assets/sounds/').then(_ =>
        {}
        ).catch(err =>{ 
          //this.presentToasterr('Directory doesn\'t exist'+JSON.stringify(err))
      });
        if(this.filem != null){
          this.filem.release();
        }
        this.filem= this.media.create(rd.nativeURL+'www/'+ruta);
        this.filem.onSuccess.subscribe(() => {});
     
         this.filem.onError.subscribe(error =>{
           
          // this.presentToasterr(JSON.stringify(error)); console.log(error)
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
