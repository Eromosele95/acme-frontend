import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './components/inventory/inventory.component'
import { CartCardComponent } from './components/cart-card/cart-card.component';


const routes: Routes = [
  {path: '', redirectTo:'inventory', pathMatch: 'full'},
  {path:'inventory', component: InventoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
