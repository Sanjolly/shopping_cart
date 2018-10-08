import { Component,OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  products: Product[] = [];
  cartItems:any[] =[];

  constructor( private productService: ProductService  ) {

  }

  ngOnInit() {
    this.productService.listProducts().subscribe(
      (productsData) => {
        if ( productsData ) {
         this.products = productsData;
        }
      }
    )
    
  }
  
  addProductToCart( productIndex:number ):void {
    this.products[productIndex].isPublished = false;
    this.cartItems.push(this.products[productIndex]);
  }

  removeProductFromCart( productIndex:number ):void {
    let removedProduct = this.cartItems.splice( productIndex, 1 )[0].productName;
    for ( let i=0; i<this.products.length; i++ ) {
      if ( this.products[i].productName == removedProduct  ) {
          this.products[i].isPublished = true;
      }
    }
  }
}
