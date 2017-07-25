import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { gridEditPage } from './gridEdit';

@NgModule({
  declarations: [
    gridEditPage,
  ],
  imports: [
    IonicPageModule.forChild(gridEditPage),
  ],
  exports: [
    gridEditPage
  ]
})
export class gridEditPageModule {}
