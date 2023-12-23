import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDsrRoutingModule } from './my-dsr-routing.module';
import { MyDsrComponent } from './my-dsr.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonDatePickerModule } from 'src/app/modules/shared/common-date-picker/common-date-picker.module';
import { CommonFileInputModule } from 'src/app/modules/shared/common-file-input/common-file-input.module';
import { CommonInputModule } from 'src/app/modules/shared/common-input/common-input.module';
import { CommonDropdownModule } from 'src/app/modules/shared/common-dropdown/common-dropdown.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { CommonTextAreaModule } from 'src/app/modules/shared/common-text-area/common-text-area.module';
import { CommonTextEditorModule } from 'src/app/modules/shared/common-text-editor/common-text-editor.module';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MyDsrComponent
  ],
  imports: [
    CommonModule,
    MyDsrRoutingModule,
    MatIconModule,
    CommonDatePickerModule,
    CommonFileInputModule,
    CommonInputModule,
    CommonDropdownModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    CommonTextAreaModule,
    CommonTextEditorModule,
    CommonTableModule,
    MatButtonModule,
  ]
})
export class MyDsrModule { }
