import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingsRoutingModule } from './trainings-routing.module';
import { TrainingsComponent } from './trainings.component';
import { TrainingDialogComponent } from './training-dialog/training-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { CancelEnrollmentDialogComponent } from './cancel-enrollment-dialog/cancel-enrollment-dialog.component';
import { RequestTrainingDialogComponent } from './request-training-dialog/request-training-dialog.component';
import { CommonDropdownModule } from 'src/app/modules/shared/common-dropdown/common-dropdown.module';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonTextAreaModule } from 'src/app/modules/shared/common-text-area/common-text-area.module';
import { CommonInputModule } from 'src/app/modules/shared/common-input/common-input.module';


@NgModule({
  declarations: [
    TrainingsComponent,
    TrainingDialogComponent,
    CancelEnrollmentDialogComponent,
    RequestTrainingDialogComponent
  ],
  imports: [
    CommonModule,
    TrainingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    ValidationErrorModule,
    CommonDropdownModule,
    MatDialogModule,
    CommonTextAreaModule,
    CommonInputModule
  ]
})
export class TrainingsModule { }
