import { Component } from '@angular/core';

@Component({
  selector: 'app-set-clock-source',
  templateUrl: './set-clock-source.component.html',
})
export class SetClockSourceComponent {
  componentSource = `import { Component } from '@angular/core';
import { Router } from "@angular/router";

/**
 * Sets the clock for the count down.
 */
@Component({
  selector: 'app-set-clock',
  templateUrl: './set-clock.component.html',
  styleUrls: ['./set-clock.component.css']
})
export class SetClockComponent {

  /* Number of hours. */
  hours = 8;

  /* Number of minutes. */
  minutes = 0;

  /*
   * Constructs this component from the injected Router.
   * @param router The injected Router.
   */
  constructor(private router: Router) { }

  /*
   * Starts the count down by navigating to the count down component.
   * The hours and minutes are passed with the URL.
   */
  onStartCountDown() {
        this.router.navigate([{ outlets: {main: ['count-down', this.hours, this.minutes], source: ['count-down-source']} }]);
   }
}`;

  htmlSource = `<h2>Set the clock</h2>

<form name="setClockForm">
  <div>
    <label>hours</label>
    <p-spinner
      name="hours"
      [min]="0"
      [max]="24"
      [maxlength]="2"
      size="2"
      type="number"
      [(ngModel)]="hours">
    </p-spinner>

    <label>Minutes</label>
    <p-spinner
      id="minutes"
      name="minutes"
      [min]="0"
      [max]="59"
      [maxlength]="2"
      size="2"
      type="number"
      [(ngModel)]="minutes">
    </p-spinner>
    
    <button
      class="ui-button"
      (click)="onStartCountDown()"
      id="hours"
      label="start"
      pButton
      type="button">
    </button>
  </div>
</form>`;

  cssSource = `/*
 * Align the button with the spinner controls.
 */
.ui-button {
  vertical-align: middle;
}`;

}
