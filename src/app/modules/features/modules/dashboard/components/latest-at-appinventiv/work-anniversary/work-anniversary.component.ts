import { Component, OnInit } from "@angular/core";
import { IWORKANNIVERSARY, WORKANNIVERSARY_EMP_IMAGE_DATA, WORK_LAYOUT } from "../../../interfaces/interfaces";


@Component({
  selector: "app-work-anniversary",
  templateUrl: "./work-anniversary.component.html",
  styleUrls: ["./work-anniversary.component.scss"],
})
export class WorkAnniversaryComponent implements OnInit {
  data: IWORKANNIVERSARY[] = WORKANNIVERSARY_EMP_IMAGE_DATA;
  layoutData = WORK_LAYOUT;
  constructor() {}

  ngOnInit(): void {}
}
