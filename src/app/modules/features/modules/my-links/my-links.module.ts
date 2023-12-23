import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLinksRoutingModule } from './my-links-routing.module';
import { MyLinksComponent } from './my-links.component';


@NgModule({
  declarations: [
    MyLinksComponent
  ],
  imports: [
    CommonModule,
    MyLinksRoutingModule
  ]
})
export class MyLinksModule { }
