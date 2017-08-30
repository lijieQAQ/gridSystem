
import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { HTTP } from '@ionic-native/http';
import { Platform , LoadingController} from 'ionic-angular';
import { ServiceConfig } from './service.config';
import { BasePage } from "../pages/base/base-page";

@Injectable()

export class HttpClient extends BasePage {

  constructor(public jsonp: Jsonp,
              public http: Http,
              public platform: Platform,
              public nativeHttp: HTTP,
              public loadingCtrl:LoadingController) {
              super();
  }

  // post 和 get请求

  public post(url: string, paramObj: any, cb?: Function) {
    this.startLoading(this.loadingCtrl);
    if (url.indexOf('http') == -1) {
      url = ServiceConfig.getUrl() + url;
    }
    console.log("请求地址:" + url);
    console.log("参数:"+JSON.stringify(paramObj));
     let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
     return this.http.post(url, this.toBodyString(paramObj), new RequestOptions({headers: headers})).map(res => res.json()).catch(this.handleError).subscribe(data => {
       this.stopLoading();
      cb(data);
    });
   }

   public postNotLoading(url: string, paramObj: any, cb?: Function) {
    if (url.indexOf('http') == -1) {
      url = ServiceConfig.getUrl() + url;
    }
    console.log("请求地址:" + url);
    console.log("参数:"+JSON.stringify(paramObj));
     let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
     return this.http.post(url, this.toBodyString(paramObj), new RequestOptions({headers: headers})).map(res => res.json()).catch(this.handleError).subscribe(data => {
      cb(data);
    });
   }


  public get(url, params?: Object, cb?: Function) {
     this.startLoading(this.loadingCtrl)
    if (url.indexOf('http') == -1) {
      url = ServiceConfig.getUrl() + url;
    }
    console.log("请求地址:" + url);
    console.log("参数:"+JSON.stringify(params));
    var searchParams = new URLSearchParams;
    if (params) {
      for (var key in params) {
        searchParams.append(key, params[key])
      }
    }
    let options = new RequestOptions({ search: searchParams });
    return this.http.get(url, options).map(res => res.json()).catch(this.handleError).subscribe(data => {
      this.stopLoading();
      cb(data);

    });
  }

  public getNotLoading(url, params?: Object, cb?: Function) {
    if (url.indexOf('http') == -1) {
      url = ServiceConfig.getUrl() + url;
    }
    console.log("请求地址:" + url);
    console.log("参数:"+JSON.stringify(params));
    var searchParams = new URLSearchParams;
    if (params) {
      for (var key in params) {
        searchParams.append(key, params[key])
      }
    }
    let options = new RequestOptions({ search: searchParams });
    return this.http.get(url, options).map(res => res.json()).catch(this.handleError).subscribe(data => {
      cb(data);

    });
  }

  // other

  getData<T>(jsonDict: any): Observable<T> {
    if (!jsonDict || (typeof jsonDict != 'object')) {
      return Observable.throw("无效的请求参数: " + jsonDict);
    }
    let newJsonDict = jsonDict;
    let url = "";
    if (jsonDict["jsonFile"] && jsonDict["jsonFile"].length > 0) {
      url = jsonDict["jsonFile"];
      return this.getFromJsonFile(url);
    }

  }

  private getFromJsonFile(url) {
    return this.http.get(url).map(res => {
      return res.json();
    }).catch(this.handleError);
  }

  private toBodyString(obj) {
     let ret = [];
     for (let key in obj) {
       key = encodeURIComponent(key);
       let values = obj[key];
       if (values && values.constructor == Array) {//数组
         let queryValues = [];
         for (let i = 0, len = values.length, value; i < len; i++) {
           value = values[i];
           queryValues.push(this.toQueryPair(key, value));
         }
         ret = ret.concat(queryValues);
       } else { //字符串
         ret.push(this.toQueryPair(key, values));
       }
     }
     return ret.join('&');
   }

   private toQueryPair(key, value) {
     if (typeof value == 'undefined') {
       return key;
     }
     return key + '=' + encodeURIComponent(value === null ? '' : String(value));
   }

  private handleError(error: Response | any) {
    console.error("origin error: " + error);
    let errMsg: string;
    if (error instanceof Response) {
      errMsg = error.toString();
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error("error: " + errMsg);
    this.stopLoading();
    return Observable.throw(errMsg);
  }
}
