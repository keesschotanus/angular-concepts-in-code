import { Component } from '@angular/core';

@Component({
  selector: 'app-observable-source',
  templateUrl: './observable-source.component.html',
})
export class ObservableSourceComponent {

  componentSource = `
  import { Component, OnInit } from '@angular/core';
  import { Observable } from 'rxjs/Observable';
  import { Observer } from 'rxjs/Observer';
  import { Subscription } from 'rxjs/Subscription';
  
  /**
   * Demonstrates how to create and use your own Observable.
   */
  @Component({
    selector: 'app-observable',
    templateUrl: './observable.component.html',
  })
  export class ObservableComponent implements OnInit {
  
    /**
     * The Observable we are going to create.
     */
    private fibonacciObservable: Observable<number>;
  
    /**
     * Subscriptions to our Observable.
     */
    private fibonacciSubscriptions: Subscription[] = [];
  
    ngOnInit() {
  
      /**
       * Create an Observable that will spit out a Fibonacci number, every second.
       */
      this.fibonacciObservable = Observable.create(
        (observer: Observer<number>) => {
          let ordinal = 0;
          let f1 = 1;
          let f2 = 1;
  
          setInterval(() => {
            if (++ordinal <= 2) {
              // The first two numbers are 1 and 1.
              observer.next(1);
            } else {
              let fn = f1 + f2;
              f1 = f2; f2 = fn;
              observer.next(fn)
            }
          }, 1000);
        }
      );
    }
  
    /**
     * Called when the user wants to subscribe to our Observable.
     */
    onSubscribe() {
      this.fibonacciSubscriptions.push(
        this.fibonacciObservable.subscribe(
          (fibonacci: number) => { console.log(fibonacci) }
        )
      );
    }
  
    /**
     * Called when the user wants to unsubscribe from our Observable.
     */
    onUnsubscribe() {
      this.fibonacciSubscriptions.pop().unsubscribe();
    }
    
    /**
     * Gets the number of active subscriptions.
     * @return The number of active subscriptions.
     */
    getNumberOfSubscriptions(): number {
      return this.fibonacciSubscriptions.length;
    }
  }`;

  htmlSource = `
  <h1>Fibonacci Observable</h1>
  <button (click)="onSubscribe()">Subscribe</button>
  <button (click)="onUnsubscribe()" [disabled]="getNumberOfSubscriptions() === 0">Unsubscribe</button>`;

}
