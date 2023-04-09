import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-content-source',
  templateUrl: './ng-content-source.component.html',
})
export class NgContentSourceComponent {

  htmlSource = `
<app-ng-content-panel>
  <h1 facet="header">This is the header</h1>
  <p>
    This is the body
  </p>
  <p>
    This is the body too!
  </p>
  <h2 facet="footer">This is the footer</h2>
</app-ng-content-panel>`;

  htmlPanelSource = `
<div class="my-panel">
  <div class="my-panel-header">
    <ng-content select="[facet=header]"></ng-content>
  </div>
  <div class="my-panel-body">
    <ng-content></ng-content>
  </div>
  <div class="my-panel-footer">
    <ng-content select="[facet=footer]"></ng-content>
  </div>
</div>`;

cssPanelSource = `
/*
 * Creates a panel look by:
 * limiting the width of the panel
 * Giving the panel a border
 */
.my-panel {
  border: 1px solid black;
  display: block;
  max-width: fit-content;
}

/*
 * Change the background color of the header and footer.
 */
.my-panel-header, .my-panel-footer {
  background-color: lightgray;
}`;
}
