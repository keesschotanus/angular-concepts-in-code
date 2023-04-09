import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RomanPipe } from "./pipes/roman.pipe";

@NgModule({
  declarations: [
    RomanPipe
  ],
  exports: [
    CommonModule,
    RomanPipe
  ]

})
export class SchotanusSharedModule {

}