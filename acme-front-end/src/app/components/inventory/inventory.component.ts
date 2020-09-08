import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { ItemService } from '../../services/item-service.service'
import { CartService } from '../../services/cart-service.service'
import { cartItem } from 'src/app/model/cart';
import {  Router } from '@angular/router';



@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  items: Item[];
  cart: cartItem[];
 

  
  constructor( private itemService: ItemService,
              private cartService: CartService,
              private router: Router
              
    ) { }
  ngOnInit(): void {
    this.itemService.getAllItems().subscribe(
      data => {
        if (this.cart.length == 0){
          this.items =[]
          data.forEach(item => {
            this.items.push(Object.assign({},item))
          });
          this.items.forEach((item)=>{
            item.quantityLeft = item.quantity
            item.stock = item.quantity
          })
        } 
        console.log(this.items)
      }, error => {
        console.log(error)
      }
    )

    this.cart = []
    this.cartService.cartSubject.subscribe((data: Item) => {


      data.price = +data.price.toFixed(2)
      if(this.cart.length == 0){
        this.cart.push({item:data, quantity:1, subtotal: data.price})
  
      
      }
      else{
        let found = this.cart.find(t => { return t.item['title']===data['title']})
        if (found != undefined){
          found.quantity++
          found.subtotal = found.item.price* found.quantity
          console.log(found)
        }else{
          this.cart.push({item:data, quantity:1, subtotal:data.price})
          
        }
      }
      this.cartService.cartItemSubject.next(this.cart);
    })
  }

  checkout(){ 
    console.log(this.cart)
    this.router.navigate(['/', 'checkout'])
  }
 
}
