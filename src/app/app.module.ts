import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HTTP } from '@ionic-native/http';
import { HttpClient } from "../providers/HttpClient";
import { Utils } from "../providers/Utils";

import { sysSettingPage } from '../pages/sysSetting/sysSetting';
import { statisticsPage } from '../pages/statistics/statistics';
import { gridPage } from '../pages/grid/grid';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    sysSettingPage,
    statisticsPage,
    gridPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    sysSettingPage,
    statisticsPage,
    gridPage,
    TabsPage
  ],
  providers: [
    HttpClient,
    HTTP,
    Utils,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
