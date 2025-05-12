import { Component ,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/interfaces/model.interface';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  isFavorite = false;
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<Product>();

  onAddClick() {
    this.addToCart.emit(this.product); // Emitimos el nombre del producto
  }
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
