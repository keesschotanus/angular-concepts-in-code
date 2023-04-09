import { Component } from '@angular/core';

@Component({
  selector: 'app-form-reactive-basic-source',
  templateUrl: './form-reactive-basic-source.component.html',
})
export class FormReactiveBasicSourceComponent {

  componentSource = `
  import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormControl } from '@angular/forms';
  
  /**
   * Basic (Reactive) Form.
   */
  @Component({
    selector: 'app-form-reactive-basic',
    templateUrl: './form-reactive-basic.component.html',
  })
  export class FormReactiveBasicComponent implements OnInit {
  
    /**
     * The signup form.
     */
    signupForm: FormGroup;
    
    constructor() { }
  
    /**
     * Creates the signup form.
     */
    ngOnInit() {
      this.signupForm = new FormGroup({
        'username': new FormControl(null),
        'password': new FormControl(null),
        'email': new FormControl(null),
        'dateOfBirth': new FormControl(null),
        'newsLetter': new FormControl(null),
        'programmingLanguage': new FormControl(null),
        'dominantHand': new FormControl(null),
      });
    }
  
    /**
     * Called when the user submits the signup form.
     */
    onSubmitForm() {
      console.log(this.signupForm);
    }
  
  }`;

  htmlSource = `
  <form [formGroup]="signupForm" (ngSubmit)="onSubmitForm()">
    <div><label for="username">Name</label></div>
    <div>
      <input formControlName="username" id="username" name="username" type="text">
    </div>

    <div><label for="password">Password</label></div>
    <div>
      <input formControlName="password" id="password" name="password" type="password">
    </div>

    <div><label for="email">e-mail</label></div>
    <div>
      <input email formControlName="email" id="email" name="email" type="email">
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

    <div>
      <button type="submit">Submit</button>
    </div>
  </form>`;
}
