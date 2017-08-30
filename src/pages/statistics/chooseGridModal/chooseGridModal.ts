import { Component} from '@angular/core';
import { ViewController ,NavParams} from 'ionic-angular';
import { BasePage } from '../../base/base-page';
@Component({
  selector: 'page-chooseGridModal',
  templateUrl: 'chooseGridModal.html'
})
export class chooseGridModalPage extends BasePage {
  searchStr:string="";
  gridList=[];
  constructor(public viewCtrl:ViewController ,
              private navParams: NavParams) {
    super();
    console.log(this.navParams.get("gridList"));
    this.gridList=this.navParams.get("gridList");
  }

  ionViewWillEnter() {
  }
  dismissModal(){
    this.viewCtrl.dismiss();
  }
  chooseGrid(item){
    this.viewCtrl.dismiss({"choose":item});
  }
}
