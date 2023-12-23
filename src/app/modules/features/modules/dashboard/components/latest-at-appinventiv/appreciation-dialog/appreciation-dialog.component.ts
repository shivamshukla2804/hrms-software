import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-appreciation-dialog',
  templateUrl: './appreciation-dialog.component.html',
  styleUrls: ['./appreciation-dialog.component.scss']
})
export class AppreciationDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AppreciationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 

    console.log(data);
    
  }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
