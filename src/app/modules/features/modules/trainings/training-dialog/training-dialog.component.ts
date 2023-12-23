import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormService } from 'src/app/services/form-service/form.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { FEEDBACK_DATA, FEEDBACK_LABELS } from '../../dashboard/interfaces/interfaces';

@Component({
  selector: 'app-training-dialog',
  templateUrl: './training-dialog.component.html',
  styleUrls: ['./training-dialog.component.scss']
})
export class TrainingDialogComponent implements OnInit {

  labelMessage = FEEDBACK_DATA;
  LABELS=FEEDBACK_LABELS;
  feedbackForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService,
    public dialogRef: MatDialogRef<TrainingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notificationService:NotificationService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.setValueInForm();
  }

  onClose() { }
  createForm() {
    this.feedbackForm = this.formBuilder.group({
      department_name: this._formService.getControl("department_name"),
      title: this._formService.getControl('cv'),
      start_date: this._formService.getControl('cv'),
      end_date: this._formService.getControl('cv'),
      goal: this._formService.getControl('cv'),
      relevent: this._formService.getControl('cv'),
      overall_training: this._formService.getControl('cv'),
      satisfaction: this._formService.getControl('cv'),
      overall_feedback: this._formService.getControl("description"),
      what_is_missing:this._formService.getControl("language",false),
      
    });
  }
  setValueInForm() {
    this.getControl("department_name").patchValue('Angular');
    this.getControl("title").patchValue('Angular');
    this.getControl("start_date").patchValue('02/02/2022');
    this.getControl("end_date").patchValue('02/04/2022');

  }

  getControl(control: string) {
    return this.feedbackForm?.controls[control] as FormControl;
  }
  onSubmit() {
    if(this.feedbackForm.valid){
      this.notificationService.showSuccess('Saved','Feedback');
        
      this.dialogRef.close();
      this.feedbackForm.reset();

    }
    console.log(this.feedbackForm);

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
