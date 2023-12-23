import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsrDetailsRoutingModule } from './dsr-details-routing.module';
import { DsrDetailsComponent } from './dsr-details.component';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';


@NgModule({
  declarations: [
    DsrDetailsComponent
  ],
  imports: [
    CommonModule,
    DsrDetailsRoutingModule,
    CommonTableModule
  ]
})
export class DsrDetailsModule { }
