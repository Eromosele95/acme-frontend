import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CartService } from '../../services/cart-service.service'
import { ItemService } from '../../services/item-service.service'
import { cartItem } from 'src/app/model/cart';
import { Item } from 'src/app/model/item';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss']
})
export class CartCardComponent implements OnInit {
  cardItem: Array<cartItem>;
  total: number
  checkoutEmail: string
  


  constructor(private _sanitizer: DomSanitizer,
              private cartservice: CartService,
              private itemservice: ItemService,
              private router: Router
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

  confirmOrder(f:NgForm){
    console.log(this.cardItem)
    console.log(f.value['checkoutEmail'])
    const order = new Object()
    this.cardItem.forEach((item)=>{
      if (item.quantity != 0){

        order[item.item.title] = {"quantity" : item.quantity,
        "price": item.item.price}
      }


    
    })
    order["total_amount"] = this.total
    order["email"] = f.value['checkoutEmail']
    console.log(order)
    // const order = {
    //   'email': f.value['checkoutEmail'],
    //   'items': this.cardItem[0].
    // }
    this.itemservice.postItems(order).subscribe(
      (data) => {console.log(data)
        this.router.navigate(['/', 'confirmed'])
      },
      (error)=>{ console.log(error)}
      );
    // this.router.navigate(['/', 'confirmed'])
    
  }

}
