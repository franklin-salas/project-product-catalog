import { Component, inject, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/interfaces/model.interface';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../../shopping-carts/services/cart.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
  onProductAdded(product: Product) {
    this.cartService.addToCart(product);
  }
}
