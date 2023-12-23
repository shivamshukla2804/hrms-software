import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-tag-dialog',
  templateUrl: './add-tag-dialog.component.html',
  styleUrls: ['./add-tag-dialog.component.scss']
})
export class AddTagDialogComponent implements OnInit {
  inputValue= new FormControl('',[Validators.required]);
  constructor(
    public dialogRef: MatDialogRef<AddTagDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.data=this.inputValue.value;
    console.log(this.data);
    
    this.dialogRef.close(this.inputValue.value);
  }

  ngOnInit(): void {
    console.log(this.inputValue.value);
    
  }

}
