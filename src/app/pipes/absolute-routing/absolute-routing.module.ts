import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsoluteRoutingPipe } from './absolute-routing.pipe';



@NgModule({
  declarations: [AbsoluteRoutingPipe],
  imports: [
    CommonModule
  ],
  exports:[AbsoluteRoutingPipe]
})
export class AbsoluteRoutingModule { }
