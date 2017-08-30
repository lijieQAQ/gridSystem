import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ToastController,PopoverController,ModalController} from 'ionic-angular';
import { BasePage } from '../base/base-page';
import { HttpClient } from '../../providers/HttpClient';
import { ServiceConfig } from '../../providers/service.config';
import { gridInfoPopoverPage } from './gridInfoPopover/gridInfoPopover';
import { chooseGridModalPage } from './chooseGridModal/chooseGridModal';
declare var AMap;
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html'
})
export class statisticsPage extends BasePage {
  map:any;
  simpleColumns: any;
  gridList=[];
  area:string;
  multiStatus:boolean=false;
  @ViewChild('container') mapElement:ElementRef;

  constructor(public navCtrl:NavController,
              public HttpClient:HttpClient,
              public popoverCtrl: PopoverController,
              public modalCtrl: ModalController,
              public toastCtrl:ToastController) {
    super();
    this.getAddressList();
  }

  ionViewWillEnter() {
    let self = this;
    this.HttpClient.post(ServiceConfig.GET_GETGRIDWITHMAP, {
      "create_staff":659,
      "state": 'Y',
    }, function (data) {
      console.log(data);
      if (data.status == "success") {
        self.gridList=data.data;
        self.map = new AMap.Map('container', {
          resizeEnable: true,
          zoom: 12,
          center: [data.data[0].mapList[0].lng,data.data[0].mapList[0].lat]
        });
        for(let i=0,length=data.data.length;i<length;i++){
          if(data.data[i].mapList!=null && data.data[i].mapList.length!=1){
          self.drawPolygon(data.data[i].mapList);
          }
        }
      } else {
        self.showToastText(self.toastCtrl, data.info);
      }
    });
  }
  // 获取区域信息
  getAddressList() {
    let self = this;
    let jsonDict = { "jsonFile": 'assets/json/chinese-cities.json'};
    this.HttpClient.getData(jsonDict).subscribe((itemGroup) => {
      self.simpleColumns=itemGroup;
      self.multiStatus=true;
    }, (errMsg) => {
      console.log(errMsg);
    })
  }
  //画网格
  drawPolygon(pointData){
    let self=this;
    let points=[];
    if(pointData!=null){
      for(let i=0,length=pointData.length;i<length;i++){
        let point=[];
        point.push(pointData[i].lng);
        point.push(pointData[i].lat);
        points.push(point);
      }
      //生成行政区划polygon
      var polygon = new AMap.Polygon({
        map: this.map,
        strokeWeight: 1,
        path: points,
        fillOpacity: 0.7,
        fillColor: '#CCF3FF',
        strokeColor: '#CC66CC'
      });
      polygon.on('click', function() {
        //alert("您点击的网格id为"+pointData[0].grid_id);
        self.gridInfoPopover(pointData[0].grid_id);
      });
    }else{
      self.showToastText(self.toastCtrl,"没有数据!!!");
    }
  }
  //getItems选择网格
  chooseGridInit(){
    let chooseGridModal = this.modalCtrl.create(chooseGridModalPage,{"gridList":this.gridList});
    chooseGridModal.onDidDismiss(data => {
      console.log(data);
      if(data!=null&&data!=undefined  ){
        this.map.clearMap();
        this.drawPolygon(data.choose.mapList);
      }
    });
    chooseGridModal.present();
  }
  //点击区域后弹出框弹出信息
  gridInfoPopover(id){
    let popover = this.popoverCtrl.create(gridInfoPopoverPage,{
      gridId:id
    });
    popover.present();
  }
}
