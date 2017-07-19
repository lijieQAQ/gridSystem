import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { gridPage } from './grid';

@NgModule({
  declarations: [
    gridPage,
  ],
  imports: [
    IonicPageModule.forChild(gridPage),
  ],
  exports: [
    gridPage
  ]
})
export class gridPageModule {}
