import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {GroupGame,game,GroupCategory,Category,option} from '../../interfaces/index';
import {Globals} from '../../app/datos/categories_d';
import { SmartSoundProvider } from '../../providers/smart-sound/smart-sound';
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
  limitto:number=9;
  issing:boolean=false;
  color:any="greendark";
  games:game[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public gl:Globals,private toastCtrl: ToastController,private vibration: Vibration, private ssp :SmartSoundProvider ) {
    this.item=this.navParams.data.item;
    if(this.item.id==3){
      this.issing=false;
      this.color="naranja";
    }else{
      this.issing=true;
      this.color="greendark";
    }

    this.games=this.llenarDatos(gl.categories_dt,9);

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
    categoriasarr.forEach(ele => {
      if(ele.id==2 && ele.list.length>limitpergroup){
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
        ele.list.forEach(element => {
          if(element.sing !=''){
            this.ssp.preload(element.title,element.sing);
          }
        });
      }
    //  console.log("lista",this.ssp.sounds);
    });
    for (let index = 1; index <indcomp; index++) {       
      games.push({
        id:index,
        listOption:options.filter(option=> option.compartida==index)
      });      
    }    
    games.forEach(game => {
      game.listOption= this.mesclarDatos(game.listOption);
    });
  //  console.log(games);
   return games; 
  }
  private elegiroption(isCorrect:boolean){
    if(isCorrect){
      this.presentToast("Bien hecho :)",1000,"exitoMg");
      this.words++;
    }else{
      this.presentToast("Intentalo de nuevo :(",1000,"errorMg");
      this.vibration.vibrate([2000,1000,2000]);
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

  playsingtitle(keyt:string){
 //   console.log("key",keyt);
    this.ssp.play(keyt);
  }


}
