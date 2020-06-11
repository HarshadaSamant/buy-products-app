import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../products';
import { PRODUCTS } from '../product-array';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor( private route: ActivatedRoute ) { }

  Products = PRODUCTS;
  ngOnInit() {
      this.product = this.route.snapshot.paramMap.get('productId')      
      alert(this.product);

    // });
  }
}
