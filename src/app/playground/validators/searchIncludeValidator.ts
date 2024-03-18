import { AbstractControl, ValidatorFn, isFormGroup } from '@angular/forms';

export const searchIncludeValidator: ValidatorFn = function (
  control: AbstractControl,
) {
  if (!isFormGroup(control)) {
    return null;
  }

  const includeTimeseries = control.get('includeTimeseries')?.value;
  const includeCurrentMeasurement = control.get(
    'includeCurrentMeasurement',
  )?.value;
  const includeCharacteristicValues = control.get(
    'includeCharacteristicValues',
  )?.value;

  if (includeCurrentMeasurement || includeCharacteristicValues) {
    // these values are only provided if also the time series information is included
    return includeTimeseries
      ? null
      : { searchinclude_missing_timeseries: true };
  } else {
    return null;
  }
};
