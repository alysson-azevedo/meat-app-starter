import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order-summary',
  templateUrl: './order-summary.component.html'
})
export class OrderSummaryComponent implements OnInit {

  @Input() cartTotal: number;
  @Input() transportFee: number;
  @Input() total: number;

  constructor() { }

  ngOnInit() {
  }

}
