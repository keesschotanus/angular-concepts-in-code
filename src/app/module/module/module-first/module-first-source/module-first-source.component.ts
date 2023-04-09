import { Component } from '@angular/core';

@Component({
  selector: 'app-module-first-source',
  templateUrl: './module-first-source.component.html',
})
export class ModuleFirstSourceComponent {

  htmlSource = `
  <h1>First component</h1>
  <p>
    Simply contains a link to go to the second component.
    The link uses the "Roman Pipe".
  </p>
  <a [routerLink]="['', {outlets: {main: ['module'], source: ['module-source']}}]">Go to module component</a>
  <a [routerLink]="['', {outlets: {main: ['module-second'], source: ['module-second-source']}}]">Go to component {{ 2 | roman}}</a>`;
}
