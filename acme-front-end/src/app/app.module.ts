import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemService } from './services/item-service.service';
import { CartService } from './services/cart-service.service'
import { CartComponent } from './components/cart/cart.component';
import { CartCardComponent } from './components/cart-card/cart-card.component'

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    ItemCardComponent,
    CartComponent,
    CartCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ItemService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
