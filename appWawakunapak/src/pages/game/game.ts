import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GroupGame, game, option,Category, GroupCategory} from '../../interfaces/index';
import {Globals} from '../../app/datos/categories_d';

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
  words:any=1;
  item:GroupGame;
  listcat:GroupCategory[];
  categorias:Category[];  
  constructor(public navCtrl: NavController, public navParams: NavParams, public gl:Globals) {
    this.item=navParams.data.item;  
    this.listcat=this.gl.categories_dt;
    Promise.all(this.listcat).then(()=>{ 
      this.llenarDatos(this.listcat);      
    }).then(
      ()=>{
        this.mesclarDatos();
      }      
    )
    ;      
  }
  public llenarDatos(categoriasgp){
    this.categorias=[];   
    for (let index = 1; index < categoriasgp.length; index++) {     
     for (let jindex = 0; jindex < categoriasgp[index].list.length; jindex++) {       
        categoriasgp[index].list[jindex].words=this.vaciarCajas(categoriasgp[index].list[jindex].titlek);
        this.categorias.push(categoriasgp[index].list[jindex]);          
     }
    }
  }
  public mesclarDatos(){
    let i,j,k;
    for (i = this.categorias.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = this.categorias[i - 1];
      this.categorias[i - 1] = this.categorias[j];
      this.categorias[j] = k;
    }
  }
  public presentarDatos(limitto){
    let cats: Category[];
    for (let index = 0; index <limitto; index++) {
      cats.push(this.categorias[index]);      
    }
    return cats;
  }

  public  vaciarCajas (palabra) {
    let espacioslen = palabra.length;
    let espacios = new Array;

    for (let i = 0; i < espacioslen; i++) {
      espacios.push('_');      
    }
    return espacios;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
    
  }

}
