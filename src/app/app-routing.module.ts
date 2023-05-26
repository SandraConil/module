import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'admin', loadChildren : () => import('./modules/adminModule/admin.module').then(m => m.AdminModule)},
  {path : 'account', loadChildren : () => import('./modules/accountModule/account.module').then(m => m.AccountModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
