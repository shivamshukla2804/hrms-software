import { Component, ElementRef, Inject, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-gallery-images-dialog',
  templateUrl: './gallery-images-dialog.component.html',
  styleUrls: ['./gallery-images-dialog.component.scss']
})
export class GalleryImagesDialogComponent implements OnInit {
  @ViewChildren("listofDivs", { read: TemplateRef }) listToShow!: QueryList<
  ElementRef<HTMLDivElement>
>;
carouselConfig: NguCarouselConfig = {
  grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
  load: 1,
  interval: { timing: 4000, initialDelay: 1000 },
  loop: true,
  touch: true,
  velocity: 0.2,
};
dataSource: any = [];
  constructor( public dialogRef: MatDialogRef<GalleryImagesDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  
  
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.listToShow.forEach((item: any) => {
      this.dataSource.push(item);
    });
  }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

}
