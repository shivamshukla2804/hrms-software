import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { BreakpointObserver } from "@angular/cdk/layout";
import { delay } from 'rxjs/operators'

@Component({
  selector: "app-features",
  templateUrl: "./features.component.html",
  styleUrls: ["./features.component.scss"],
})
export class FeaturesComponent implements OnInit, AfterViewInit {
  @ViewChild("sidenav") sidenav!: MatSidenav;
  isShowing = true;
  showSubmenu: boolean = false;
  isExpanded = true;
  smallWindow = false;
  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void { }
  ngAfterViewInit(): void {
    this.observer.observe(["(max-width:1185px)"]).pipe(delay(1)).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = "over";
        this.sidenav?.close();
        this.isShowing = true;
        this.smallWindow = true;
      } else {
        this.sidenav.mode = "side";
        this.smallWindow = false;
        this.isExpanded = true;
        this.sidenav.open();
      }
    });
  }

  updateIsExpanded(value: boolean) {
    if (this.smallWindow) {
      this.isShowing = true;
      this.sidenav.toggle();
    } else {
      this.isShowing = value;
      this.isExpanded = value;
    }
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  stateChange(value: any) { }
}
