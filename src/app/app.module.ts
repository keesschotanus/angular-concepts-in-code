import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";

import { SchotanusSharedModule } from './shared/schotanus-shared.module';

/* Primeng components. */
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { CheckboxModule } from "primeng/checkbox";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { ListboxModule } from "primeng/listbox";
import { MenubarModule } from "primeng/menubar";
import { MessageModule } from "primeng/message";
import { MessagesModule } from "primeng/messages";
import { PasswordModule } from "primeng/password";
import { RadioButtonModule } from "primeng/radiobutton";

import { SpinnerModule } from "primeng/spinner";
import { TabViewModule } from "primeng/tabview";

import { HomeComponent } from './home/home.component';

/* Binding */
import { DataBindingComponent } from './binding/data-binding/data-binding.component';
import { DataBindingSourceComponent } from './binding/data-binding/data-binding-source/data-binding-source.component';
import { InputOutputBindingComponent } from './binding/input-output-binding/input-output-binding.component';
import { InputOutputBindingParentComponent } from './binding/input-output-binding/input-output-binding-parent/input-output-binding-parent.component';
import { InputOutputBindingChildComponent } from './binding/input-output-binding/input-output-binding-child/input-output-binding-child.component';
import { InputOutputBindingSourceComponent } from './binding/input-output-binding/input-output-binding-source/input-output-binding-source.component';
import { ClassBindingComponent } from './binding/class-binding/class-binding.component';
import { ClassBindingSourceComponent } from './binding/class-binding/class-binding-source/class-binding-source.component';
import { StyleBindingComponent } from './binding/style-binding/style-binding.component';
import { StyleBindingSourceComponent } from './binding/style-binding/style-binding-source/style-binding-source.component';

/* Directives */
import { CsCodeDirective } from './shared/directives/cs-code.directive';
import { CsCodeComponent } from './directives/cs-code/cs-code.component';
import { CsCodeSourceComponent } from './directives/cs-code/cs-code-source/cs-code-source.component';
import { CsHighlightDirective } from './shared/directives/cs-highlight.directive';
import { CsHighlightComponent } from './directives/cs-highlight/cs-highlight.component';
import { CsHighlightSourceComponent } from './directives/cs-highlight/cs-highlight-source/cs-highlight-source.component';
import { NgContentComponent } from './directives/ng-content/ng-content.component';
import { NgContentPanelComponent } from './directives/ng-content/ng-content-panel/ng-content-panel.component';
import { NgContentSourceComponent } from './directives/ng-content/ng-content-source/ng-content-source.component';

/* Forms */
import { FormTemplateBasicComponent } from './forms/template/form-template-basic/form-template-basic.component';
import { FormTemplateBasicSourceComponent } from './forms/template/form-template-basic/form-template-basic-source/form-template-basic-source.component';
import { FormTemplateBasicPrimefacesComponent } from './forms/template/form-template-basic-primefaces/form-template-basic-primefaces.component';
import { FormTemplateBasicPrimefacesSourceComponent } from './forms/template/form-template-basic-primefaces/form-template-basic-primefaces-source/form-template-basic-primefaces-source.component';
import { FormTemplateValidationComponent } from './forms/template/form-template-validation/form-template-validation.component';
import { FormTemplateValidationSourceComponent } from './forms/template/form-template-validation/form-template-validation-source/form-template-validation-source.component';
import { FormTemplateValidationPrimefacesComponent } from './forms/template/form-template-validation-primefaces/form-template-validation-primefaces.component';
import { FormTemplateValidationPrimefacesSourceComponent } from './forms/template/form-template-validation-primefaces/form-template-validation-primefaces-source/form-template-validation-primefaces-source.component';

import { FormReactiveBasicComponent } from './forms/reactive/form-reactive-basic/form-reactive-basic.component';
import { FormReactiveBasicSourceComponent } from './forms/reactive/form-reactive-basic/form-reactive-basic-source/form-reactive-basic-source.component';
import { FormReactiveValidationComponent } from './forms/reactive/form-reactive-validation/form-reactive-validation.component';
import { FormReactiveValidationSourceComponent } from './forms/reactive/form-reactive-validation/form-reactive-validation-source/form-reactive-validation-source.component';

/* HTTP */
import { HttpRestClientComponent } from './http/rest/http-rest-client/http-rest-client.component';
import { HttpRestClientSourceComponent } from './http/rest/http-rest-client/http-rest-client-source/http-rest-client-source.component';

/* Local References */
import { LocalReferenceComponent } from './local-reference/local-reference.component';
import { LocalReferenceSourceComponent } from './local-reference/local-reference-source/local-reference-source.component';
import { LocalReferenceChildComponent } from './local-reference/local-reference-child/local-reference-child.component';

/*
 * Pipes.
 */

/* Mask pipe */
import { MaskComponent } from './pipes/mask/mask.component';
import { MaskPipe } from './shared/pipes/mask.pipe';
import { MaskSourceComponent } from './pipes/mask/mask-source/mask-source.component';

/* Roman pipe */
import { RomanPipe } from './shared/pipes/roman.pipe';
import { RomanComponent } from './pipes/roman/roman.component';
import { RomanSourceComponent } from './pipes/roman/roman-source/roman-source.component';

/*
 * Services.
 */

/* Logging */
import { LoggingComponent } from './services/logging/logging.component';
import { LoggingSourceComponent } from './services/logging/logging-source/logging-source.component';
import { LoggingService } from './shared/services/logging/logging.service';

/* Periodic Table */
import { FirestorePeriodicTableService } from './services/periodic-table/firestore-periodic-table.service';

/* @ViewChild */
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildSourceComponent } from './view-child/view-child-source/view-child-source.component';
import { ViewChildChildComponent } from './view-child/view-child-child/view-child-child.component';

/*
 *
 * Demo.
 * 
 */

/* Count down demo */
import { CountDownComponent } from './count-down/count-down.component';
import { SetClockComponent } from './count-down/set-clock.component';
import { CountDownSourceComponent } from './count-down/count-down-source/count-down-source.component';
import { SetClockSourceComponent } from './count-down/set-clock-source/set-clock-source.component';

/* Hello World demo*/
import { HelloWorldBasicComponent } from './hello-world/hello-world-basic/hello-world-basic.component';
import { HelloWorldBasicSourceComponent } from './hello-world/hello-world-basic/hello-world-basic-source/hello-world-basic-source.component';
import { HelloWorldAngularComponent } from './hello-world/hello-world-angular/hello-world-angular.component';
import { HelloWorldAngularSourceComponent } from './hello-world/hello-world-angular/hello-world-angular-source/hello-world-angular-source.component';

/* Module demo */
import { FeatureModule } from './module/feature.module';

/* Observable demo */
import { ObservableComponent } from './observable/observable.component';
import { ObservableSourceComponent } from './observable/observable-source/observable-source.component';


@NgModule({
  declarations: [
    AppComponent,
    ClassBindingComponent,
    ClassBindingSourceComponent,
    CountDownComponent,
    CsCodeComponent,
    CsCodeSourceComponent,
    CsCodeDirective,
    CsHighlightDirective,
    CsHighlightComponent,
    CsHighlightSourceComponent,
    DataBindingComponent,
    DataBindingSourceComponent,
    CountDownSourceComponent,
    SetClockSourceComponent,
    FormTemplateBasicComponent,
    FormTemplateBasicSourceComponent,
    FormTemplateBasicPrimefacesComponent,
    FormTemplateBasicPrimefacesSourceComponent,
    FormTemplateValidationComponent,
    FormTemplateValidationSourceComponent,
    FormTemplateValidationPrimefacesComponent,
    FormTemplateValidationPrimefacesSourceComponent,
    FormReactiveBasicComponent,
    FormReactiveBasicSourceComponent,
    FormReactiveValidationComponent,
    FormReactiveValidationSourceComponent,
    FormReactiveBasicComponent,
    FormReactiveBasicSourceComponent,
    HelloWorldBasicComponent,
    HelloWorldBasicSourceComponent,
    HelloWorldAngularComponent,
    HelloWorldAngularSourceComponent,
    HomeComponent,
    HttpRestClientComponent,
    HttpRestClientSourceComponent,
    InputOutputBindingComponent,
    InputOutputBindingChildComponent,
    InputOutputBindingParentComponent,
    InputOutputBindingSourceComponent,
    LocalReferenceComponent,
    LocalReferenceSourceComponent,
    LocalReferenceChildComponent,
    LoggingComponent,
    LoggingSourceComponent,
    MaskComponent,
    MaskPipe,
    MaskSourceComponent,
    NgContentComponent,
    NgContentPanelComponent,
    NgContentSourceComponent,
    ObservableComponent,
    ObservableSourceComponent,
    RomanComponent,
    RomanSourceComponent,
    SetClockComponent,
    StyleBindingComponent,
    StyleBindingSourceComponent,
    ViewChildComponent,
    ViewChildSourceComponent,
    ViewChildChildComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    FeatureModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    ListboxModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    PasswordModule,
    RadioButtonModule,
    ReactiveFormsModule,
    SchotanusSharedModule,
    SpinnerModule,
    TabViewModule
  ],
  providers: [LoggingService, FirestorePeriodicTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }