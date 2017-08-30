import {  Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:"MetadataTypePipe"
})
export class MetadataTypePipe implements PipeTransform{
   transform(value:string,params:any):string{
     var meaning="";
     if(params==null||params==""){
       return;
     }else{
       for(var i=0;i<params.length;i++){
         if(params[i].lemma==value){
           meaning=params[i].meanings;
           break;
         }
       }
     };
     return meaning;
   }
}
