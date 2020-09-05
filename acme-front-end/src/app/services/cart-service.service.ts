import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Item } from '../model/item';
import { cartItem } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartSubject = new Subject<Item>();
  cartItemSubject = new BehaviorSubject<cartItem[]>([])

  constructor() { }
}
