import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormControlName, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { FEEDBACK_LABELS } from '../../dashboard/interfaces/interfaces';

@Component({
  selector: 'app-cancel-enrollment-dialog',
  templateUrl: './cancel-enrollment-dialog.component.html',
  styleUrls: ['./cancel-enrollment-dialog.component.scss']
})
export class CancelEnrollmentDialogComponent implements OnInit {
  LABELS=FEEDBACK_LABELS;
  brief= new FormControl('',Validators.required);
  constructor(
    public dialogRef: MatDialogRef<CancelEnrollmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notificationService:NotificationService
  ) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(){
    if(this.brief.valid){
      this.notificationService.showSuccess('Saved','Brief Reason');
     this.dialogRef.close();

    }
  }
}
