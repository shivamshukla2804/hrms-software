import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTextAreaComponent } from './common-text-area.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';



@NgModule({
  declarations: [
    CommonTextAreaComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ValidationErrorModule
  ],
  exports:[CommonTextAreaComponent]
})
export class CommonTextAreaModule { }
