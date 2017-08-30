import { Component } from '@angular/core';
import { NavController ,NavParams, ToastController} from 'ionic-angular';
import { BasePage } from '../../base/base-page';
import { ServiceConfig } from '../../../providers/service.config';
import { HttpClient } from '../../../providers/HttpClient';
@Component({
  selector: 'page-noticeDetail',
  templateUrl: 'noticeDetail.html',
})
export class noticeDetailPage extends BasePage{
  notice:Object;
  NOTICE_TYPEList:any;
  PROMPTList:any;
  constructor(public navCtrl: NavController,
              public navParams:NavParams,
              public httpClient:HttpClient,
              public toastCtrl:ToastController) {
    super();
    this.notice=this.navParams.get("notice");
    this.getNoticeList();
  }
  //获取字典数据
  getNoticeList(){
    let self=this;
    this.httpClient.post(ServiceConfig.GET_METADATALIST,{
      "content":"NOTICE.NOTICE_TYPE,NOTICE.PROMPT"
    }, function(data) {
      if(data.status=="success"){
        self.NOTICE_TYPEList=data.data[0];
        self.PROMPTList=data.data[1];
        console.log(data);
      }else{
        self.showToastText(self.toastCtrl,data.info);
      }
    });
  }
  ionViewDidLoad(){
    console.log("noticeDetailPage 加载");
  }
}
