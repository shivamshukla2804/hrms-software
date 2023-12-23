import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsrRoutingModule } from './dsr-routing.module';
import { DrsComponent } from './drs.component';


@NgModule({
  declarations: [
    DrsComponent
  ],
  imports: [
    CommonModule,
    DsrRoutingModule
  ]
})
export class DsrModule { }
