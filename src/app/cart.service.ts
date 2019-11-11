import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';//HttpClient service is provided by the HttpClientModule, which is already defined in the AppModule

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  
  constructor(
    private http: HttpClient
  ){}

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

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }

  // removeItem(item){
  //   // this.items.splice(this.items.findIndex(item),1);
  //   this.items.filter(product=>product.name==item.name);
  // }



}