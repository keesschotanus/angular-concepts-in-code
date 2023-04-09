import { Component } from '@angular/core';

/**
 * Demo of style binding and the ngStyle attribute directive.
 */
@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent {

  /**
   * Gets an object with different styles.
   * @returns An object with different styles.
   */
  getStyleObject () {
    return {
      'font-style': 'italic',
      'font-weight': 'bold'
    };
  }
}
