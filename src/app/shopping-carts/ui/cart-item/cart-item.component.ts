import { Component, Input, inject } from '@angular/core';
import { CartItem } from '../../../shared/interfaces/model.interface';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;
  private cartService = inject(CartService);

  increase() {
    this.cartService.increaseQuantity(this.cartItem.product.id);
  }

  decrease() {
    this.cartService.decreaseQuantity(this.cartItem.product.id);
  }

  remove() {
    this.cartService.removeFromCart(this.cartItem.product.id);
  }

}
