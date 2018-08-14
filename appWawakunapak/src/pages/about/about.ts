import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Globals } from '../../app/datos/categories_d';
import {GroupGame,game} from '../../interfaces/index';
import {GamePage} from '../game/game';
import {Game2Page} from '../game2/game2';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  listGame:GroupGame[];
  constructor(public navCtrl: NavController, private gl: Globals) {
    this.listGame=gl.listGame;
    //console.log(this.listGame);
  }

  gotoGame(i){
    switch(i){
      case 0:
        this.navCtrl.push(GamePage,{item:this.listGame[i]});
        break;
      case 1:
        this.navCtrl.push(Game2Page,{item:this.listGame[i]});
        break;
    }    
  }
}
