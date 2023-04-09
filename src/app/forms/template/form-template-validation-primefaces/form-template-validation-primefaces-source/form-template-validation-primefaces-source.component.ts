import { Component } from '@angular/core';

@Component({
  selector: 'app-form-template-validation-primefaces-source',
  templateUrl: './form-template-validation-primefaces-source.component.html',
})
export class FormTemplateValidationPrimefacesSourceComponent {

  componentSource = `
  import { Component, OnInit } from '@angular/core';
  import { NgForm } from '@angular/forms';
  
  import { Message } from 'primeng/message';
  import { MessageService } from 'primeng/common/messageservice';
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
    public programmingLanguages: SelectItem[];
    
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
    
    }`;

  htmlSource = `
  <p-messages [(value)]="messages"></p-messages>
  
  <form (ngSubmit)="onSubmitForm(theForm)" #theForm="ngForm">
  
    <div class="ui-g">
      <div class="ui-g-12 ui-md-2"><label for="username">Name</label></div>
      <div class="ui-g-12 ui-md-10">
        <input id="username" name="username" ngModel pInputText required type="text" #name="ngModel">
        <div class="ui-message ui-messages-error ui-corner-all" *ngIf="name.invalid && name.touched">
          Name is required
        </div>
      </div>
    </div>
  
    <div class="ui-g">
      <div class="ui-g-12 ui-md-2"><label for="password">Password</label></div>
      <div class="ui-g-12 ui-md-10"><input id="password" name="password" ngModel pPassword type="password"></div>
    </div>
    
    <div class="ui-g">
      <div class="ui-g-12 ui-md-2"><label for="email">e-mail</label></div>
      <div class="ui-g-12 ui-md-10"><input email id="email" name="email" ngModel pInputText required type="email" #email="ngModel">
        <div class="ui-message ui-messages-error ui-corner-all" *ngIf="email.invalid && email.touched">
          Enter a valid email address
        </div>
      </div>
    </div>
    
    <div class="ui-g">
      <div class="ui-g-12 ui-md-2"><label for="dob">Date of birth</label></div>
      <div class="ui-g-12 ui-md-10"><p-calendar id="dob" name="dob" ngModel></p-calendar></div>
    </div>
  
    <div class="ui-g">
      <div class="ui-g-12 ui-md-2"><label for="newsLetter">Subscribe to newsletter</label></div>
      <div class="ui-g-12 ui-md-10"><p-checkbox binary="true" id="newsLetter" name="newsLetter" ngModel type="checkbox" value="subscribe"></p-checkbox></div>
    </div>
      
    <div class="ui-g">
      <div class="ui-g-12 ui-md-2"><label for="programmingLanguage">Programming language</label></div>
      <div class="ui-g-12 ui-md-10">
        <p-dropdown id="programmingLanguage" name="programmingLanguage" ngModel [options]="programmingLanguages"></p-dropdown>
      </div>
    </div>
      
    <div class="ui-g">
      <div class="ui-g-12 ui-md-2"><label for="dominantHand">Dominant hand</label></div>
      <div class="ui-g-12 ui-md-10">
        <p-radioButton id="programmingLanguageL" name="dominantHand" value="left" ngModel></p-radioButton>Left
        <p-radioButton id="programmingLanguageR" name="dominantHand" value="right" ngModel></p-radioButton>Right
      </div>
    </div>
      
    <div class="ui-g">
      <div class="ui-g-12 ui-md-offset-2 ui-md-10"><button [disabled]="!theForm.valid" label="Submit" pButton type="submit"></button></div>
    </div>  
  </form>`;

}
