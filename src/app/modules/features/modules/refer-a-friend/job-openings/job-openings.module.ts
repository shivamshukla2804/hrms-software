import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOpeningsRoutingModule } from './job-openings-routing.module';
import { JobOpeningsComponent } from './job-openings.component';
import { JobOpeiningCardModule } from '../job-opeining-card/job-opeining-card.module';


@NgModule({
  declarations: [
    JobOpeningsComponent
  ],
  imports: [
    CommonModule,
    JobOpeningsRoutingModule,
    JobOpeiningCardModule
  ]
})
export class JobOpeningsModule { }
