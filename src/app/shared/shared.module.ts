import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputContainerComponent } from './input-container/input-container.component';
import { RadioInputsComponent } from './radio-inputs/radio-inputs.component';
import { RatingInputComponent } from './rating-input/rating-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [InputContainerComponent, RadioInputsComponent, RatingInputComponent],
  exports: [CommonModule, FormsModule, InputContainerComponent, RadioInputsComponent, RatingInputComponent]
})
export class SharedModule {
}
