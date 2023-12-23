import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingDetailsRoutingModule } from './training-details-routing.module';
import { TrainingDetailsComponent } from './training-details.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { SubTopicsComponent } from './components/sub-topics/sub-topics.component';
import { DetailsComponent } from './components/details/details.component';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';


@NgModule({
  declarations: [
    TrainingDetailsComponent,
    AttendanceComponent,
    SubTopicsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    TrainingDetailsRoutingModule,
    MatTabsModule,
    MatButtonModule,
    CommonTableModule
  ]
})
export class TrainingDetailsModule { }
