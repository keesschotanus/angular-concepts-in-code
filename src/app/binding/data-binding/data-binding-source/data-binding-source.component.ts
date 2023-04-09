import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-source',
  templateUrl: './data-binding-source.component.html',
})
export class DataBindingSourceComponent {
  componentSource=`import { Component } from '@angular/core';
  
/**
 * Demo of different kinds of binding.
 */
@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent {
  public oneWayModelValue = "Initial one way model value";
  public twoWayModelValue = "Initial two way model value";
  public toggle = false;
  
  /**
   * Gets the second prime number.
   * @return 3 Always.
   */
  getSecondPrimeNumber() :number {
    return 3;
  }
    
  /**
   * Gets the url to the Google image.
   * @return The url to the Google image.
   */
  getGoogleImageUrl() :string {
    return "https://www.google.nl/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
  }
   
  /**
   * Gets a true value.
   * @return true, always.
   */
  isDisabled() {
    return true;
  }
   
  /**
   * Event that is processed when the toggle button is clicked.
   * @param event The event.
   */
  onToggle(event: any) {
    console.log(event);
    this.toggle = !this.toggle;
  }
    
}`;

  htmlSource = `<h1>Data binding</h1>
  
<h2>One way data binding</h2>
<p>
  One way data binding is data binding from source to view target.
  It consists of interpolation, property binding, class binding, style binding and attribute binding,
</p>
  
<h3>String interpolation</h3>
<p>
  Syntax: {{ <code>expression</code> }}.<br>
  Where the expression is converted to a string.
  The expression may contain function calls and mathematical expressions.
</p>
<p>
  For example: {{<code>2 * getSecondPrimeNumber()</code>}} =&gt; {{ 2 * getSecondPrimeNumber() }}
</p>
<p>
  String interpolation may also be used to assign a value to an HTML attribute.<br>
  For example: &lt;img src={{<code>getGoogleImageUrl()"</code>}}&gt; <img src="{{ getGoogleImageUrl() }}" height="30px" width="60px">
</p>
  
<h3>Property binding</h3>
<p>
  Syntax: [target]="expression" or bind-target="expression".<br>
  Where the target is an Element property, a Component property or a Directive property.<br>
  <b>Note: You bind to a DOM property, not an HTML attribute!</b>
</p>
<p>
  For example:  &lt;<code>img [src]="getGoogleImageUrl()"</code>&gt; <img [src]="getGoogleImageUrl()" height="30px" width="60px"><br>
  As you can see above, this example can also be written using string interpolation.
</p>
<p>
  The next example shows how to conditionally disable a button.<br>
  &lt;button [disabled]="isDisabled()"&gt;Cancel&lt;/button&gt; <button [disabled]="isDisabled()">Cancel</button>
</p>
<p>
  One way data binding can be used to pass data from a parent component to a child component.<br>
  &lt;child-component [child-model-member]="parent-model-member"&gt;&lt;/child-component&gt;<br>
  See: <a routerLink="../input-output-binding" routerLinkActive="active">Input/Output Binding for an example</a>
  </p>
<p>
  Now consider this example: &lt;input [value]="oneWayModelValue"&gt; <input [value]="oneWayModelValue"><br>
  It initializes the value of the input item with a value from the model.
  Entering text in the input item does not update the model!
  The model still contains the value: {{ oneWayModelValue }}.
</p>
  
<h3>Attribute binding</h3>
<p>
  This binding actually creates and sets attributes (instead of DOM properties).
  When should you use attribute binding?
  When there is no DOM property corresponding to your attibute.
  There is no DOM property for a colspan attribute for example.<br>
  Syntax: [attr.attribute-name]="expression".<br>
  For example: &lt;td [attr.colspan]="1 + 1"&gt;Column content&lt;/td&gt;
</p>
  
<h2>Event binding</h2>
<p>
  Syntax: (target)="template statement" or  on-target="template statement"<br>
  The name within parentheses identifies the target event.
</p>
<p>
  For example: &lt;button (click)="onToggle($event)"&gt;Toggle&lt;/button&gt;
  <button (click)="onToggle($event)">Toggle</button> {{ toggle }}<br>
  The $event is optional.
  Its shape is determined by the target event.
  If the target event is a native DOM element event, then $event is a DOM event object,
  with properties such as target and target.value.
  You can also pass your own value.
</p>
<p>
  Check out this example: &lt;input [value]="modelValue" (input)="modelValue=$event.target.value"&gt;<br>
  This code sets the input box value property by binding to the name property.
  To listen for changes to the value, the code binds to the input box's input event.
  When the user makes changes, the input event is raised, and the binding executes the statement within a context,
  that includes the DOM event object, $event.<br>
  To update the name property, the changed text is retrieved by following the path $event.target.value.
</p>
  
<h2>Two way data binding</h2>
<p>
  Two way binding works best with a value named <i>x</i> and a corresponding event named <i>xChange</i>.
  Unfortunately html input items don't follow this pattern.
  This is where ngModel comes in.
</p>
<p>
  Syntax: [(ngModel)]="property-name"<br>
  Note: You need to import the FormsModule before you can use ngModel. 
</p>
<p>
  For example: &lt;input [(ngModel)]="twoWayModelValue"&gt; {{ <code>twoWayModelValue</code> }}<br>
  <input [(ngModel)]="twoWayModelValue">  {{ twoWayModelValue }}
</p>
<p>
  The above example is short-hand code for:
  &lt;input [(ngModel)]="twoWayModelValue" (ngModelChange)="twoWayModelValue=$event"&gt;<br>
  <input [(ngModel)]="twoWayModelValue" (ngModelChange)="twoWayModelValue=$event"> {{ twoWayModelValue }}
</p>`;
}
