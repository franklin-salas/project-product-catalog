import { inject, Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Product } from '../../shared/interfaces/model.interface';
import { PRODUCTS } from '../../shared/data/products.data';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);
  constructor() { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`) .pipe(
      delay(5500) // espera 1.5 segundos antes de emitir la respuesta
    );
  }

  getProducto(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }


}
