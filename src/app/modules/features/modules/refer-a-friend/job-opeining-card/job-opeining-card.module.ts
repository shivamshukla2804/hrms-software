import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobOpeiningCardComponent } from './job-opeining-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';



@NgModule({
  declarations: [
    JobOpeiningCardComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule,
    AbsoluteRoutingModule
  ],
  exports:[JobOpeiningCardComponent]
})
export class JobOpeiningCardModule { }
