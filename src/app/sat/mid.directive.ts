import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMid]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MidDirective,
    multi: true
}]   
})
export class MidDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    if (control.value == 'нет') return {
      // ValidationErrors
      message: 'наша ошибка'
    }
    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {
   console.log('вызван registerOnValidatorChange');
  }

}
// До вторника в трелло 5-6