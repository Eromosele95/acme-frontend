import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './components/inventory/inventory.component'
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
  {path: '', redirectTo:'inventory', pathMatch: 'full'},
  {path:'inventory', component: InventoryComponent },
  {path:'checkout', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
