import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PunchLogRoutingModule } from './punch-log-routing.module';
import { PunchLogComponent } from './punch-log.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';
import { CommonDropdownModule } from 'src/app/modules/shared/common-dropdown/common-dropdown.module';
import { CommonInputModule } from 'src/app/modules/shared/common-input/common-input.module';


@NgModule({
  declarations: [
    PunchLogComponent
  ],
  imports: [
    CommonModule,
    PunchLogRoutingModule,
    CommonInputModule,
    CommonDropdownModule,
    CommonTableModule,
    MatButtonModule
  ]
})
export class PunchLogModule { }
