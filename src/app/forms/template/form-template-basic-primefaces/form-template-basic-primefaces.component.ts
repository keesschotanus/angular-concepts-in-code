import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SelectItem } from 'primeng/api/selectitem';

/**
 * Basic Primefaces (Template Driven) Form.
 */
@Component({
  selector: 'app-form-template-basic-primefaces',
  templateUrl: './form-template-basic-primefaces.component.html',
})
export class FormTemplateBasicPrimefacesComponent implements OnInit {

  /**
   * List of languages.
   */
  public programmingLanguages: SelectItem[] = [];

  ngOnInit() {
    this.programmingLanguages = [];
    this.programmingLanguages.push({label:'Java', value:'java'});
    this.programmingLanguages.push({label:'Python', value:'python'});
  }

  /**
   * Called when the user submits the form.
   * @param form The <a href="https://angular.io/api/forms/NgForm">Angular NgForm object.</a>.
   */
  onSubmitForm(form: NgForm) {
    console.log(form);
  }

}
