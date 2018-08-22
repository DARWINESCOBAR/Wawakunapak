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

  constructor(public nativeAudio: NativeAudio, platform: Platform,private toastCtrl: ToastController) {
    console.log('Hello SmartSoundProvider Provider');
    if(platform.is('cordova')){
      this.audioType = 'native';
    }
  }
  preload(key, asset) {
 
    if(this.audioType === 'html5'){

        let audio = {
            key: key,
            asset: asset,
            type: 'html5'
        };

        this.sounds.push(audio);

    } else {

       /* this.nativeAudio.preloadSimple(key, asset).then((res) => {     
          this.presentartoast(res)         ;
            console.log(res);
        }, (err) => {
            console.log(err);
            this.presentartoast(err);
        });*/
        this.nativeAudio.preloadComplex(key, asset, 1, 1, 0).then((res) => {     
     //     this.presentartoast(res)         ;
            console.log(res);
        }, (err) => {
            console.log(err);
       //     this.presentartoast(err);
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
        // 'messa'+audio.type+'s'+audio.asset+'/'+audio.key
          this.nativeAudio.play(audio.key).then((res) => {     
        //    this.presentartoast(res)         ;
              console.log(res);
          }, (err) => {
              console.log(err,audio.key);
        //      this.presentartoast(err+'/'+audio.key);
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

}
