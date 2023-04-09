import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SchotanusSharedModule } from "../shared/schotanus-shared.module";
import { TabViewModule } from "primeng/tabview";

import { ModuleComponent } from "./module/module.component";
import { ModuleSourceComponent } from "./module/module-source/module-source.component";
import { ModuleFirstComponent } from "./module/module-first/module-first.component";
import { ModuleFirstSourceComponent } from "./module/module-first/module-first-source/module-first-source.component";
import { ModuleSecondComponent } from "./module/module-second/module-second.component";
import { ModuleSecondSourceComponent } from "./module/module-second/module-second-source/module-second-source.component";
import { FeatureRoutingModule } from "./feature-routing.module";

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
    SchotanusSharedModule,
    TabViewModule,
  ]
})
export class FeatureModule {

}