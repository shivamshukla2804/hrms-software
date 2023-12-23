import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { PATTERN_ERRORS } from 'src/app/constants/errors';
import { toTitleCase, VALIDATION_MESSAGES } from 'src/app/constants/messages';

@Pipe({
  name: 'validate',
  pure:false,
})
export class ValidationErrorPipe implements PipeTransform {



  transform(control:FormControl | AbstractControl, name: string): any {
    return control && control.errors
      ? this.getValidationError(control, name)
      : '';
  }
  getValidationError(control:any, name:string) {
    if (control.hasError('required')) {
      return `${toTitleCase(name)} is required`;
    }
    if (control.hasError('pattern')) {
      let pattern = control.errors.pattern.requiredPattern;
      return PATTERN_ERRORS(pattern, name);
    }
    if (control.hasError('minlength')) {
      return `${toTitleCase(name)} must be at least ${
        control.errors.minlength.requiredLength
      } characters long`;
    }
    if (control.hasError('min')) {
      return `${toTitleCase(name)} must be at least ${
        control.errors.min.requiredLength
      } digit long`;
    }
    if (control.hasError('maxlength')) {
      return `${toTitleCase(name)} can not be more than ${
        control.errors.maxlength.requiredLength
      } characters long`;
    }
    if (control.hasError('max')) {
      return `${toTitleCase(name)} can not be more than ${
        control.errors.max.max
      } `;
    }
    if (control.hasError('maxError')) {
      return `Maximum ${toTitleCase(
        name
      )} can not be less than minimum ${toTitleCase(name)}`;
    }
    if (control.hasError('matchPassword')) {
      //@ts-ignore: unreachable code error

      return VALIDATION_MESSAGES[name]['matchPassword'] || '';
    }
  }

}
