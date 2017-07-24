import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule, JsonpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HTTP } from '@ionic-native/http';
import { HttpClient } from "../providers/HttpClient";
import { Utils } from "../providers/Utils";
import { gridTypePipe } from "../providers/gridTypePipe";

import { sysSettingPage } from '../pages/sysSetting/sysSetting';
import { statisticsPage } from '../pages/statistics/statistics';
import { gridPage } from '../pages/grid/grid';
import { TabsPage } from '../pages/tabs/tabs';
import { gridManagementPage } from '../pages/grid/gridManagement/gridManagement';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    sysSettingPage,
    statisticsPage,
    gridPage,
    gridManagementPage,
    gridTypePipe,
    TabsPage
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    sysSettingPage,
    statisticsPage,
    gridPage,
    gridManagementPage,
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
