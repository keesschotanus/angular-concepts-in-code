import { Component } from '@angular/core';

@Component({
  selector: 'app-http-rest-client-source',
  templateUrl: './http-rest-client-source.component.html',
})
export class HttpRestClientSourceComponent {

  componentSource = `
  import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormControl, Validators } from '@angular/forms';
  import { Response } from '@angular/http';
  
  import { FirestorePeriodicTableService } from 'app/services/periodic-table/firestore-periodic-table.service';
  import { PeriodicTableElement } from 'app/services/periodic-table/periodic-table-element';
  
  /**
   * Demonstrates how to use the HTTP client.
   * The actual usage of the HTTP client is present in the FirestorePeriodicTableService.
   * Here we just subscribe to the FirestorePeriodicTableService to create, read and update elements.
   */
  @Component({
    selector: 'app-http-rest-client',
    templateUrl: './http-rest-client.component.html',
  })
  export class HttpRestClientComponent implements OnInit {
  
    /**
     * The element form.
     */
    elementForm: FormGroup;
  
    /**
     * The atomic number form control.
     */
    atomicNumberFormControl: FormControl;
    
    /**
     * HTP error code.
     */
    httpErrorCode: string;
  
    /**
     * Construtcs this component from the supplied periodicTableService.
     * @param periodicTableService The Periodic Table Service that uses Cloud Firestore.
     */
    constructor(private periodicTableService: FirestorePeriodicTableService) { }
    
    /**
     * Creates the element form.
     */
    ngOnInit() {
      this.atomicNumberFormControl = new FormControl(null, [Validators.required, Validators.min(1), Validators.max(200)]);
      
      this.elementForm = new FormGroup({
        'atomicNumber': this.atomicNumberFormControl,
        'name': new FormControl(null, Validators.required),
        'symbol': new FormControl(null, Validators.required),
        'weight': new FormControl(null),
        'group': new FormControl(null),
        'period': new FormControl(null),
        'block': new FormControl(null),
        'electronConfiguration': new FormControl(null),
      });
    }
  
    /**
     * Called when a single element should be fetched.
     */
    onGetElement() {
      debugger;
      this.periodicTableService.getElement(this.atomicNumberFormControl.value).subscribe(
        (periodicTableElement: PeriodicTableElement) => {
          this.elementForm.controls["symbol"].setValue(periodicTableElement.symbol);
          this.elementForm.controls["name"].setValue(periodicTableElement.name);
          this.elementForm.controls["weight"].setValue(periodicTableElement.weight);
          this.elementForm.controls["block"].setValue(periodicTableElement.block);
          this.elementForm.controls["group"].setValue(periodicTableElement.group);
          this.elementForm.controls["period"].setValue(periodicTableElement.period);
          this.elementForm.controls["electronConfiguration"].setValue(periodicTableElement.electronConfiguration);
  
          this.httpErrorCode = '';
        },
        (error) => {
          console.log(error)
          this.httpErrorCode = error.status;
        }
      );
    }
  
    /**
     * Called when the current element should be updated.
     */
    onUpdateElement() {
      this.periodicTableService.updateElement(this.createPeriodicTableElement()).subscribe(
        (repsonse: Response) => {
          this.httpErrorCode = '';
        },
        (error) => {
          console.log(error);
          this.httpErrorCode = error.status;
        }
      );
    }
  
    /**
     * Called when a new element should be created and persisted.
     */
    onCreateElement() {
      this.periodicTableService.createElement(this.createPeriodicTableElement()).subscribe(
        (repsonse: Response) => {
          this.httpErrorCode = '';
        },
        (error) => {
          console.log(error);
          this.httpErrorCode = error.status;
        }
      );
    }
  
    /**
     * Creates a new PeriodicTableElement from the different form controls.
     * @returns A new PeriodicTableElement.
     */
    private createPeriodicTableElement(): PeriodicTableElement {
      var result = new PeriodicTableElement(
        this.atomicNumberFormControl.value,
        this.elementForm.controls["symbol"].value,
        this.elementForm.controls["name"].value);
  
        result.weight = this.elementForm.controls["weight"].value;
        result.block = this.elementForm.controls["block"].value;
        result.group = this.elementForm.controls["group"].value;
        result.period = this.elementForm.controls["period"].value;
        result.electronConfiguration = this.elementForm.controls["electronConfiguration"].value;
  
      return result;
    }
  }`;

  htmlSource = `
  <form [formGroup]="elementForm">
    <div><label for="atomicNumber">Atom Number</label></div>
    <div>
      <input formControlName="atomicNumber" id="atomicNumber" type="text">
      <button (click)="onGetElement()">Get the element</button>
    </div>

    <div><label for="symbol">Symbol</label></div>
    <div>
      <input formControlName="symbol" id="symbol" type="text">
    </div>

    <div><label for="name">Name</label></div>
    <div>
      <input formControlName="name" id="name" type="text">
    </div>

    <div><label for="weight">Weight</label></div>
    <div>
      <input formControlName="weight" id="weight" type="text">
    </div>

    <div><label for="group">Group</label></div>
    <div>
      <input formControlName="group" id="group" type="text">
    </div>

    <div><label for="period">Period</label></div>
    <div>
      <input formControlName="period" id="period" type="text">
    </div>

    <div><label for="block">Block</label></div>
    <div>
      <input formControlName="block" id="block" type="text">
    </div>

    <div><label for="electronConfiguration">Electron configuration</label></div>
    <div>
      <input formControlName="electronConfiguration" id="electronConfiguration" type="text">
    </div>

    <div>
      <button (click)="onUpdateElement()">Update</button>
      <button (click)="onCreateElement()">Create</button>
      <span>HTTP code:</span>{{ httpErrorCode }}
    </div>
  </form>`;

  serviceSource = `
  import { Injectable } from '@angular/core';
  import { Http, Response } from '@angular/http';
  import 'rxjs/Rx';
  import { Observable } from 'rxjs/Rx';
  
  import { PeriodicTableElement } from 'app/services/periodic-table/periodic-table-element';
  
  /**
   * Periodic Table Service using Google's Cloud Firestore REST API.
   */
  @Injectable()
  export class FirestorePeriodicTableService {
  
    /**
     * URL for Google's Cloud Firestore REST api.
     */
    private url = "https://firestore.googleapis.com/v1beta1/projects/schotanus-demo-web-angular/databases/(default)/documents/";
  
    /**
     * Name of the collection we are maintaining.
     */
    private collection = "elements";
  
  /**
   * Private key to use Google's REST API.
   */
    private key = "AIzaSyBgEJPDeTlUXDwgOUpu1SAS2ch72ZVSK2k";
  
    /**
     * Constructs this service from the supplied http client.
     * @param http HTTP client.
     */
    constructor(private http: Http) {
      
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
      return this.http.get(this.url + this.collection + '/' + atomicNumber)
        .map((response: Response) => {
          return this.convertDocumentToElement(response);
        });
    }
  
    /**
     * Creates a new element in the Cloud Firestore database by issuing a post request.
     * @param element The element to persist.
     * @return An Observable of type PeriodicTableElement.
     */
    createElement(element: PeriodicTableElement): Observable<Response> {
      var document = this.convertElementToDocument(element);
      return this.http.post(this.url + this.collection + '?documentId=' + element.atomicNumber, document);
    };
  
    /**
     * Updates an existing element in the Cloud Firestore database by issuing a patch request.
     * @param element The element to persist.
     * @return An Observable of type PeriodicTableElement.
     */
    updateElement(element: PeriodicTableElement): Observable<Response> {
      var document = this.convertElementToDocument(element);
      return this.http.patch(this.url + this.collection + '/' + element.atomicNumber + '?currentDocument.exists=true' , document);
    };
  
    /**
     * Converts a Firestore repsonse, consisting of a document to an element.
     * @param response The reponse to convert to an element.
     * @return The element contained in the supplied response.
     */
    private convertDocumentToElement(response: Response): PeriodicTableElement {
      var document = JSON.parse(response.text());
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
      return \`{
        "fields": {
          "atomicNumber": { "integerValue":"&#36;{element.atomicNumber}" },
          "symbol": { "stringValue":"&#36;{element.symbol}" },
          "name": { "stringValue":"&#36;{element.name}" },
          "weight": { "stringValue":"&#36;{element.weight}" },
          "block": { "stringValue":"&#36;{element.block}" },
          "group": { "stringValue":"&#36;{element.group}" },
          "period": { "stringValue":"&#36;{element.period}" },
          "electronConfiguration": { "stringValue":"&#36;{element.electronConfiguration}" }
        }
      }\';
    }
  }`;

  elementSource = `
  /**
   * Abstraction of an Element of the Periodic Table.
   */

  export class PeriodicTableElement {

    /**
     * The unique atomic number of this element.
     */
     atomicNumber: number;

     /**
      * Name of this Element.
      */
     name: string;

     /**
      * Symbol of this Element.
      */
     symbol: string;

     /**
      * The atomic weight of this Element.
      * The weight is represented by a string since it may contain parentheses and square brackets.
      */
     weight: string;

     /**
      * Group of this Element.
      * Elements are in a group from 1 to 18 or they are not in a group at all (Lanthanides for example).
      */
     group: string;
   
     /**
      * Period of this Element.
      * Periods are numbered from 1 to 7.
      */
     period: string;

     /**
      * Block of this Element.
      * Valid blocks are: s, p, d, f (and hypothetically g).
      */
     block: string;

     /**
      * Electron configuration of this Element.
      * An example electron configuration is: [He] 2s2 2p1, which is the configuration for Boron.
      */
     electronConfiguration: string;

     /**
      * Constructs this Element from the supplied atomicNumber, symbol and name.
      * @param atomicNumber The atomic number of this Element.
      * @param symbol The symbol of this Element.
      * @param name The name of this Element.
      */
     constructor (atomicNumber:number, symbol: string, name: string) {
       this.atomicNumber = atomicNumber;
       this.symbol = symbol;
       this.name = name;
     }
  }`;

}
