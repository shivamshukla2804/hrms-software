import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OngoiningTrainingsRoutingModule } from './ongoining-trainings-routing.module';
import { OngoiningTrainingsComponent } from './ongoining-trainings.component';


@NgModule({
  declarations: [
    OngoiningTrainingsComponent
  ],
  imports: [
    CommonModule,
    OngoiningTrainingsRoutingModule
  ]
})
export class OngoiningTrainingsModule { }
