import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsRoutingModule } from './assets-routing.module';
import { AssetsComponent } from './assets.component';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';


@NgModule({
  declarations: [
    AssetsComponent
  ],
  imports: [
    CommonModule,
    AssetsRoutingModule,
    CommonTableModule,

  ]
})
export class AssetsModule { }
