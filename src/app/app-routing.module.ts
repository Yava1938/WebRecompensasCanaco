import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch:'full',},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'padmin', loadChildren: () => import('./padmin/padmin.module').then(m => m.PadminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
