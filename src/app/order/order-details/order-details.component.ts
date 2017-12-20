import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order-details',
  templateUrl: './order-details.component.html'
})
export class OrderDetailsComponent implements OnInit {

  @Input() cartTotal: number;
  @Input() transportFee: number;
  @Input() total: number;

  constructor() { }

  ngOnInit() {
  }

}
