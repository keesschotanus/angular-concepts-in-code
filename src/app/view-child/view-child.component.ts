import { Component, ViewChild } from '@angular/core';
import { ViewChildChildComponent } from '../view-child/view-child-child/view-child-child.component';

/**
 * Demonstrates using @ViewChild.
 */
@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
})
export class ViewChildComponent {

  /**
   * Inject the child component.
   */
  @ViewChild(ViewChildChildComponent)
  private childComponent!: ViewChildChildComponent;

  /**
   * Gets a value from the child component.
   * @return A value retrieved from the child component.
   */
  getChildValue() {
    return this.childComponent.getValueFromChld();
  }

}
