import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { withLoadingIndicator } from './with-loading-indicator';
import { withLocalStorageSync } from './with-local-storage-sync';
import { StationsService } from './stations.service';
import { inject } from '@angular/core';

export interface PlaygroundState {
  anItem: boolean;
}

const initialState: PlaygroundState = {
  anItem: false,
};

export const PlaygroundStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),

  withLoadingIndicator(),
  withLocalStorageSync('ngp-playground'),

  withMethods((state) => {
    const stationsService = inject(StationsService);
    return {
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
        state.setLoading(true);

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

        console.log('RESP', typeof response);

        //TODO 1. state patchen
        //TODO 2. anzeigen in component als Tabelle
        patchState(state, {
          /*anItem: theLoadedValue, etc. */
        });

        state.setLoading(false);
      },
      save() {
        state.saveToLocalStorage();

        // storing to backend here...
      },
      reset() {
        state.resetLocalStorage();
        patchState(state, initialState);

        // storing to backend here...
      },
    };
  }),
);
