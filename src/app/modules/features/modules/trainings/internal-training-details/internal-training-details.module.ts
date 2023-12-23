import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalTrainingDetailsRoutingModule } from './internal-training-details-routing.module';
import { InternalTrainingDetailsComponent } from './internal-training-details.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    InternalTrainingDetailsComponent
  ],
  imports: [
    CommonModule,
    InternalTrainingDetailsRoutingModule,
    MatButtonModule
  ]
})
export class InternalTrainingDetailsModule { }
