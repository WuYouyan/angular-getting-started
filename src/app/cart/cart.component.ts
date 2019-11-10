import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;

  constructor(private cartService: CartService) { 
    this.items = cartService.getItems();
  }

  ngOnInit() {
  }

  // remove(item){
  //   this.cartService.removeItem(item);
  //   this.items = this.cartService.getItems(); 
  // }

}