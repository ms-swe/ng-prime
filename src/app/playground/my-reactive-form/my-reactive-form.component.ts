import { Component } from '@angular/core';
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
  formGroup = new FormGroup({
    aVal1: new FormControl<boolean | null>(null),
  });

  submitForm() {
    const formValue = this.formGroup.getRawValue();

    console.log('Val1: ' + formValue.aVal1);
  }
}
