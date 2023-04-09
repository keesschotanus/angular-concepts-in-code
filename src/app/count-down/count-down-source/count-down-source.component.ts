import { Component } from '@angular/core';

@Component({
  selector: 'app-count-down-source',
  templateUrl: './count-down-source.component.html',
})
export class CountDownSourceComponent {

  componentSource = `import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

/**
 * Count down component aids in counting down from a preset number of hours and minutes.
 * We can count down hours, minutes and secnds with a resolution of 1 second.
 */
@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit, OnDestroy {

  /** Number of hours to go. */
  hours: number;

  /** Number of minutes to go. */
  minutes: number;

  /** Number of seconds to go. */
  seconds: number;

  /* The interval timer. */
  interval;

  /**
   * Determines whether we are running (true while counting down), or not (false).
   * Used to determine whether we have to clear the interval timer. 
   */
  running = false;

  /**
   * Constructs this CountDownComponent from the ActivatedRoute.
   * Gets the number of hours and minutes form the route.
   * @param activatedRoute The injected ActivatedRoute.
   * @param router The ibjected Router.
   */
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { 
    this.hours = +activatedRoute.snapshot.params['hours'];
    this.minutes = +activatedRoute.snapshot.params['minutes'];
    this.seconds = 0;
  }

  /**
   * Starts the count down.
   */
  ngOnInit() {
    this.start();
  }

  /**
   * Starts counting down.
   * The setInterval(...) method is used to count down.
   * Don't worry about inaccuracies since the actual time is used to determine the end of the count down.
   */
  start() {
    this.running = true;

    // Store the time at which this count down was started.
    let startTimeInMillis = Date.now();

    // Calculate the time at which the count down should end.
    let endTimeInMillis = startTimeInMillis + this.hours * 60 * 60 * 1000 + this.minutes * 60 * 1000 + this.seconds * 1000;
    
    // Compute the remaining time, every second.
    this.interval = setInterval(
      () =>  {
        // Calculate the remaining time in milliseconds.
        let remainingTimeInMillis = endTimeInMillis - Date.now();

        // Calculate the remaining hours, minutes and seconds.
        this.hours = Math.floor(remainingTimeInMillis / 1000 / 60 / 60);
        this.minutes = Math.floor(remainingTimeInMillis / 1000 / 60) % 60;
        this.seconds = Math.floor(remainingTimeInMillis / 1000) % 60;

        if (remainingTimeInMillis <= 0) {
          this.hours = this.minutes = this.seconds = 0;
          this.stop();
        }
      }, 1000);

  }

  /**
   * Stops counting down.
   */
  ngOnDestroy() {
    this.stop();
  }

  /**
   * Stops counting down.
   * Clears the interval.
   */
  stop() {
    if (this.running) {
      clearInterval(this.interval);
    }
    this.running = false;
  }

  /**
   * Pauses the current count down.
   */
  onPause() {
    this.stop();
  }

  /*
   * Resumes the count down.
   */
  onResume() {
    this.start();
  }

  /**
   * Cancels the count down.
   */
  onCancel() {
    this.stop();
    this.router.navigate([{ outlets: {main: ['set-clock'], source: ['set-clock-source']} }]);
  }

}`;

  htmlSource = `<span class="hours">{{ hours }}</span>
<span class="separator">:</span>
<span class="minutes">{{ minutes }}</span>
<span class="separator">:</span>
<span class="seconds">{{ seconds }}</span>
<hr>

<button
  (click)="onPause()"
  class="btn-primary"
  label="Pause"
  *ngIf="running"
  pButton
  type="button">
</button>

<button
  class="ui-button-success"
  (click)="onResume()"
  label="Resume"
  *ngIf="!running && (hours > 0 || minutes > 0 || seconds > 0)"
  pButton
  type="button">
</button>

<button
  class="ui-button-danger"
  (click)="onCancel()"
  label="Cancel"
  pButton
  type="button">
</button>
`;

  cssSource=`.hours, .minutes, .seconds, .separator {
    font-size: xx-large;
}`;
}
