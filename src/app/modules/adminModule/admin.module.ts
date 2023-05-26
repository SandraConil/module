import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminUiComponent } from './components/ui/admin-ui/admin-ui.component';
import { AdminFeaturesComponent } from './components/features/admin-features/admin-features.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';


@NgModule({
  declarations: [

    AdminPageComponent,
    AdminUiComponent,
    AdminFeaturesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
