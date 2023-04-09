import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

/**
 * Basic (Template Driven) Form.
 */
@Component({
  selector: 'app-form-template-basic',
  templateUrl: './form-template-basic.component.html',
  styleUrls: ['./form-template-basic.component.css']
})
export class FormTemplateBasicComponent {

  /**
   * Called when the user submits the form.
   * @param form The <a href="https://angular.io/api/forms/NgForm">Angular NgForm object.</a>.
   */
  onSubmitForm(form: NgForm) {
    console.log(form);
  }
}
