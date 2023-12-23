import { Component, Inject, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
} from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormService } from "src/app/services/form-service/form.service";
import { NotificationService } from "src/app/services/notification-service/notification.service";
import { REFER_A_CANDIDATE_DIALOG } from "../../dashboard/interfaces/interfaces";

@Component({
  selector: "app-referal-form",
  templateUrl: "./referal-form.component.html",
  styleUrls: ["./referal-form.component.scss"],
})
export class ReferalFormComponent implements OnInit {
  labelMessage = REFER_A_CANDIDATE_DIALOG;
  referCandidateForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService,
    public dialogRef: MatDialogRef<ReferalFormComponent>,
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
    this.referCandidateForm = this.formBuilder.group({
      department_name: this._formService.getControl("department_name"),
      job_code: this._formService.getControl("job_code"),
      location: this._formService.getControl("location"),
      experience: this._formService.getControl("experience"),
      job_location: this._formService.getControl("job_location"),
      candidate_name: this._formService.getControl("candidate_name"),
      position_title: this._formService.getControl("position_title"),
      candidate_experience: this._formService.getControl("candidate_experience"),
      email: this._formService.getControl("email"),
      contact_number: this._formService.getControl("contact_number"),
      cv: this._formService.getControl("cv"),
      skill: this._formService.getControl("skill"),
    });
  }
  setValueInForm() {
    this.getControl("department_name").patchValue(this.data.jobTite);
    this.getControl("job_code").patchValue(12345);
    this.getControl("location").patchValue(this.data.location);
    this.getControl("experience").patchValue(`${this.data.exp_from + ' to ' + this.data.exp_to + ' years'}`);
    this.getControl("department_name").disable();
    this.getControl("location").disable();
    this.getControl("experience").disable();
    this.getControl("job_code").disable();

  }

  getControl(control: string) {
    return this.referCandidateForm?.controls[control] as FormControl;
  }
  onSubmit() {
    console.log(this.referCandidateForm);
    this.notificationService.showSuccess('Saved','Refferal');
    this.dialogRef.close();


  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
