import { Component } from '@angular/core';

@Component({
  selector: 'app-roman-source',
  templateUrl: './roman-source.component.html',
})
export class RomanSourceComponent {

  componentSource = `import { Component } from '@angular/core';
  
/**
 * Demonstrates how to use the roman pipe.
 */
@Component({
  selector: 'app-roman',
  templateUrl: './roman.component.html',
})
export class RomanComponent {
  /** Used for Latin input */
  latin = "";
}
`;

  htmlSource = `<h1>Roman Pipe</h1>
  
<div class="ui-g">
  <div class="ui-g-12 ui-md-2">
    <label for="idLatin">Latin input</label>
  </div>
  <div class="ui-g-12 ui-md-10">
    <input
      id="idLatin"
      maxlength="4"
      [(ngModel)]="latin"
      pInputText
      size="4"
      type="text">
  </div>
</div>
  
<div class="ui-g">
  <div class="ui-g-12 ui-md-2">
    <label>Roman ouput</label>
  </div>
  <div class="ui-g-12 ui-md-10">
    {{ latin | roman }}
  </div>
</div>
  
<div class="ui-g">
  <div class="ui-g-12 ui-md-2">
    <label>{{ '{' }}{{ '{' }} 123 | roman {{ '}' }}{{ '}' }}</label>
  </div>
  <div class="ui-g-12 ui-md-10">
    {{ 123 | roman }}
  </div>
  <div class="ui-g-12 ui-md-2">
    <label>{{ '{' }}{{ '{' }} '123' | roman {{ '}' }}{{ '}' }}</label>
  </div>
  <div class="ui-g-12 ui-md-10">
    {{ '123' | roman }}
  </div>
</div>`;

  pipeSource = `import { Pipe, PipeTransform } from '@angular/core';

import { Roman } from 'app/shared/util/roman';

@Pipe({
  name: 'roman'
})
/**
 * Pipe to convert Latin numbers to Roman numbers.
 * Usage: numeric-expression | roman
 * @author Kees Schotanus
 */
export class RomanPipe implements PipeTransform {

  /**
   * Transforms the input value into a Roman number.
   * @param value The value to convert to a Roman number.
   * @see roman.ts
   * @return The Roman number corresponding to the supplied value.
   *  For values that can not be converted, the input value is retuned as-is.
   */
  transform(value: any): any {

    let result;
    try {
      result = Roman.toRoman(value);
    } catch (exception) {
      result = value;
    }

    return result;
  }

}`;

  classSource = `/**
 * Provides functionality to convert a Latin number to a Roman number.
 */
export class Roman {

  /**
   * Roman numerals array to turn the conversion of a Latin number to a Roman number in a simple lookup.
   * Note: The Romans did not have a value for 0.
   * It is translated to an empty string.
   */
  private static ROMAN_NUMERALS: string[][] = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["", "M", "MM", "MMM"]
  ];

  /**
   * Converts the supplied value to a Roman number.
   * @param value The value to convert to a Roman number.
   *  The value must be a number or convertible to a number.
   * @return The Roman number representation of the input value.
   * @throws string error when
   */
  public static toRoman(value: any): string {
    let result = "";

    // Do not process null or undefined input.
    if (value != null) {
      let latinValue = value.toString();

      if (Roman.canBeConvertedToRoman(latinValue)) {
        // Lookup the Roman numerals for each Latin digit and append it to the result.
        for (let i = 0; i < latinValue.length; ++i) {
          let powerOfTen = latinValue.length - i - 1;
          let latinDigit = latinValue.charAt(i);
          result += Roman.ROMAN_NUMERALS[powerOfTen][latinDigit];
        }
      } else {
        throw "The input:" + value + ", can't be converted to a Roman number";
      }
    }

    return result;
  }

  /**
   * Determines if the input value is a valid Latin value that can be converted to a Roman number.
   * @param value The vlaue to check.
   * @return True when the input value is a valid Latin value that can be converted to a Roman number.
   */
  public static canBeConvertedToRoman(value: string): boolean {

    /*
     * This will parse all integer values, including 5what, 6e1 and -0 for example.
     * The result will be NaN when the input value is not a valid number.
     */
    let integerValue = parseInt(value);

    /*
     * Check that the integer value is in range.
     * Check that the inter value, when converted to a string, equals the original input value.
     * When 5X for example is entered, the integer value will be "5" after conversion to a string.
     * Since 5 is not equal to "5X" we know that the input contained one or more invalid characters.
     */
    return integerValue >= 0 && integerValue < 4000 && value === integerValue.toString();
  }
}`;
}
