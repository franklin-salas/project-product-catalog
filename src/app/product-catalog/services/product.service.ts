import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../shared/interfaces/model.interface';
import { PRODUCTS } from '../../shared/data/products.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
 getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

}
