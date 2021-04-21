import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const homeModule = () => import('./home/home.module').then(x => x.HomeModule);
const authenticationModule = () => import('./authentication/authentication.module').then(x => x.AuthenticationModule);
const routes: Routes = [
  { path: '', loadChildren: homeModule},
   { path: 'authen', loadChildren: authenticationModule }
     // { path: '**', redirectTo: '' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
