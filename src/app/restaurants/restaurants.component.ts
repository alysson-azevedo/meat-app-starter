import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurant/restaurant.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Observable<Restaurant[]>;

  constructor(private restaurantsService: RestaurantsService) {
  }

  ngOnInit() {
    this.restaurants = this.restaurantsService.restaurants();
  }

}
