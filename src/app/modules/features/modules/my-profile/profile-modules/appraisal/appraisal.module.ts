import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppraisalRoutingModule } from './appraisal-routing.module';
import { AppraisalComponent } from './appraisal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppraisalComponent
  ],
  imports: [
    CommonModule,
    AppraisalRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class AppraisalModule { }
