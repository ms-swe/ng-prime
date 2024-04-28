import { Component, ViewEncapsulation, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { searchCriteriaValidator } from '../validators/searchCriteriaValidator';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { searchIncludeValidator } from '../validators/searchIncludeValidator';
import { FormErrorsComponent } from '../../shared/form-errors/form-errors.component';
import { PlaygroundStore } from '../data/playground-store';

@Component({
  selector: 'ngp-my-search',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    InputNumberModule,
    InputSwitchModule,
    FormErrorsComponent,
  ],
  templateUrl: './my-search.component.html',
  styleUrl: './my-search.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MySearchComponent {
  playgroundStore = inject(PlaygroundStore);

  form = new FormGroup({
    criteria: new FormGroup(
      {
        waters: new FormControl('', { nonNullable: true }),
        km: new FormControl(0, { nonNullable: true }),
        lon: new FormControl(0, { nonNullable: true }),
        lat: new FormControl(0, { nonNullable: true }),
        radius: new FormControl(0, { nonNullable: true }),
      },
      { validators: searchCriteriaValidator }, //TODO kann man den aufteilen?
    ),
    include: new FormGroup(
      {
        includeTimeseries: new FormControl(false, { nonNullable: true }),
        includeCurrentMeasurement: new FormControl(false, {
          nonNullable: true,
        }),
        includeCharacteristicValues: new FormControl(false, {
          nonNullable: true,
        }),
      },
      { validators: searchIncludeValidator },
    ),
  });

  submitForm() {
    const formValue = this.form.getRawValue();

    this.playgroundStore.load(
      formValue.criteria.waters,
      formValue.criteria.km,
      formValue.criteria.lon,
      formValue.criteria.lat,
      formValue.criteria.radius,
      formValue.include.includeTimeseries,
      formValue.include.includeCurrentMeasurement,
      formValue.include.includeCharacteristicValues,
    );
  }
}
