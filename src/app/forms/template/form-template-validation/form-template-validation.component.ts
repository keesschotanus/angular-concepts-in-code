import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

/**
 * Adds validation to the basic (Template Driven) Form.
 */
@Component({
  selector: 'app-form-template-validation',
  templateUrl: './form-template-validation.component.html',
  styleUrls: ['./form-template-validation.component.css']
})
export class FormTemplateValidationComponent {

  /**
   * Called when the user submits the form.
   * @param form The <a href="https://angular.io/api/forms/NgForm">Angular NgForm object.</a>.
   */
  onSubmitForm(form: NgForm) {
    console.log(form);
  }

}
