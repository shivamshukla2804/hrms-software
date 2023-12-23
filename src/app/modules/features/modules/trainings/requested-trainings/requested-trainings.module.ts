import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestedTrainingsRoutingModule } from './requested-trainings-routing.module';
import { RequestedTrainingsComponent } from './requested-trainings.component';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';


@NgModule({
  declarations: [
    RequestedTrainingsComponent
  ],
  imports: [
    CommonModule,
    RequestedTrainingsRoutingModule,
    CommonTableModule
  ]
})
export class RequestedTrainingsModule { }
