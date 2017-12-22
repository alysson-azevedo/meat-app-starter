import { Injectable } from '@angular/core';
import { Headers, Http, ResponseOptions } from '@angular/http';
import { Order } from './order.model';
import { Observable } from 'rxjs/Observable';
import { MT_API } from '../app.api';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService,
              private http: Http) {
  }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  onIncreaseQtd(item: CartItem) {
    this.cartService.increaseItem(item);
  }

  onDecreaseQtd(item: CartItem) {
    this.cartService.decreaseItem(item);
  }

  onRemove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  cartTotal(): number {
    return this.cartService.total();
  }

  clearCart() {
    this.cartService.clear();
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${MT_API}/orders`, JSON.stringify(order), new ResponseOptions({headers: headers}))
      .map(response => response.json())
      .map(response => response.id);
  }
}
