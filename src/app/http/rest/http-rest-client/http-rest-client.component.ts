import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

import { FirestorePeriodicTableService } from '../../../services/periodic-table/firestore-periodic-table.service';
import { PeriodicTableElement } from '../../../services/periodic-table/periodic-table-element';

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
  elementForm!: FormGroup;

  /**
   * The atomic number form control.
   */
  atomicNumberFormControl!: FormControl;
  
  /**
   * HTP error code.
   */
  httpErrorCode!: string;

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
      (error: { status: string; }) => {
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
      (error: { status: string; }) => {
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
      (error: { status: string; }) => {
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
}
