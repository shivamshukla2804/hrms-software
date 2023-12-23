import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddTagDialogComponent } from "./components/add-tag-dialog/add-tag-dialog.component";

@Component({
  selector: "app-project-details",
  templateUrl: "./project-details.component.html",
  styleUrls: ["./project-details.component.scss"],
})
export class ProjectDetailsComponent implements OnInit {
  chips: string[] = [];
  constructor(public dialog: MatDialog) {}

  addTag(): void {
    const dialogRef = this.dialog.open(AddTagDialogComponent, {
      // data: {},
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      console.log("The dialog was closed", result);
      this.chips.push(result.trim());
    });
  }

  ngOnInit(): void {}
}
