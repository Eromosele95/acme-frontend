import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CartService } from '../../services/cart-service.service'

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss']
})
export class CartCardComponent implements OnInit {
  


  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  transform(){
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,');
  }


  Cart

}
