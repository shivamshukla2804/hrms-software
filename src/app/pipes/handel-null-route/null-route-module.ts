// import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NullRoutePipe } from "./null-route.pipe";

@NgModule({
    declarations:[NullRoutePipe],
    imports:[
        // CommonModule
    ],
    exports:[NullRoutePipe]
})
export class NullRouteModule{}