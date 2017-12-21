import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantMenuComponent } from './restaurant-detail/restaurant-menu/restaurant-menu.component';
import { RestaurantReviewsComponent } from './restaurant-detail/restaurant-reviews/restaurant-reviews.component';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

export const MT_ROUTES: Routes = [
  {path: '', component: HomeComponent},
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
  {path: 'order', component: OrderComponent},
  {path: 'order-summary', component: OrderSummaryComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
];
