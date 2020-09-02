import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/services/item-service.service'
import { share } from 'rxjs/operators'


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  Items: Item[];
  constructor( private itemService: ItemService) { }
  ngOnInit(): void {
    
    this.itemService.getAllItems().pipe(share()).subscribe(
      data => {
        console.log(data)
        this.Items = data

        
      }, error => {
        console.log(error)
      }
    )
  }
}
