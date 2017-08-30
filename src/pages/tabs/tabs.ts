import { Component } from '@angular/core';

import { statisticsPage } from '../statistics/statistics';
import { sysSettingPage } from '../sysSetting/sysSetting';
import { gridPage } from '../grid/grid';
import { minePage } from '../mine/mine';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = gridPage;
  tab2Root = statisticsPage;
  tab3Root = minePage;
  tab4Root = sysSettingPage;

  constructor() {

  }
}
