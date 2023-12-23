import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyDocumentsRoutingModule } from './policy-documents-routing.module';
import { PolicyDocumentsComponent } from './policy-documents.component';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';


@NgModule({
  declarations: [
    PolicyDocumentsComponent
  ],
  imports: [
    CommonModule,
    PolicyDocumentsRoutingModule,
    CommonTableModule
  ]
})
export class PolicyDocumentsModule { }
