import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputContainerComponent } from './input-container/input-container.component';
import { RadioInputsComponent } from './radio-inputs/radio-inputs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InputContainerComponent, RadioInputsComponent]
})
export class SharedModule { }
