import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { OrderComponent } from './order.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderSummaryComponent } from './order-summary.component';

const ROUTES: Routes = [
  {path: '', component: OrderComponent},
  {path: 'summary', component: OrderSummaryComponent},
];
@NgModule({
  imports: [SharedModule, RouterModule.forChild(ROUTES)],
  declarations: [OrderComponent, OrderItemsComponent, OrderDetailsComponent, OrderSummaryComponent]
})
export class OrderModule { }
