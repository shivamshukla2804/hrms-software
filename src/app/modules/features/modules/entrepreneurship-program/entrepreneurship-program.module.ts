import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepreneurshipProgramRoutingModule } from './entrepreneurship-program-routing.module';
import { EntrepreneurshipProgramComponent } from './entrepreneurship-program.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    EntrepreneurshipProgramComponent
  ],
  imports: [
    CommonModule,
    EntrepreneurshipProgramRoutingModule,
    MatButtonModule
  ]
})
export class EntrepreneurshipProgramModule { }
