import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ModuleComponent } from './module/module.component';
import { ModuleSourceComponent } from './module/module-source/module-source.component';
import { ModuleFirstComponent } from './module/module-first/module-first.component';
import { ModuleFirstSourceComponent } from './module/module-first/module-first-source/module-first-source.component';
import { ModuleSecondComponent } from './module/module-second/module-second.component';
import { ModuleSecondSourceComponent } from './module/module-second/module-second-source/module-second-source.component';
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

}