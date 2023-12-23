import { AfterViewInit, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from "@angular/core";
import { NguCarouselConfig } from "@ngu/carousel";
import { BIRTHDAY_EMP_IMAGE_DATA, BIRTH_DAY, BITHDAY, IBIRTHDAYDATA } from "../../../interfaces/interfaces";
// import {
//   BIRTHDAY_EMP_IMAGE_DATA,
//   BIRTH_DAY,
//   BITHDAY,
//   IBIRTHDAYDATA,
// } from "../../interfaces/interfaces";

@Component({
  selector: "app-birthday-celebration",
  templateUrl: "./birthday-celebration.component.html",
  styleUrls: ["./birthday-celebration.component.scss"],
})
export class BirthdayCelebrationComponent implements OnInit ,AfterViewInit{
  cardLayoutData: BITHDAY = BIRTH_DAY;
  data: IBIRTHDAYDATA[] = BIRTHDAY_EMP_IMAGE_DATA;
  // @ViewChildren("listofDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;
  // dataSource: any = []
  // carouselConfig: NguCarouselConfig = {
  //   grid: { xs: 1, sm: 1, md: 2, lg: 2, all: 0 },
  //   load: 1,
  //   interval: { timing: 400000000, initialDelay: 1000000 },
  //   loop: true,
  //   touch: true,
  //   velocity: 0.2,
  // };
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    // this.listToShow.forEach((item: any) => {
    //   this.dataSource.push(item);
    // })
  }
}
