import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-common-card',
  templateUrl: './common-card.component.html',
  styleUrls: ['./common-card.component.scss']
})
export class CommonCardComponent implements OnInit, AfterViewInit {
  @Input() cardLayoutData: any;
  @Input() data: any;
  @ViewChildren("listofDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;
  dataSource: any = []
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 2, sm: 2, md: 2, lg: 2, all: 0 },
    gridBreakpoints:{sm:1200,md:1200,lg:1200,xl:1200},
    load: 1,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.listToShow.forEach((item: any) => {
      this.dataSource.push(item);
    })
  }
}
