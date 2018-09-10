import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController, Events  } from 'ionic-angular';
import { Globals } from '../../app/datos/categories_d';
import { Storage } from '@ionic/storage';
import { EditProfilPage } from '../edit-profil/edit-profil';
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
  usuario:any={};
  estrellas:boolean[];
  labelyears:string='año';
  constructor(public navCtrl: NavController, public navParams: NavParams,private gl:Globals, public popoverCtrl: PopoverController,private storage: Storage, public events: Events ) {   
    this.events.subscribe('cambio',(ambiente)=>{
      
      console.log("hola, event profi",ambiente);
      this.storage.get('user').then((val)=>{
        console.log(val);
        this.usuario= val;
        this.labelyears= val.edad>1?'años':'año';
        this.contarEstrellaws(val.puntaje);
        })
     
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.storage.get('user').then((val)=>{
      console.log(val);
      this.usuario= val;
      this.labelyears= val.edad>1?'años':'año';
      this.contarEstrellaws(val.puntaje);
      })

     
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

  presentPopover() {
    const popover = this.popoverCtrl.create(EditProfilPage);
    popover.present();
  }


}
