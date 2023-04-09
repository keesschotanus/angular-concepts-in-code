/////////////// This file has commented out methods.
/////////////// It is the only file that resulted in compile time errors
/////////////// after moving to the latest version of angular

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PeriodicTableElement } from '../periodic-table/periodic-table-element';

/**
 * Periodic Table Service using Google's Cloud Firestore REST API.
 */
@Injectable()
export class FirestorePeriodicTableService {

  /**
   * URL for Google's Cloud Firestore REST api.
   */
  private url = "https://firestore.googleapis.com/v1beta1/projects/josef-demo-web-angular/databases/(default)/documents/";

  /**
   * Name of the colelction we are maintainig.
   */
  private collection = "elements";

  /**
   * Private key to use Google's REST API.
   */
  private key = "AIzaSyBgEJPDeTlUXDwgOUpu1SAS2ch72ZVSK2k";
  

  /**
   * Cosntructs this service from the supplied http client.
   * @param http HTTP client.
   */
  constructor(private http: HttpClient) {
    
  }

  /**
   * Gets all elements of the Periodic Table.
   * @return The elements of the Periodic Table.
   */  
  getElements() {
    return this.http.get(this.url + this.collection);
  }

  /**
   * Gets a single element of the Periodic Table.
   * A GET request is used to get a document from Firestore, which is mapped to an element.
   * @param atomicNumber The atomic number of the element to get.
   * @return An Observable of type PeriodicTableElement.
   */
  getElement(atomicNumber: number): Observable<PeriodicTableElement> {
    // return this.http.get(this.url + this.collection + '/' + atomicNumber + '?key=' + this.key)
    //   .map((response: Response) => {
    //     return this.convertDocumentToElement(response);
    //   });
    return new Observable<PeriodicTableElement>();
  }

  /**
   * Creates a new element in the Cloud Firestore database by issuing a post request.
   * @param element The element to persist.
   * @return An Observable of type PeriodicTableElement.
   */
  createElement(element: PeriodicTableElement): Observable<Response> {
    // var document = this.convertElementToDocument(element);
    // return this.http.post(this.url + this.collection + '?documentId=' + element.atomicNumber, document);
    return new Observable<Response>();
  };

  /**
   * Updates an existing element in the Cloud Firestore database by issuing a patch request.
   * @param element The element to persist.
   * @return An Observable of type PeriodicTableElement.
   */
  updateElement(element: PeriodicTableElement): Observable<Response> {
    // var document = this.convertElementToDocument(element);
    // return this.http.patch(this.url + this.collection + '/' + element.atomicNumber + '?currentDocument.exists=true' , document);
    return new Observable<Response>();
  };

  /**
   * Converts a Firestore response, consisting of a document to an element.
   * @param response The response to convert to an element.
   * @return The element contained in the supplied response.
   */
  private async convertDocumentToElement(response: Response): Promise<PeriodicTableElement> {
    var document = JSON.parse(await response.text());
    var atomicNumber = document.fields.atomicNumber.integerValue;
    var symbol = document.fields.symbol.stringValue;
    var name = document.fields.name.stringValue;
    var result = new PeriodicTableElement(atomicNumber, symbol, name);
    result.weight = document.fields.weight ? document.fields.weight.stringValue : null;
    result.block = document.fields.block ? document.fields.block.stringValue : null;
    result.period = document.fields.period ? document.fields.period.stringValue : null;
    result.group= document.fields.group ? document.fields.group.stringValue : null;
    result.electronConfiguration = document.fields.electronConfiguration ? document.fields.electronConfiguration.stringValue : null;
    
    return result;
  }

  /**
   * Converts an element of the Periodic Table to a Cloud Firestore document.
   * @param element The element to convert to a document.
   * @return The document created from the supplied element.
   */
  private convertElementToDocument(element: PeriodicTableElement): string {
    return `{
      "fields": {
        "atomicNumber": { "integerValue":"${element.atomicNumber}" },
        "symbol": { "stringValue":"${element.symbol}" },
        "name": { "stringValue":"${element.name}" },
        "weight": { "stringValue":"${element.weight}" },
        "block": { "stringValue":"${element.block}" },
        "group": { "stringValue":"${element.group}" },
        "period": { "stringValue":"${element.period}" },
        "electronConfiguration": { "stringValue":"${element.electronConfiguration}" }
      }
    }`;
  }
}
