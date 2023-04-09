import { Component } from '@angular/core';

@Component({
  selector: 'app-form-template-basic-source',
  templateUrl: './form-template-basic-source.component.html',
  styleUrls: ['./form-template-basic-source.component.css']
})
export class FormTemplateBasicSourceComponent  {

  componentSource = `
  import { Component } from '@angular/core';
  import { NgForm } from '@angular/forms';
  
  /**
   * Basic (Template Driven) Form.
   */
  @Component({
    selector: 'app-form-template-basic',
    templateUrl: './form-template-basic.component.html',
    styleUrls: ['./form-template-basic.component.css']
  })
  export class FormTemplateBasicComponent {
  
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
      <input id="username" name="username" ngModel type="text">
    </div>

    <div><label for="password">Password</label></div>
    <div>
      <input id="password" name="password" ngModel type="password">
    </div>

    <div><label for="email">e-mail</label></div>
    <div>
      <input email id="email" name="email" ngModel type="email">
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
      <select id="programmingLanguage" name="programmingLanguage" ngModel>
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
      <button type="submit">Submit</button>
    </div>
  </form>`;
}
