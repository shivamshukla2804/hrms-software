import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyInternalTrainingsRoutingModule } from './my-internal-trainings-routing.module';
import { MyInternalTrainingsComponent } from './my-internal-trainings.component';
import { MatButtonModule } from '@angular/material/button';
import { TrainingCardModule } from '../training-card/training-card.module';


@NgModule({
  declarations: [
    MyInternalTrainingsComponent
  ],
  imports: [
    CommonModule,
    MyInternalTrainingsRoutingModule,
    MatButtonModule,
    TrainingCardModule
    
  ]
})
export class MyInternalTrainingsModule { }
