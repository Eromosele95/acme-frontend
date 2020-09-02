import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/model/item';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() item:Item

  disabled: boolean
  

  


  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit(): void {

  
  }

  transform(){
    console.log(this.item.price)
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,'+this.item.image);
  }

  addtoCart(){
    this.item.quantity--;
    console.log(this.item.quantity)
    if (this.item.quantity ==0){
      this.disabled = true;
    }
  }

}
