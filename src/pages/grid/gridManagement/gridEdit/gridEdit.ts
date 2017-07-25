import { Component } from '@angular/core';
import { NavController ,NavParams, LoadingController, ToastController } from 'ionic-angular';
import { BasePage } from '../../../base/base-page';
import { HttpClient } from '../../../../providers/HttpClient';
import { ServiceConfig } from '../../../../providers/service.config';

@Component({
  selector: 'page-gridEdit',
  templateUrl: 'gridEdit.html',
})
export class gridEditPage extends BasePage{
  constructor(public navCtrl: NavController,
                public HttpClient:HttpClient,
                public navParams:NavParams,
                public toastCtrl:ToastController) {
    super();
  }
  ionViewDidLoad(){
    console.log(this.navParams.get("gridDetail"));
    console.log("gridEditPage 加载");
  }
}
