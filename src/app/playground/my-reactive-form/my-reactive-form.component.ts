import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TriSelectButtonComponent } from '../tri-select-button/tri-select-button.component';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { TableModule } from 'primeng/table';
import { FilterService } from 'primeng/api';

@Component({
  selector: 'ngp-my-reactive-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    TriSelectButtonComponent,
    TriStateCheckboxModule,
    TableModule,
  ],
  templateUrl: './my-reactive-form.component.html',
  styleUrl: './my-reactive-form.component.scss',
})
export class MyReactiveFormComponent {
  disabled = false;

  tableData = [
    { name: 'Max', blue: false },
    { name: 'Moritz', blue: false },
    { name: 'Schlumpfine', blue: true },
    { name: 'Schlumpf', blue: true },
  ];

  formGroup = new FormGroup({
    triLarge: new FormControl<boolean | null>({
      value: null,
      disabled: this.disabled,
    }),
    tri1: new FormControl<boolean | null>(null),
    tri2: new FormControl<boolean | null>(true),
    tri3: new FormControl<boolean | null>(false),
    aText: new FormControl('', Validators.required),
  });

  submitForm() {
    const formValue = this.formGroup.getRawValue();

    this.disabled = !this.disabled;

    if (this.disabled) {
      this.formGroup.controls.triLarge.disable();
    } else {
      this.formGroup.controls.triLarge.enable();
    }

    console.log('tri large: ' + formValue.triLarge);
    console.log('Disabled: ' + this.disabled);

    console.log('tri 1: ' + formValue.tri1);
    console.log('tri 2: ' + formValue.tri2);
    console.log('tri 3: ' + formValue.tri3);
  }
}
