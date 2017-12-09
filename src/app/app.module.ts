import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


import {AppComponent} from './app.component';
import {MT_ROUTES} from './app.routes';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {RestaurantsService} from './restaurants/restaurants.service';
import {RestaurantComponent} from './restaurants/restaurant/restaurant.component';
import {AboutComponent} from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RestaurantsComponent,
    AboutComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(MT_ROUTES)
  ],
  providers: [RestaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
