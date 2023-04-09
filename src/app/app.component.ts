import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Concepts in Code';
  private menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems =
    [
      {
        label: 'Home',
        icon: 'fa-home',
        routerLink: [ {outlets: { main: ['home'], source: null} } ] 
      },
      {
        label: 'Angular', 
        items:
        [
          {
            label: 'Binding',
            items:
            [
              {
                label: 'Data',
                routerLink: [ { outlets: { main: ['data-binding'], source: ['data-binding-source'] } } ]
              },
              {
                label: '@Input/@Output',
                routerLink: [ { outlets: { main: ['input-output-binding'], source: ['input-output-binding-source'] } } ]
              },
              {
                label: 'Class',
                routerLink: [ { outlets: { main: ['class-binding'], source: ['class-binding-source'] } } ]
              },
              {
                label: 'Style',
                routerLink: [ { outlets: { main: ['style-binding'], source: ['style-binding-source'] } } ]
              },
            ]
          },
          {
            label: 'Directives',
            items:
            [
              {
                label: 'cs-code',
                routerLink: [ { outlets: { main: ['cs-code'], source: ['cs-code-source'] } } ]
              },
              {
                label: 'cs-highlight',
                routerLink: [ { outlets: { main: ['cs-highlight'], source: ['cs-highlight-source'] } } ]
              },
              {
                label: 'ng-content',
                routerLink: [ { outlets: { main: ['ng-content'], source: ['ng-content-source'] } } ]
              },
            ]
          },
          {
            label: 'Forms', 
            items:
            [
              {
                label: 'Template', 
                items:
                [
                  {
                    label: 'Basic',
                    routerLink: [ { outlets: { main: ['form-template-basic'], source: ['form-template-basic-source'] } } ]
                  },
                  {
                    label: 'Validation',
                    routerLink: [ { outlets: { main: ['form-template-validation'], source: ['form-template-validation-source'] } } ]
                  },
                  {
                    label: 'Basic Primefaces',
                    routerLink: [ { outlets: { main: ['form-template-basic-primefaces'], source: ['form-template-basic-primefaces-source'] } } ]
                  },
                  {
                    label: 'Validation Primefaces',
                    routerLink: [ { outlets: { main: ['form-template-validation-primefaces'], source: ['form-template-validation-primefaces-source'] } } ]
                  },
                ]
              },
              {
                label: 'Reactive', 
                items:
                [
                  {
                    label: 'Basic',
                    routerLink: [ { outlets: { main: ['form-reactive-basic'], source: ['form-reactive-basic-source'] } } ]
                  },
                  {
                    label: 'Validation',
                    routerLink: [ { outlets: { main: ['form-reactive-validation'], source: ['form-reactive-validation-source'] } } ]
                  },
                ]
              },
            ]
          },
          {
            label: 'HTTP', 
            items:
            [
              {
                label: 'REST service client', 
                routerLink: [ { outlets: { main: ['http-rest-client'], source: ['http-rest-client-source'] } } ]
              },
            ]
          },
          {
            label: 'Local reference', 
            routerLink: [ { outlets: { main: ['local-reference'], source: ['local-reference-source'] } } ]
          },
          {
            label: 'Pipes', 
            items:
            [
              {
                label: 'Mask',
                routerLink: [ { outlets: { main: ['mask'], source: ['mask-source'] } } ]
              },
              {
                label: 'Roman numerals',
                routerLink: [ { outlets: { main: ['roman'], source: ['roman-source'] } } ]
              }
            ]
          },
          {
            label: 'Services',
            items:
            [
              {
                label: 'logging',
                routerLink: [ { outlets: { main: ['logging'], source: ['logging-source'] } } ]
              },
            ]
          },
          {
            label: '@ViewChild', 
            routerLink: [ { outlets: { main: ['view-child'], source: ['view-child-source'] } } ]
          },
        ]
      },
      {
        label: 'Demo', 
        items:
        [
          {
            label: 'Count Down',
            routerLink: [ { outlets: { main: ['set-clock'], source: ['set-clock-source'] } } ]
          },
          {
            label: 'Hello World', 
            items:
            [
              {
                label: 'Basic',
                routerLink: [ { outlets: { main: ['hello-world-basic'], source: ['hello-world-basic-source'] } } ]
              },
              {
                label: 'Angular',
                routerLink: [ { outlets: { main: ['hello-world-angular'], source: ['hello-world-angular-source'] } } ]
              },
            ]
          },
          {
            label: 'Module', 
            items:
            [
              {
                label: 'Module',
                routerLink: [ { outlets: { main: ['module'], source: ['module-source'] } } ]
              },
              {
                label: 'First component',
                routerLink: [ { outlets: { main: ['module-first'], source: ['module-first-source'] } } ]
              },
              {
                label: 'Second component',
                routerLink: [ { outlets: { main: ['module-second'], source: ['module-second-source'] } } ]
              },
            ]
          },
          {
            label: 'Observable',
            routerLink: [ { outlets: { main: ['observable'], source: ['observable-source'] } } ]
          },
        ]
      },
    ];
  }

  /*
   * Gets the menu items.
   * @return The menu items. 
   */
  public getMenuItems(): MenuItem[] {
    return this.menuItems;
  }
}