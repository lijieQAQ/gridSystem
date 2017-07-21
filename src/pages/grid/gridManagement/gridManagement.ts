import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BasePage } from '../../base/base-page';
import { HttpClient } from '../../../providers/HttpClient';
import { ServiceConfig } from '../../../providers/service.config';

@Component({
  selector: 'page-gridManagement',
  templateUrl: 'gridManagement.html'
})
export class gridManagementPage extends BasePage{

  constructor(public navCtrl: NavController,
                public HttpClient:HttpClient) {
    super();
    this.getGrid();
  }
  getGrid(){
    this.HttpClient.post(ServiceConfig.GET_GRID,{
    }, function(data) {
      console.log(data);
    });
  }
}
