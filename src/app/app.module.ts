import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule, JsonpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HTTP } from '@ionic-native/http';
import { HttpClient } from "../providers/HttpClient";
import { UserStorage } from "../providers/UserStorage";
import { gridTypePipe } from "../pipes/gridTypePipe";
import { dateToStringPipe } from "../pipes/dateToStringPipe";
import { chooseGridPipe } from "../pipes/chooseGridPipe";
import { MetadataTypePipe } from "../pipes/MetadataTypePipe";

import { MultiPickerModule } from 'ion-multi-picker';




import { sysSettingPage } from '../pages/sysSetting/sysSetting';
import { statisticsPage } from '../pages/statistics/statistics';
import { gridInfoPopoverPage } from '../pages/statistics/gridInfoPopover/gridInfoPopover';
import { chooseGridModalPage } from '../pages/statistics/chooseGridModal/chooseGridModal';
import { gridPage } from '../pages/grid/grid';
import { TabsPage } from '../pages/tabs/tabs';
import { minePage } from '../pages/mine/mine';
import { loginPage } from '../pages/login/login';
import { gridManagementPage } from '../pages/grid/gridManagement/gridManagement';
import { noticeDetailPage } from '../pages/grid/noticeDetail/noticeDetail';
import { gridEditPage } from '../pages/grid/gridManagement/gridEdit/gridEdit';
import { gridDetailPage } from '../pages/grid/gridManagement/gridDetail/gridDetail';
import { indexAnalysisPage } from '../pages/mine/indexAnalysis/indexAnalysis';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    sysSettingPage,
    statisticsPage,
    gridInfoPopoverPage,
    chooseGridModalPage,
    gridPage,
    minePage,
    loginPage,
    gridManagementPage,
    noticeDetailPage,
    gridEditPage,
    gridDetailPage,
    indexAnalysisPage,
    dateToStringPipe,
    MetadataTypePipe,
    chooseGridPipe,
    gridTypePipe,
    TabsPage
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    HttpModule,
    MultiPickerModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: 'true',
      backButtonText: '',
      iconMode: 'ios',
      mode: 'ios',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    sysSettingPage,
    statisticsPage,
    gridInfoPopoverPage,
    chooseGridModalPage,
    gridPage,
    minePage,
    loginPage,
    gridManagementPage,
    noticeDetailPage,
    gridEditPage,
    gridDetailPage,
    indexAnalysisPage,
    TabsPage
  ],
  providers: [
    HttpClient,
    UserStorage,
    HTTP,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
