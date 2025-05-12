import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CartItem, Product } from '../../shared/interfaces/model.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);

  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() { }

  getCartItems(): Observable<CartItem[]> {
    return this.cartItemsSubject.asObservable();
  }

  addToCart(product: Product): void {
    const itemIndex = this.cartItems.findIndex(item => item.product.id === product.id);

    if (itemIndex !== -1) {
      this.cartItems[itemIndex].quantity += 1;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }

    this.updateCart();
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
    this.updateCart();
  }

  increaseQuantity(productId: number): void {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item) {
      item.quantity += 1;
      this.updateCart();
    }
  }

  decreaseQuantity(productId: number): void {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item) {
      item.quantity -= 1;
      if (item.quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        this.updateCart();
      }
    }
  }

  private updateCart(): void {
    this.cartItemsSubject.next([...this.cartItems]);
  }

  getTotalQuantity(): Observable<number> {
    return this.cartItemsSubject.asObservable().pipe(
      map(items => items.reduce((total, item) => total + item.quantity, 0))
    );
  }
}
