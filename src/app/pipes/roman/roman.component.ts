import { Component } from '@angular/core';

/**
 * Demonstrates how to use the roman pipe.
 */
@Component({
  selector: 'app-roman',
  templateUrl: './roman.component.html',
})
export class RomanComponent {
  /** 
   * Used for Latin input.
   * Can't make this private since aot won't compile.
   */
  latin = "";
}
