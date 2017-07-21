import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { gridManagementPage } from './gridManagement/gridManagement';
@Component({
  selector: 'page-grid',
  templateUrl: 'grid.html'
})
export class gridPage {

  constructor(public navCtrl: NavController) {

  }
  goLevelTwo(status){
    if(status=="grid"){
      this.navCtrl.push(gridManagementPage);
    }else{
      console.log(status);
    }

  }
}
