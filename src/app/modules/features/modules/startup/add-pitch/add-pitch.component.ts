import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form-service/form.service';
import { ADD_PITCH } from '../../dashboard/interfaces/interfaces';

@Component({
  selector: 'app-add-pitch',
  templateUrl: './add-pitch.component.html',
  styleUrls: ['./add-pitch.component.scss']
})
export class AddPitchComponent implements OnInit {
  labelMessage = ADD_PITCH;
  addPitchForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService,) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.addPitchForm = this.formBuilder.group({
      pitch_title: this._formService.getControl("name"),
      industry: this._formService.getControl("name"),
      type: this._formService.getControl("name"),
      idea: this._formService.getControl("description"),
      presentation: this._formService.getControl("name"),
      name: this._formService.getControl("name"),
      employee_id: this._formService.getControl("name"),
      dob: this._formService.getControl("dob"),
    });
  }
  // setValueInForm() {
  //   this.getControl("department_name").patchValue(this.data.jobTite);
  //   this.getControl("job_code").patchValue(12345);
  //   this.getControl("location").patchValue(this.data.location);
  //   this.getControl("experience").patchValue(`${this.data.exp_from + ' to ' + this.data.exp_to + ' years'}`);
  // }

  getControl(control: string) {
    return this.addPitchForm?.controls[control] as FormControl;
  }
  onSubmit() {
    console.log(this.addPitchForm);

  }
  onCancel() { }
}
