import { Injectable } from '@angular/core'; 
import { Platform,ToastController } from 'ionic-angular';
import {NativeAudio} from '@ionic-native/native-audio';


/*
  Generated class for the SmartSoundProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SmartSoundProvider {

  audioType: string = 'html5';
  sounds: any = [];

  constructor(public nativeAudio: NativeAudio, public platform: Platform,private toastCtrl: ToastController) {
    console.log('Hello SmartSoundProvider Provider');
    if(platform.is('cordova')){
      this.audioType = 'native';
    }
  }
  preload(key, asset) {
    console.log(this.sounds);
    if(this.audioType === 'html5'){

        let audio = {
            key: key,
            asset: asset,
            type: 'html5'
        };

        this.sounds.push(audio);

    } else {
      //this.presentartoast( this.sounds);
       /* this.nativeAudio.preloadSimple(key, asset).then((res) => {     
          this.presentartoast(res)         ;
            console.log(res);
        }, (err) => {
            console.log(err);
            this.presentartoast(err);
        });*/
        this.nativeAudio.preloadComplex(key, asset, 1, 1, 0).then((res) => {     
       //  this.presentartoast(res)         ;
           // console.log(res);
        }, (err) => {
           // console.log(err);
       //    this.presentartoast(err);
        });
        let audio = {
            key: key,
            asset: asset,
            type: 'native'
        };

        this.sounds.push(audio);
    }      

  }

  play(key){
 
    let audio = this.sounds.find((sound) => {
        return sound.key === key;
    });
  
    if (audio != null){
      
      
      console.log(audio.type);
      if(audio.type === 'html5'){
      
        let audioAsset = new Audio(audio.asset);
        audioAsset.play();

      } else {
        this.platform.ready().then(()=>{
          this.nativeAudio.play(audio.key).then((res) => {     
          this.presentartoast(res)         ;
              // console.log(res);
           }, (err) => {
            //   console.log(err,audio.key);
             // this.presentartoast(err+'/'+audio.key);
           });
        });        
      }
    }   

  }
  presentartoast(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'middle',
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

  vaciarSongs(){
      this.sounds.forEach(element => {
        this.nativeAudio.unload(element.key).then((res)=>{
          this.presentartoast(res);
        },(err)=>{
          this.presentartoast(err);
        })
      });
  }
  play2(asset,key){
    this.nativeAudio.preloadComplex(key,asset,1,1,0).then((resp)=>{
      this.nativeAudio.play(key,()=>{
        //  this.presentartoast('song'+asset);
          this.nativeAudio.unload(key);
      });
    },(err)=>{
      //this.presentartoast(err);
    })

  }

}
