import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

/**
 * Adds validation to the basic (Reactive) Form.
 */
@Component({
  selector: 'app-form-reactive-validation',
  templateUrl: './form-reactive-validation.component.html',
})
export class FormReactiveValidationComponent implements OnInit {

  /**
   * The signup form.
   */
  signupForm: FormGroup;
  
  emailFormControl: FormControl;

  constructor() {
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
   * Creates the signup form.
   */
  ngOnInit() {
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
  emailDotComValidator(formControl: FormControl): {[key: string]: string} | null { 
    debugger;
    let email = <string>formControl.value; 
    if (email && !email.endsWith(".com")) {
      return { 'topLevelDomain': 'This is not a dot com email address' };
    }
    return null;     
  }
}
