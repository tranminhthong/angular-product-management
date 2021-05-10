import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListProductComponent} from './product/list-product/list-product.component';
import {CreateProductComponent} from './product/create-product/create-product.component';
import {UpdateProductComponent} from './product/update-product/update-product.component';


const routes: Routes = [
  {
    path: '',
    component: ListProductComponent
  },
  {
    path: 'create',
    component: CreateProductComponent
  },
  {
    path: 'update/:id',
    component: UpdateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
