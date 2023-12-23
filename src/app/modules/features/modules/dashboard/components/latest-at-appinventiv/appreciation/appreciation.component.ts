import { AfterViewInit, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NguCarouselConfig } from '@ngu/carousel';
import { APPRECIATION_DATA, IAPPRECIATIONDATA } from '../../../interfaces/interfaces';
import { AppreciationDialogComponent } from '../appreciation-dialog/appreciation-dialog.component';

@Component({
  selector: 'app-appreciation',
  templateUrl: './appreciation.component.html',
  styleUrls: ['./appreciation.component.scss']
})
export class AppreciationComponent implements OnInit,AfterViewInit {

  data:IAPPRECIATIONDATA[]=APPRECIATION_DATA;

  @ViewChildren("listofDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;
  dataSource: any = []
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 1,
    interval: { timing: 400000, initialDelay: 100000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };
  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.listToShow.forEach((item: any) => {
    this.dataSource.push(item);
    })
  }
  openDialog(data:any){
    this.dialog.open(AppreciationDialogComponent, {
      data:data,
      // maxWidth: '30%',
      // maxHeight: '55vh',
      // height: '100%',
      // width: '100%',
    });
  }

}
