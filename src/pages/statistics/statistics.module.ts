import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { statisticsPage } from './statistics';

@NgModule({
  declarations: [
    statisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(statisticsPage),
  ],
  exports: [
    statisticsPage
  ]
})
export class statisticsPageModule {}
