import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { gridManagementPage } from './gridManagement';

@NgModule({
  declarations: [
    gridManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(gridManagementPage),
  ],
  exports: [
    gridManagementPage
  ]
})
export class gridManagementPageModule {}
