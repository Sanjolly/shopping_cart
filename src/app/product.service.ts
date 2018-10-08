import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private httpClient:HttpClient ) { }

  listProducts( ):Observable<Product[]>{
    return this.httpClient.get<Product[]>('./assets/products.json');
  }
}
