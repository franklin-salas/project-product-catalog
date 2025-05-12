import { Component, inject } from '@angular/core';
import { CartItem } from '../../../shared/interfaces/model.interface';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  imports: [CommonModule,CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems$!: Observable<CartItem[]>;
  private cartService = inject(CartService);
  constructor() {}

  ngOnInit() {
    this.cartItems$ = this.cartService.cartItems$;
  }

  // removeItem(productId: number) {
  //   this.cartService.removeFromCart(productId);
  // }

  // getTotal(): number {
  //   return this.cartService.getTotalPrice();
  // }
}
