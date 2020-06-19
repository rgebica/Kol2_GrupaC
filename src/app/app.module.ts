import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopRGComponent } from './components/shop-rg/shop-rg.component';
import { ShopItemRGComponent } from './components/shop-item-rg/shop-item-rg.component';
import { ShopDetailsRGComponent } from './components/shop-details-rg/shop-details-rg.component';
import {RGDataService} from './service/rg-data.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShopRGComponent,
    ShopItemRGComponent,
    ShopDetailsRGComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RGDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
