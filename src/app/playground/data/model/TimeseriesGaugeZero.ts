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

export class TimeseriesGaugeZero {
  /**
   * Einheit des Pegelnullpunkts (immer in Metern über einem Normalhöhennull ([Dokumentation](https://www.pegelonline.wsv.de/gast/hilfe#hilfe_hoehensystem))
   */
  'unit'?: string;
  /**
   * Höhe als Dezimalwert
   */
  'value'?: number;
  /**
   * Beginn der Gültigkeit. [ISO_8601](https://de.wikipedia.org/wiki/ISO_8601) Datum.
   */
  'validFrom'?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: 'unit',
      baseName: 'unit',
      type: 'string',
      format: '',
    },
    {
      name: 'value',
      baseName: 'value',
      type: 'number',
      format: 'float',
    },
    {
      name: 'validFrom',
      baseName: 'validFrom',
      type: 'string',
      format: 'date',
    },
  ];

  static getAttributeTypeMap() {
    return TimeseriesGaugeZero.attributeTypeMap;
  }

  public constructor() {}
}
