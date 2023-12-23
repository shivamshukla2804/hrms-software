import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';
import { CommonTextEditorModule } from 'src/app/modules/shared/common-text-editor/common-text-editor.module';
import { CommonTextAreaModule } from 'src/app/modules/shared/common-text-area/common-text-area.module';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonDropdownModule } from 'src/app/modules/shared/common-dropdown/common-dropdown.module';
import { CommonInputModule } from 'src/app/modules/shared/common-input/common-input.module';
import { CommonFileInputModule } from 'src/app/modules/shared/common-file-input/common-file-input.module';
import { CommonDatePickerModule } from 'src/app/modules/shared/common-date-picker/common-date-picker.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    TicketsComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
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
export class TicketsModule { }
