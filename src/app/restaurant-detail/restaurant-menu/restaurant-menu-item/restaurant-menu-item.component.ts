import { Component, Input, OnInit } from '@angular/core';
import { RestaurantMenuItem } from './restaurant-menu-item.model';

@Component({
  selector: 'mt-restaurant-menu-item',
  templateUrl: './restaurant-menu-item.component.html'
})
export class RestaurantMenuItemComponent implements OnInit {

  @Input() menuItem: RestaurantMenuItem;

  constructor() { }

  ngOnInit() {
  }

}
