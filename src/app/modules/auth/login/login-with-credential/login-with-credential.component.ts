import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ADMIN } from "src/app/constants/routes";
import { NotificationService } from "src/app/services/notification-service/notification.service";

@Component({
  selector: "app-login-with-credential",
  templateUrl: "./login-with-credential.component.html",
  styleUrls: ["./login-with-credential.component.scss"],
})
export class LoginWithCredentialComponent implements OnInit {
  @Input() loginForm!: FormGroup;
  hide = false;
  constructor(
    private _router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}
  getControl(control: any) {
    return this.loginForm.controls[control];
  }
  login() {
    this.loginForm.controls["email"].patchValue(
      this.loginForm.controls["email"].value?.trim()
    );
    this.loginForm.controls["password"].patchValue(
      this.loginForm.controls["password"].value?.trim()
    );
    console.log(this.loginForm.value, "data user ");

    if (this.loginForm.valid) {
      let data = {
        email: this.loginForm.controls["email"].value,
        password: this.loginForm.controls["password"].value,
      };
      localStorage.setItem("username", data.email.split("@")[0]);
      this.notificationService.showSuccess("Successfull", "Login");
      this._router.navigate([ADMIN.fullUrl]);
    }
  }
}
