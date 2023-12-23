import { Component, OnInit } from "@angular/core";
import { slideInRight } from "src/animations/slide-in-right";
import {
  BASIC_INFORMATION,
  FORM_LABEL,
} from "src/app/constants/ui-texts/dashboard-card";

@Component({
  selector: "app-appraisal",
  templateUrl: "./appraisal.component.html",
  styleUrls: ["./appraisal.component.scss"],
  animations:[slideInRight]
})
export class AppraisalComponent implements OnInit {
  uiMessage = BASIC_INFORMATION;
  labelMessage = FORM_LABEL;
  
  constructor() {}

  ngOnInit(): void {}
}
