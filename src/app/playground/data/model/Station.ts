/**
 * Pegel-Online API
 * API für das bundesweite Messstellennetz der Wasserstraßen- und Schifffahrtsverwaltung des Bundes.  Die API stellt drei verschiedene Ressourcen zur Verfügung: __Station__, __Measurement__, __Water__. ### Authentifizierung / Autorisierung / API Limitierung Es ist keine Authentifizierung oder Autorisierung notwendig. Aktuell besteht keine API Limitierung. ### Allgemeine Query-Parameter Zusätzlich zu den angegebenen Parametern sind ebenfalls allgemeine Parameter für alle Schnittstellen verfügbar ([Dokumentation](https://www.pegelonline.wsv.de/webservice/dokuRestapi;jsessionid=A294589CCEF6630142D2589F49BFA2EC#urlParameter)). - `charset`: Gibt die Kodierung der Response an. Standard ist hier _UTF-8_. Möglich ist z.B. auch _ISO-8859-1_. - `prettyprint`: Kann die zur besseren Lesbarkeit standardmäßig aktivierte Teilung der Response in mehreren Zeilen deaktivieren: _prettyprint=false_. Diese Einstellung wird für den produktiven Einsatz empfohlen. - `limit/offset`: Einschränkung der Anzahl der Ergebnisse. Hiermit kann \'Pagination\' realisiert werden. `limit` gibt dabei die Anzahl der zurückgegebenen Elemente an. `offset` ermöglicht einen Offset vom Startwert. Beispiel: _limit=10&offset=20_ bedeutet, dass 10 Elemente beginnend mit dem 21. Element zurückgegeben werden.
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { StationWater } from '../model/StationWater';
import { Timeseries } from '../model/Timeseries';

export class Station {
  /**
   * Eindeutige unveränderliche ID
   */
  'uuid'?: string;
  /**
   * Pegelnummer
   */
  'number'?: string;
  /**
   * Pegelname (max. 40 Zeichen)
   */
  'shortname'?: string;
  /**
   * Pegelname (max. 255 Zeichen)
   */
  'longname'?: string;
  /**
   * Flusskilometer
   */
  'km'?: number;
  /**
   * Wasserstraßen- und Schifffahrtsamt
   */
  'agency'?: string;
  /**
   * Längengrad in WGS84 Dezimalnotation
   */
  'longitude'?: number;
  /**
   * Breitengrad in WGS84 Dezimalnotation
   */
  'latitude'?: number;
  'water'?: StationWater;
  'timeseries'?: Array<Timeseries>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: 'uuid',
      baseName: 'uuid',
      type: 'string',
      format: '',
    },
    {
      name: 'number',
      baseName: 'number',
      type: 'string',
      format: '',
    },
    {
      name: 'shortname',
      baseName: 'shortname',
      type: 'string',
      format: '',
    },
    {
      name: 'longname',
      baseName: 'longname',
      type: 'string',
      format: '',
    },
    {
      name: 'km',
      baseName: 'km',
      type: 'number',
      format: 'float',
    },
    {
      name: 'agency',
      baseName: 'agency',
      type: 'string',
      format: '',
    },
    {
      name: 'longitude',
      baseName: 'longitude',
      type: 'number',
      format: 'float',
    },
    {
      name: 'latitude',
      baseName: 'latitude',
      type: 'number',
      format: 'float',
    },
    {
      name: 'water',
      baseName: 'water',
      type: 'StationWater',
      format: '',
    },
    {
      name: 'timeseries',
      baseName: 'timeseries',
      type: 'Array<Timeseries>',
      format: '',
    },
  ];

  static getAttributeTypeMap() {
    return Station.attributeTypeMap;
  }

  public constructor() {}
}
