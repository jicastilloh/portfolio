import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';

export class ContactFormUtils {
  static getTextError(errors: ValidationErrors): string | null {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'This field es required';
        case 'email':
          return 'Invalid email';
        case 'minlength':
          return `Minimum ${errors['minlength'].requiredLength} letters`;
      }
    }

    return null;
  }

  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    return (
      !!form.controls[fieldName].errors && form.controls[fieldName].touched
    );
  }

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    if (!form.controls[fieldName].errors) return null;

    const errors = form.controls[fieldName].errors ?? [];

    return this.getTextError(errors);
  }
}
