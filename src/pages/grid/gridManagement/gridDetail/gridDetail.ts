import { Component } from '@angular/core';
import { NavController ,NavParams, ToastController} from 'ionic-angular';
import { BasePage } from '../../../base/base-page';
@Component({
  selector: 'page-gridDetail',
  templateUrl: 'gridDetail.html',
})
export class gridDetailPage extends BasePage{
  grid:any;
  constructor(public navCtrl: NavController,
                public navParams:NavParams,
                public toastCtrl:ToastController) {
    super();
    this.grid=this.navParams.get("gridDetail");
  }
  ionViewDidLoad(){
    console.log("gridDetailPage 加载");
  }
}
