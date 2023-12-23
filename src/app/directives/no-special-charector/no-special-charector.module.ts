import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoSpecialCharDirective } from './no-special-charector.directive';



@NgModule({
  declarations: [
    NoSpecialCharDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[NoSpecialCharDirective]
})
export class NoSpecialCharectorModule { }
