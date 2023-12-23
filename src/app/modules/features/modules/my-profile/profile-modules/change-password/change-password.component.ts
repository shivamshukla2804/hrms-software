import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { slideInRight } from 'src/animations/slide-in-right';
import { BASIC_INFORMATION } from 'src/app/constants/ui-texts/dashboard-card';
import { FORM_LABEL } from 'src/app/constants/ui-texts/dashboard-card';
import { FormService } from 'src/app/services/form-service/form.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  animations:[slideInRight]
})
export class ChangePasswordComponent implements OnInit {
  uiMessage=BASIC_INFORMATION;
  labelMessage = FORM_LABEL;
  passwordResetForm!:FormGroup;
  constructor(private formBuilder: FormBuilder, private _formService: FormService) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.passwordResetForm = this.formBuilder.group({
      old_password: this._formService.getControl('old_password'),
      new_password: this._formService.getControl('new_password'),
      confirm_password: this._formService.getControl('confirm_password'),
    });
  }


  getControl(control: any) {
    return this.passwordResetForm.controls[control];
  }

  save() {}
}
