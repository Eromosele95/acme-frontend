import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { ItemService } from '../../services/item-service.service'
import { CartService } from '../../services/cart-service.service'
import { share } from 'rxjs/operators'


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  Items: Item[];
  cart: [{
    cart_item: Item,
    quantity: number
  }]

  
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
    this.cart = [{}] as any
    this.cartSerive.cartSubject.subscribe( (data: Item) => {
      console.log(data['title'])
      
      const found = this.cart.find(t => { t === undefined||
        t.cart_item['title'] == data['title']})
      console.log(found)
      console.log(this.cart)

      if(found === undefined){
        this.cart.push({
        cart_item: data,
        quantity:0
      })
    }else{
      // Update Cart Quantity
      found['quantity']++
    }
    })
  }

  checkout(){
    this.cartSerive.cartSubject.next(this.cart);
    console.log(this.cart)
  }
 
}
