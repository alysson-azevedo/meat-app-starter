import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  cartItems: CartItem[] = [];

  transportFee = 8;


  constructor(private cartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.cartItems = this.cartService.items;
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

  total(): number {
    return this.cartTotal() + this.transportFee;
  }
}
