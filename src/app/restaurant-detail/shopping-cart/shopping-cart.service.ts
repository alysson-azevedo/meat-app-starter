import { Injectable } from '@angular/core';
import { Headers, Http, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CartItem } from './cart-item.model';
import { RestaurantMenuItem } from '../restaurant-menu/restaurant-menu-item/restaurant-menu-item.model';
import { Order } from '../../order/order.model';
import { MT_API } from '../../app.api';

@Injectable()
export class ShoppingCartService {

  items: CartItem[] = [];

  constructor(private http: Http) {
  }

  addItem(menuItem: RestaurantMenuItem) {
    let found = this.items.find(item => item.menuItem.id === menuItem.id);
    if (found) {
      this.increaseItem(found);
    } else {
      this.items.push(new CartItem(menuItem));
    }
  }

  increaseItem(item: CartItem) {
    item.quantity = item.quantity + 1;
  }

  decreaseItem(item: CartItem) {
    item.quantity = item.quantity - 1;
    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  clear() {
    this.items = [];
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${MT_API}/orders`, JSON.stringify(order), new ResponseOptions({headers: headers}))
      .map(response => response.json())
      .map(response => response.id);
  }
}
