import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { NguCarouselModule } from '@ngu/carousel';


@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    NguCarouselModule,
    // CarouselModule
    // carousela

  ],
  exports:[    CarouselComponent ]

})
export class CarouselModule {
  
 }
