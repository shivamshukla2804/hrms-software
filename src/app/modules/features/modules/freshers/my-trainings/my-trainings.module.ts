import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTrainingsRoutingModule } from './my-trainings-routing.module';
import { MyTrainingsComponent } from './my-trainings.component';
import { TrainingCardModule } from '../../trainings/training-card/training-card.module';


@NgModule({
  declarations: [
    MyTrainingsComponent
  ],
  imports: [
    CommonModule,
    MyTrainingsRoutingModule,
    TrainingCardModule
  ]
})
export class MyTrainingsModule { }
