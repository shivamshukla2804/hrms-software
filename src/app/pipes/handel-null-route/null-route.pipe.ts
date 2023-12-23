import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullRoute'
})
export class NullRoutePipe implements PipeTransform {

  transform(route:string,id?:any): any {
    try{

    }catch(error){

      return '';
    }
  }

}
