import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { switchMap } from 'rxjs';
import { Product } from '../../../shared/interfaces/model.interface';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../shopping-carts/services/cart.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product!: Product;
  private activatedRoute = inject(ActivatedRoute);
  private productService = inject(ProductService);
   private cartService = inject(CartService);
  constructor(){
    this.activatedRoute.params
    .pipe(
      switchMap(params => {
        const id = +params['id'];
        return this.productService.getProducto(id);
      })
    )
    .subscribe(producto => {
      this.product = producto!;
    });
  }

  onAddClick() {
    this.cartService.addToCart(this.product); // Emitimos el nombre del producto
  }
}
