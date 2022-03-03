import { Injectable } from '@angular/core';
import { Product } from './Products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  constructor() { }
}

addToCart(product: Product) {
  this.items.push(product);
}

clearCart() { 
  this.items = [];
  return this.items;
}