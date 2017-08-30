import { Component} from '@angular/core';
import { NavController,NavParams,ToastController} from 'ionic-angular';
import { BasePage } from '../../base/base-page';
import { HttpClient } from '../../../providers/HttpClient';
import { ServiceConfig } from '../../../providers/service.config';
@Component({
  selector: 'page-gridInfoPopover',
  templateUrl: 'gridInfoPopover.html'
})
export class gridInfoPopoverPage extends BasePage {
  quotaList=[];
  constructor(public navCtrl:NavController,
              public toastCtrl: ToastController,
              public HttpClient: HttpClient,
              private navParams: NavParams) {
    super();
    console.log(this.navParams.get("gridId"));
    this.getQuotaByGridId("123");
  }

  //根据网格id获取指标数据
  getQuotaByGridId(gridID){
    let self=this;
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
  ionViewWillEnter() {
  }
}
