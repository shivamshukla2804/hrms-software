import { Component, Input, OnInit } from "@angular/core";
import {  SideNavItem } from "src/app/interfaces/common.interface";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.scss"],
})
export class ListItemComponent implements OnInit {
  showSubmenu = false;
  @Input()isShowing!:boolean;
  @Input() item:any;

  constructor() {}

  ngOnInit(): void {}
}
