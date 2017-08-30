/**
 * Created by cyf on 2017/7/24.
 */
import { NavController,ToastController } from 'ionic-angular';
import { Component } from '@angular/core';
import { HttpClient } from '../../providers/HttpClient';
import { ServiceConfig } from '../../providers/service.config';
import { BasePage } from '../base/base-page';
import { UserStorage,UserInfo} from "../../providers/UserStorage";
import { TabsPage } from "../../pages/tabs/tabs";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class loginPage extends BasePage{
  wcode:string;
  password:string;
  remember:boolean=false;
  constructor(public navCtrl: NavController,
                public toastCtrl:ToastController,
                public loginCtrl: HttpClient){
    super();
    this.initLogin();
  }
  initLogin(){
    let userInfo=UserStorage.read();
    this.wcode=userInfo.wcode;
    this.remember=userInfo.remember;
    if(userInfo.remember){
      this.password=userInfo.password;
    }
  }
  login(){
    let self=this;
    this.loginCtrl.post(ServiceConfig.LOGIN,{
      wcode:this.wcode,
      password:this.password
    },function (data) {
      if(data.status=="success"){
        self.showToastText(self.toastCtrl, data.info);
        let userInfo: UserInfo = data.data;
        userInfo.remember = self.remember;
        userInfo.password = self.password;
        UserStorage.write(userInfo);
        self.navCtrl.push(TabsPage);
      }else{
        self.showToastText(self.toastCtrl, data.info);
      }
    })
  }

}
