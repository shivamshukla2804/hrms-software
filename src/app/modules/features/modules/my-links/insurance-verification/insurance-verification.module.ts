import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceVerificationRoutingModule } from './insurance-verification-routing.module';
import { InsuranceVerificationComponent } from './insurance-verification.component';


@NgModule({
  declarations: [
    InsuranceVerificationComponent
  ],
  imports: [
    CommonModule,
    InsuranceVerificationRoutingModule
  ]
})
export class InsuranceVerificationModule { }
