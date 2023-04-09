import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

/**
 * Directive to format source code.
 * It is a nice example of what a directive can do, but unfortunately,
 * this directive is close to being useless since Angular does not allow for unescaped accolades.
 * 
 * It can be used as an alternative to using &lt;pre&gt;&lt;code&gt;...&lt;/pre&gt;&lt;/code&gt;
 * Usage:<br>
 * <cs-code>
 *   Source line 1.
 *   if (expression)
 *     source line ...
 *   else 
 *     source line ...
 *   Source line n
 * </cs-code>
 * The advantage of using cs-code over <pre><code> is that you can properly align your code within your <cs-code> tag.
 * To achieve the same effect with <pre><code> you would have to write your code like this:
 * <pre><code><cs-code>
 * Source line 1.
 * if (expression) {
 *   source line ...
 * }
 * source line ...
 * Source line n</code></pre>
 */
@Directive({
  selector: 'cs-code'
})
export class CsCodeDirective implements OnInit {

  /**
   * Constructs this directive from the supplied elementRef and renderer.
   * @param elementRef Reference to the cs-code element.
   * @param renderer Angular's renderer.
   */
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  /**
   * Surrounds the content of the cs-code element with a "pre" and "code" element.
   */
  ngOnInit(): void {

    // Create a pre.
    const preElement = this.renderer.createElement('pre');

    // Create a code element with proper class names.
    const codeElement = this.renderer.createElement('code');
    this.renderer.addClass(codeElement, 'prettyprint');
    this.renderer.addClass(codeElement, 'linenums');

    // Add the code element to the pre element
    this.renderer.appendChild(preElement, codeElement);

    // Add the formatted code to the code element and add the pre element to the cs-code element
    this.renderer.appendChild(codeElement, this.renderer.createText(this.formatCode(this.elementRef.nativeElement.innerHTML)));
    this.renderer.insertBefore(this.elementRef.nativeElement.parentNode, preElement, null);

    // Now remove the cs-code element
    this.renderer.removeChild(this.elementRef.nativeElement.parentNode, this.elementRef.nativeElement);
  }

  /**
   * Formats the supplied unformatted code.
   * Formatting consists of:
   *  - removing the first line when it is empty
   *  - removing as many leading whitespace characters as contained in what is now the first line.
   * @param unformattedCode The unformatted code.
   * @returns The formatted code.
   */
  private formatCode(unformattedCode: string): string {
    if (!unformattedCode) {
      return '';
    }

    // Split the unformatted code into an array of lines.
    var formattedCode: string [] = unformattedCode.split('\n');

    // Remove the first line if it is empty.
    if (formattedCode.length !== 0 && formattedCode[0].length === 0) {
      formattedCode.shift();
    }

    // Determine number of space characters at the beginning of the first line.
    if (formattedCode.length > 0) {
      var leadingSpaceChars = 0;
      for (leadingSpaceChars = 0; leadingSpaceChars < formattedCode[0].length && (formattedCode[0].charAt(leadingSpaceChars) === ' ' || formattedCode[0].charAt(leadingSpaceChars) === '\n'); ++leadingSpaceChars);

      // Now remove the same number of characters from the beginning of every line.
      for (var lineNumber = 0; lineNumber < formattedCode.length; ++lineNumber) {
        formattedCode[lineNumber] = formattedCode[lineNumber].substring(leadingSpaceChars);
      }
    }

    return formattedCode.join('\n');
  }
}
