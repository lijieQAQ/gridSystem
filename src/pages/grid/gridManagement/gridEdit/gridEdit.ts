import { Component } from '@angular/core';
import { NavController ,NavParams, ToastController} from 'ionic-angular';
import { BasePage } from '../../../base/base-page';
import { HttpClient } from '../../../../providers/HttpClient';
import { ServiceConfig } from '../../../../providers/service.config';
@Component({
  selector: 'page-gridEdit',
  templateUrl: 'gridEdit.html',
})
export class gridEditPage extends BasePage{
  grid:any;
  constructor(public navCtrl: NavController,
                public HttpClient:HttpClient,
                public navParams:NavParams,
                public toastCtrl:ToastController) {
    super();
    this.grid=this.navParams.get("grid");
  }
  //修改网格
  editSubmit() {
    let self = this;
    this.HttpClient.post(ServiceConfig.EDITGRID, {
      type: this.grid.type,
      name: this.grid.name,
      grid_id: this.grid.grid_id
    }, function (data) {
      if (data.status == "success") {
        self.showToastText(self.toastCtrl, data.info);
      }
    });
  }
  ionViewDidLoad(){
    console.log("gridEditPage 加载");
  }
}
