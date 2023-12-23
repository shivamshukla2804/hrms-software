import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreshersRoutingModule } from './freshers-routing.module';
import { FreshersComponent } from './freshers.component';


@NgModule({
  declarations: [
    FreshersComponent
  ],
  imports: [
    CommonModule,
    FreshersRoutingModule
  ]
})
export class FreshersModule { }
