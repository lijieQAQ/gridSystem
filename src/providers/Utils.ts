import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular'

/**
 * Utils类存放一些公共方法
 * @description
 */
@Injectable()
export class Utils {

    constructor(public loadingCtrl: LoadingController) { }

    //简单的提示弹框
    presentLoadingDefault(content,timeout) {
        let loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: content,
            duration:timeout || 2000
        });
        loading.present();
    }

}