import { Component } from '@angular/core';
import { NavController , LoadingController, ToastController,AlertController } from 'ionic-angular';
import { BasePage } from '../../base/base-page';
import { HttpClient } from '../../../providers/HttpClient';
import { ServiceConfig } from '../../../providers/service.config';
import { gridEditPage } from './gridEdit/gridEdit';

@Component({
  selector: 'page-gridManagement',
  templateUrl: 'gridManagement.html',
})
export class gridManagementPage extends BasePage{
  gridList=[];
  pageNumber:number=1;
  isHasMore:boolean=true;
  constructor(public navCtrl: NavController,
                public HttpClient:HttpClient,
                public alertCtrl:AlertController,
                public toastCtrl:ToastController) {
    super();
    this.getGrid();
  }
  //编辑
  goEdit(item){
    this.navCtrl.push(gridEditPage,{gridDetail:item});
  }
  //删除
  deleteGridInit(item){
      let alert = this.alertCtrl.create({
        title: '提示',
        message: '是否确定删除?',
        buttons: [
          {
            text: '取消',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: '确定',
            handler: () => {
              this.deleteGrid(item.grid_id);
            }
          }
        ]
      });
      alert.present();
  }
  //删除
  deleteGrid(id){
    let self=this;
    this.HttpClient.post(ServiceConfig.DELETE_GRID,{
      "id":id
    }, function(data) {
      if(data.status=="success"){
        self.pageNumber=1;
        self.getGrid();
      }
        self.showToastText(self.toastCtrl,data.info);
    });
  }
  //上拉加载
  doInfinite(infiniteScroll) {
    if (!this.isHasMore) {
      infiniteScroll.complete();
      return
    }
    this.isHasMore=false;
    this.pageNumber++;
    this.getGrid();
    infiniteScroll.complete();
  }
  getGrid(){
    let self=this;
    this.HttpClient.post(ServiceConfig.GET_GRID,{
      "create_staff":659,
      "state":'Y',
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
          self.gridList.push(data.data[i]);
        }
      }else{
        self.showToastText(self.toastCtrl,data.info);
      }
    });
  }
}
