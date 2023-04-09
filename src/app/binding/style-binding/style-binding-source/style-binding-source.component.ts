import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding-source',
  templateUrl: './style-binding-source.component.html',
})
export class StyleBindingSourceComponent {

  componentSource=`import { Component } from '@angular/core';
  
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
}`;

  htmlSource = `<h1>Style binding</h1>
  
<h2>Simple style binding</h2>
  
<p>
  You can set inline styles with a style binding.
  The target of this kind of binding must always be an element.
</p>    
  
<p>
  The syntax for style binding is: [style.style-property]="string-style-expression".<br>
  For example: <span [style.backgroundColor]="'grey'">&lt;span [style.backGroundColor]="'grey'"&gt;&lt;/span&gt;</span><br>
  Instead of camelCase you can also use dash-case.
</p>
  
<p>
  Some styles have a unit extension. 
  The syntax for these style bindings is:  [style.style-property.unit]=value<br>
  For example: <span [style.font-size.em]=1.2>&lt;span [style.font-size.em]=1.2&gt;&lt;/span&gt;</span>
</p>
  
<h2>ngStyle</h2>
  
<p>
  Use ngStyle to add or remove multiple style names at once.
  Syntax: [ngStyle]="expression-evaluating-to-object-with-name-value-pairs"<br>
  The name should be a style name.
  For example: <span [ngStyle]="getStyleObject()"> &lt;span [ngStyle]="getStyleObject()"&gt;&lt;/span&gt;</span><br>
  Instead of getStyleObject(), you could also hardcode the object like this: 
  <span [ngStyle]="{'font-style': 'italic', 'font-weight': 'bold'}">&lt;span [ngStyle]="{{ '{' }} 'font-style': 'italic', 'font-weight': 'bold' {{ '}' }}"&gt;&lt;/span&gt;</span>
</p>
`;

}
