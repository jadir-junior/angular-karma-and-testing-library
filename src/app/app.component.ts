import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="form">
      <input type="text" formControlName="name" aria-label="name" />
      <div *ngIf="name.invalid && name.touched">
        <p aria-label="error name" *ngIf="name.errors?.['required']">
          Campo obrigatorio
        </p>
      </div>
    </form>
  `,
})
export class AppComponent {
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }
}
