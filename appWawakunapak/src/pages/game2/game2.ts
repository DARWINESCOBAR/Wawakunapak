import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {GroupGame,game} from '../../interfaces/index';
import {Globals} from '../../app/datos/categories_d';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public gl:Globals,private toastCtrl: ToastController,private vibration: Vibration) {
    this.item=this.navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Game2Page');
  }

}
