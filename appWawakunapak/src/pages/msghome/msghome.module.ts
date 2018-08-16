import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MsghomePage } from './msghome';

@NgModule({
  declarations: [
    MsghomePage,
  ],
  imports: [
    IonicPageModule.forChild(MsghomePage),
  ],
})
export class MsghomePageModule {}
