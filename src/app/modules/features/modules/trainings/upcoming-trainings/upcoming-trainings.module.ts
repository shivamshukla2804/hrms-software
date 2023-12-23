import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingTrainingsRoutingModule } from './upcoming-trainings-routing.module';
import { UpcomingTrainingsComponent } from './upcoming-trainings.component';
import { TrainingCardModule } from '../training-card/training-card.module';


@NgModule({
  declarations: [
    UpcomingTrainingsComponent
  ],
  imports: [
    CommonModule,
    UpcomingTrainingsRoutingModule,
    TrainingCardModule
  ]
})
export class UpcomingTrainingsModule { }
