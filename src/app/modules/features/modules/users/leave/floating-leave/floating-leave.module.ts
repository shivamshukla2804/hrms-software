import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingLeaveRoutingModule } from './floating-leave-routing.module';
import { FloatingLeaveComponent } from './floating-leave.component';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';


@NgModule({
  declarations: [
    FloatingLeaveComponent
  ],
  imports: [
    CommonModule,
    FloatingLeaveRoutingModule,
    CommonTableModule
  ]
})
export class FloatingLeaveModule { }
