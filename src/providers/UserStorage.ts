import { Injectable } from '@angular/core';

@Injectable()
export class UserStorage {

    // 存取
    private static USERINFO_KEY: string = "staff"

    public static write(value) {
        if (value) {
            value = JSON.stringify(value);
        } else {
            value = new UserInfo();
        }
        console.log(value);
        localStorage.setItem(UserStorage.USERINFO_KEY, value);
    }

    public static read() {
        let value = localStorage.getItem(UserStorage.USERINFO_KEY);
        let userInfo = new UserInfo();
        if (value && value != "undefined" && value != "null") {
            userInfo = <UserInfo>JSON.parse(value);
        }
        return userInfo;
    }
}

// 本地存储用户信息
export class UserInfo {
  remember: boolean;
  staffId: string;
  depId: string;
  wcode: string;
  name: string;
  password: string;
  isManager: string;
  createDate: string;
  sex: string;
  birthday: string;
  conTel: string;
  conMobile: string;
  conAddr: string;
  email: string;
  weixin: string;
  qq: string;
  certType: string;
  certCode: string;
  fancy: string;
  state: string;
  stateDate: string;
  remark: string;
  skin: string;
  alias: string;
  position: string;
  smsFlag: string;
  messageFlag: string;
  warnTime: string;
  loginMode: string;
  ring: string;
  arrange: string;
  standby1: string;
  standby2: string;
  standby3: string;
  tenantId: string;
  lastLogTime: string;
  heartbitTime: string;
  isOnline: string;
}

