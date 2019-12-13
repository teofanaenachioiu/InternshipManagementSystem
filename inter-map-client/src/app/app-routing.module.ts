import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';

import {GeneralMenuComponent} from './components/general-menu/general-menu.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    component: GeneralMenuComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'internship-app',
    loadChildren: () => import('./internship-app/internship-app.module').then(m => m.InternshipAppModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
