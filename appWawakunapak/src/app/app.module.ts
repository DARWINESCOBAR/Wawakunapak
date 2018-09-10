import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CategoryPage } from '../pages/category/category';
import { ProfilePage } from '../pages/profile/profile';
import {GamePage} from '../pages/game/game';
import {MsghomePage} from '../pages/msghome/msghome';
import {Game2Page} from '../pages/game2/game2';
import {Game3Page} from '../pages/game3/game3';
import {EditProfilPage} from '../pages/edit-profil/edit-profil';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Vibration } from '@ionic-native/vibration';
import {NativeAudio} from '@ionic-native/native-audio';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';
//Datos
import {Globals} from '../app/datos/categories_d';
import { CetegoriasProvider } from '../providers/cetegorias/cetegorias';
import { SmartSoundProvider } from '../providers/smart-sound/smart-sound';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CategoryPage,
    ProfilePage,
    GamePage,
    Game2Page,
    Game3Page,
    MsghomePage,
    EditProfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
      backButtonIcon: 'ios-arrow-back',
      iconMode:'ios'

    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CategoryPage,
    ProfilePage,
    GamePage,
    Game2Page,
    Game3Page,
    MsghomePage,
    EditProfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Globals,
    CetegoriasProvider,
    Vibration,
    NativeAudio,
    File,
    Media,
    SmartSoundProvider
  ]
})
export class AppModule {}
