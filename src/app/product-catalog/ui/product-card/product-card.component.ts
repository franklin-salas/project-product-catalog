import { Component ,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/interfaces/model.interface';
import { RouterLink ,Router } from '@angular/router';

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

  constructor(public router: Router) {}

  onAddClick(event:Event) {
    event.stopPropagation();
    event.preventDefault();

    this.addToCart.emit(this.product); // Emitimos el nombre del producto
  }
  toggleFavorite(event:Event) {
    event.stopPropagation();
    event.preventDefault();
    this.isFavorite = !this.isFavorite;
  }
}
