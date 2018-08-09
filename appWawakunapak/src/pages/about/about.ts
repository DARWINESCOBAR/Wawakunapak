import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Globals } from '../../app/datos/categories_d';
import {GroupGame,game} from '../../interfaces/index';
import {GamePage} from '../game/game';
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
    this.navCtrl.push(GamePage,{item:this.listGame[i]});
  }
}
