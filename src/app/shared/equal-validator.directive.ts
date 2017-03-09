import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidatorDirective), multi: true }
  ]
})
export class EqualValidatorDirective implements Validator {
  constructor(
    @Attribute('validateEqual') public validateEqual: string,
    @Attribute('reverse') public reverse: string
  ) {}

  private get isReverse() {
    return this.reverse && this.reverse === 'true';
  }

  validate(changedElement: AbstractControl): { [key: string]: any } {
    let changedElementValue = changedElement.value;
    let relatedElement = changedElement.root.get(this.validateEqual);

    if (!relatedElement || !('value' in relatedElement)) {
      return null;
    }

    let relatedElementValue = relatedElement.value;

    if (changedElementValue !== relatedElementValue && !this.isReverse) {
      return { validateEqual: false };
    }

    if (changedElementValue === relatedElementValue && this.isReverse) {
      delete relatedElement.errors['validateEqual'];

      if (!Object.keys(relatedElement.errors).length) {
        relatedElement.setErrors(null);
      }
    }

    if (changedElementValue !== relatedElementValue && this.isReverse) {
      relatedElement.setErrors({ validateEqual: false })
    }

    return null;
  }
}