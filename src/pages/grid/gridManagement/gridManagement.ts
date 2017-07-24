import { Component } from '@angular/core';
import { NavController , LoadingController, ToastController } from 'ionic-angular';
import { BasePage } from '../../base/base-page';
import { HttpClient } from '../../../providers/HttpClient';
import { ServiceConfig } from '../../../providers/service.config';

@Component({
  selector: 'page-gridManagement',
  templateUrl: 'gridManagement.html',
})
export class gridManagementPage extends BasePage{
  gridList:any;
  constructor(public navCtrl: NavController,
                public HttpClient:HttpClient,
                public toastCtrl:ToastController) {
    super();
    this.getGrid();
  }
  getGrid(){
    let self=this;
    this.HttpClient.post(ServiceConfig.GET_GRID,{
      "create_staff":659,
      "state":'Y',
      "pageNumber":1,
      "pageSize":10
    }, function(data) {
      if(data.status=="success"){
        self.gridList=data.data;
      }else{
        self.showToastText(self.toastCtrl,data.info);
      }
    });
  }
}
