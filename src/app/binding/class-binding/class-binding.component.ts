import { Component } from '@angular/core';

/**
 * Demo of class binding and the ngClass attribute directive.
 */
@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent {

  /**
   * True value.
   */
  public isClassOne = true;
  
  /**
   * Gets the names of the classes.
   * @returns "classOne classTwo"
   */
  getClassNames() {
    return "classOne classTwo";
  }

  /**
   * Gets a class object, suitable to be used with ngClass.
   * @returns A class object.
   */
  getClassObject() {
    return { classOne: this.isClassOne, classTwo: false };
  }
}
