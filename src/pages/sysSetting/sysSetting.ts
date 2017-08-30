import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { BasePage } from '../base/base-page';
import { loginPage } from '../login/login';
import { UserStorage,UserInfo} from "../../providers/UserStorage";
@Component({
  selector: 'page-sysSetting',
  templateUrl: 'sysSetting.html'
})
export class sysSettingPage extends BasePage{
  userInfo: UserInfo= new UserInfo();
  constructor(public navCtrl: NavController) {
    super();
    this.userInfo = UserStorage.read();
  }
  signUp(){
    this.navCtrl.push(loginPage);
  }
}
