import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Globals } from '../../app/datos/categories_d';
import {User} from '../../interfaces/user';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  usuario:User;
  estrellas:boolean[];
  labelyears:string='año';
  constructor(public navCtrl: NavController, public navParams: NavParams,private gl:Globals) {
    this.usuario=gl.user_dt;    
    this.labelyears= gl.user_dt.edad>1?'años':'año';
    this.contarEstrellaws(gl.user_dt.puntaje);
    console.log(this.estrellas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  contarEstrellaws(limit){
    this.estrellas=[];
    for(let i=1;i<=5;i++){
      if(i>limit){
        this.estrellas.push(false);
      }else{
        this.estrellas.push(true);
      }      
    }
  }

}
