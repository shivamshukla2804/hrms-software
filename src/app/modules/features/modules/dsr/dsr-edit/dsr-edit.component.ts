import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form-service/form.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';

@Component({
  selector: 'app-dsr-edit',
  templateUrl: './dsr-edit.component.html',
  styleUrls: ['./dsr-edit.component.scss']
})
export class DsrEditComponent implements OnInit {
  dsrForm!: FormGroup;
  leaveTypes: string[] = ['Planned Leave', 'Privileged Leave', 'Emergency Leave', 'Short Leave', 'All Reamaining Leave']

  constructor(private formBuilder: FormBuilder, private _formService: FormService, private notificationService: NotificationService,) {

  }

  ngOnInit(): void {
    this.createForm();
    this.getControl('project').patchValue('Trainee Project Angular')
    this.getControl('date').setValue('03/01/2023')
    this.getControl('logged_hr').setValue('08:00')
    this.getControl('description').setValue(   
    "<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">Meetings</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">&nbsp; NA&nbsp;</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">Task&nbsp;</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">&nbsp; &nbsp;Bug fixing [2hr]</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">&nbsp; &nbsp;Portal registration [1 hr]</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">&nbsp; Working on job openings module [ 3 hr]</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">Challenges</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">NA</p>"
    )


  }

  createForm() {
    this.dsrForm = this.formBuilder.group({
      project: this._formService.getControl('cv'),
      date: this._formService.getControl('cv',),
      logged_hr: this._formService.getControl('cv',),
      description: this._formService.getControl('dsr'),
    });
  }
  getControl(control: string): FormControl {
    return this.dsrForm?.controls[control] as FormControl;
  }
onUpdate(){
  this.notificationService.showSuccess('DSR', 'Updated');

}

}
