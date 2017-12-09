import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AboutComponent } from './about/about.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantMenuComponent } from './restaurant-detail/restaurant-menu/restaurant-menu.component';
import { RestaurantReviewsComponent } from './restaurant-detail/restaurant-reviews/restaurant-reviews.component';

export const MT_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {
    path: 'restaurants/:id',
    component: RestaurantDetailComponent,
    children: [
      {path: 'menu', component: RestaurantMenuComponent},
      {path: 'reviews', component: RestaurantReviewsComponent},
      {path: '', pathMatch: 'full', redirectTo: 'menu'}
    ]
  },
  {path: 'restaurants', component: RestaurantsComponent},
];
