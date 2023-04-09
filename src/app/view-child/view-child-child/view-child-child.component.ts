import { Component } from '@angular/core';

/**
 * Child component to demonstrate @ViewChild.
 */
@Component({
  selector: 'app-view-child-child',
  template: '',
})
export class ViewChildChildComponent {

  /**
   * Gets a value from this child component.
   * @return A fixed string.
   */
  getValueFromChld(): string {
    return "Child's value";
  }
}
