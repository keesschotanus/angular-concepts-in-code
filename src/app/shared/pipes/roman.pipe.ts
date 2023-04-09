import { Pipe, PipeTransform } from '@angular/core';

import { Roman } from '../../shared/util/roman';

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

}
