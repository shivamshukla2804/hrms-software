import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form-service/form.service';
import { DIRECTORY_EMPLOYEE_DATA, IDIRECTORY_DATA } from '../dashboard/interfaces/interfaces';
import { BASIC_INFORMATION } from './constants/ui-text';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  uiText=BASIC_INFORMATION;
  data:IDIRECTORY_DATA[]=DIRECTORY_EMPLOYEE_DATA;
  directoryDataList :IDIRECTORY_DATA[]=DIRECTORY_EMPLOYEE_DATA;
  departments=['All','Angular','Node js','React Js','Android']  
  filterForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private _formService: FormService) {
    
   }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.filterForm = this.formBuilder.group({
      name: this._formService.getControl('name'),
      technology:this._formService.getControl('name'),
    });
  }


  getControl(control: string) {
    return this.filterForm?.controls[control] as FormControl;
  }
 filter(){
  this.getControl('name').patchValue(this.getControl('name').value.trim());
  let tech =this.getControl('technology').value.toLowerCase();
  let name =this.getControl('name').value.toLowerCase();
  let newData = this.data.filter((item)=>{
    if(tech=='all'){
      return item.EMP_NAME.toLowerCase() == name
    }else{
      return (item.EMP_NAME.toLowerCase() == name && item.EMP_TECHNOLOGY.toLowerCase() == tech);

    }
  });
  this.directoryDataList=newData;
  console.log(newData);

  
 }
 reset(){
  this.directoryDataList =this.data;

 }
}
