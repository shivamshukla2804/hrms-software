import { AfterViewInit, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-new-family-member',
  templateUrl: './new-family-member.component.html',
  styleUrls: ['./new-family-member.component.scss']
})
export class NewFamilyMemberComponent implements OnInit,AfterViewInit {

  
  listOfNewFamilyMembers=[1,2,3]
  @ViewChildren("listofDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;
  dataSource:any=[]
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 2, lg: 1, all: 0 },
    gridBreakpoints:{sm:600,md:800,lg:1200,xl:1200},
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
    this.listToShow.forEach((item:any)=>{
      this.dataSource.push(item);
    })
    
  }
}
