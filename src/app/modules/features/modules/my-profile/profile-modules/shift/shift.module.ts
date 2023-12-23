import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShiftRoutingModule } from './shift-routing.module';
import { ShiftComponent } from './shift.component';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';


@NgModule({
  declarations: [
    ShiftComponent
  ],
  imports: [
    CommonModule,
    ShiftRoutingModule,
    CommonTableModule
    
  ]
})
export class ShiftModule { }
