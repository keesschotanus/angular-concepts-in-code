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
  signupForm!: FormGroup;
  
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

}
