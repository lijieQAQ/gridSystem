import { Component } from '@angular/core';
import { NavController,ToastController} from 'ionic-angular';
import { HttpClient } from '../../providers/HttpClient';
import { BasePage } from '../base/base-page';
import { ServiceConfig } from '../../providers/service.config';
import { gridManagementPage } from './gridManagement/gridManagement';
import { noticeDetailPage } from './noticeDetail/noticeDetail';
@Component({
  selector: 'page-grid',
  templateUrl: 'grid.html'
})
export class gridPage extends  BasePage{
  pageNumber:number=1;
  noticeList=[];
  isHasMore:boolean=true;
  constructor(public navCtrl: NavController,
                  public httpClient: HttpClient,
                  public toastCtrl: ToastController) {
    super();
    this.getNoticeList();
  }
  //获取公告信息
  getNoticeList(){
    let self=this;
    this.httpClient.post(ServiceConfig.GET_NOTICELIST,{
      "pageNumber":self.pageNumber,
      "pageSize":ServiceConfig.PAGESIZE
    }, function(data) {
      if(data.status=="success"){
        if(data.data.length<ServiceConfig.PAGESIZE){
          self.isHasMore=false;
        }else{
          self.isHasMore=true;
        }
        for(let i=0,length=data.data.length;i<length;i++){
          self.noticeList.push(data.data[i]);
        }
        console.log(self.noticeList);
      }else{
        self.showToastText(self.toastCtrl,data.info);
      }
    });
  }
  //查看公告详情
  goNoticeDetail(notice){
    this.navCtrl.push(noticeDetailPage,{"notice":notice});
  }
  //上拉加载
  doInfinite(infiniteScroll) {
    if (!this.isHasMore) {
      infiniteScroll.complete();
      return
    }
    this.isHasMore=false;
    this.pageNumber++;
    this.getNoticeList();
    infiniteScroll.complete();
  }
  goLevelTwo(status){
    if(status=="grid"){
      this.navCtrl.push(gridManagementPage);
    }else{
      console.log(status);
    }
  }
}
