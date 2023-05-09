import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NoFoundPageComponent } from './noFoundPage/no-found-page.component';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AuthComponent } from './auth/auth.component';
import { RoutingPagesModule } from './pages/routing.pages.module';
import { RoutingAuthModule } from './auth/routing.auth.module';

const routes:Routes = [
  //rutas protegidas
  {path:'', component: PagesComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'products', component: ProductsComponent},
  {path:'categories', component: CategoriesComponent},

  {path:'auth', component: AuthComponent},
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**', component: NoFoundPageComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RoutingPagesModule,
    RoutingAuthModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
