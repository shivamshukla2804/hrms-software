import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ADMIN } from 'src/app/constants/routes';
import { FormService } from '../../../services/form-service/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hide = true;
  loginWithGoogle = true;
  constructor(
    private formBuilder: FormBuilder,
    private _formService:FormService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email:this._formService.getControl('email'),
      password:this._formService.getControl('password')
    });
  }


  getControl(control:any) {
    return this.loginForm.controls[control];
}

  // login() {
  //   this.loginForm.controls['email'].patchValue(this.loginForm.controls['email'].value?.trim());
  //   this.loginForm.controls['password'].patchValue(this.loginForm.controls['password'].value?.trim());
  //   console.log(this.loginForm.value, 'data user ');

  //   if (this.loginForm.valid) {
  //     let data = {
  //       name: this.loginForm.controls['name'].value,
  //       email: this.loginForm.controls['email'].value,
  //       password: this.loginForm.controls['password'].value,
  //     }
  //     console.log(data, 'data user ');
  //     this._router.navigate([ADMIN.fullUrl])

  //   }
  // }

}
