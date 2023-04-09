import { Component } from '@angular/core';

/**
 * Demo of different kinds of binding.
 */
@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent {
  public oneWayModelValue = "Initial one way model value";
  public twoWayModelValue = "Initial two way model value";
  public toggle = false;

  /**
   * Gets the second prime number.
   * @return 3 Always.
   */
  getSecondPrimeNumber() :number {
    return 3;
  }
  
  /**
   * Gets the url to the Google image.
   * @return The url to the Google image.
   */
  getGoogleImageUrl() :string {
    return "https://www.google.nl/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
  }
 
  /**
   * Gets a true value.
   * @return true, always.
   */
  isDisabled() {
    return true;
  }
 
  /**
   * Event that is processed when the toggle button is clicked.
   * @param event The event.
   */
  onToggle(event: any) {
    console.log(event);
    this.toggle = !this.toggle;
  }
  
}
