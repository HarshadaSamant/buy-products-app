import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { PRODUCTS } from '../product-array';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {
	Products = PRODUCTS;
	title = 'Angular8Project';
	// Product =  [
	// 	{id: 1, name: "phone mini", description: 'product description here', price: '700'},
	// 	{id: 2, name: "phone standard", description: "product description here", price: '7000'},
	// 	{id: 3, name: "phone XXL", description: "product description here", price: '1700'},
	// 	{id: 4, name: "tablet XL", description: "product description here", price: '300'},
	// 	{id: 5, name: "tablet mini", description: "product description here", price: '1000'},
	// 	{id: 6, name: "tablet standard", description: "product description here", price: '34800'},
	// 	{id: 7, name: "tablet XXL", description: "product description here", price: '400'},
	// 	{id: 8, name: "laptab XXL", description: "product description here", price: '500'},
	// 	{id: 9, name: "laptab standard", description: "product description here", price: '700'},
	// ];
	// // Products = Product;
	// add(product_name) {
	// 	window.alert( product_name + ' has been added to cart!');
	// 	this.router.navigate(["/product-add"]);
	// }

	onNotify() {
		window.alert('You will be notified when the product goes on sale');
	}

	addToCart(product) {
		window.alert(' has been added to cart!');
		this.cartService.addToCart(product);
	}

	constructor(private api: ApiService, private router: Router, private cartService: CartService) { }

	ngOnInit() {
	} 
}
