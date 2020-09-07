import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/model/item';
import { DomSanitizer } from '@angular/platform-browser';
import { CartService } from '../../services/cart-service.service'
import { cartItem } from 'src/app/model/cart';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() item:Item

  disabled: boolean 

  
 
  constructor(private _sanitizer: DomSanitizer, 
    private cartService: CartService) {}

  ngOnInit(): void {
    this.disabled = false;
    console.log(this.disabled)
    
  }

   transform(){
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,'+this.item.image);
  }


  addtoCart(){
    this.cartService.cartSubject.next(this.item)
    this.item.quantityLeft--;
    if(this.item.quantityLeft == 0){
      this.disabled = true;
    }

  }

  /**
   * This was done for simplicity, idealy there should be a button to select the number 
   * of items
   */
  removefromCart(){
    this.disabled = false;
    this.item.quantityLeft++;
  }

}
