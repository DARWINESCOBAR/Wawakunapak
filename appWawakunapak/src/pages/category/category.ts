import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GroupCategory} from '../../interfaces/categories';
import { AboutPage } from '../about/about';
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=navParams.data.item;
    this.isVocabulario = navParams.data.item.title =='Vocabulario'? false:true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
  gotoGames(){
    this.navCtrl.push(AboutPage);
  }
}
