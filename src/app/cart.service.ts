import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';//HttpClient service is provided by the HttpClientModule, which is already defined in the AppModule

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //formalizing items unique items with number property
  items = [];
  
  constructor(
    private http: HttpClient
  ){}

  addToCart(product){
    //this.items.push(product);
    console.log(this.items.map(item=>item.name));
    console.log(product);
    if(this.items.find(item=>item.name==product.name)==undefined){
      product.number = 1;
      this.items.push(product);
    }else{
      this.items.find(item=>item.name==product.name).number++;
    }
    console.log("added! :", this.items);
  }

  getItems(){
    return this.items;
    // return this.formalizingItems(this.items);
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }

  //function to formalize items to unique items with the item.number
  formalizingItems(items){
    let resultItems = [];
    for(let item of items){
      if(resultItems.findIndex(resultItem=>resultItem.name==item.name)==-1){        
        resultItems.push(JSON.parse(JSON.stringify(item)));
        resultItems.find(temp=>temp.name==item.name).number=1;
      }else{
        resultItems.find(temp=>temp.name==item.name).number++;
      }
    }
    return resultItems;
  }
  // removeItem(item){
  //   // this.items.splice(this.items.findIndex(item),1);
  //   this.items.filter(product=>product.name==item.name);
  // }



}