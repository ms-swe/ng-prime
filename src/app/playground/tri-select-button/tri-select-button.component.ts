import { Component, forwardRef } from '@angular/core';
import { SelectButtonModule } from 'primeng/selectbutton';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormsModule,
} from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';

/* eslint-disable  @typescript-eslint/no-explicit-any */

@Component({
  selector: 'ngp-tri-select-button',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TriSelectButtonComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, SelectButtonModule, TooltipModule],
  templateUrl: './tri-select-button.component.html',
  styleUrl: './tri-select-button.component.scss',
})
export class TriSelectButtonComponent implements ControlValueAccessor {
  options = [
    { tooltip: 'no', value: false, icon: 'pi pi-ban' }, //TODO_MS add  | translate
    { tooltip: 'both', value: null, icon: 'pi pi-question' },
    { tooltip: 'yes', value: true, icon: 'pi pi-check' },
  ];

  value: boolean | null = null;

  disabled = false;

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: boolean | null): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
