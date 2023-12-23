import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyInterviewsRoutingModule } from './my-interviews-routing.module';
import { MyInterviewsComponent } from './my-interviews.component';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';
import { CommonDropdownModule } from 'src/app/modules/shared/common-dropdown/common-dropdown.module';


@NgModule({
  declarations: [
    MyInterviewsComponent
  ],
  imports: [
    CommonModule,
    MyInterviewsRoutingModule,
    CommonTableModule,
    CommonDropdownModule
  ]
})
export class MyInterviewsModule { }
