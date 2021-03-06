import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemService } from './services/item-service.service';
import { CartService } from './services/cart-service.service'
import { CartComponent } from './components/cart/cart.component';
import { CartCardComponent } from './components/cart-card/cart-card.component';
import { ConfirmedOrderComponent } from './components/confirmed-order/confirmed-order.component'

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    ItemCardComponent,
    CartComponent,
    CartCardComponent,
    ConfirmedOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [ItemService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
