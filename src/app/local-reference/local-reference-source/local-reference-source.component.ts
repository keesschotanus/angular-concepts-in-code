import { Component } from '@angular/core';

@Component({
  selector: 'app-local-reference-source',
  templateUrl: './local-reference-source.component.html',
})
export class LocalReferenceSourceComponent {

  componentSource = `
  import { Component } from '@angular/core';
  
  /**
   * Demonstrates local references.
   */
  @Component({
    selector: 'app-local-reference',
    templateUrl: './local-reference.component.html',
  })
  export class LocalReferenceComponent {
  
    /**
     * The reference to the input item.
     */
    private inputReference: HTMLInputElement;
  
    /**
     * Gets the value from the HTML input reference.
     * @return The value from the HTML input reference.
     */  
    getInputValue() {
      return this.inputReference ? this.inputReference.value : '';
    }
  
    /**
     * Called when the button after the input item is clicked.
     * @param inputReference Reference to the HTML input item.
     */
    onClick(inputReference: HTMLInputElement) {
      this.inputReference = inputReference;
    }
  }`;

  htmlSource = `
  <input type="text" #inputReference>
  <button (click)="onClick(inputReference)">Click</button>
  {{ getInputValue() }}<br>
  <!-- Since we have a reference to the child component, we can get a value from the child -->
  {{ childReference.getValueFromChild() }}
  <app-local-reference-child #childReference></app-local-reference-child>
  `;

  childComponentSource = `
  import { Component } from '@angular/core';
  
  /**
   * Child component for the local reference demo.
   */
  @Component({
    selector: 'app-local-reference-child',
    template: '',
  })
  export class LocalReferenceChildComponent {
  
    /**
     * Simply returns a constant value.
     * @return A constant value.
     */
    getValueFromChild(): string {
      return "child value";
    }
  }`;

}
