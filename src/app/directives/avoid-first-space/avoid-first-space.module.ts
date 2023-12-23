import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvoidFirstSpaceDirective } from './avoid-first-space.directive';



@NgModule({
  declarations: [
    AvoidFirstSpaceDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[AvoidFirstSpaceDirective]
})
export class AvoidFirstSpaceModule { }
