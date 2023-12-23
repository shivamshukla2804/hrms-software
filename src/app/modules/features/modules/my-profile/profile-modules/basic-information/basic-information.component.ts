import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { slideInRight } from 'src/animations/slide-in-right';
import { BASIC_INFORMATION, FORM_LABEL, GENDER_INPUT_DROPDOWN, MARITAL_DROPDOWN } from 'src/app/constants/ui-texts/dashboard-card';
import { FormService } from 'src/app/services/form-service/form.service';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss'],
  animations: [slideInRight]
})
export class BasicInformationComponent implements OnInit {
  uiMessage = BASIC_INFORMATION
  labelMessage = FORM_LABEL
  genderValue = GENDER_INPUT_DROPDOWN
  maritalStatusValue = MARITAL_DROPDOWN
  basicInformationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private _formService: FormService) {
    
   }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.basicInformationForm = this.formBuilder.group({
      first_name: this._formService.getControl('first_name'),
      last_name: this._formService.getControl('last_name'),
      dob: this._formService.getControl('dob'),
      gender: this._formService.getControl('gender'),
      marital_status: this._formService.getControl('marital_status'),
      contact_number: this._formService.getControl('contact_number'),
      tot_exp_years: this._formService.getControl('tot_exp_years'),
      tot_exp_month: this._formService.getControl('tot_exp_month'),
      rel_exp_year: this._formService.getControl('rel_exp_year'),
      rel_exp_month: this._formService.getControl('rel_exp_month'),
      address: this._formService.getControl('address'),
    });
  }


  getControl(control: string) :any{
    return this.basicInformationForm?.controls[control];
  }
  // get getControl():any {
  //   return this.basicInformationForm?.controls;
  // }

  save() {
    // this.basicInformationForm.controls['name'].patchValue(this.basicInformationForm.controls['name'].value?.trim());
    // this.basicInformationForm.controls['email'].patchValue(this.basicInformationForm.controls['email'].value?.trim());
    // this.basicInformationForm.controls['password'].patchValue(this.basicInformationForm.controls['password'].value?.trim());
    // console.log(this.basicInformationForm.value, 'data user ');

    // if (this.basicInformationForm.valid) {
    //   let data = {
    //     name: this.basicInformationForm.controls['name'].value,
    //     email: this.basicInformationForm.controls['email'].value,
    //     password: this.basicInformationForm.controls['password'].value,
    //   }
    //   console.log(data, 'data user ');


    // }
  }
  // trimValue(form:FormGroup){
  //   form.controls.forEach(element => {

  //   });
  // }

}
