import { Component, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'ngp-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss'],
  standalone: true,
  imports: [MessagesModule],
})
export class FormErrorsComponent {
  @Input() controlNames?: string[];
  @Input() messages: { [errorCode: string]: string } = {};

  constructor(private form: FormGroupDirective) {}

  get errors(): Message[] {
    if (!this.controlNames || this.controlNames.length == 0) {
      return [];
    }

    const errors: Message[] = [];

    for (const controlName of this.controlNames) {
      const control = this.form.control.get(controlName);

      if (!control || !control.errors /*|| !control.touched*/) {
        continue;
      }

      errors.push(
        ...Object.keys(control.errors).map((errorCode) => {
          return { severity: 'error', detail: this.messages[errorCode] };
        }),
      );
    }

    return errors;
  }
}
