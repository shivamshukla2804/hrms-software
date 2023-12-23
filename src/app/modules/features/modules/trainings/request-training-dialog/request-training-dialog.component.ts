import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormService } from 'src/app/services/form-service/form.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import {  TRAINING_REQUEST } from '../../dashboard/interfaces/interfaces';

@Component({
  selector: 'app-request-training-dialog',
  templateUrl: './request-training-dialog.component.html',
  styleUrls: ['./request-training-dialog.component.scss']
})
export class RequestTrainingDialogComponent implements OnInit {
  requestTraining=TRAINING_REQUEST
  trainingNames=['dddddd','wwwwwww','rrrrrrrr']
  trainingRequestForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService,
    public dialogRef: MatDialogRef<RequestTrainingDialogComponent>,
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
    this.trainingRequestForm = this.formBuilder.group({
      training_name: this._formService.getControl("department_name"),
      team_name: this._formService.getControl("department_name"),
      learning_are: this._formService.getControl("description"),
      organinization_need: this._formService.getControl("description"),
      interest_to_give_training: this._formService.getControl("department_name",false),
      timing: this._formService.getControl("department_name",false),      
    });
  }
  setValueInForm() {
    // this.getControl("training_name").patchValue('Angular');
    // this.getControl("title").patchValue('Angular');
    // this.getControl("start_date").patchValue('02/02/2022');
    // this.getControl("end_date").patchValue('02/04/2022');

  }

  getControl(control: string) {
    return this.trainingRequestForm?.controls[control] as FormControl;
  }
  onSubmit() {
    if(this.trainingRequestForm.valid){
      this.notificationService.showSuccess('Saved',this.requestTraining.heading);
      this.dialogRef.close();
      this.trainingRequestForm.reset();

    }
    console.log(this.trainingRequestForm);

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
