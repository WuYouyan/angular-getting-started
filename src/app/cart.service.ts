import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  
  addToCart(product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  // removeItem(item){
  //   // this.items.splice(this.items.findIndex(item),1);
  //   this.items.filter(product=>product.name==item.name);
  // }

  constructor() { }

}