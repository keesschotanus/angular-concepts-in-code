import { Component } from '@angular/core';

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
  message!: string;
}
