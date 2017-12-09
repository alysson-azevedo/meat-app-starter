import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { RestaurantReview } from './restaurant-review.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-restaurant-reviews',
  templateUrl: './restaurant-reviews.component.html'
})
export class RestaurantReviewsComponent implements OnInit {

  reviews: Observable<RestaurantReview[]>;

  constructor(private route: ActivatedRoute,
              private table: RestaurantsService) {
  }

  ngOnInit() {
    this.reviews = this.table.reviewsOfRestaurantById(this.route.parent.snapshot.params['id']);
  }

}
