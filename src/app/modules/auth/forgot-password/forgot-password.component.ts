import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotificationService } from "src/app/services/notification-service/notification.service";
import { FormService } from "../../../services/form-service/form.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent implements OnInit {
  resetForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.resetForm = this.formBuilder.group({
      email: this._formService.getControl("email"),
    });
  }
  getControl(name: string) {
    return this.resetForm.controls[name];
  }
  sendEmail() {
    if(this.resetForm.valid){
      this.notificationService.showSuccess('Sent to your mail', 'New Password');
    }
  }
}
