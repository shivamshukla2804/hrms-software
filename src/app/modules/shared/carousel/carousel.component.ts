import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() listToShow: any;
  @Input() carouselConfig!: NguCarouselConfig;
  @Input() actionButtons?:boolean=false;
  @Input() showPoints?:boolean=false;
  @Input() left_buttonPosition?:string;
  @Input() right_buttonPosition?:string;


  @ViewChild('myCarousel') carousel!: NguCarousel<any>;

  wait = false;
  ngOnInit() {
    // this.wait = true;

    setTimeout(() => {
      this.wait = true;
    }, 100);

  }
  

  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel') myCarousel!: NguCarousel<any>;

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide: any) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }

}
