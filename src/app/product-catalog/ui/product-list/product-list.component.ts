import { Component, inject, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/interfaces/model.interface';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../../shopping-carts/services/cart.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { SearchComponent } from '../../../shared/ui/search/search.component';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,ProductCardComponent,InfiniteScrollModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  data: Product[] = [];
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  filteredProducts: Product[] = [];
  loading = true;
  currentPage = 1;
  itemsPerPage = 8;
  allLoaded = false;
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      setTimeout(() => {
        this.loading = false;
        this.data = data;
        this.loadMore();
      }, 6500);
    });
  }

  loadMore(): void {
    if (this.loading || this.allLoaded) return;

    this.loading = true;

    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    const nextChunk = this.data.slice(start, end);

    this.products = [...this.products, ...nextChunk];
    this.currentPage++;

    if (this.products.length >= this.data.length) {
      this.allLoaded = true;
    }

    this.loading = false;
  }

  onScroll(): void {

    this.loadMore();
  }
  onProductAdded(product: Product) {
    this.cartService.addToCart(product);
  }

  onSearch(query: string) {
    this.filteredProducts = this.data.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    this.products = this.filteredProducts;
  }

}
