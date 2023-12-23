import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualPunchRoutingModule } from './manual-punch-routing.module';
import { ManualPunchComponent } from './manual-punch.component';
import { CommonInputModule } from 'src/app/modules/shared/common-input/common-input.module';
import { CommonDropdownModule } from 'src/app/modules/shared/common-dropdown/common-dropdown.module';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
  
    ManualPunchComponent
  ],
  imports: [
    CommonModule,
    ManualPunchRoutingModule,
    CommonInputModule,
    CommonDropdownModule,
    CommonTableModule,
    MatButtonModule
  ]
})
export class ManualPunchModule { }
