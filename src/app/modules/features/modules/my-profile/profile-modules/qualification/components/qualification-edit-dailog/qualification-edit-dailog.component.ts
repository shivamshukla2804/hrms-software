import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-qualification-edit-dailog',
  templateUrl: './qualification-edit-dailog.component.html',
  styleUrls: ['./qualification-edit-dailog.component.scss']
})
export class QualificationEditDailogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<QualificationEditDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    console.log(this.data);
    
    this.dialogRef.close();
  }

  ngOnInit(): void {
    
  }

}
