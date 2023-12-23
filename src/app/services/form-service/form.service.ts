import { Injectable } from "@angular/core";
import { Validators } from "@angular/forms";
import { PATTERN } from "src/app/constants/pattern";
import { VALIDATION_CRITERIA } from "src/app/constants/validation-criteria";

@Injectable({
  providedIn: "root",
})
export class FormService {
  constructor() {}

  VALIDATION = {
    email: [
      Validators.pattern(PATTERN.email),
      Validators.maxLength(VALIDATION_CRITERIA.emailMaxLength),
    ],
    password: [
      Validators.pattern(PATTERN.password),
      Validators.minLength(VALIDATION_CRITERIA.passwordMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength),
    ],
    new_password: [
      Validators.pattern(PATTERN.password),
      Validators.minLength(VALIDATION_CRITERIA.passwordMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength),
    ],
    old_password: [
      Validators.pattern(PATTERN.password),
      Validators.minLength(VALIDATION_CRITERIA.passwordMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength),
    ],
    confirm_password: [
      Validators.pattern(PATTERN.password),
      Validators.minLength(VALIDATION_CRITERIA.passwordMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength),
    ],

    first_name: [
      Validators.minLength(VALIDATION_CRITERIA.nameMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.nameMaxLength),
    ],
    name: [
      Validators.minLength(VALIDATION_CRITERIA.nameMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.nameMaxLength),
    ]
    ,

    last_name: [
      Validators.minLength(VALIDATION_CRITERIA.nameMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.nameMaxLength),
    ],
    candidate_name:[ Validators.minLength(VALIDATION_CRITERIA.nameMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.nameMaxLength),],
    dob: [],
    gender: [],
    contact_number: [
      Validators.minLength(VALIDATION_CRITERIA.phoneMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.phoneMaxLength),
    ],
    marital_status: [],
    tot_exp_month: [],
    tot_exp_years: [],
    rel_exp_year: [],
    rel_exp_month: [],
    address: [
      Validators.minLength(VALIDATION_CRITERIA.addressMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.addressMaxLength),
    ],
    school: [],
    education: [],
    time_from: [],
    time_to: [],
    language: [],
    professional_course: [],
    description: [
      Validators.minLength(VALIDATION_CRITERIA.descMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.descMaxLength),
    ],
    department_name:[],
    job_code:[],
    location:[],
    experience:[],
    position_title: [],
    candidate_experience: [],
    cv: [],
    skill: [],
    job_location: [],
    chkbox:[],
    dsr:[]
  };
  getControl(name: string, requierd = true) {
    
    // @ts-ignore: unreachable code error

    let compose = [...this.VALIDATION[name]];
    if (requierd) {
      if (name === "checkbox") {
        compose.splice(0, 0, Validators.requiredTrue);
      } else {
        compose.splice(0, 0, Validators.required);
      }
    }
    if(name==='chkbox'){
      return [false,compose]
    }
    return [null, compose];
  }
}
