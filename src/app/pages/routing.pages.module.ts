import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { PagesModule } from './pages.module';

const routes:Routes = [
  //rutas protegidas
  {path:'dashboard', component: PagesComponent, children:[
    {path:'', component: DashboardComponent},
    {path:'products', component: ProductsComponent},
    {path:'categories', component: CategoriesComponent},
  ]},
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},

]




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PagesModule
  ],
  exports:[
    RouterModule,
  ]
})
export class RoutingPagesModule { }
