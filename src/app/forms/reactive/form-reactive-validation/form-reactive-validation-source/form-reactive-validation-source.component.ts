import { Component } from '@angular/core';

@Component({
  selector: 'app-form-reactive-validation-source',
  templateUrl: './form-reactive-validation-source.component.html',
})
export class FormReactiveValidationSourceComponent {

  componentSource = `
  import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
  
  /**
   * Adds validation to the basic (Reactive) Form.
   */
  @Component({
    selector: 'app-form-reactive-validation',
    templateUrl: './form-reactive-validation.component.html',
    styleUrls: ['./form-reactive-validation.component.css']
  })
  export class FormReactiveValidationComponent implements OnInit {
  
    /**
     * The signup form.
     */
    signupForm: FormGroup;
    
    emailFormControl: FormControl;
  
    constructor() { }
  
    /**
     * Creates the signup form.
     */
    ngOnInit() {
      this.emailFormControl = new FormControl(null, [Validators.required, this.emailDotComValidator]);
  
      this.signupForm = new FormGroup({
        'username': new FormControl(null, Validators.required),
        'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
        'email': this.emailFormControl,
        'dateOfBirth': new FormControl(null),
        'newsLetter': new FormControl(null),
        'programmingLanguage': new FormControl(null),
        'dominantHand': new FormControl(null),
        'languages': new FormArray([])
      });
    }
  
    /**
     * Gets the languages form controls.
     */
    getLanguageControls() {
      return (<FormArray>this.signupForm.get('languages')).controls
    }
    
    /**
     * Called when the user adds a language.
     */
    onAddLanguage() {
      const languageFormControl = new FormControl(null, Validators.required);
      (<FormArray>this.signupForm.get('languages')).push(languageFormControl);
    }
      
    /**
     * Called when the user submits the signup form.
     */
    onSubmitForm() {
      console.log(this.signupForm);
    }
  
    /**
     * Validates that the email address is a .com email address.
     * @param control The email address control.
     * @returns key and value pair, where the key is 'topLevelDomain'.
     *  The value is the error message.
     */
    emailDotComValidator(formControl: FormControl): {[key: string]: string} { 
      debugger;
      let email = <string>formControl.value; 
      if (email && !email.endsWith(".com")) {
        return { 'topLevelDomain': 'This is not a dot com email address' };
      }
      return null;     
    }
  }`;

  htmlSource = `
  <form [formGroup]="signupForm" (ngSubmit)="onSubmitForm()">
    <div><label for="username">Name</label></div>
    <div>
      <input formControlName="username" id="username" name="username" type="text">
      <div class="input-error-message" *ngIf="signupForm.get('username').invalid && signupForm.get('username').touched">
        Name is required.
      </div>
    </div>

    <div><label for="password">Password</label></div>
    <div>
      <input formControlName="password" id="password" name="password" type="password">
      <div class="input-error-message" *ngIf="signupForm.get('password').invalid && signupForm.get('password').touched">
        Password is required and should have a length of at least 6.
      </div>
    </div>

    <div><label for="email">e-mail</label></div>
    <div>
      <input email formControlName="email" id="email" name="email" type="email">
      <div class="input-error-message" *ngIf="emailFormControl.errors && (emailFormControl.dirty || emailFormControl.touched)">
        <p *ngIf="emailFormControl.errors.required">Email is required</p>
        <p *ngIf="emailFormControl.errors.topLevelDomain">Email must have the dot com top-level-domain</p> 
      </div>
    </div>

    <div><label for="dob">Date of birth</label></div>
    <div>
      <input date formControlName="dateOfBirth" id="dob" name="dob" type="date">
    </div>

    <div><label for="newsLetter">Subscribe to newsletter</label></div>
    <div>
      <input formControlName="newsLetter"  id="newsLetter" name="newsLetter" type="checkbox">
    </div>

    <div><label for="programmingLanguage">Programming language</label></div>
    <div>
      <select formControlName="programmingLanguage" id="programmingLanguage" name="programmingLanguage">
        <option value="java">Java</option>
        <option value="python">Python</option>
      </select>
    </div>

    <div><label for="dominantHand">Dominant hand</label></div>
    <div>
      <input formControlName="dominantHand" id="programmingLanguageL" name="dominantHand"  type="radio" value="left">Left
      <input formControlName="dominantHand" id="programmingLanguageR" name="dominantHand"  type="radio" value="right">Right
    </div>

    <div formArrayName="languages">
      <div>
        <button (click)="onAddLanguage()"  type="button">Add language</button>
      </div>
      <div><label>Languages</label></div>
      <div *ngFor="let languageControl of getLanguageControls(); let i = index">
        <input [formControlName]="i" type="text"> 
      </div>
    </div>

    <div>
      <button [disabled]="signupForm.invalid" type="submit">Submit</button>
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
   * Invalid input items.
   */
  input.ng-invalid  {
    border-left: 5px solid #a94442;
  }
   
  /*
   * Error message after the user has entered an invalid value.
   */
  .input-error-message {
    border: 1px solid red;
  }`;
}
