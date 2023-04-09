/**
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
}

