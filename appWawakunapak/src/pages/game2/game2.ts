import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration';
import { IonicPage, NavController, NavParams,ToastController,
   Platform, Events } from 'ionic-angular';
import {GroupGame,game,GroupCategory,Category,option} from '../../interfaces/index';
import {Globals} from '../../app/datos/categories_d';
import { Storage } from '@ionic/storage';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';
/**
 * Generated class for the Game2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game2',
  templateUrl: 'game2.html',
})
export class Game2Page {
  item:GroupGame;
  words:number=1;
  limitto:number=10;
  issing:boolean=false;
  color:any="greendark";
  games:game[]=[];
  isreto:boolean=false;
  filem:MediaObject;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private platform: Platform, public gl:Globals,private toastCtrl: ToastController,
    private media: Media, private file: File,
    private vibration: Vibration, private storage: Storage,
    public events: Events ) {
    this.item=this.navParams.data.item;
    this.isreto = navParams.data.origin;
    if(this.item.id==3){
      this.issing=false;
      this.color="naranja";
      this.games=this.llenarDatos(gl.categories_dt,3);
      this.limitto=10;
    }else{
      this.issing=true;
      this.color="greendark";
      this.games=this.llenarDatos(gl.categories_dt,3);
      this.limitto=10;
    }

  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Game2Page');
  }
  private llenarDatos(categoriasarr:GroupCategory[],limitpergroup:number){
    let options:option[]=[];
    let games:game[]=[];
    let option:option;
    let catg1:Category;
    let catg2:Category;
    let indcomp:number=1;
    let idoption:number=1;
    if(this.issing){
      categoriasarr.forEach(ele => {
        if(ele.id>1  && ele.list.length>limitpergroup){
          for (let index = 0; index < limitpergroup; index++) {
            catg1= ele.list[Math.floor(Math.random()*ele.list.length)];
            option={
              id:idoption,
              answer:catg1,
              compartida:indcomp,            
              isCorrect:true,
              est:true
            }
            options.push(option);
            idoption++;
            do{
              catg2= ele.list[Math.floor(Math.random()*ele.list.length)];
            }while(catg2.id==catg1.id);
            option={
              id:idoption,
              answer:catg2,
              compartida:indcomp,            
              isCorrect:false,
              est:true
            }
            options.push(option);
            idoption++;
            indcomp++; 
          }          
        }
      });
    }else{
      categoriasarr.forEach(ele => {
        if(ele.id>1 && ele.list.length>limitpergroup){
          for (let index = 0; index < limitpergroup; index++) {
            catg1= ele.list[Math.floor(Math.random()*ele.list.length)];
            option={
              id:idoption,
              answer:catg1,
              compartida:indcomp,            
              isCorrect:true,
              est:true
            }
            options.push(option);
            idoption++;
            do{
              catg2= ele.list[Math.floor(Math.random()*ele.list.length)];
            }while(catg2.id==catg1.id);
            option={
              id:idoption,
              answer:catg2,
              compartida:indcomp,            
              isCorrect:false,
              est:true
            }
            options.push(option);
            idoption++;
            indcomp++; 
          }
        }
      });
    }
    
    for (let index = 1; index <indcomp; index++) {       
      games.push({
        id:index,
        listOption:options.filter(option=> option.compartida==index)
      });      
    }    
    games.forEach(game => {
      game.listOption= this.mesclarDatos(game.listOption);
    });
   return games; 
  }
  private elegiroption(isCorrect:boolean){
    if(isCorrect){
      this.presentToast("Bien hecho :)",1000,"exitoMg");
      this.words++;
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

  presentToast(messa:string,duration:number,classcss:string) {
    let toast = this.toastCtrl.create({
      message: messa,
      duration: duration,
      position: 'bottom',
      cssClass:classcss
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
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

  playsingtitle(ruta:string){
    this.platform.ready().then(()=>{
      this.file.resolveDirectoryUrl(this.file.applicationDirectory).then((rd)=>{
        //this.presentToast(rd.nativeURL+'www/'+ruta);
       this.file.checkDir(rd.nativeURL, 'www/assets/sounds/').then(_ =>
        {}
        ).catch(err =>
          {
          //this.presentToasterr('Directory doesn\'t exist'+JSON.stringify(err))
        } );
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
