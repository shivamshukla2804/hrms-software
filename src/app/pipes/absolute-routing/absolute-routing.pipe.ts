import { Pipe, PipeTransform } from "@angular/core";
import * as routes from "../../constants/routes";
@Pipe({
  name: "absolutePath",
})
export class AbsoluteRoutingPipe implements PipeTransform {
  transform(route: string, id?: any): any {

    try {
      if (id) {
        // console.log(id,'ssssss');
        
        //@ts-ignore: unreachable code error
        return routes[route].fullUrl + "/" + id;
      }
      if(route){
        //@ts-ignore: unreachable code error
        return routes[route].fullUrl;
      }else{
        return [];
      }
    } catch (error) {
      return "";
    }
  }
}
