import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product/product.model';



@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  items = [];

  constructor() { }

  addProduct(product:Product){
    this.items.push(product);
  }

  delateCarrito(){
    this.items=[];
      return this.items;
  }

  listCarrito(){
    return this.items;
  }
}
