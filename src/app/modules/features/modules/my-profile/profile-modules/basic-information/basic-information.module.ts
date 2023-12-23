import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicInformationRoutingModule } from './basic-information-routing.module';
import { BasicInformationComponent } from './basic-information.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonDropdownModule } from 'src/app/modules/shared/common-dropdown/common-dropdown.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { DigitOnlyModule } from 'src/app/directives/digit-only/digit-only.module';
import { AvoidFirstSpaceModule } from 'src/app/directives/avoid-first-space/avoid-first-space.module';
import { CommonInputModule } from 'src/app/modules/shared/common-input/common-input.module';
import { CommonTextAreaModule } from 'src/app/modules/shared/common-text-area/common-text-area.module';

@NgModule({
  declarations: [
    BasicInformationComponent
  ],
  imports: [
    CommonModule,
    BasicInformationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    CommonDropdownModule,
    FormsModule,ReactiveFormsModule,
    ValidationErrorModule,
    DigitOnlyModule,
    AvoidFirstSpaceModule,
    CommonInputModule,
    CommonTextAreaModule
  ]
})
export class BasicInformationModule { }
