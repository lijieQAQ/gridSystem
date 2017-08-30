import { Component } from '@angular/core';
import { NavController,ToastController} from 'ionic-angular';
import { BasePage } from '../base/base-page';
import { HttpClient } from '../../providers/HttpClient';
import { ServiceConfig } from '../../providers/service.config';
import { indexAnalysisPage } from './indexAnalysis/indexAnalysis';
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html'
})
export class minePage extends BasePage{
  quotaList=[];
  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public HttpClient: HttpClient) {
    super();
    this.getQuota();
  }
  //获取我的指标数据
  getQuota(){
    let self = this;
    this.HttpClient.post(ServiceConfig.GET_QUOTA, {
      "target_type":"G",
      "target_id":"1",
      "batch_id":"201603"
    }, function (data) {
      console.log(data);
      if(data.status=="success"){
        self.quotaList=data.data
        console.log(self.quotaList);
      }else{
        self.showToastText(self.toastCtrl, data.info);
      }
    });
  }
  //图表分析
  analysis(){
    this.navCtrl.push(indexAnalysisPage);
  }
  ionViewWillEnter() {
  }
}
