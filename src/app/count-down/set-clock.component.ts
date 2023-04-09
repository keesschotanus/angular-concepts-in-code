import { Component } from '@angular/core';
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
}
