import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GroupGame, game, option} from '../../interfaces/index';

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
  itemCorrec:option;
  item:GroupGame;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=navParams.data.item;
    
    console.log(this.item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

}
