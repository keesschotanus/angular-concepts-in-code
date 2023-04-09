import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Message } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { SelectItem } from 'primeng/api';

/**
 * Adds validation to the basic Primefaces (Template Driven) Form.
 */
@Component({
  selector: 'app-form-template-validation-primefaces',
  templateUrl: './form-template-validation-primefaces.component.html',
  providers: [MessageService],
})
export class FormTemplateValidationPrimefacesComponent implements OnInit {

  messages: Message[] = [];
  
  constructor(private messageService: MessageService) {}

  /**
   * List of languages.
   */
  public programmingLanguages!: SelectItem[];
  
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
      this.messages = [];
      this.messages.push({severity:'success', summary:'Success Message', detail:'Form submitted'});
      console.log(form);
    }
  
  }
  




