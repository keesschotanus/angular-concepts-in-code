import { Component } from '@angular/core';

@Component({
  selector: 'app-form-template-basic-primefaces-source',
  templateUrl: './form-template-basic-primefaces-source.component.html',
  styleUrls: ['./form-template-basic-primefaces-source.component.css']
})
export class FormTemplateBasicPrimefacesSourceComponent {

  componentSource = `
  import { Component, OnInit } from '@angular/core';
  import { NgForm } from '@angular/forms';
  import { SelectItem } from 'primeng/primeng';
  
  /**
   * Basic Primefaces (Template Driven) Form.
   */
  @Component({
    selector: 'app-form-template-basic-primefaces',
    templateUrl: './form-template-basic-primefaces.component.html',
    styleUrls: ['./form-template-basic-primefaces.component.css']
  })
  export class FormTemplateBasicPrimefacesComponent implements OnInit {
  
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
      console.log(form);
    }
  
  }`;

  htmlSource = `
  <form (ngSubmit)="onSubmitForm(theForm)" #theForm="ngForm">
  <div class="ui-g">
    <div class="ui-g-12 ui-md-2"><label for="username">Name</label></div>
    <div class="ui-g-12 ui-md-10"><input id="username" name="username" ngModel pInputText type="text"></div>
  </div>

  <div class="ui-g">
    <div class="ui-g-12 ui-md-2"><label for="password">Password</label></div>
    <div class="ui-g-12 ui-md-10"><input id="password" name="password" ngModel pPassword type="password"></div>
  </div>
  
  <div class="ui-g">
    <div class="ui-g-12 ui-md-2"><label for="email">e-mail</label></div>
    <div class="ui-g-12 ui-md-10"><input email id="email" name="email" ngModel pInputText type="email"></div>
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
    <div class="ui-g-12 ui-md-offset-2 ui-md-10"><button label="Submit" pButton type="submit"></button></div>
  </div>  
</form>`;
}
