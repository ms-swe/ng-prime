import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  isFormGroup,
} from '@angular/forms';

export const searchCriteriaValidator: ValidatorFn = function (
  control: AbstractControl,
) {
  if (!isFormGroup(control)) {
    return null;
  }

  const waters = control.get('waters')?.value;
  const km = control.get('km')?.value;
  const lon = control.get('lon')?.value;
  const lat = control.get('lat')?.value;
  const radius = control.get('radius')?.value;

  const errors: ValidationErrors = {};

  if (km && km !== 0) {
    // for km we need waters and a radius
    if (!(waters !== '' && radius > 0)) {
      errors['mysearchcriteria_km_missing_waters'] = true;
    }
  }

  if ((lon && lon > 0) || (lat && lat > 0)) {
    // for lon/lat we need both lon+lat and a radius
    if (!(lon > 0 && lat > 0 && radius > 0)) {
      errors['searchcriteria_lonlat_missing_lonlatradius'] = true;
    }
  }

  return errors;
};
