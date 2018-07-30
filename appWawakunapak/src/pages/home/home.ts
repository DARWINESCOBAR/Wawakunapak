import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Globals } from '../../app/datos/categories_d';
import {GroupCategory} from '../../interfaces/categories';
import {CategoryPage} from '../category/category';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  categoriesthis:GroupCategory[];

  constructor(public navCtrl: NavController, private gl:Globals) {
    this.categoriesthis = gl.categories_dt;
  }

  openCategory(id){
    this.navCtrl.push(CategoryPage,{item:this.categoriesthis[id]})
  }
}
