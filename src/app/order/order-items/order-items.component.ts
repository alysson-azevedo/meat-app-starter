import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[];

  @Output() increaseQtd = new EventEmitter<CartItem>();
  @Output() decreaseQtd = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  doIncreaseQtd(item: CartItem) {
    this.increaseQtd.emit(item);
  }

  doDecreaseQtd(item: CartItem) {
    this.decreaseQtd.emit(item);
  }

  doRemove(item: CartItem) {
    this.remove.emit(item);
  }
}
