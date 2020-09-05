import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { ItemService } from '../../services/item-service.service'
import { CartService } from '../../services/cart-service.service'
import { cartItem } from 'src/app/model/cart';



@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  Items: Item[];
  cart: cartItem[];

  
  constructor( private itemService: ItemService,
              private cartSerive: CartService,
    ) { }
  ngOnInit(): void {
    console.log('hello')
    this.itemService.getAllItems().subscribe(
      data => {
        console.log(data)
        this.Items = data
        
      }, error => {
        console.log(error)
      }
    )
    this.cart = []
    this.cartSerive.cartSubject.subscribe((data: Item) => {

      console.log(data['title'])

      if(this.cart.length != 0){
        const found = this.cart.find(t => {  return t.item['title']===data['title']})
        console.log(found)
        console.log(this.cart)
        found['quantity']++
      }
      else{
        this.cart.push({item:data, quantity:0})
      }
      
    })
  }

  checkout(){
    this.cartSerive.cartSubject.next(this.cart);
    console.log(this.cart)
  }
 
}
