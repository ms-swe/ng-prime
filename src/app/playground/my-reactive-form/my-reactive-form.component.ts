import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TriSelectButtonComponent } from '../tri-select-button/tri-select-button.component';

@Component({
  selector: 'ngp-my-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, TriSelectButtonComponent],
  templateUrl: './my-reactive-form.component.html',
  styleUrl: './my-reactive-form.component.scss',
})
export class MyReactiveFormComponent {
  disabled = false;

  formGroup = new FormGroup({
    aVal1: new FormControl<boolean | null>({
      value: null,
      disabled: this.disabled,
    }),
  });

  submitForm() {
    const formValue = this.formGroup.getRawValue();

    this.disabled = !this.disabled;

    if (this.disabled) {
      this.formGroup.controls.aVal1.disable();
    } else {
      this.formGroup.controls.aVal1.enable();
    }

    console.log('Val1: ' + formValue.aVal1);
    console.log('Disabled: ' + this.disabled);
  }
}
