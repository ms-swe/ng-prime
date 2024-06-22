import { Component, forwardRef } from '@angular/core';
import { SelectButtonModule } from 'primeng/selectbutton';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormsModule,
} from '@angular/forms';
import { SelectItem } from 'primeng/api';
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
  options: SelectItem<boolean | null>[] = [
    { label: 'yes', value: true, icon: 'pi pi-check' }, //TODO_MS add  | translate
    { label: 'both', value: null, icon: 'pi pi-minus' },
    { label: 'no', value: false, icon: 'pi pi-ban' },
  ];

  value: boolean | null = null;

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
}
