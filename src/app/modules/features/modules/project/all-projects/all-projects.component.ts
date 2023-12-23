import { AfterContentChecked, ChangeDetectorRef, Component, OnInit, ViewChild,} from "@angular/core";

@Component({
  selector: "app-all-projects",
  templateUrl: "./all-projects.component.html",
  styleUrls: ["./all-projects.component.scss"],
})
export class AllProjectsComponent implements OnInit, AfterContentChecked {
  @ViewChild("subNav", { static: false }) subNav!: any;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void { }
  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }
}
