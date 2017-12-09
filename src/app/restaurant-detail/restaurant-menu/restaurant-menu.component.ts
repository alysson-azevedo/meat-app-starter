import { Component, OnInit } from '@angular/core';
import { RestaurantMenuItem } from './restaurant-menu-item/restaurant-menu-item.model';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-restaurant-menu',
  templateUrl: './restaurant-menu.component.html'
})
export class RestaurantMenuComponent implements OnInit {

  menu: Observable<RestaurantMenuItem[]>;

  constructor(private route: ActivatedRoute,
              private restaurantsService: RestaurantsService) {
  }

  ngOnInit() {
    this.menu = this.restaurantsService.menuOfRestaurantById(this.route.parent.snapshot.params['id']);
  }

}
