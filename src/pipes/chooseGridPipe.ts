import {  Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:"chooseGridPipe"
})
export class chooseGridPipe implements PipeTransform{
   transform(value:any,params:string):any{
     let array=[];
     for(let i=0,length=value.length;i<length;i++){
       if(value[i].name.indexOf(params)>-1){
         array.push(value[i]);
       }
     }
      return array;
   }
}
