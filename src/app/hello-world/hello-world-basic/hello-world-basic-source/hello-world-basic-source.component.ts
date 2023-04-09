import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-basic-source',
  templateUrl: './hello-world-basic-source.component.html',
  styleUrls: ['./hello-world-basic-source.component.css']
})
export class HelloWorldBasicSourceComponent {

  componentSource = `import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world-basic',
  template: '<h1>Hello World!</h1>'
})
export class HelloWorldBasicComponent {
}`;

}
