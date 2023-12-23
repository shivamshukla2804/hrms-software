import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChildren,
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { NguCarouselConfig } from "@ngu/carousel";
import { Gallery_DATA, GALLER_VALUE } from "../../interfaces/interfaces";
import { GalleryImagesDialogComponent } from "../gallery-images-dialog/gallery-images-dialog.component";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
})
export class GalleryComponent implements OnInit, AfterViewInit {
  headerValue=GALLER_VALUE;
  imageData=Gallery_DATA;

  buttonShow: boolean = true;

  @ViewChildren("listofDivs", { read: TemplateRef }) listToShow!: QueryList<
    ElementRef<HTMLDivElement>
  >;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 3, md: 3, lg: 3, all: 0 },
    load: 1,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };
  dataSource: any = [];

  constructor( public dialog: MatDialog) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.listToShow.forEach((item: any) => {
      this.dataSource.push(item);
    });
  }

  openDImageGallery(data:any): void {
    
    this.dialog.open(GalleryImagesDialogComponent, {
      data:data,
      maxWidth: '60vw',
      maxHeight: '63vh',
      height: '100%',
      width: '100%',
    });
  }
}
