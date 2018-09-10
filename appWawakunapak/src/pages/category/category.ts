import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform,ToastController  } from 'ionic-angular';
import {GroupCategory} from '../../interfaces/categories';
import { AboutPage } from '../about/about';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';
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
  filem:MediaObject;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private platform: Platform, private media: Media, private file: File,
    public toastCtrl: ToastController) {
    this.item=navParams.data.item;
    this.isVocabulario = navParams.data.item.title =='Vocabulario'? false:true;

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
  gotoGames(){
    this.navCtrl.push(AboutPage);
  }
  playsingtitle(ruta: string){
    this.platform.ready().then(()=>{
      this.file.resolveDirectoryUrl(this.file.applicationDirectory).then((rd)=>{
        //this.presentToast(rd.nativeURL+'www/'+ruta);
       this.file.checkDir(rd.nativeURL, 'www/assets/sounds/').then(_ =>
        {}
        ).catch(err => this.presentToast('Directory doesn\'t exist'+JSON.stringify(err)));
        if(this.filem != null){
          this.filem.release();
        }
        this.filem= this.media.create(rd.nativeURL+'www/'+ruta);
        this.filem.onSuccess.subscribe(() => {});
     
         this.filem.onError.subscribe(error =>{
           
           this.presentToast(JSON.stringify(error)); console.log(error)} );
         this.filem.play()
         });
    });    
  } 
  presentToast(msg:string) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 10000
    });
    toast.present();
  }
}
