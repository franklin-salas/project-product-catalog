import { Component ,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  isFavorite = false;
  @Input() id!: number;
  @Input() name!: string;
  @Input() description!: string;
  @Input() price!: number;
  @Input() discountPrice!: number;
  @Input() image!: string;
  @Output() addToCart = new EventEmitter<string>();

  onAddClick() {
    this.addToCart.emit(this.name); // Emitimos el nombre del producto
  }
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
