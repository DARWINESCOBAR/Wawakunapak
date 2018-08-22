import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GroupGame,game} from '../../interfaces/index';
import {GamePage} from '../game/game';
import {Game2Page} from '../game2/game2';
import {Game3Page} from '../game3/game3';
import { Globals } from '../../app/datos/categories_d';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  game:number;
  listGame:GroupGame[];
  constructor(public navCtrl: NavController, private gl: Globals) {
    this.listGame=gl.listGame;
    

  }
  ionViewDidLoad() {
   
   // this.gotoGame(this.game);
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
}


