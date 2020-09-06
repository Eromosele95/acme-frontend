import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CartService } from '../../services/cart-service.service'
import { cartItem } from 'src/app/model/cart';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss']
})
export class CartCardComponent implements OnInit {
  cardItem: cartItem[]
  total: number
  


  constructor(private _sanitizer: DomSanitizer,
              private cartservice: CartService,
              ) { }

  ngOnInit(): void {
    this.cartservice.cartItemSubject.subscribe((data: cartItem[])=> {
      data.forEach((t)=> t.subtotal = t.item.price*t.quantity)
      this.total = data.reduce((sum:number,curr:cartItem)=> sum+curr.subtotal,0)
      this.cardItem=data

      
      // this.cardItem.item = data;
      // this.cardItem.quantity = data.quantity
    })
  }

  transform(suffix:string){return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,'+ suffix);
    
  }

  updateSubTotal(){
    this.cartservice.cartItemSubject.next(this.cardItem)
  }

}
