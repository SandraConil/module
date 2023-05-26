import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountHomePageComponent } from './pages/account-home-page/account-home-page.component';
import { AccountUiComponent } from './components/ui/account-ui/account-ui.component';
import { AccountFeaturesComponent } from './components/features/account-features/account-features.component';


@NgModule({
  declarations: [
    AccountHomePageComponent,
    AccountUiComponent,
    AccountFeaturesComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
