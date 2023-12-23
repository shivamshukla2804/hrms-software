import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPerformanceRoutingModule } from './my-performance-routing.module';
import { MyPerformanceComponent } from './my-performance.component';
import { CommonDropdownModule } from 'src/app/modules/shared/common-dropdown/common-dropdown.module';


@NgModule({
  declarations: [
    MyPerformanceComponent
  ],
  imports: [
    CommonModule,
    MyPerformanceRoutingModule,
    CommonDropdownModule
  ]
})
export class MyPerformanceModule { }
