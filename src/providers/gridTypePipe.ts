import {  Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:"gridTypePipe"
})
export class gridTypePipe implements PipeTransform{
   transform(value:string):string{
     let valueArray:any[]=["普通网格","协同网格","逻辑网格"];
     let keyArray:any[]=["G","A","L"];
     for (let i=0,length=keyArray.length;i<length;i++) {
       if(keyArray[i]==value){
         return valueArray[i];
       }
     }
      return "";
   }
}
