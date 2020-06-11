import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductEditComponent} from './product-edit/product-edit.component';

const routes: Routes = [
	{
		path: '',
		component: ProductComponent
	},
	{
		path: 'product',
		component: ProductComponent
	},
	{
		path: 'products/:productId',
		component: ProductDetailsComponent
	},
	{
		path: 'product-add',
		component: ProductAddComponent
	},
	{
		path: 'product-edit:id',
		component: ProductEditComponent
	}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
