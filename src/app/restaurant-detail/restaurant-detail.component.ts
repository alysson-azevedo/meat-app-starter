import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from '../restaurants/restaurants.service';
import {Restaurant} from '../restaurants/restaurant/restaurant.model';
import {ActivatedRoute} from '@angular/router';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private route: ActivatedRoute,
              private restaurantService: RestaurantsService,
              public shoppingCart: ShoppingCartService) {
  }

  ngOnInit() {
    this.restaurantService.restaurantById(this.route.snapshot.params['id'])
      .subscribe((restaurant: Restaurant) => this.restaurant = restaurant);
  }

}
