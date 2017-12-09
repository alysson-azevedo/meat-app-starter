import { RestaurantMenuItem } from '../restaurant-menu/restaurant-menu-item/restaurant-menu-item.model';

export class CartItem {
  constructor(public menuItem: RestaurantMenuItem,
              public quantity = 1) {
  }

  value() {
    return this.menuItem.price * this.quantity;
  }
}
