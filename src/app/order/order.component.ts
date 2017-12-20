import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { RadioOption } from '../shared/radio-inputs/radio-option.model';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  transportFee = 8;

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'},
  ];

  constructor(private cartService: ShoppingCartService, private router: Router) {
  }

  ngOnInit() {
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

  total(): number {
    return this.cartTotal() + this.transportFee;
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map((item: CartItem) => new OrderItem(item.menuItem.id, item.quantity));
    this.cartService.checkOrder(order).subscribe((orderId: string) => {
      this.cartService.clear();
      this.router.navigate(['/order-summary'])
    });
  }
}
