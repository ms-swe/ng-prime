import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { withLoadingIndicator } from './with-loading-indicator';
import { withLocalStorageSync } from './with-local-storage-sync';
import { StationsService } from './stations.service';
import { inject } from '@angular/core';
import { Station } from './model/Station';

export interface PlaygroundState {
  lastSearchCriteria: { waters: string; km: number /* etc. */ };
  stations: Station[];
}

const initialState: PlaygroundState = {
  lastSearchCriteria: { waters: '', km: 0 },
  stations: [],
};

export const PlaygroundStore = signalStore(
  { providedIn: 'root' }, // make it accessible anywhere in the application; alternative: provide at component level
  withState(initialState),

  withLoadingIndicator(),
  withLocalStorageSync('ngp-playground'),

  withMethods((store, stationsService = inject(StationsService)) => ({
    async load(
      waters: string,
      km: number,
      lon: number,
      lat: number,
      radius: number,
      includeTimeseries: boolean,
      includeCurrentMeasurement: boolean,
      includeCharacteristicValues: boolean,
    ) {
      store.setLoading(true);

      const response = await stationsService.load(
        waters,
        km,
        lon,
        lat,
        radius,
        includeTimeseries,
        includeCurrentMeasurement,
        includeCharacteristicValues,
      );

      patchState(store, () => ({
        stations: response,
        lastSearchCriteria: { waters: waters, km: km },
      }));

      store.setLoading(false);
    },

    save() {
      store.saveToLocalStorage();

      // could be storing to backend here...
    },

    reset() {
      store.resetLocalStorage();
      patchState(store, initialState);

      // could be resetting in backend here...
    },
  })),
);
