import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-angular-source',
  templateUrl: './hello-world-angular-source.component.html',
  styleUrls: ['./hello-world-angular-source.component.css'],
})
export class HelloWorldAngularSourceComponent {

  componentSource = `import { Component } from '@angular/core';
  
/**
 * Simple Hello World Component, Angular style.
 */
@Component({
  selector: 'app-hello-world-angular',
  templateUrl: './hello-world-angular.component.html',
  styleUrls: ['./hello-world-angular.component.css']
})
export class HelloWorldAngularComponent {
  /**
   * The message to send to the world.
   */
  message: string;
}`;  

  htmlSource = `<h1>Hello World Angular Style!</h1>
<div>
  <input [(ngModel)]="message" placeholder="Your message">
</div>

<h1 class="message">{{ message }}</h1>
`;

  cssSource = `/* Color for the output message */
.message {
    color: blue;
}`;

}
