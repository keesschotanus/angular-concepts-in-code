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
  private inputReference!: HTMLInputElement;

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
}
