import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRequestsRoutingModule } from './asset-requests-routing.module';
import { AssetRequestsComponent } from './asset-requests.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonDropdownModule } from 'src/app/modules/shared/common-dropdown/common-dropdown.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonDatePickerModule } from 'src/app/modules/shared/common-date-picker/common-date-picker.module';
import { CommonTextAreaModule } from 'src/app/modules/shared/common-text-area/common-text-area.module';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';


@NgModule({
  declarations: [
    AssetRequestsComponent
  ],
  imports: [
    CommonModule,
    AssetRequestsRoutingModule,
    MatButtonModule,
    CommonDropdownModule,
    MatFormFieldModule,
    ValidationErrorModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonDatePickerModule,
    CommonTextAreaModule,
    CommonTableModule
  ]
})
export class AssetRequestsModule { }
