import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import {GroupGame,game} from '../../interfaces/index';
import {GamePage} from '../game/game';
import {Game2Page} from '../game2/game2';
import {Game3Page} from '../game3/game3';
import { Globals } from '../../app/datos/categories_d';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  game:number;
  listGame:GroupGame[];
  iscomplete:boolean=false;
  user:any;
  constructor(public navCtrl: NavController, private gl: Globals,public events: Events, private storage: Storage ) {
    this.listGame=gl.listGame;

    this.events.subscribe('cambio',(ambiente)=>{      
      this.comprobarEstrellas();     
    });

  }
  ionViewDidLoad() {
    this.comprobarEstrellas();
  }
  volver(){
    this.user.puntaje=0;
    this.storage.set("user",this.user);
    this.events.publish('cambio','reto');
    this.comprobarEstrellas();
  }

  gotoGame(){
    let i=Math.floor(Math.random()*3);  
  console.log("hola");
    switch(i){
      case 0:
        this.navCtrl.push(GamePage,{item:this.listGame[i],origin:true});
        break;
      case 1:
        this.navCtrl.push(Game2Page,{item:this.listGame[i],origin:true});
        break;
      case 2:
        this.navCtrl.push(Game2Page,{item:this.listGame[i],origin:true});
        break;
      case 3:
      this.navCtrl.push(Game3Page,{item:this.listGame[i],origin:true});
    }    
  }
  comprobarEstrellas(){
    this.storage.get('user').then((val)=>{
      this.iscomplete= val.puntaje>=5?true:false;
      this.user=val;
    });
  }
}


