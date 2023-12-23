import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsrEditRoutingModule } from './dsr-edit-routing.module';
import { DsrEditComponent } from './dsr-edit.component';
import { CommonDropdownModule } from 'src/app/modules/shared/common-dropdown/common-dropdown.module';
import { CommonInputModule } from 'src/app/modules/shared/common-input/common-input.module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonTextEditorModule } from 'src/app/modules/shared/common-text-editor/common-text-editor.module';


@NgModule({
  declarations: [
    DsrEditComponent
  ],
  imports: [
    CommonModule,
    DsrEditRoutingModule,
    CommonDropdownModule,
    CommonInputModule,MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonTextEditorModule
  ]
})
export class DsrEditModule { }
