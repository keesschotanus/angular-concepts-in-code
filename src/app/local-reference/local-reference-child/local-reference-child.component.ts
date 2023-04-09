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
}
