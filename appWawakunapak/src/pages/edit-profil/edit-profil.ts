import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController , Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

 /**
 * Generated class for the EditProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profil',
  templateUrl: 'edit-profil.html',
})
export class EditProfilPage {

  user: any={};
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public storage: Storage, public events: Events) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilPage');
    this.storage.get("user").then((val)=>{
      console.log("hola",val)
      this.user=val;
    })
  }

  close() {
    this.viewCtrl.dismiss();    
  }
  save(){
    this.storage.set("user",this.user);
    this.events.publish('cambio',this.user);
    this.viewCtrl.dismiss();    
  }


}
