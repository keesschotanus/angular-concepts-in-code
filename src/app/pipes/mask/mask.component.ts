import { Component } from '@angular/core';

@Component({
  selector: 'app-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.css']
})
export class MaskComponent {
  mask = "(DDDD ){3}DDDD";
  unmaskedValue = "";

  getMask(): string {
    return this.mask;
  }
  getUnmaskedValue(): string {
    return this.unmaskedValue;
  }

}
