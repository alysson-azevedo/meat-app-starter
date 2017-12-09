import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item.model';
import { ShoppingCartService } from './shopping-cart.service';
import { RestaurantMenuItem } from '../restaurant-menu/restaurant-menu-item/restaurant-menu-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): CartItem[] {
    return this.cartService.items;
  }

  addItem(item: RestaurantMenuItem) {
    this.cartService.addItem(item);
  }

  removeItem(item: CartItem) {
    this.cartService.removeItem(item);
  }

  total() {
    return this.cartService.total();
  }

  clear() {
    this.cartService.clear();
  }
}
