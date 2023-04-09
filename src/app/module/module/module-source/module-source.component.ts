import { Component } from '@angular/core';

@Component({
  selector: 'app-module-source',
  templateUrl: './module-source.component.html',
})
export class ModuleSourceComponent {

  htmlSource = `
  <h1>Module</h1>
  
  <p>
    This is the module component.
    It has two nested components named ModuleFirstComponent and ModuleSecondComponent.
  </p>
  
  <a [routerLink]="['', {outlets: {main: ['module-first'], source: ['module-first-source']}}]">Go to component {{ 1 | roman}}</a>
  <a [routerLink]="['', {outlets: {main: ['module-second'], source: ['module-second-source']}}]">Go to component {{ 2 | roman}}</a>`;

  featureModuleSource = `
  import { CommonModule } from "@angular/common";
  import { NgModule } from "@angular/core";
  
  import { JosefSharedModule } from "app/shared/josef-shared.module";
  import { TabViewModule } from "primeng/tabview";
  
  import { ModuleComponent } from "app/module/module.component";
  import { ModuleSourceComponent } from "app/module/module-source/module-source.component";
  import { ModuleFirstComponent } from "app/module/module-first/module-first.component";
  import { ModuleFirstSourceComponent } from "app/module/module-first/module-first-source/module-first-source.component";
  import { ModuleSecondComponent } from "app/module/module-second/module-second.component";
  import { ModuleSecondSourceComponent } from "app/module/module-second/module-second-source/module-second-source.component";
  import { FeatureRoutingModule } from "app/module/feature-routing.module";
  
  @NgModule({
    declarations: [
      ModuleComponent,
      ModuleSourceComponent,
      ModuleFirstComponent,
      ModuleFirstSourceComponent,
      ModuleSecondComponent,
      ModuleSecondSourceComponent,
    ],
    imports: [
      CommonModule,
      FeatureRoutingModule,
      JosefSharedModule,
      TabViewModule,
    ]
  })
  export class FeatureModule {
  
  }`;

  featureRoutingModuleSource = `
  import { NgModule } from '@angular/core';
  import { Routes } from '@angular/router';
  import { ModuleComponent } from 'app/module/module/module.component';
  import { ModuleSourceComponent } from 'app/module/module/module-source/module-source.component';
  import { ModuleFirstComponent } from 'app/module/module/module-first/module-first.component';
  import { ModuleFirstSourceComponent } from 'app/module/module/module-first/module-first-source/module-first-source.component';
  import { ModuleSecondComponent } from 'app/module/module/module-second/module-second.component';
  import { ModuleSecondSourceComponent } from 'app/module/module/module-second/module-second-source/module-second-source.component';
  import { RouterModule } from '@angular/router';
  
  const featureModuleRoutes: Routes = [
      { path: 'module', component: ModuleComponent, outlet: 'main' },
      { path: 'module-source', component: ModuleSourceComponent, outlet: 'source' },
      { path: 'module-first', component: ModuleFirstComponent, outlet: 'main' },
      { path: 'module-first-source', component: ModuleFirstSourceComponent, outlet: 'source' },
      { path: 'module-second', component: ModuleSecondComponent, outlet: 'main' },
      { path: 'module-second-source', component: ModuleSecondSourceComponent, outlet: 'source' },
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(featureModuleRoutes)
    ],
    exports: [RouterModule]
  
  }) 
  export class FeatureRoutingModule {
  
  }`;

  sharedModuleSource = `
  import { NgModule } from "@angular/core";
  import { CommonModule } from "@angular/common";
  import { RomanPipe } from "app/shared/pipes/roman.pipe";
  
  @NgModule({
    declarations: [
      RomanPipe
    ],
    exports: [
      CommonModule,
      RomanPipe
    ]
  
  })
  export class JosefSharedModule {
  
  }`;
}
