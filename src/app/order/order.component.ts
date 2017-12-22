import { Component, OnInit } from '@angular/core';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { RadioOption } from '../shared/radio-inputs/radio-option.model';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';
import { OrderService } from './order.service';

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

  constructor(private orderService: OrderService, private router: Router) {
  }

  ngOnInit() {
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  onIncreaseQtd(item: CartItem) {
    this.orderService.onIncreaseQtd(item);
  }

  onDecreaseQtd(item: CartItem) {
    this.orderService.onDecreaseQtd(item);
  }

  onRemove(item: CartItem) {
    this.orderService.onRemove(item);
  }

  cartTotal(): number {
    return this.orderService.cartTotal();
  }

  total(): number {
    return this.cartTotal() + this.transportFee;
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map((item: CartItem) => new OrderItem(item.menuItem.id, item.quantity));
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      this.orderService.clearCart();
      this.router.navigate(['/order/summary'])
    });
  }
}
