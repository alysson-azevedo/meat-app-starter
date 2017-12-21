import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mt-rating-input',
  templateUrl: './rating-input.component.html'
})
export class RatingInputComponent implements OnInit {

  rates: number[] = [1, 2, 3, 4, 5];

  rate = 0;

  previusRate: number;

  @Output() onRate = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  setRate(rate) {
    this.rate = rate;
    this.previusRate = undefined;
    this.onRate.emit(rate);
  }

  updateRate(rate) {
    if (this.previusRate === undefined) {
      this.previusRate = this.rate;
    }

    this.rate = rate;
  }

  clearRate() {
    if (this.previusRate !== undefined) {
      this.rate = this.previusRate;
      this.previusRate = undefined;
    }
  }
}
