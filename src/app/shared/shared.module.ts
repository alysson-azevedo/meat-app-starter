import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputContainerComponent } from './input-container/input-container.component';
import { RadioInputsComponent } from './radio-inputs/radio-inputs.component';
import { RatingInputComponent } from './rating-input/rating-input.component';
import { FormsModule } from '@angular/forms';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { OrderService } from '../order/order.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [InputContainerComponent, RadioInputsComponent, RatingInputComponent],
  exports: [CommonModule, FormsModule, InputContainerComponent, RadioInputsComponent, RatingInputComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [RestaurantsService, ShoppingCartService, OrderService]
    }
  }
}
