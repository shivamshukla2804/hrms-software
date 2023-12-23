import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, Input, OnInit, Output, EventEmitter, AfterViewInit } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { sideNavList } from "src/app/interfaces/common.interface";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"],
})
export class SideBarComponent implements OnInit,AfterViewInit {
  @Input() isExpanded!: boolean;
  // @Input()  sidenav!: MatSidenav;

  @Output() stateChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() isShowing!: boolean;
  showSubmenu: boolean = false;
  showSubSubMenu: boolean = false;
  sideNavList=sideNavList;
  constructor(private observer:BreakpointObserver) {}

  ngOnInit(): void {
  }
ngAfterViewInit(): void {
    // this.observer.observe
} 

  expand() {
    this.stateChange.emit(this.isExpanded);
  }
}
