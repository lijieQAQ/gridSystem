import {  Pipe, PipeTransform } from '@angular/core';
import {  dateFormat } from '../providers/Utils';

@Pipe({
  name:"dateToStringPipe"
})
export class dateToStringPipe implements PipeTransform{
  transform(value:any):string{
    let time=new Date(value.time);
    return dateFormat(time,"yyyy-MM-dd hh:mm:ss");
  }
}
