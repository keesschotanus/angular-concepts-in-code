import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

// Angular menu
import { DataBindingComponent } from "./binding/data-binding/data-binding.component";
import { DataBindingSourceComponent } from "./binding/data-binding/data-binding-source/data-binding-source.component";
import { InputOutputBindingComponent } from "./binding/input-output-binding/input-output-binding.component";
import { InputOutputBindingSourceComponent } from "./binding/input-output-binding/input-output-binding-source/input-output-binding-source.component";
import { ClassBindingComponent } from "./binding/class-binding/class-binding.component";
import { ClassBindingSourceComponent } from "./binding/class-binding/class-binding-source/class-binding-source.component";
import { StyleBindingComponent } from "./binding/style-binding/style-binding.component";
import { StyleBindingSourceComponent } from "./binding/style-binding/style-binding-source/style-binding-source.component";

import { CsCodeComponent } from './directives/cs-code/cs-code.component';
import { CsCodeSourceComponent } from './directives/cs-code/cs-code-source/cs-code-source.component';
import { CsHighlightComponent } from './directives/cs-highlight/cs-highlight.component';
import { CsHighlightSourceComponent } from './directives/cs-highlight/cs-highlight-source/cs-highlight-source.component';
import { NgContentComponent } from './directives/ng-content/ng-content.component';
import { NgContentSourceComponent } from './directives/ng-content/ng-content-source/ng-content-source.component';

import { FormTemplateBasicComponent } from './forms/template/form-template-basic/form-template-basic.component';
import { FormTemplateBasicSourceComponent } from './forms/template/form-template-basic/form-template-basic-source/form-template-basic-source.component';
import { FormTemplateValidationComponent } from './forms/template/form-template-validation/form-template-validation.component';
import { FormTemplateValidationSourceComponent } from './forms/template/form-template-validation/form-template-validation-source/form-template-validation-source.component';

import { FormTemplateBasicPrimefacesComponent } from './forms/template/form-template-basic-primefaces/form-template-basic-primefaces.component';
import { FormTemplateBasicPrimefacesSourceComponent } from './forms/template/form-template-basic-primefaces/form-template-basic-primefaces-source/form-template-basic-primefaces-source.component';
import { FormTemplateValidationPrimefacesComponent } from './forms/template/form-template-validation-primefaces/form-template-validation-primefaces.component';
import { FormTemplateValidationPrimefacesSourceComponent } from './forms/template/form-template-validation-primefaces/form-template-validation-primefaces-source/form-template-validation-primefaces-source.component';

import { FormReactiveBasicComponent } from './forms/reactive/form-reactive-basic/form-reactive-basic.component';
import { FormReactiveBasicSourceComponent } from './forms/reactive/form-reactive-basic/form-reactive-basic-source/form-reactive-basic-source.component';
import { FormReactiveValidationComponent } from './forms/reactive/form-reactive-validation/form-reactive-validation.component';
import { FormReactiveValidationSourceComponent } from './forms/reactive/form-reactive-validation/form-reactive-validation-source/form-reactive-validation-source.component';

import { HttpRestClientComponent } from './http/rest/http-rest-client/http-rest-client.component';
import { HttpRestClientSourceComponent } from './http/rest/http-rest-client/http-rest-client-source/http-rest-client-source.component';

import { LocalReferenceSourceComponent } from './local-reference/local-reference-source/local-reference-source.component';
import { LocalReferenceComponent } from './local-reference/local-reference.component';

import { MaskComponent } from "./pipes/mask/mask.component";
import { MaskSourceComponent } from "./pipes/mask/mask-source/mask-source.component";
import { RomanSourceComponent } from "./pipes/roman/roman-source/roman-source.component";
import { RomanComponent } from "./pipes/roman/roman.component";

import { LoggingComponent } from './services/logging/logging.component';
import { LoggingSourceComponent } from './services/logging/logging-source/logging-source.component';

import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildSourceComponent } from './view-child/view-child-source/view-child-source.component';

// Demo menu
import { CountDownComponent } from "./count-down/count-down.component";
import { CountDownSourceComponent } from "./count-down/count-down-source/count-down-source.component";
import { SetClockComponent } from "./count-down/set-clock.component";
import { SetClockSourceComponent } from "./count-down/set-clock-source/set-clock-source.component";

import { HelloWorldBasicComponent } from './hello-world/hello-world-basic/hello-world-basic.component';
import { HelloWorldBasicSourceComponent } from './hello-world/hello-world-basic/hello-world-basic-source/hello-world-basic-source.component';
import { HelloWorldAngularComponent } from './hello-world/hello-world-angular/hello-world-angular.component';
import { HelloWorldAngularSourceComponent } from "./hello-world/hello-world-angular/hello-world-angular-source/hello-world-angular-source.component";

import { ObservableComponent } from './observable/observable.component';
import { ObservableSourceComponent } from './observable/observable-source/observable-source.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/(main:home)', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, outlet: 'main' },

  // Angular menu
  { path: 'data-binding', component: DataBindingComponent, outlet: 'main' },
  { path: 'data-binding-source', component: DataBindingSourceComponent, outlet: 'source' },
  { path: 'input-output-binding', component: InputOutputBindingComponent, outlet: 'main' },
  { path: 'input-output-binding-source', component: InputOutputBindingSourceComponent, outlet: 'source' },
  { path: 'class-binding', component: ClassBindingComponent, outlet: 'main' },
  { path: 'class-binding-source', component: ClassBindingSourceComponent, outlet: 'source' },
  { path: 'style-binding', component: StyleBindingComponent, outlet: 'main' },
  { path: 'style-binding-source', component: StyleBindingSourceComponent, outlet: 'source' },

  { path: 'cs-code', component: CsCodeComponent, outlet: 'main' },
  { path: 'cs-code-source', component: CsCodeSourceComponent, outlet: 'source' },
  { path: 'cs-highlight', component: CsHighlightComponent, outlet: 'main' },
  { path: 'cs-highlight-source', component: CsHighlightSourceComponent, outlet: 'source' },
  { path: 'ng-content', component: NgContentComponent, outlet: 'main' },
  { path: 'ng-content-source', component: NgContentSourceComponent, outlet: 'source' },

  { path: 'form-template-basic', component: FormTemplateBasicComponent, outlet: 'main' },
  { path: 'form-template-basic-source', component: FormTemplateBasicSourceComponent, outlet: 'source' },
  { path: 'form-template-validation', component: FormTemplateValidationComponent, outlet: 'main' },
  { path: 'form-template-validation-source', component: FormTemplateValidationSourceComponent, outlet: 'source' },
  
  { path: 'form-template-basic-primefaces', component: FormTemplateBasicPrimefacesComponent, outlet: 'main' },
  { path: 'form-template-basic-primefaces-source', component: FormTemplateBasicPrimefacesSourceComponent, outlet: 'source' },
  { path: 'form-template-validation-primefaces', component: FormTemplateValidationPrimefacesComponent, outlet: 'main' },
  { path: 'form-template-validation-primefaces-source', component: FormTemplateValidationPrimefacesSourceComponent, outlet: 'source' },

  { path: 'form-reactive-basic', component: FormReactiveBasicComponent, outlet: 'main' },
  { path: 'form-reactive-basic-source', component: FormReactiveBasicSourceComponent, outlet: 'source' },
  { path: 'form-reactive-validation', component: FormReactiveValidationComponent, outlet: 'main' },
  { path: 'form-reactive-validation-source', component: FormReactiveValidationSourceComponent, outlet: 'source' },

  { path: 'http-rest-client', component: HttpRestClientComponent, outlet: 'main' },
  { path: 'http-rest-client-source', component: HttpRestClientSourceComponent, outlet: 'source' },

  { path: 'local-reference', component: LocalReferenceComponent, outlet: 'main' },
  { path: 'local-reference-source', component: LocalReferenceSourceComponent, outlet: 'source' },

  { path: 'mask', component: MaskComponent, outlet: 'main' },
  { path: 'mask-source', component: MaskSourceComponent, outlet: 'source' },
  { path: 'roman', component: RomanComponent, outlet: 'main' },
  { path: 'roman-source', component: RomanSourceComponent, outlet: 'source' },

  { path: 'logging', component: LoggingComponent, outlet: 'main' },
  { path: 'logging-source', component: LoggingSourceComponent, outlet: 'source' },

  { path: 'view-child', component: ViewChildComponent, outlet: 'main' },
  { path: 'view-child-source', component: ViewChildSourceComponent, outlet: 'source' },

  // Demo menu
  { path: 'count-down/:hours/:minutes', component: CountDownComponent, outlet: 'main' },
  { path: 'count-down-source', component: CountDownSourceComponent, outlet: 'source' },
  { path: 'set-clock', component: SetClockComponent, outlet: 'main' },
  { path: 'set-clock-source', component: SetClockSourceComponent, outlet: 'source' },

  { path: 'hello-world-basic', component: HelloWorldBasicComponent, outlet: 'main' },
  { path: 'hello-world-basic-source', component: HelloWorldBasicSourceComponent, outlet: 'source' },
  { path: 'hello-world-angular', component: HelloWorldAngularComponent, outlet: 'main' },
  { path: 'hello-world-angular-source', component: HelloWorldAngularSourceComponent, outlet: 'source' },

  { path: 'observable', component: ObservableComponent, outlet: 'main' },
  { path: 'observable-source', component: ObservableSourceComponent, outlet: 'source' },
  
//  { path: '**', redirectTo: '/(main:home)' }  
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}