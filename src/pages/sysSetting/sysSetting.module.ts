import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { sysSettingPage } from './sysSetting';

@NgModule({
  declarations: [
    sysSettingPage,
  ],
  imports: [
    IonicPageModule.forChild(sysSettingPage),
  ],
  exports: [
    sysSettingPage
  ]
})
export class sysSettingPageModule {}
