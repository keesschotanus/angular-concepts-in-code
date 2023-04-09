import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child-source',
  templateUrl: './view-child-source.component.html',
})
export class ViewChildSourceComponent {
  componentSource = `
  import { Component, ViewChild } from '@angular/core';
  import { ViewChildChildComponent } from 'app/view-child/view-child-child/view-child-child.component';
  
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
    private childComponent: ViewChildChildComponent;
  
    /**
     * Gets a value from the child component.
     * @return A value retrieved from the child component.
     */
    getChildValue() {
      return this.childComponent.getValueFromChld();
    }
  
  }`;

  htmlSource = `
  {{ getChildValue() }}
  <app-view-child-child></app-view-child-child>`;

  childComponentSource = `
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
  }`;
}
