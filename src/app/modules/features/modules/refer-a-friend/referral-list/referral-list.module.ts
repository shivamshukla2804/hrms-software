import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralListRoutingModule } from './referral-list-routing.module';
import { ReferralListComponent } from './referral-list.component';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';


@NgModule({
  declarations: [
    ReferralListComponent
  ],
  imports: [
    CommonModule,
    ReferralListRoutingModule,
    CommonTableModule
  ]
})
export class ReferralListModule { }
