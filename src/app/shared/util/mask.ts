/**
 * Adds Mask characters to values to create nicely formatted output.
 * A 16 digit credit card number for example may have this mask:
 * '(D{4} ){3} DDDD' which is equivalent to: 'DDDD DDDD DDDD DDDD'.
 * A credit card number like: 1234567887654321 will be displayed as:
 * 1234 5678 8765 4321.
 * 
 */
export class Mask {

  public static mask(value: string, mask: string): string {
    let maskWithoutGroups = Mask.substituteGroups(mask);
    let simpleMask = Mask.substituteRepetitions(maskWithoutGroups);

    let result = "";
    let valueIndex = 0;
    for (let maskIndex = 0; maskIndex < simpleMask.length; ++maskIndex) {
      switch (simpleMask.charAt(maskIndex)) {
      case 'D':
        result += value.charAt(valueIndex++);
        break;
      case 'A':
        result += value.charAt(valueIndex++);
        break;
      case 'N':
        result += value.charAt(valueIndex++);
        break;
      case 'U':
        result += value.charAt(valueIndex++).toUpperCase();
        break;
      case 'L':
        result += value.charAt(valueIndex++).toLowerCase();
        break;
      case '#':
        result += value.charAt(valueIndex++);
        break;
      case '?':
        result += value.charAt(valueIndex++);
        break;
      default:
        // Not a mask character, add it to the result.
        result += simpleMask.charAt(maskIndex);
        break;
      }
    }

    return result;
  }

  /**
   * Substitutes all the groups in the input mask with written out mask tokens.
   * Groups are specified using parenthesis and should be followed by a repetition.
   * A credit card number mask for example may look like this: '(D{4} ){3} DDDD'
   * Here a single group exists: (D{4}) followed by the repetition {3}.
   * This method writes out, so to speak, all groups and repetitions.
   * The result in the above case is: 'DDDD DDDD DDDD DDDD'
   * Groups may also be nested and the repetitions may also have the format {min,max}.
   * For example: '(DD(AA){1,2}){2,3}' will be returned as: 'DDAAaaDDAAaaddaaaa'.
   * Note that optional mask tokens are converted to lower case.
   * @param mask The input mask to substitute all the groups in.
   * 
   * @return The input mask where all groups have been substituted
   */
  private static substituteGroups(mask: string): string {
    let result = mask;
    debugger;
    // Replace groups from right to left to allow for groups to be nested
    let parenthesisOpenPosition = Mask.lastIndexOfParenthesisOpen(result);
    while (parenthesisOpenPosition !== -1) {
      let parenthesisClosePosition = Mask.indexOfParenthesisClose(result, parenthesisOpenPosition);
      let accoladeOpenPosition = parenthesisClosePosition + 1;
      let accoladeClosePosition = result.indexOf("}", accoladeOpenPosition);
      let textBetweenAccolades = result.substring(accoladeOpenPosition + 1, accoladeClosePosition);
      let commaPosition = textBetweenAccolades.indexOf(",");
      let minRepetitions = parseInt(textBetweenAccolades);
      let textBetweenParenthesis = result.substring(parenthesisOpenPosition + 1, parenthesisClosePosition);
      let groupReplacementText = textBetweenParenthesis.repeat(minRepetitions);

      if (commaPosition !== -1) {
        // Minimum and maximum number of repetitions exist
        let maxRepetitions = parseInt(textBetweenAccolades.substring(commaPosition + 1));
        let optionalRepetitions = maxRepetitions - minRepetitions;
        groupReplacementText += Mask.toLowerCase(textBetweenParenthesis).repeat(optionalRepetitions);
      }

      // Replace the group and its repetitions with a written out form
      result = result.replace(result.substring(parenthesisOpenPosition, accoladeClosePosition + 1), groupReplacementText);

      parenthesisOpenPosition = Mask.lastIndexOfParenthesisOpen(result);
    }

    return result;
  }

  /**
   * Substitutes all the repetitions in the input mask.
   * @param mask The input mask to substitute all the repetitions in.
   * 
   * @return The input mask where all repetitions have been substituted
   */
  private static substituteRepetitions(mask: string): string {
    let result = mask;
    let isBetweenHashes = false;

    for (let index = 0; index < result.length; ++index) {
      let characterAtIndex = result.charAt(index);
      if (characterAtIndex === "#") {
        isBetweenHashes = !isBetweenHashes;
      }
      if (characterAtIndex === "{" && !isBetweenHashes) {
        let accoladeClosePosition = result.indexOf("}", index);
        let textBetweenAccolades = result.substring(index + 1, accoladeClosePosition);
        let commaPosition = textBetweenAccolades.indexOf(",");
        let minRepetitions = parseInt(textBetweenAccolades);
        let replacementText = result.charAt(index -1).repeat(minRepetitions);

        if (commaPosition !== -1) {
          // Minimum and maximum number of repetitions exist
          let maxRepetitions = parseInt(textBetweenAccolades.substring(commaPosition + 1));
          let optionalRepetitions = maxRepetitions - minRepetitions;
          replacementText += result.charAt(index - 1).toLocaleLowerCase().repeat(optionalRepetitions);
        }

        // Replace the Mask character and its repetitions with a written out form
        result = result.replace(result.substring(index - 1, accoladeClosePosition + 1), replacementText);
      }
    }

    return result;
  }

  /**
   * Gets the right most position of the string "(" in the input mask,
   * taking into account that text between hashes should not be searched.
   * This allows for parenthesis between hashes.
   * 
   * @param mask The mask to search through.
   * @return The position of the right most "(", or -1 when no '(' exists.
   */
  private static lastIndexOfParenthesisOpen(mask: string): number {
    let isBetweenHashes = false;
    for (let index = mask.length - 1; index >= 0; --index) {
      let characterAtIndex = mask.charAt(index);
      if (characterAtIndex === "#") {
        isBetweenHashes = !isBetweenHashes;
      }
      if (characterAtIndex === "(" && !isBetweenHashes) {
        return index;
      }
    }
    return -1;
  }

  /**
   * Gets the position of the string ")" in the input mask, after the input position,
   * taking into account that text between hashes should not be searched.
   * This allows for parenthesis between hashes.
   * 
   * @param mask The mask to search through.
   * @param position The position of the "(" in the input mask for which we need to find the ")".
   *  
   * @return The position of the ")" or -1 when no ")" exists.
   */
  private static indexOfParenthesisClose(mask: string, position: number): number {
    let isBetweenHashes = false;
    for (let index = position + 1; index < mask.length; ++index) {
      let characterAtIndex = mask.charAt(index);
      if (characterAtIndex === "#") {
        isBetweenHashes = !isBetweenHashes;
      }
      if (characterAtIndex === ")" && !isBetweenHashes) {
        return index;
      }
    }
    return -1;
  }

  /**
   * Converts the input mask to lower case, leaving text between hashes unchanged.
   * @param mask The mask to convert to lower case.
   * @return The input mask converted to lower case.
   */
  private static toLowerCase(mask: string): string {
    let result = "";
    let isBetweenHashes = false;

    for (let index = 0; index < mask.length; ++index) {
      if (mask.charAt(index) === "#") {
        isBetweenHashes = !isBetweenHashes;
        result += "#";
      } else {
        result += isBetweenHashes ? mask.charAt(index) : mask.charAt(index).toLowerCase();
      }
    }

    return result;
  }
}
