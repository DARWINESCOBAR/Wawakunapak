import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform  } from 'ionic-angular';
import {GroupCategory} from '../../interfaces/categories';
import { AboutPage } from '../about/about';
import { SmartSoundProvider } from '../../providers/smart-sound/smart-sound';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  abcseg:string='vocales';
  isVocabulario:boolean=true;
  item:GroupCategory;  
  constructor(public navCtrl: NavController, public navParams: NavParams, private ssp :SmartSoundProvider, private platform: Platform) {
    this.item=navParams.data.item;
    this.isVocabulario = navParams.data.item.title =='Vocabulario'? false:true;
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
    this.platform.ready().then(()=>{      
      this.item.list.forEach(element => {
        if(element.sing !=''){
          this.ssp.preload(element.title,element.sing);
        }
      });
     // console.log("lista",this.ssp.sounds);
      
    });
  }
  gotoGames(){
    this.navCtrl.push(AboutPage);
  }
  playsingtitle(keyt:string){
   // console.log("key",keyt);
    this.ssp.play(keyt);
  }
}
