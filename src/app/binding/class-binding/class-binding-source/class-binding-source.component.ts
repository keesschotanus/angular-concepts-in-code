import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding-source',
  templateUrl: './class-binding-source.component.html',
})
export class ClassBindingSourceComponent {

  componentSource=`import { Component } from '@angular/core';
  
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
}`;

  htmlSource=`<h1>Class binding</h1>
  
<h2>Simple class binding</h2>
  
<p>
  You can add and remove CSS class names from an element's class attribute with a class binding.
  The target of this kind of binding must always be an element.
</p>    
  
<p>
  The syntax for class binding is: [class]="class name(s) expression"<br>
  The result is that all class names have been replaced with the class names to which the expression evaluates.
  For example: <span [class]="getClassNames()">&lt;span [class]="getClassNames()"&gt;&lt;/span&gt;</span><br>
  Note that [class] trumps the simple class attribute.
</p>
  
<p>
  The simplest way to set a class value, does not use binding at all.
  For example: <span class="classOne classTwo">&lt;span class="classOne classTwo"&gt;&lt;/span&gt;</span>
</p>
    
<p>
  Finally, you can bind to a specific class name.
  Angular adds the class when the template expression evaluates to truthy.
  It removes the class when the expression is falsy.<br>
  Syntax: [class.class-name]="boolean expression".<br>
  For example: <span [class.classOne]="isClassOne">&lt;span [class.classOne]="isClassOne"&gt;&lt;/span&gt;</span>
  <span [class.classOne]="!isClassOne">&lt;span [class.classOne]="!isClassOne"&gt;&lt;/span&gt;</span>
</p>
  
<h2>ngClass</h2>
  
<p>
  Use ngClass to add or remove multiple class names at once.
</p>
<p>
  Syntax: [ngClass]="expression-evaluating-to-object-with-name-value-pairs"<br>
  The name should be a class name and the value should evaluate to true or false.
  For example: <span [ngClass]="getClassObject()"> &lt;span [ngClass]="getClassObject()"&gt;&lt;/span&gt;</span><br>
  Instead of getClassObject(), you could also hardcode the object like this: 
  <span [ngClass]="{classOne: isClassOne, classTwo: false}">&lt;span [ngClass]="{{ '{' }} classOne: isClassOne, classTwo: false {{ '}' }}"&gt;&lt;/span&gt;</span>
<p>`;

  cssSource=`.classOne {
    color: darkgrey;
}
.classTwo {
    background-color: beige;
}
.class-binding {
    color: darkgrey;
}`;

}
