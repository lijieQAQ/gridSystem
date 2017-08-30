import {Component,ElementRef,AfterViewInit,OnDestroy,ViewChild} from '@angular/core';
import { NavController ,NavParams, ToastController} from 'ionic-angular';
import { BasePage } from '../../base/base-page';
import { HttpClient } from '../../../providers/HttpClient';
//import { ServiceConfig } from '../../providers/service.config';
import * as Highcharts from 'highcharts' ;//highcharts图表
@Component({
  selector: 'page-indexAnalysis',
  templateUrl: 'indexAnalysis.html',
})
export class indexAnalysisPage extends BasePage{
  @ViewChild('chart') public chartEl: ElementRef;  //highcharts
  private _chart: any; //highcharts
  constructor(public navCtrl: NavController,
                public HttpClient:HttpClient,
                public navParams:NavParams,
                public toastCtrl:ToastController) {
    super();
  }
  ionViewDidLoad(){
    let opts: any = {
      title: {
        text: 'Monthly Average Temperature',
        x: -20
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        name: 'Tokyo',
        data: [
          7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6
        ]
      },
        {
          name: 'Tokyo1',
          data: [5.0, 6.9, 1.5, 14.5, 18.2, 21.5, 25.2,26.5, 11.3, 25.3, 127.9, 10.6  ]
        }
      ]};
    if (this.chartEl && this.chartEl.nativeElement) {
      opts.chart = {
        type: 'line',
        renderTo: this.chartEl.nativeElement
      };
      this._chart = new Highcharts.Chart(opts);
    }
    console.log("gridEditPage 加载");
  }
  ngOnDestroy() {
    this._chart.destroy();
  }
}
