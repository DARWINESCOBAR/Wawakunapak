import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { timer } from 'rxjs/observable/timer';
import { MsghomePage} from '../pages/msghome/msghome';
import { Storage } from '@ionic/storage';
import {Globals} from '../app/datos/categories_d';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MsghomePage;
  showSplash = true;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private storage: Storage,public gl:Globals) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      timer(6000).subscribe(() => this.showSplash = false) ;


    });
    
    storage.get('user').then((val) => {
      if ( val == null){
        storage.set('user',this.gl.user_dt);
      }
    });
  }
}
