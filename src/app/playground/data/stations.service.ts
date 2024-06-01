import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, lastValueFrom, of } from 'rxjs';
import { Station } from './model/Station';

@Injectable({
  providedIn: 'root',
})
export class StationsService {
  #baseUrl =
    'https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?';
  #http = inject(HttpClient);

  load(
    waters: string,
    km: number,
    lon: number,
    lat: number,
    radius: number,
    includeTimeseries: boolean,
    includeCurrentMeasurement: boolean,
    includeCharacteristicValues: boolean,
  ): Promise<Station[]> {
    let url = this.#baseUrl;

    url += 'includeTimeseries=' + (includeTimeseries ? 'true' : 'false');
    url +=
      '&includeCurrentMeasurement=' +
      (includeCurrentMeasurement ? 'true' : 'false');
    url +=
      '&includeCharacteristicValues=' +
      (includeCharacteristicValues ? 'true' : 'false');

    url += waters ? '&waters=' + waters : '';
    url += km ? '&km=' + km : '';
    url += lon ? '&longitude=' + lon : '';
    url += lat ? '&latitude=' + lat : '';
    url += radius ? '&radius=' + radius : '';

    return lastValueFrom(
      this.#http.get<Station[]>(url).pipe(
        catchError((err) => {
          console.error('Error loading stations', err);
          return of([]);
        }),
      ),
    );
  }
}
