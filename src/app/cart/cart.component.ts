import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input () cartItems: any[];
  @Output() productIndex: EventEmitter<number> = new EventEmitter<number>();
  constructor() { 
    
  }

  ngOnInit() {
  }
  
  removeProduct( index: number ) {
    this.productIndex.emit(index);
  }
}
