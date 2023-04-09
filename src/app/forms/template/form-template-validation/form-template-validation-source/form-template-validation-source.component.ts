import { Component } from '@angular/core';

@Component({
  selector: 'app-form-template-validation-source',
  templateUrl: './form-template-validation-source.component.html',
})
export class FormTemplateValidationSourceComponent {

  componentSource = `
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
  
  }`;

  htmlSource = `
  <form (ngSubmit)="onSubmitForm(theForm)" #theForm="ngForm">
  <div><label for="username">Name</label></div>
  <div>
    <input id="username" name="username" ngModel required type="text" #name="ngModel">
  </div>
  <div [hidden]="name.valid || name.pristine" class="input-error-message">
    Name is required
  </div>
  <div><label for="password">Password</label></div>
  <div>
    <input id="password" name="password" ngModel type="password">
  </div>

  <div><label for="email">e-mail</label></div>
  <div>
    <input email id="email" name="email" ngModel type="email" #emailInput="ngModel">
  </div>
  <div class="input-error-message" *ngIf="emailInput.invalid && emailInput.touched">
    Please enter a valid email address.
  </div>
  <div><label for="dob">Date of birth</label></div>
  <div>
    <input date id="dob" name="dob" ngModel type="date">
  </div>

  <div><label for="newsLetter">Subscribe to newsletter</label></div>
  <div>
    <input id="newsLetter" name="newsLetter" ngModel type="checkbox">
  </div>

  <div><label for="programmingLanguage">Programming language</label></div>
  <div>
    <select id="programmingLanguage" name="programmingLanguage" [ngModel]="'java'">
      <option value="java">Java</option>
      <option value="python">Python</option>
    </select>
  </div>

  <div><label for="dominantHand">Dominant hand</label></div>
  <div>
    <input id="programmingLanguageL" name="dominantHand" ngModel type="radio" value="left">Left
    <input id="programmingLanguageR" name="dominantHand" ngModel type="radio" value="right">Right
  </div>

  <div>
    <button [disabled]="theForm.invalid" type="submit">Submit</button>
  </div>
</form>`;

  cssSource = `
  /*
  * Valid controls with a required attribute or class.
  */
 .ng-valid[required], .ng-valid.required  {
   border-left: 5px solid #42A948;
 }
   
 /*
  * Invalid controls, except the form itself (to prevent a border around the whole form.
  */
  .ng-invalid:not(form)  {
   border-left: 5px solid #a94442;
 }
 
 /*
  * Error message after the user has entered an invalid value.
  */
 .input-error-message {
   border: 1px solid red;
 }`;

}
