import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopRGComponent} from './components/shop-rg/shop-rg.component';
import {ShopDetailsRGComponent} from './components/shop-details-rg/shop-details-rg.component';

const routes: Routes = [
  {
    path: '',
    component: ShopRGComponent
  },
  {
    path: 'detail/:id',
    component: ShopDetailsRGComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
