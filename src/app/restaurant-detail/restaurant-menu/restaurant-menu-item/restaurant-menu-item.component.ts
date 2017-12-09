import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RestaurantMenuItem } from './restaurant-menu-item.model';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';

@Component({
  selector: 'mt-restaurant-menu-item',
  templateUrl: './restaurant-menu-item.component.html'
})
export class RestaurantMenuItemComponent implements OnInit {

  @Input() menuItem: RestaurantMenuItem;
  @Output() add = new EventEmitter();

  constructor(private cartService: ShoppingCartService) {
  }

  ngOnInit() {
  }

  addItem() {
    this.cartService.addItem(this.menuItem);
  }
}
