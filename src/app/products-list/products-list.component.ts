import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input () products: Product[];
  @Output() productIndex: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  
  addProduct( index:number ) {
    this.productIndex.emit(index);
  }
}
