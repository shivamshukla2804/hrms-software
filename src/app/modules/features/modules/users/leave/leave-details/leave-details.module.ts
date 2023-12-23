import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveDetailsRoutingModule } from './leave-details-routing.module';
import { LeaveDetailsComponent } from './leave-details.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    LeaveDetailsComponent
  ],
  imports: [
    CommonModule,
    LeaveDetailsRoutingModule,
    MatIconModule
  ]
})
export class LeaveDetailsModule { }
