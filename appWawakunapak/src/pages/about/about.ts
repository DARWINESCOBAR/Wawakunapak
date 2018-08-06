import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Globals } from '../../app/datos/categories_d';
import {GroupGame,game} from '../../interfaces/index';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  listGame:GroupGame[];
  constructor(public navCtrl: NavController, private gl: Globals) {
    this.listGame=gl.listGame;
  }

}
