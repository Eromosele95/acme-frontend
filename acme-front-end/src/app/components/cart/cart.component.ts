import { Component, OnInit } from '@angular/core';
import { cartItem } from 'src/app/model/cart';
import { DomSanitizer } from '@angular/platform-browser';
import { CartService } from '../../services/cart-service.service'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService
    ) { }
  cart: cartItem[]


  ngOnInit(): void {
    
  
    this.cartService.cartItemSubject.subscribe((data: cartItem[]) => {
      console.log(data)
      this.cart = data
    })
  }


}
