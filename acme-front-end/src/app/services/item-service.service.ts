import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Item } from '../model/item';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private getAllItemsUrl: string;
  private checkout: string;

  

  constructor(private http: HttpClient) {
    this.getAllItemsUrl= 'http://localhost:8080/AllItems'
   }

  public getAllItems():Observable<any> {
    return this.http.get(this.getAllItemsUrl,httpOptions);
  }

  
  



}
